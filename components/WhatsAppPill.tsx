"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppPill = () => {
  return (
    <a 
      href="https://wa.me/917981392465" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[1100] flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#E6E6E6] hover:translate-y-[-4px] transition-all duration-300 group"
    >
      <div className="bg-[#1A1A1A] p-2 rounded-full transition-colors group-hover:bg-[#333]">
        <MessageCircle size={18} color="white" />
      </div>
      <span className="text-sm font-semibold text-[#1A1A1A]">Industrial Inquiry</span>
    </a>
  );
};

export default WhatsAppPill;
