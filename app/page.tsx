"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const ease = [0.4, 0, 0.2, 1] as const;

  return (
    <main className="bg-white selection:bg-black selection:text-white">
      {/* Structural Background Grid - Reduced Opacity on Mobile */}
      <div className="fixed inset-0 technical-grid opacity-[0.1] lg:opacity-[0.4] pointer-events-none z-0"></div>

      {/* Hero Section - Compact & High Contrast */}
      <section className="relative flex flex-col pt-20 pb-12 lg:pt-32 lg:pb-20 z-10 min-h-fit lg:min-h-screen lg:justify-center">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">
            {/* Hero Text - No Fade on Mobile for Instant Visibility */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="space-y-6 lg:space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-black"></div>
                  <span className="text-[0.65rem] lg:text-[0.7rem] uppercase font-black tracking-[0.4em] text-black">SSR Mines and Minerals</span>
                </div>
                <h1 className="text-[2.75rem] md:text-5xl lg:text-[6.5rem] leading-[1.1] lg:leading-[1] font-bold text-[#111111] tracking-tight">
                  Raw White <br className="hidden md:block" /> Quartz Lumps
                </h1>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center">
                  <p className="text-base lg:text-lg text-[#111111] font-bold max-w-sm leading-relaxed border-l-4 border-black pl-6 lg:pl-8">
                    Supplying premium raw mineral inputs for industrial manufacturing globally.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/contact" className="btn-primary text-center w-full sm:w-auto !bg-[#111111] !text-white !py-4 lg:!py-5">Request Quote</Link>
                    <Link href="/products" className="btn-outline text-center w-full sm:w-auto !border-[#111111] !text-[#111111] !font-bold !py-4 lg:!py-5">Specifications</Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Placed Directly Below Text on Mobile */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl border-2 lg:border-4 border-[#E6E6E6] bg-white shadow-xl">
                <Image 
                  src="/images/hero.png" 
                  alt="Raw White Quartz Lumps" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="section-spacing bg-[#F8F9FA] relative border-y border-[#E6E6E6]" id="products">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] lg:aspect-square border border-[#E6E6E6] bg-white p-2 rounded-xl overflow-hidden shadow-sm">
              <Image 
                src="/images/lumps.png" 
                alt="White Quartz Lumps" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8 lg:space-y-12">
              <div>
                <span className="text-label mb-4 block">Primary Material</span>
                <h2 className="h-section text-[#111111] mb-6">Industrial Grade <br/>White Quartz Lumps</h2>
                <p className="text-[#111111] font-bold leading-relaxed max-w-lg">
                  Raw white quartz lumps selected for industrial manufacturing. Specifications shared on request.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { label: "Material Form", val: "Raw Lumps" },
                  { label: "Purity Grade", val: "Specifications shared on request" },
                  { label: "Size Range", val: "Sizing available on inquiry" },
                  { label: "Color Grade", val: "Raw white quartz lumps" }
                ].map((spec, i) => (
                  <div key={i} className="border-l border-black pl-6 py-1">
                    <span className="text-[0.6rem] font-black uppercase text-gray-500 block mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-[#111111]">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/contact" className="btn-primary !bg-[#111111]">Inquire for Technical Sheet</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-spacing bg-white overflow-hidden" id="applications">
        <div className="container-wide mb-12 lg:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <span className="text-label mb-4 lg:mb-6 block">Sector Alignment</span>
              <h2 className="h-section text-[#111111]">Industrial <br/>Supply Applications</h2>
            </div>
            <p className="text-sm text-[#111111] font-bold max-w-xs leading-relaxed italic border-l border-black pl-6">
              "Industrial mineral input for manufacturing chains."
            </p>
          </div>
        </div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-px bg-transparent lg:bg-[#E6E6E6] lg:border border-[#E6E6E6]">
          {[
            { title: "Glass Manufacturing", img: "/images/glass.png", span: "lg:col-span-8", desc: "SiO2 source for architectural and container glass clarity.", use: "Clarity Enhancement" },
            { title: "Ceramic Industry", img: "/images/ceramic.png", span: "lg:col-span-4", desc: "Providing structural strength for premium sanitaryware.", use: "Structural Integrity" },
            { title: "Construction", img: "/images/construction.png", span: "lg:col-span-4", desc: "Aggregates for architectural concrete and decorative landscaping.", use: "Reflective Surfaces" },
            { title: "Engineered Stone", img: "/images/stone.png", span: "lg:col-span-8", desc: "Foundation for high-performance quartz surfaces.", use: "Slab Foundation" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.span} bg-white relative group border border-[#E6E6E6] lg:border-none rounded-xl lg:rounded-none overflow-hidden`}
            >
              {/* Real Image Header on Mobile */}
              <div className="relative w-full h-40 lg:hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover grayscale" />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-black/10">
                   <span className="text-[0.6rem] font-black uppercase tracking-widest text-black">Sector 0{idx + 1}</span>
                </div>
              </div>

              <div className="p-8 lg:p-16 relative z-10 flex flex-col h-full">
                <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight mb-4 lg:mb-6 text-[#111111]">{item.title}</h3>
                <p className="text-sm text-[#111111] font-bold max-w-sm leading-relaxed mb-8">{item.desc}</p>
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

      {/* Footer Reliability Section */}
      <section className="section-spacing bg-[#F8F9FA] border-y border-[#E6E6E6]" id="reliability">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Quartz Supply", desc: "Clean white quartz sourced directly for industrial procurement." },
              { title: "Bulk Capacity", desc: "Streamlined logistics for large-scale supply requirements." },
              { title: "Material Integrity", desc: "Direct oversight of mineral appearance and sourcing." },
              { title: "Industrial Support", desc: "Direct support for procurement and logistics teams." }
            ].map((block, i) => (
              <div key={i} className="space-y-4 border-t border-black/10 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-[0.6rem] font-black text-black">0{i + 1}</span>
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#111111]">{block.title}</h4>
                </div>
                <p className="text-sm text-[#111111] leading-relaxed pl-10 font-bold">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
