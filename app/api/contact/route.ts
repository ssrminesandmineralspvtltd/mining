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
      from: `"SSR Mining Website" <${process.env.EMAIL_USER}>`,
      to: 'ssrminesandmineralspvtltd@gmail.com',
      replyTo: email, // This lets the company reply directly to the customer
      subject: `New Industrial Inquiry from ${name} (${company})`,
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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Industrial Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 0.8rem; color: #888; margin-top: 30px; border-top: 1px solid #eee; pt-10;">
            This email was sent from the SSR Mines and Minerals website contact form.
          </p>
        </div>
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
