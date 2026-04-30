"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#F1F0EB]/30 py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[0.7rem] uppercase font-bold tracking-[0.3em] text-gray-400 mb-4 block">Our Company</span>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">About SSR Mining <br/>& Minerals</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              SSR Mining & Minerals Private Limited is a dedicated B2B supplier specializing in the sourcing and supply of premium raw white Quartz, Mica, and Feldspar. We serve as a reliable partner to industrial manufacturers who demand consistent mineral purity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <Image 
              src="/images/quarry_mining.png" 
              alt="Mining Excellence" 
              fill 
              className="object-cover rounded-[8px]"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-8">Industrial Excellence</h2>
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">Material Integrity</h4>
                <p className="text-gray-500 leading-relaxed">
                  We prioritize the natural purity of our minerals. Our selection process ensures that only the brightest white Quartz, Mica, and Feldspar are sourced for our industrial partners.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">Supply Reliability</h4>
                <p className="text-gray-500 leading-relaxed">
                  Understanding the scale of B2B operations, we maintain robust supply chains to ensure your manufacturing lines never face mineral shortages.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">B2B Partnership</h4>
                <p className="text-gray-500 leading-relaxed">
                  We believe in direct, transparent communication. Technical specifications and capacity details are shared openly with verified procurement teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
