"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppPill = () => {
  return (
    <a 
      href="https://wa.me/919885134569" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-[20px] right-[18px] md:bottom-8 md:right-8 z-[1100] flex items-center justify-center w-[56px] h-[56px] md:w-auto md:h-auto md:px-6 md:py-4 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E6E6E6] hover:translate-y-[-4px] transition-all duration-500 group"
    >
      <div className="bg-[#1A1A1A] p-2 rounded-full transition-colors group-hover:bg-blue-600 flex items-center justify-center">
        <MessageCircle size={24} color="white" className="md:w-5 md:h-5" />
      </div>
      <span className="text-[0.7rem] font-medium uppercase tracking-widest text-[#1A1A1A] hidden md:block ml-3">Industrial Inquiry</span>
    </a>
  );
};

export default WhatsAppPill;
