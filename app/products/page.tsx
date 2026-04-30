"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductsPage = () => {
  const products = [
    {
      id: "quartz",
      title: "Raw White Quartz",
      description: "Industrial grade raw white quartz lumps, sourced and supplied for large-scale manufacturing requirements.",
      image: "/images/real image 7.jpeg",
      specs: [
        { label: "Material Range", val: "High-Purity Quartz" },
        { label: "Appearance", val: "Bright White / Translucent" },
        { label: "Sizing Details", val: "Available on Inquiry" },
        { label: "Supply Capacity", val: "Industrial Bulk Supply" }
      ],
      note: "As a primary quartz supplier, we provide consistent quality raw materials. Full chemical analysis and technical data sheets are shared directly with procurement teams upon formal inquiry."
    },
    {
      id: "mica",
      title: "Industrial Mica",
      description: "Premium industrial-grade mica minerals extracted directly from our quarry for electrical and thermal insulation applications.",
      image: "/images/mica.png",
      specs: [
        { label: "Material Range", val: "High-Grade Mica" },
        { label: "Properties", val: "Excellent Thermal & Electrical Insulation" },
        { label: "Sizing Details", val: "Custom Flakes / Powder" },
        { label: "Supply Capacity", val: "Large-Scale Procurement" }
      ],
      note: "Our mica is processed to ensure minimal impurities, making it ideal for specialized industrial formulations and high-performance manufacturing."
    },
    {
      id: "feldspar",
      title: "Quality Feldspar",
      description: "High-quality raw feldspar rocks sourced for ceramic, glass, and industrial manufacturing requirements.",
      image: "/images/Feldspar.jpg",
      specs: [
        { label: "Material Range", val: "Potash / Soda Feldspar" },
        { label: "Appearance", val: "White to Off-White" },
        { label: "Sizing Details", val: "Lumps / Crushed" },
        { label: "Supply Capacity", val: "Bulk Quarry-Direct" }
      ],
      note: "Extracted from verified quarry veins, our feldspar provides the chemical consistency required for large-scale industrial ceramic and glass production."
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">Industrial Mineral Range</h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Quarry-direct sourcing of premium raw materials for industrial manufacturing chains worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => (
        <section key={product.id} className={`py-24 ${index % 2 === 1 ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
          <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`lg:col-span-6 relative aspect-square bg-[#F8F9FA] rounded-[8px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <Image 
                src={product.image} 
                alt={`${product.title} Detail`} 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`lg:col-span-6 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>
              <p className="text-gray-500 mb-10 leading-relaxed max-w-xl">{product.description}</p>
              
              <div className="space-y-6 mb-12">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#E6E6E6] pb-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-400">{spec.label}</span>
                    <span className="text-lg font-medium">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#F1F0EB] p-8 rounded-[6px] mb-12">
                <h4 className="font-bold text-sm mb-4 uppercase tracking-widest">Industrial Note</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.note}
                </p>
              </div>

              <Link href="/contact" className="btn-primary text-center py-5 text-base hover:bg-black transition-colors">
                Request {product.title} Data Sheet
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsPage;
