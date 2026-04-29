"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-[1000] w-full transition-all duration-700 ease-industrial ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[#E6E6E6] py-3' : 'bg-transparent py-8'
    }`}>
      <div className="container-wide flex justify-between items-center">
        <Link href="/" className="flex flex-col group relative">
          <span className="logo-ssr transition-all duration-500 group-hover:tracking-[0.5em]">SSR</span>
          <span className="logo-subtext">MINING & MINERALS</span>
          {/* Technical Marker */}
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-black/10 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
        </Link>
        
        <div className="hidden lg:flex items-center">
          <div className="flex gap-12 mr-16">
            <Link href="/" className="text-[0.65rem] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/products" className="text-[0.65rem] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">Products</Link>
            <Link href="/applications" className="text-[0.65rem] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">Applications</Link>
            <Link href="/about" className="text-[0.65rem] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">About</Link>
          </div>
          <Link href="/contact" className="btn-primary !px-8 !py-3">Get Quote</Link>
        </div>

        {/* Mobile Menu - Minimalist */}
        <button className="lg:hidden group p-2 relative">
          <div className="w-8 h-[2px] bg-black mb-2 transition-all group-hover:w-10"></div>
          <div className="w-8 h-[2px] bg-black transition-all group-hover:w-6"></div>
          {/* Marker */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
