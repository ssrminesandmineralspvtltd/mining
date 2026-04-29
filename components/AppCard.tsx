"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AppCardProps {
  title: string;
  image: string;
  description: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, image, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-[6px] border border-[#E6E6E6]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-[0.7rem] uppercase font-bold tracking-widest text-[#1A1A1A] pb-1 border-b border-black cursor-pointer hover:opacity-60 transition-opacity">
        Learn More
      </span>
    </motion.div>
  );
};

export default AppCard;
