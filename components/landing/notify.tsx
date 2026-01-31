'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Image from 'next/image';
import { Footer } from './footer';

const images = [
  { src: '/images/notify-earrings.png', alt: 'Antique Gold Earrings' },
  { src: '/images/notify-bangles.png', alt: 'Antique Gold Bangles' },
  { src: '/images/notify-bracelet.png', alt: 'Antique Gold Bracelet' },
];

export function Notify() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-veda-charcoal text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-veda-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-veda-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Content Column */}
          <div className="lg:col-span-5 relative z-10">
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="block font-cinzel text-veda-gold tracking-[0.2em] text-xs sm:text-sm uppercase mb-2 sm:mb-3">
                  Be Part of History
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.1] text-veda-beige">
                  Be <span className="text-veda-gold ">The First</span> to know
                </h2>
              </div>

              <p className="font-montserrat text-white/70 text-lg font-light leading-relaxed max-w-md">
                Also there's a special heritage token for the exclusive club of first 100 customers.
              </p>

              <form className="space-y-6 pt-4 max-w-sm">
                <div className="space-y-1">
                  <Input
                    type="text"
                    placeholder="YOUR NAME"
                    className="border-0 border-b border-white/20 rounded-none px-0 py-4 bg-transparent text-veda-beige placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-veda-gold transition-colors font-montserrat tracking-wide h-auto text-base"
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="border-0 border-b border-white/20 rounded-none px-0 py-4 bg-transparent text-veda-beige placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-veda-gold transition-colors font-montserrat tracking-wide h-auto text-base"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    variant="ghost"
                    className="w-full bg-veda-gold hover:bg-veda-gold-dark text-veda-charcoal hover:text-white font-cinzel tracking-widest py-6 rounded-none text-base transition-all duration-500 ease-out border border-veda-gold"
                  >
                    NOTIFY ME
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-xl mx-auto lg:ml-auto overflow-hidden">
              {/* Image Container with Border Effect */}
              <div className="absolute inset-4 border border-veda-gold/30 z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-veda-charcoal via-transparent to-transparent z-10 opacity-60 pointer-events-none" />

              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Caption/Label */}
            <div className="absolute bottom-8 right-8 z-20 text-right hidden sm:block">
              <p className="font-cinzel text-veda-gold text-xs tracking-[0.3em]">CURATED COLLECTION</p>
              <p className="font-serif text-white/50 text-2xl italic">Vol. 01</p>
            </div>
          </div>

        </div>

        {/* Footer */}

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}

