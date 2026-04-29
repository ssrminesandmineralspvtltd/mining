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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 z-10">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-7"
          >
            <span className="text-label mb-8 block">
              Direct Mine Sourcing & Logistics
            </span>
            <h1 className="h-hero mb-12">
              Raw White <br/>
              <span className="font-medium">Quartz Lumps</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <p className="text-lg text-gray-500 max-w-sm leading-relaxed border-l-2 border-black pl-8">
                Supplying premium raw mineral inputs for high-precision industrial manufacturing globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contact" className="btn-primary text-center w-full sm:w-auto">Request Quote</Link>
                <Link href="/products" className="btn-outline text-center w-full sm:w-auto">Specifications</Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease }}
            className="lg:col-span-5 relative"
          >
            {/* Layered Frames */}
            <div className="absolute -inset-4 border border-[#E6E6E6] rounded-[2px] -z-10 translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[2px] shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
              <Image 
                src="/images/hero.png" 
                alt="Raw White Quartz Lumps" 
                fill 
                className="object-cover transition-transform duration-[2s] ease-industrial hover:scale-110"
                priority
              />
            </div>
            {/* Technical Detail Tag */}
            <div className="absolute bottom-8 -left-8 bg-white border border-[#E6E6E6] p-6 hidden md:block shadow-xl">
              <span className="text-[0.6rem] font-black uppercase tracking-widest block mb-1">Mineral Grade</span>
              <span className="text-sm font-bold">Industrial White</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Specification Section */}
      <section className="section-spacing relative bg-[#F8F9FA]/80 backdrop-blur-sm border-y border-[#E6E6E6]" id="products">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <span className="text-label mb-6 block text-black/30">Mineral Identification</span>
            <h2 className="h-section mb-10">Standard <br/>Grade Lumps</h2>
            <p className="text-gray-500 mb-12 leading-relaxed max-w-md">
              Our raw quartz is selected for its high albedo and structural integrity, ensuring minimal contamination during the melting or grinding process.
            </p>
            <div className="space-y-6">
              {[
                { label: "Material", val: "Raw Quartz Lumps" },
                { label: "Visual", val: "Bright White / Crystalline" },
                { label: "Supply", val: "Industrial Bulk Loads" },
                { label: "Delivery", val: "Logistics Integrated" }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-end border-b border-[#E6E6E6] pb-3 group">
                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">{spec.label}</span>
                  <span className="text-sm font-bold">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="relative aspect-square border border-[#E6E6E6] bg-white p-4">
               <div className="relative w-full h-full overflow-hidden">
                 <Image src="/images/lumps.png" alt="Quartz Details" fill className="object-cover transition-transform duration-[1.5s] ease-industrial hover:scale-105" />
               </div>
               <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-3 py-1 text-[0.5rem] font-bold tracking-[0.2em] uppercase border border-black/10">
                 Detail 01
               </div>
             </div>
             <div className="relative aspect-square bg-[#1A1A1A] p-12 flex flex-col justify-between text-white">
               <div className="text-label text-white/40">Procurement</div>
               <div className="space-y-6">
                 <h4 className="text-xl font-medium leading-snug">Available for international industrial export and domestic supply.</h4>
                 <Link href="/contact" className="inline-flex items-center gap-4 text-[0.65rem] font-black uppercase tracking-[0.2em] group">
                   Inquire Now
                   <div className="w-8 h-px bg-white group-hover:w-12 transition-all"></div>
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Technical Industrial Grid */}
      <section className="section-spacing bg-white overflow-hidden" id="applications">
        <div className="container-wide mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-2xl">
              <span className="text-label mb-6 block">Sector Alignment</span>
              <h2 className="h-section">Industrial <br/>Supply Applications</h2>
            </div>
            <div className="h-px flex-grow bg-[#E6E6E6] hidden md:block mx-12 mb-4"></div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed italic">
              "Precise mineral input for complex manufacturing chains."
            </p>
          </div>
        </div>

        <div className="container-wide grid grid-cols-1 md:grid-cols-12 gap-px bg-[#E6E6E6] border border-[#E6E6E6]">
          {[
            { 
              title: "Glass Manufacturing", 
              img: "/images/glass.png", 
              span: "md:col-span-8", 
              desc: "Critical SiO2 source for architectural, container, and automotive glass clarity.",
              spec: "High Purity (99%+ SiO2)",
              use: "Clarity Enhancement"
            },
            { 
              title: "Ceramic Industry", 
              img: "/images/ceramic.png", 
              span: "md:col-span-4", 
              desc: "Providing structural strength and thermal stability for premium sanitaryware.",
              spec: "Low Iron Content",
              use: "Structural Integrity"
            },
            { 
              title: "Construction", 
              img: "/images/construction.png", 
              span: "md:col-span-4", 
              desc: "High-albedo aggregates for architectural concrete and decorative landscaping.",
              spec: "Bright White Aggregate",
              use: "Reflective Surfaces"
            },
            { 
              title: "Engineered Stone", 
              img: "/images/stone.png", 
              span: "md:col-span-8", 
              desc: "The foundation for high-performance quartz surfaces and luxury stone slabs.",
              spec: "Consistent Grain Size",
              use: "Slab Foundation"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ backgroundColor: '#F8F9FA' }}
              className={`${item.span} bg-white p-10 lg:p-16 relative group cursor-pointer overflow-hidden transition-colors duration-500`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[0.6rem] font-black text-black/20 group-hover:text-black transition-colors">Sector 0{idx + 1}</span>
                  <div className="flex flex-col items-end opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 lg:translate-x-4 lg:group-hover:translate-x-0">
                    <span className="text-[0.5rem] font-black text-gray-400 uppercase tracking-widest">Alignment</span>
                    <span className="text-[0.7rem] font-bold text-black text-right">{item.spec}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 lg:group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-8">{item.desc}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[0.5rem] font-black text-gray-400 uppercase tracking-widest">Primary Use</span>
                    <span className="text-[0.65rem] font-bold uppercase">{item.use}</span>
                  </div>
                  <div className="w-12 h-px bg-black/10 lg:group-hover:w-20 lg:group-hover:bg-black transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Image Preview on Hover - Authentic Factory Shots */}
              <div className="absolute right-0 top-0 bottom-0 w-0 group-hover:w-1/3 transition-all duration-1000 ease-industrial opacity-0 group-hover:opacity-10 hidden lg:block">
                <Image src={item.img} alt={item.title} fill className="object-cover grayscale" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stability & Trust - Layered Surface */}
      <section className="section-spacing relative overflow-hidden" id="about">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8F9FA] -z-10 border-l border-[#E6E6E6]"></div>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <span className="text-label mb-8 block">Industrial Confidence</span>
            <h2 className="h-section mb-12">Supply Reliability <br/>& Corporate Stability</h2>
            
            {/* Structured Data Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { title: "Raw Quartz Lumps", desc: "Clean white quartz sourced directly from established mining sites." },
                { title: "Bulk Supply Only", desc: "Streamlined logistics for large-scale industrial procurement." },
                { label: "03", title: "Quality Sourcing", desc: "Direct oversight of material integrity and mineral appearance." },
                { label: "04", title: "B2B Communication", desc: "Direct technical support for procurement and logistics teams." }
              ].map((block, i) => (
                <div key={i} className="space-y-4 border-t border-[#E6E6E6] pt-8 group">
                  <h4 className="text-[0.7rem] font-black uppercase tracking-widest group-hover:text-blue-600 transition-colors">{block.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="bg-white border border-[#E6E6E6] p-12 md:p-20 relative z-10 shadow-[0_60px_120px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute top-12 right-12 text-[10rem] font-black text-black/[0.02] leading-none select-none pointer-events-none">SSR</div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Verified Partnership</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-12">
                SSR Mining & Minerals Private Limited operates with the structural discipline required by global manufacturing chains. We provide the stability your production line depends on.
              </p>
              <Link href="/about" className="btn-outline w-full text-center">Company Profile</Link>
            </motion.div>
            {/* Structural Detail */}
            <div className="absolute -top-10 -right-10 w-40 h-40 technical-grid opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Brightened & Refined */}
      <section className="section-spacing bg-[#F8F9FA] border-t border-[#E6E6E6] relative overflow-hidden">
        {/* Decorative Technical Line */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-[#E6E6E6] hidden lg:block"></div>
        
        <div className="container-wide relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="text-center max-w-5xl mx-auto py-12"
          >
            <span className="text-label mb-10 block">Direct Procurement Logistics</span>
            <h2 className="text-4xl md:text-7xl font-light mb-16 leading-[1.1] tracking-tight">
              Ready to integrate our <br/>
              <span className="font-semibold text-black">Quartz Supply Chain?</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Link href="/contact" className="btn-primary !px-16 !py-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
                Request Technical Data
              </Link>
              <div className="w-12 h-px bg-[#E6E6E6] hidden sm:block"></div>
              <a href="https://wa.me/917981392465" className="btn-outline !px-12 !py-6 bg-white">
                WhatsApp Inquiry
              </a>
            </div>

            <p className="mt-16 text-[0.65rem] text-gray-400 font-bold uppercase tracking-[0.2em]">
              Verified Procurement Response within 24 Industrial Hours
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
