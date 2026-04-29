"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[1000] w-full transition-all duration-700 ease-industrial ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[#E6E6E6] py-3' : 'bg-transparent py-8'
      }`}>
        <div className="container-wide flex justify-between items-center">
          <Link href="/" className="flex flex-col group relative max-w-[70%] sm:max-w-none">
            <span className="logo-ssr transition-all duration-500 group-hover:tracking-[0.5em] text-xl sm:text-[1.75rem]">SSR</span>
            <span className="logo-subtext tracking-[0.2em] sm:tracking-[0.4em] truncate">MINES AND MINERALS PVT LTD</span>
          </Link>
          
          <div className="hidden lg:flex items-center">
            <div className="flex gap-12 mr-16">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-[0.65rem] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="btn-primary !px-8 !py-3">Get Quote</Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-black hover:opacity-60 transition-opacity"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[2000] bg-white transition-transform duration-700 ease-industrial ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-20">
            <div className="flex flex-col">
              <span className="logo-ssr">SSR</span>
              <span className="logo-subtext">MINES AND MINERALS</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 border border-[#E6E6E6] rounded-full">
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-light tracking-tighter hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary !w-full text-center !py-6 text-base"
            >
              Request Quote
            </Link>
            <div className="mt-12 pt-8 border-t border-[#E6E6E6]">
              <span className="text-[0.6rem] font-black text-gray-400 uppercase tracking-widest block mb-4">Industrial Support</span>
              <p className="text-sm font-bold">+91 7981392465</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
