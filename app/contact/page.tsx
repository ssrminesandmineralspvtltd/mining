"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('sent');
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send inquiry. Please try again or contact us directly via email.');
      setFormState('idle');
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1A1A1A] py-24 md:py-32 text-white">
        <div className="max-w-[1440px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em] text-gray-400 mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Industrial Inquiries</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Connect directly with our quarry-sourced supply team for bulk inquiries on Quartz, Mica, and Feldspar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Info */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold mb-12">Procurement Support</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="bg-[#F8F9FA] p-4 rounded-full h-fit">
                  <MapPin size={24} className="text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Office Address</h4>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    SSR Mines and Minerals Pvt Ltd<br/>
                    Plot No: 88(A), Flat No: 216, Ushodaya Towers,<br/>
                    Shapurnagar, Phase-1, IDA-Jeedimetla,<br/>
                    Hyderabad - 500 055, Telangana
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-gray-400 mb-1">MDL Address (Khammam)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        Sy no:- 595/61, o/e:- 0.810 (Ha),<br/>
                        Butchi Reddy palem (village), Near Mamnoor,<br/>
                        yerrupalem (Mandal), Khammam (Dist), Telangana.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-gray-400 mb-1">MDL Address (Krishna)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        Block no:-1, H.no :-1-209/A, Sy. No:- 100/3,<br/>
                        Yakamuru Village, Near Vuyyuru, Thotlavallur (M.D),<br/>
                        Krishna Dist-521165, Andhra Pradesh.
                      </p>
                    </div>
                    <div className="pt-4">
                      <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-gray-400 mb-1">GST Compliance</h4>
                      <p className="text-sm font-bold text-[#1A1A1A]">
                        37ABPCS6980C1ZT<br/>
                        36ABPCS6980C1ZV
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-[#F8F9FA] p-4 rounded-full h-fit">
                  <Mail size={24} className="text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Email Inquiry</h4>
                  <a href="mailto:ssrminesandmineralspvtltd@gmail.com" className="text-lg font-medium hover:underline">ssrminesandmineralspvtltd@gmail.com</a>
                  <p className="text-sm text-gray-400 mt-1">Typical response within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-[#F8F9FA] p-4 rounded-full h-fit">
                  <Phone size={24} className="text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Direct Phone</h4>

                  <p className="text-lg font-medium">+91 9885134569</p>
                  <p className="text-sm text-gray-400 mt-1">Available Mon-Fri, 9am - 6pm.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-[#EBF2FA] rounded-[8px] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm mb-1">Instant WhatsApp Support</h4>
                <p className="text-xs text-blue-600 font-semibold">Direct chat with sales team</p>
              </div>
              <a href="https://wa.me/919885134569" className="bg-[#1A1A1A] p-3 rounded-full text-white hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border border-[#E6E6E6] p-10 md:p-12 rounded-[12px] shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">Full Name</label>
                  <input name="name" required type="text" className="w-full bg-[#F8F9FA] border border-[#E6E6E6] rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">Company Name</label>
                  <input name="company" required type="text" className="w-full bg-[#F8F9FA] border border-[#E6E6E6] rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Industrial Corp Ltd." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">Corporate Email</label>
                  <input name="email" required type="email" className="w-full bg-[#F8F9FA] border border-[#E6E6E6] rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">Phone Number</label>
                  <input name="phone" required type="tel" className="w-full bg-[#F8F9FA] border border-[#E6E6E6] rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="+91 ..." />
                </div>
              </div>

              <div className="mb-10">
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 block mb-3">Requirement / Message</label>
                <textarea name="message" required rows={5} className="w-full bg-[#F8F9FA] border border-[#E6E6E6] rounded-[4px] px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none" placeholder="Describe your Quartz, Mica, or Feldspar grade and volume requirements..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-[4px] font-bold text-sm transition-all duration-300 ${
                  formState === 'sent' ? 'bg-green-600 text-white' : 'bg-[#1A1A1A] text-white hover:translate-y-[-2px] hover:shadow-xl'
                }`}
              >
                {formState === 'idle' && 'Submit Inquiry'}
                {formState === 'submitting' && 'Processing...'}
                {formState === 'sent' && 'Inquiry Sent Successfully'}
              </button>
              
              <p className="text-[0.65rem] text-gray-400 mt-6 text-center italic">
                * By submitting, you agree to our privacy policy regarding corporate data handling.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
