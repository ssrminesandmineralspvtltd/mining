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
      <div className="fixed inset-0 technical-grid opacity-[0.4] pointer-events-none z-0"></div>

      {/* Hero Section - Maximum Contrast */}
      <section className="relative flex flex-col pt-24 lg:pt-32 pb-12 lg:pb-20 z-10 min-h-fit lg:min-h-screen lg:justify-center">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="space-y-6 lg:space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-black"></div>
                <span className="text-[0.65rem] lg:text-[0.7rem] uppercase font-black tracking-[0.4em] text-black">Direct Mine Sourcing</span>
              </div>
              <h1 className="h-hero text-black font-bold">
                Raw White <br className="hidden md:block" /> Quartz Lumps
              </h1>
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center">
                <p className="text-base lg:text-lg text-black font-bold max-w-sm leading-relaxed border-l-4 border-black pl-6 lg:pl-8">
                  Supplying premium raw mineral inputs for high-precision industrial manufacturing globally.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link href="/contact" className="btn-primary text-center w-full sm:w-auto !py-4 lg:!py-5 !bg-black !text-white shadow-lg">Request Quote</Link>
                  <Link href="/products" className="btn-outline text-center w-full sm:w-auto !py-4 lg:!py-5 !border-black !text-black !font-bold">Specifications</Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Featured Quartz Block */}
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl border-4 border-[#E6E6E6] bg-white shadow-xl">
              <Image 
                src="/images/hero.png" 
                alt="Raw White Quartz Lumps" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="section-spacing bg-[#F8F9FA] relative border-y border-[#E6E6E6]" id="products">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] lg:aspect-square border border-[#E6E6E6] bg-white p-2 lg:p-4 rounded-xl overflow-hidden shadow-sm">
              <Image 
                src="/images/lumps.png" 
                alt="High Purity White Quartz Lumps" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8 lg:space-y-12">
              <div>
                <span className="text-label mb-4 block">Primary Material</span>
                <h2 className="h-section text-black mb-6">Industrial Grade <br/>White Quartz Lumps</h2>
                <p className="text-black font-bold leading-relaxed max-w-lg">
                  Direct from established mining sites, our raw white quartz lumps are selected for high SiO2 purity and minimal iron oxide content.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { label: "Material Form", val: "Raw Lumps" },
                  { label: "Purity Grade", val: "High SiO2 Purity" },
                  { label: "Size Range", val: "50mm - 200mm" },
                  { label: "Color Grade", val: "Premium White" }
                ].map((spec, i) => (
                  <div key={i} className="border-l border-black pl-6 py-1">
                    <span className="text-[0.6rem] font-black uppercase text-gray-500 block mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-black">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/contact" className="btn-primary !bg-black">Download Technical Sheet</Link>
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
              <h2 className="h-section text-black">Industrial <br/>Supply Applications</h2>
            </div>
            <p className="text-sm text-black font-medium max-w-xs leading-relaxed italic border-l border-black pl-6">
              "Precise mineral input for complex manufacturing chains."
            </p>
          </div>
        </div>

        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-px bg-transparent lg:bg-[#E6E6E6] lg:border border-[#E6E6E6]">
          {[
            { 
              title: "Glass Manufacturing", 
              img: "/images/glass.png", 
              span: "lg:col-span-8", 
              desc: "Critical SiO2 source for architectural, container, and automotive glass clarity.",
              spec: "High SiO2 Content",
              use: "Clarity Enhancement"
            },
            { 
              title: "Ceramic Industry", 
              img: "/images/ceramic.png", 
              span: "lg:col-span-4", 
              desc: "Providing structural strength and thermal stability for premium sanitaryware.",
              spec: "Low Iron Content",
              use: "Structural Integrity"
            },
            { 
              title: "Construction", 
              img: "/images/construction.png", 
              span: "lg:col-span-4", 
              desc: "High-albedo aggregates for architectural concrete and decorative landscaping.",
              spec: "Bright White Aggregate",
              use: "Reflective Surfaces"
            },
            { 
              title: "Engineered Stone", 
              img: "/images/stone.png", 
              span: "lg:col-span-8", 
              desc: "The foundation for high-performance quartz surfaces and luxury stone slabs.",
              spec: "Consistent Grain Size",
              use: "Slab Foundation"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ backgroundColor: '#F8F9FA' }}
              className={`${item.span} bg-white relative group cursor-pointer overflow-hidden transition-colors duration-500 rounded-xl lg:rounded-none border lg:border-none border-[#E6E6E6]`}
            >
              {/* Mobile Image Header - Real Photos */}
              <div className="relative w-full h-32 lg:hidden border-b border-[#E6E6E6]">
                <Image src={item.img} alt={item.title} fill className="object-cover grayscale" />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-black/10">
                   <span className="text-[0.6rem] font-black uppercase tracking-widest text-black">Sector 0{idx + 1}</span>
                </div>
              </div>

              <div className="p-8 lg:p-16 relative z-10 flex flex-col h-full">
                <div className="hidden lg:flex justify-between items-start mb-12">
                  <span className="text-[0.6rem] font-black text-black/20 group-hover:text-black transition-colors">Sector 0{idx + 1}</span>
                  <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    <span className="text-[0.5rem] font-black text-gray-400 uppercase tracking-widest">Alignment</span>
                    <span className="text-[0.7rem] font-bold text-black">{item.spec}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight mb-4 lg:mb-6 text-black">{item.title}</h3>
                  <p className="text-sm text-black font-medium max-w-sm leading-relaxed mb-8">{item.desc}</p>
                </div>
                
                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 lg:flex lg:items-center gap-6 pt-6 border-t border-black/5 lg:border-none">
                  <div className="flex flex-col lg:hidden">
                    <span className="text-[0.5rem] font-black text-gray-500 uppercase tracking-widest mb-1">Alignment</span>
                    <span className="text-[0.65rem] font-bold uppercase text-black">{item.spec}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.5rem] font-black text-gray-500 uppercase tracking-widest mb-1">Primary Use</span>
                    <span className="text-[0.65rem] font-bold uppercase text-black">{item.use}</span>
                  </div>
                  <div className="hidden lg:block w-12 h-px bg-black group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Desktop Image Preview */}
              <div className="absolute right-0 top-0 bottom-0 w-0 group-hover:w-1/3 transition-all duration-1000 ease-industrial opacity-0 group-hover:opacity-10 hidden lg:block">
                <Image src={item.img} alt={item.title} fill className="object-cover grayscale" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supply Reliability Section */}
      <section className="section-spacing bg-[#F8F9FA] border-y border-[#E6E6E6]" id="reliability">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 lg:mb-20">
            <span className="text-label mb-4 block">Industrial Supply</span>
            <h2 className="h-section text-black mb-8">Supply Reliability <br/>& Corporate Stability</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Raw Quartz Lumps", desc: "Clean white quartz sourced directly from established mining sites." },
              { title: "Bulk Supply Only", desc: "Streamlined logistics for large-scale industrial procurement." },
              { title: "Quality Sourcing", desc: "Direct oversight of material integrity and mineral appearance." },
              { title: "B2B Communication", desc: "Direct technical support for procurement and logistics teams." }
            ].map((block, i) => (
              <div key={i} className="space-y-4 border-t border-black/10 pt-8 group hover:bg-white transition-colors p-4 lg:p-6 rounded-[2px]">
                <div className="flex items-center gap-4">
                  <span className="text-[0.6rem] font-black text-black group-hover:text-blue-600">0{i + 1}</span>
                  <h4 className="text-sm font-black uppercase tracking-widest text-black">{block.title}</h4>
                </div>
                <p className="text-sm text-black leading-relaxed pl-10 font-bold">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
