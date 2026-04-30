"use client";
import React from 'react';
import { MapPin, Mail, Phone, Building2, FileText, Globe } from 'lucide-react';
import Link from 'next/link';

const BusinessDetailsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Header / Brand */}
      <div className="bg-white border-b border-gray-200 pt-12 pb-8 px-6 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-1">SSR</h1>
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.4em] text-gray-400">Mines and Minerals Pvt Ltd</p>
      </div>

      <div className="max-w-md mx-auto p-6 space-y-8 pb-24">
        
        {/* Section: Corporate Office */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4 text-gray-400">
            <Building2 size={18} />
            <h2 className="text-[0.65rem] font-black uppercase tracking-widest">Corporate Office</h2>
          </div>
          <p className="text-sm leading-relaxed font-medium text-gray-600">
            Plot No: 88(A), Flat No: 216, Ushodaya Towers,<br/>
            Shapurnagar, Phase-1, IDA-Jeedimetla,<br/>
            Hyderabad - 500 055, Telangana
          </p>
        </section>

        {/* Section: MDL Addresses */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 text-gray-400">
              <MapPin size={18} />
              <h2 className="text-[0.65rem] font-black uppercase tracking-widest">MDL Address (Khammam)</h2>
            </div>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Sy no:- 595/61, o/e:- 0.810 (Ha),<br/>
              Butchi Reddy palem (village), Near Mamnoor,<br/>
              yerrupalem (Mandal), Khammam (Dist), Telangana.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-50">
            <div className="flex items-center gap-3 mb-4 text-gray-400">
              <MapPin size={18} />
              <h2 className="text-[0.65rem] font-black uppercase tracking-widest">MDL Address (Krishna)</h2>
            </div>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Block no:-1, H.no :-1-209/A, Sy. No:- 100/3,<br/>
              Yakamuru Village, Near Vuyyuru, Thotlavallur (M.D),<br/>
              Krishna Dist-521165, Andhra Pradesh.
            </p>
          </div>
        </section>

        {/* Section: GST Compliance */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4 text-gray-400">
            <FileText size={18} />
            <h2 className="text-[0.65rem] font-black uppercase tracking-widest">GST Compliance</h2>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-wider">37ABPCS6980C1ZT</p>
            <p className="text-sm font-bold tracking-wider">36ABPCS6980C1ZV</p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <a 
            href="tel:+919885134569" 
            className="flex flex-col items-center justify-center bg-black text-white p-6 rounded-2xl gap-2 hover:bg-gray-900 transition-colors"
          >
            <Phone size={24} />
            <span className="text-[0.6rem] font-bold uppercase tracking-widest">Call Now</span>
          </a>
          <a 
            href="mailto:ssrminesandmineralspvtltd@gmail.com" 
            className="flex flex-col items-center justify-center bg-white border border-gray-200 p-6 rounded-2xl gap-2 hover:bg-gray-50 transition-colors"
          >
            <Mail size={24} />
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500">Email Us</span>
          </a>
        </div>

        <Link 
          href="/" 
          className="flex items-center justify-center w-full bg-white border border-gray-200 p-4 rounded-2xl gap-3 text-[0.7rem] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
        >
          <Globe size={18} />
          Visit Full Website
        </Link>

      </div>
    </div>
  );
};

export default BusinessDetailsPage;
