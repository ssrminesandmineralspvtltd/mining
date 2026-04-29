"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const ease = [0.4, 0, 0.2, 1] as const;

  return (
    <main className="bg-white selection:bg-black selection:text-white">
      {/* Structural Background Grid */}
      <div className="fixed inset-0 technical-grid opacity-[0.1] lg:opacity-[0.4] pointer-events-none z-0"></div>

      {/* Hero Section - Strict Alignment to User Flow */}
      <section className="relative flex flex-col pt-24 pb-14 lg:pt-32 lg:pb-20 z-10 min-h-fit lg:min-h-screen lg:justify-center">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start lg:items-center">
            
            {/* 1. Quartz Image (Mobile Order 1) */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative aspect-[16/8.5] lg:aspect-square overflow-hidden rounded-xl border-2 lg:border-4 border-[#E6E6E6] bg-white shadow-xl">
                <Image 
                  src="/images/lumps.png" 
                  alt="Authentic Raw White Quartz Lumps" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 2. Text Content (Mobile Order 2) */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col">
              <div className="space-y-6 lg:space-y-10">
                {/* Mini label hidden on mobile for maximum cleanliness */}
                <div className="hidden lg:flex items-center gap-4">
                  <div className="w-10 h-px bg-black"></div>
                  <span className="text-[0.65rem] lg:text-[0.7rem] uppercase font-bold tracking-[0.4em] text-black">Raw White Quartz Supply</span>
                </div>
                
                {/* 3. Headline */}
                <h1 className="text-[2.25rem] md:text-5xl lg:text-[6.5rem] leading-[1.1] lg:leading-[1] font-bold text-[#111111] tracking-tight">
                  Raw White <br className="hidden md:block" /> Quartz Lumps
                </h1>
                
                {/* 4. Subtext */}
                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start md:items-center">
                  <p className="text-base lg:text-lg text-[#111111] font-medium max-w-sm leading-relaxed border-l-4 border-black pl-6 lg:pl-8">
                    Supplying raw white quartz lumps for industrial buyers and bulk procurement.
                  </p>
                  
                  {/* 5. Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/contact" className="btn-primary text-center w-full sm:w-auto !bg-[#111111] !text-white !py-3.5 lg:!py-5">Request Quote</Link>
                    <Link href="/products" className="btn-outline text-center w-full sm:w-auto !border-[#111111] !text-[#111111] !font-bold !py-3.5 lg:!py-5">Material Details</Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Material Specifications Section */}
      <section className="py-[72px] px-5 lg:py-40 lg:px-0 bg-[#F8F9FA] relative border-y border-[#E6E6E6]" id="products">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-12 order-1">
              <div>
                <span className="text-label mb-4 block">Material Details</span>
                <h2 className="h-section text-[#111111] mb-6">Industrial Grade <br/>White Quartz Lumps</h2>
                <p className="text-[#111111] font-medium leading-relaxed max-w-lg">
                  Direct sourcing of raw white quartz lumps for industrial manufacturing chains. Bulk supply inquiries welcome.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { label: "Material Form", val: "Raw Lumps" },
                  { label: "Chemical Grade", val: "Specifications shared on request" },
                  { label: "Size Grading", val: "Sizing available on inquiry" },
                  { label: "Material ID", val: "Raw white quartz lumps" }
                ].map((spec, i) => (
                  <div key={i} className="border-l-2 border-black pl-6 py-1">
                    <span className="text-[0.6rem] font-black uppercase text-gray-500 block mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-[#111111]">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/contact" className="btn-primary !bg-[#111111] !w-full lg:!w-auto text-center !py-4 lg:!py-5">Inquire for Data Sheet</Link>
              </div>
            </div>

            <div className="hidden lg:flex relative aspect-square border border-[#E6E6E6] bg-white p-4 rounded-xl overflow-hidden shadow-sm order-2">
              <Image 
                src="/images/hero.png" 
                alt="Industrial Supply Infrastructure" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications */}
      <section className="py-[72px] px-5 lg:py-40 lg:px-0 bg-white overflow-hidden" id="applications">
        <div className="container-wide mb-12 lg:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <span className="text-label mb-4 lg:mb-6 block">Supply Alignment</span>
              <h2 className="h-section text-[#111111]">Industrial <br/>Supply Applications</h2>
            </div>
            <p className="text-sm text-[#111111] font-medium max-w-xs leading-relaxed italic border-l-4 border-black pl-6">
              "Serving industrial buyers across glass, ceramic, and mineral-based applications."
            </p>
          </div>
        </div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-px bg-transparent lg:bg-[#E6E6E6] lg:border border-[#E6E6E6]">
          {[
            { title: "Glass Manufacturing", img: "/images/glass.png", span: "lg:col-span-8", desc: "SiO2 source for architectural and container glass clarity.", use: "Material Input" },
            { title: "Ceramic Industry", img: "/images/ceramic.png", span: "lg:col-span-4", desc: "Providing structural strength for industrial ceramic production.", use: "Structural Input" },
            { title: "Construction", img: "/images/construction.png", span: "lg:col-span-4", desc: "Aggregates for architectural concrete and mineral-based landscaping.", use: "Aggregate Supply" },
            { title: "Engineered Stone", img: "/images/stone.png", span: "lg:col-span-8", desc: "Mineral foundation for high-performance quartz surfaces.", use: "Base Material" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.span} bg-white relative group border-x border-b border-[#E6E6E6] lg:border-none rounded-b-xl lg:rounded-none overflow-hidden first:border-t first:rounded-t-xl`}
            >
              <div className="absolute inset-0 opacity-[0.03] technical-grid pointer-events-none"></div>
              
              <div className="p-8 lg:p-16 relative z-10 flex flex-col h-full bg-white/80 border-l-2 border-transparent group-hover:border-black transition-all duration-500">
                <div className="flex justify-between items-center mb-10">
                   <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400">Sector 0{idx + 1}</span>
                   <div className="w-8 h-px bg-black/10"></div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight mb-4 lg:mb-6 text-[#111111]">{item.title}</h3>
                <p className="text-sm text-[#111111] font-medium max-w-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="mt-auto pt-6 border-t border-black/5 flex flex-col">
                  <span className="text-[0.5rem] font-black text-gray-500 uppercase tracking-widest mb-1">Primary Use</span>
                  <span className="text-[0.65rem] font-bold uppercase text-black">{item.use}</span>
                </div>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-0 group-hover:w-1/3 transition-all duration-1000 ease-industrial opacity-0 group-hover:opacity-10 hidden lg:block">
                <Image src={item.img} alt={item.title} fill className="object-cover grayscale" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Reliability */}
      <section className="py-[72px] px-5 lg:py-40 lg:px-0 bg-[#F8F9FA] border-y border-[#E6E6E6]" id="reliability">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Direct Sourcing", desc: "Raw white quartz lumps sourced directly for industrial procurement." },
              { title: "Bulk Capacity", desc: "Streamlined logistics for large-scale supply and bulk requirements." },
              { title: "Direct Communication", desc: "Specifications shared on request via direct B2B channels." },
              { title: "Material Support", desc: "Technical support for industrial procurement and logistics teams." }
            ].map((block, i) => (
              <div key={i} className="space-y-4 border-t-2 border-black/10 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-[0.6rem] font-bold text-black">0{i + 1}</span>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#111111]">{block.title}</h4>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed pl-10 font-medium">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
