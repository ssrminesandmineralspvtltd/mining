"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppPill = () => {
  return (
    <a 
      href="https://wa.me/917981392465" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1100] flex items-center gap-3 bg-white px-3 py-3 md:px-6 md:py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E6E6E6] hover:translate-y-[-4px] transition-all duration-500 group"
    >
      <div className="bg-[#1A1A1A] p-1.5 md:p-2 rounded-full transition-colors group-hover:bg-blue-600">
        <MessageCircle size={18} color="white" className="md:w-5 md:h-5" />
      </div>
      <span className="text-[0.7rem] font-medium uppercase tracking-widest text-[#1A1A1A] hidden md:block">Industrial Inquiry</span>
    </a>
  );
};

export default WhatsAppPill;
