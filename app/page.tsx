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

      {/* Hero Section - Real Quarry Authority */}
      <section className="relative flex flex-col pt-24 pb-14 lg:pt-32 lg:pb-20 z-10 min-h-fit lg:min-h-screen lg:justify-center">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* 1. Quartz Pile (Image 4) - Volume & Authenticity */}
            <div className="order-1 lg:order-2 lg:col-span-5 relative">
              <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden rounded-xl border-2 lg:border-4 border-[#E6E6E6] bg-gray-50 shadow-2xl">
                <Image 
                  src="/images/quartz-pile.jpeg" 
                  alt="SSR White Quartz Lumps Stockpile" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* 2. Text Content */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col">
              <div className="space-y-6 lg:space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-black"></div>
                  <span className="text-[0.65rem] lg:text-[0.7rem] uppercase font-bold tracking-[0.4em] text-black">Raw White Quartz Supply</span>
                </div>
                
                <h1 className="text-[2.25rem] md:text-5xl lg:text-[6.5rem] leading-[1.1] lg:leading-[1] font-bold text-[#111111] tracking-tight">
                  Raw White <br className="hidden md:block" /> Quartz Lumps
                </h1>
                
                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start md:items-center">
                  <p className="text-base lg:text-lg text-[#111111] font-medium max-w-sm leading-relaxed border-l-4 border-black pl-6 lg:pl-8">
                    Supplying raw white quartz lumps for industrial buyers and bulk procurement.
                  </p>
                  
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

      {/* Material Specifications Section - Technical Specimen (Image 2) */}
      <section className="py-[72px] px-5 lg:py-40 lg:px-0 bg-[#F8F9FA] relative border-y border-[#E6E6E6]" id="products">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
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
                    <span className="text-[0.6rem] font-black uppercase text-gray-400 block mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-[#111111]">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/contact" className="btn-primary !bg-[#111111] !w-full lg:!w-auto text-center !py-4 lg:!py-5">Inquire for Data Sheet</Link>
              </div>
            </div>

            {/* Specimen Close-Up - No Clipping, No Filters */}
            <div className="order-1 lg:order-2 relative aspect-square border border-[#E6E6E6] bg-white rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/images/quartz-macro.jpeg" 
                alt="White Quartz Technical Specimen" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Applications - Text-Focused Industrial Cards */}
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
            { title: "Glass Manufacturing", span: "lg:col-span-8", desc: "SiO2 source for architectural and container glass clarity.", use: "Material Input" },
            { title: "Ceramic Industry", span: "lg:col-span-4", desc: "Providing structural strength for industrial ceramic production.", use: "Structural Input" },
            { title: "Construction", span: "lg:col-span-4", desc: "Aggregates for architectural concrete and mineral-based landscaping.", use: "Aggregate Supply" },
            { title: "Engineered Stone", span: "lg:col-span-8", desc: "Mineral foundation for high-performance quartz surfaces.", use: "Base Material" }
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
            </div>
          ))}
        </div>
      </section>

      {/* Material Integrity (Image 1) - Macro Analysis Visibility */}
      <section className="py-[72px] px-5 lg:py-40 lg:px-0 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#E6E6E6] shadow-xl bg-gray-50">
              <Image 
                src="/images/quartz-lump.jpeg" 
                alt="Raw White Quartz Analysis" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-label mb-4 block">Quality Assurance</span>
              <h2 className="h-section text-[#111111] mb-6">Material Integrity</h2>
              <p className="text-[#111111] font-medium leading-relaxed max-w-lg mb-8">
                Our raw white quartz lumps undergo strict inspection to ensure consistency in industrial grade and mineral purity. Directly sourced from verified quarry sites.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center border border-[#E6E6E6]">
                  <span className="text-[0.7rem] font-bold text-black">PASS</span>
                </div>
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-gray-500">Mineral Compliance Standard</span>
              </div>
            </div>
          </div>
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
