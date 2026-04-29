"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductsPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#F8F9FA] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em] text-gray-400 mb-4 block">Product Catalog</span>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">White Quartz Lumps</h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Industrial grade raw white quartz lumps, sourced and supplied for large-scale manufacturing requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product Detail */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative aspect-square bg-[#F8F9FA] rounded-[8px] overflow-hidden"
          >
            <Image 
              src="/images/lumps.png" 
              alt="White Quartz Lumps Detail" 
              fill 
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-semibold mb-8">Core Specifications</h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-center border-b border-[#E6E6E6] pb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Material Form</span>
                <span className="text-lg font-medium">Raw Quartz Lumps</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E6E6E6] pb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Appearance</span>
                <span className="text-lg font-medium">Bright White / Translucent</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E6E6E6] pb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Sizing Details</span>
                <span className="text-lg font-medium">Available on Inquiry</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E6E6E6] pb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Supply Capacity</span>
                <span className="text-lg font-medium">Industrial Bulk Supply</span>
              </div>
            </div>

            <div className="bg-[#F1F0EB] p-8 rounded-[6px] mb-12">
              <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Industrial Note</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                As a primary mineral supplier, we provide consistent quality raw materials. Full chemical analysis and technical data sheets are shared directly with procurement teams upon formal inquiry to ensure exact material alignment.
              </p>
            </div>

            <Link href="/contact" className="btn-primary text-center py-5 text-base">
              Request Technical Data Sheet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
