import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, message } = await req.json();

    // Create a transporter using SMTP
    console.log('Attempting to send email from:', process.env.EMAIL_USER);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in environment variables');
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Increase timeout for serverless
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    const mailOptions = {
      from: `"SSR Mining Inquiry" <${process.env.EMAIL_USER}>`,
      to: 'ssrminesandmineralspvtltd@gmail.com',
      replyTo: email, 
      subject: `[INQUIRY] ${name} - SSR Mining`,
      text: `
        New inquiry received from SSR Mining Website:
        
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .container { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden; }
              .header { background-color: #1a1a1a; padding: 40px 20px; text-align: center; color: #ffffff; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.05em; text-transform: uppercase; }
              .header p { margin: 5px 0 0; font-size: 10px; font-weight: bold; letter-spacing: 0.3em; color: #888; text-transform: uppercase; }
              .content { padding: 40px; }
              .section-title { font-size: 11px; font-weight: 900; color: #999; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
              .field-value { font-size: 16px; color: #1a1a1a; margin-bottom: 24px; line-height: 1.5; font-weight: 500; }
              .message-box { background-color: #f8f9fa; padding: 25px; border-radius: 4px; border-left: 4px solid #1a1a1a; margin-top: 10px; }
              .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eeeeee; }
              .btn { display: inline-block; padding: 12px 24px; background-color: #1a1a1a; color: #ffffff !important; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>SSR</h1>
                <p>Mines and Minerals Pvt Ltd</p>
              </div>
              <div class="content">
                <div class="section-title">Inquiry From</div>
                <div class="field-value">${name}<br/><span style="color: #666; font-size: 14px;">${company}</span></div>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                  <tr>
                    <td width="50%" valign="top">
                      <div class="section-title">Email Address</div>
                      <div class="field-value" style="margin-bottom: 0;">${email}</div>
                    </td>
                    <td width="50%" valign="top">
                      <div class="section-title">Phone Number</div>
                      <div class="field-value" style="margin-bottom: 0;">${phone}</div>
                    </td>
                  </tr>
                </table>

                <div class="section-title">Requirement Details</div>
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-wrap; color: #333;">${message}</p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}" style="display: inline-block; padding: 16px 32px; background-color: #1a1a1a; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Reply to Inquiry</a>
                </div>
              </div>
              <div class="footer">
                Sent from the SSR Mining Website Industrial Portal
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ 
      message: 'Failed to send email', 
      error: error.message 
    }, { status: 500 });
  }
}
