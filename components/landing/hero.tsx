"use client";

import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';


export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            y
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

        {/* Logo Area */}
        <div className="mb-0 md:mb-0">
          <Image
            src="/images/logo.png"
            alt="Veda Antiques Logo"
            width={192}
            height={192}
            className="w-32 md:w-48 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
            priority
            unoptimized
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex flex-col w-fit mx-auto">
            <h1 className="text-white leading-tight tracking-wider flex gap-4 items-center text-center whitespace-nowrap">
              <span className="font-cinzel text-4xl md:text-6xl lg:text-7xl">VEDA</span>
              <span className="font-cinzel text-veda-gold text-xl md:text-3xl lg:text-4xl mt-2 md:mt-4">
                Antiques
              </span>
            </h1>
          </div>

          <h2 className="mb-10 font-montserrat text-xl md:text-3xl text-gray-200 font-light tracking-wide">
            The Soul of Tradition
          </h2>

          <p className="flex justify-center w-full mb-10 text-sm md:text-lg uppercase text-veda-gold/80 font-montserrat tracking-[0.5em]">
            {"COMING SOON".split("").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </p>

          <p className="mb-10 max-w-xl mx-auto text-base text-white/70 md:text-lg font-light leading-relaxed font-montserrat">
            Veda Antiques is preparing an exclusive collection of heritage artifacts.
            Be the first to know when we unveil these timeless treasures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center cursor-pointer">
            <div className="animate-pulse-scale">
              <a
                href="https://www.instagram.com/veda.antiques?igsh=M2R6d2Rjb2FqeG82"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
                className="group relative flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-3 transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Instagram className="h-8 w-8 text-white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
