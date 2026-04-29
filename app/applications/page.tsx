"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sectors = [
  {
    num: "01",
    title: "Semiconductors",
    desc: "Quartz raw material for high-purity silicon processing and advanced electronics supply chains.",
    use: "Silicon Feed Material",
    note: "Raw quartz input — further processing required for semiconductor-grade refinement."
  },
  {
    num: "02",
    title: "Solar",
    desc: "Quartz raw material for solar glass and silicon-based energy manufacturing applications.",
    use: "Solar Grade Input",
    note: "Raw mineral supply for downstream solar manufacturing processes."
  },
  {
    num: "03",
    title: "Glass Manufacturing",
    desc: "Raw quartz material supporting clear, high-performance industrial glass production.",
    use: "Material Input",
    note: "SiO2 source for glass melting — architectural, automotive, and container applications."
  },
  {
    num: "04",
    title: "Ceramic Industry",
    desc: "Quartz supply for ceramic strength, structure, and industrial-grade material formulations.",
    use: "Structural Input",
    note: "Used in tiles, sanitaryware, and industrial ceramic formulations."
  },
  {
    num: "05",
    title: "Construction",
    desc: "Quartz mineral input for aggregates, engineered materials, and mineral-based construction applications.",
    use: "Aggregate Supply",
    note: "Premium aggregates for architectural concrete and mineral-based finishes."
  }
];

const ApplicationsPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-white py-24 md:py-32 border-b border-[#E6E6E6]">
        <div className="max-w-[1440px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em] text-gray-400 mb-4 block">Sector Expertise</span>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Industrial Applications</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Quarry-origin raw white quartz supply supporting semiconductors, solar, glass, ceramic, construction, and other industrial applications. Specifications and bulk supply details shared on request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid — 5 Sectors, 3+2 Layout */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-[#E6E6E6] border border-[#E6E6E6]">
            {sectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} bg-white group relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-[0.03] technical-grid pointer-events-none"></div>
                <div className="p-10 lg:p-12 flex flex-col h-full border-l-2 border-transparent group-hover:border-black transition-all duration-500 min-h-[300px]">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400">Sector {sector.num}</span>
                    <div className="w-8 h-px bg-black/10"></div>
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-[#111111]">{sector.title}</h2>
                  <p className="text-sm text-[#111111] font-medium leading-relaxed mb-6 flex-1">{sector.desc}</p>
                  <div className="pt-5 border-t border-black/5">
                    <span className="text-[0.5rem] font-black text-gray-500 uppercase tracking-widest block mb-1">Primary Use</span>
                    <span className="text-[0.65rem] font-bold uppercase text-black">{sector.use}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA] border-t border-[#E6E6E6]">
        <div className="max-w-[1440px] mx-auto px-[5%] text-center">
          <h2 className="text-3xl font-medium mb-8">Specific Industry Requirement?</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Connect with our quarry supply team to discuss bulk material requirements, specifications, and export logistics.
          </p>
          <Link href="/contact" className="btn-primary inline-block">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
