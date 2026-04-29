"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  image: string;
  form: string;
  appearance: string;
  useCases: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, form, appearance, useCases }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white border border-[#E6E6E6] rounded-[8px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] group"
    >
      <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-[4px] bg-[#F8F9FA]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        
        <div className="space-y-3 mb-8">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-[0.7rem] uppercase font-bold tracking-wider text-gray-400">Form</span>
            <span className="text-sm font-medium">{form}</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span className="text-[0.7rem] uppercase font-bold tracking-wider text-gray-400">Appearance</span>
            <span className="text-sm font-medium">{appearance}</span>
          </div>
        </div>

        <div className="mb-8">
          <span className="text-[0.7rem] uppercase font-bold tracking-wider text-gray-400 block mb-3">Key Applications</span>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase, idx) => (
              <span key={idx} className="bg-[#F1F0EB] px-3 py-1 rounded-[2px] text-[0.7rem] font-semibold">
                {useCase}
              </span>
            ))}
          </div>
        </div>

        <Link href="/contact" className="btn-primary w-full text-center mt-auto">
          Enquire Now
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
