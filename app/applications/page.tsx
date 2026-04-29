"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AppCard from '@/components/AppCard';

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
              Our raw white quartz lumps serve as critical raw material inputs for various high-precision manufacturing industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          <AppCard 
            title="Glass Manufacturing"
            image="/images/glass.png"
            description="High-purity quartz is the primary source of SiO2 for glass melting. Our bright white lumps ensure optimal clarity for architectural, automotive, and container glass production where low iron content is vital."
          />
          <AppCard 
            title="Ceramic & Sanitaryware"
            image="/images/ceramic.png"
            description="In the ceramic sector, our quartz lumps provide the necessary structural strength and thermal stability. Used extensively in the production of high-end tiles, sanitaryware, and tableware."
          />
          <AppCard 
            title="Construction & Architecture"
            image="/images/construction.png"
            description="Our raw lumps are used as premium aggregates for architectural concrete, exposed aggregate finishes, and decorative landscaping where a pure white mineral appearance is required."
          />
          <AppCard 
            title="Engineered Stone & Industrial Minerals"
            image="/images/stone.png"
            description="The luxury quartz surface industry relies on consistent raw lumps for crushing and processing. Our material provides the aesthetic and physical foundation for high-performance engineered stone slabs."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] mx-auto px-[5%] text-center">
          <h2 className="text-3xl font-medium mb-8">Specific Industry Requirement?</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            If your application requires specific mineral characteristics, connect with our technical team to discuss bulk supply alignment.
          </p>
          <a href="/contact" className="btn-primary inline-block">Consult with Us</a>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
