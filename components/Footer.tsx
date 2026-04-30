"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E6E6E6] pt-32 pb-16 relative overflow-hidden z-10">
      {/* Background Marker */}
      <div className="absolute bottom-0 right-0 technical-grid w-1/4 h-1/2 opacity-[0.2] -z-10"></div>
      
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-4 pr-12">
            <Link href="/" className="flex flex-col mb-10">
              <span className="logo-ssr uppercase">SSR</span>
              <span className="logo-subtext">MINES AND MINERALS PVT LTD</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-8 border-l border-black/10 pl-6">
              Direct quarry-source supplier of raw white Quartz, Mica, and Feldspar. Serving industrial buyers across glass, ceramic, and mineral-based applications.
            </p>
            <div className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-widest">
              Industrial Mineral Supplier / Logistics Integrated
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-black uppercase tracking-[0.3em] mb-10 text-gray-400">Navigation</h4>
            <ul className="space-y-6">
              <li><Link href="/" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">Home</Link></li>
              <li><Link href="/products" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">Products</Link></li>
              <li><Link href="/applications" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">Applications</Link></li>
              <li><Link href="/about" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-tight">About Us</Link></li>
            </ul>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] font-black uppercase tracking-[0.3em] mb-10 text-gray-400">Business Details</h4>
            <div className="space-y-8">
              <div>
                <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-2">Corporate Office</span>
                <p className="text-xs text-gray-500 leading-relaxed font-bold mb-4">
                  Plot No: 88(A), Flat No: 216,<br/>
                  Ushodaya Towers, Shapurnagar,<br/>
                  Phase-1, IDA-Jeedimetla, Hyderabad - 500 055
                </p>
                
                <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-2 mt-6">MDL Address (Khammam)</span>
                <p className="text-xs text-gray-500 leading-relaxed font-bold mb-4">
                  Sy no:- 595/61, o/e:- 0.810 (Ha),<br/>
                  Butchi Reddy palem (village), Near Mamnoor,<br/>
                  yerrupalem (Mandal), Khammam (Dist), Telangana.
                </p>

                <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-2 mt-6">MDL Address (Krishna)</span>
                <p className="text-xs text-gray-500 leading-relaxed font-bold">
                  Block no:-1, H.no :-1-209/A, Sy. No:- 100/3,<br/>
                  Yakamuru Village, Near Vuyyuru, Thotlavallur (M.D),<br/>
                  Krishna Dist-521165, Andhra Pradesh.
                </p>
              </div>

              <div>
                <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-2">GST Compliance</span>
                <p className="text-[0.65rem] font-bold text-gray-500 tracking-wider">
                  37ABPCS6980C1ZT<br/>
                  36ABPCS6980C1ZV
                </p>
              </div>

              <div>
                <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-2">Technical Support</span>
                <a href="mailto:ssrminesandmineralspvtltd@gmail.com" className="text-sm font-bold hover:underline">ssrminesandmineralspvtltd@gmail.com</a>
                <p className="text-sm font-bold">+91 9885134569</p>
              </div>
            </div>
          </div>

          {/* Inquiry Box */}
          <div className="lg:col-span-3">
            <div className="bg-[#F8F9FA] border border-[#E6E6E6] p-8 rounded-[2px] relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-12 h-12 bg-black/5 -translate-y-6 translate-x-6 rotate-45 group-hover:bg-black/10 transition-colors"></div>
               <h4 className="text-[0.7rem] font-black uppercase tracking-[0.3em] mb-4">Industrial Inquiry</h4>
               <p className="text-xs text-gray-500 leading-relaxed mb-8">
                 Connect directly with our procurement team for bulk pricing and logistics.
               </p>
               <Link href="/contact" className="btn-primary !w-full !px-0 text-center !py-4 text-[0.6rem]">Contact Sales</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6E6E6] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.65rem] text-gray-400 font-bold uppercase tracking-widest">
            © 2026 SSR Mines and Minerals Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
