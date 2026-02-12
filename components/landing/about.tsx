'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const treasures = [
  {
    id: '01',
    title: 'Temple Jewelry',
    description: 'Traditional gold designs inspired by divine architecture.',
    image: '/images/gold-necklace.png',
  },
  {
    id: '02',
    title: 'Oxidized Silver Jewelry',
    description: 'Rustic, tribal elegance with intricate silver craftsmanship.',
    image: '/images/oxidized-silver-earrings.png',
  },
  {
    id: '03',
    title: 'Fashion Jewelry',
    description: 'Chic, contemporary pieces designed for effortless daily elegance.',
    image: '/images/dailyware-bracelet.png',
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for up, 1 for down

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = latest < 0.33 ? 0 : latest < 0.66 ? 1 : 2;
    if (newIndex !== activeIndex) {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    }
  });

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? "100%" : "-100%",
      opacity: 0, // Fade out to avoid overlap clutter
    }),
  };

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-veda-beige">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">

          {/* Mobile Layout (< lg) */}
          <div className="flex h-full flex-col lg:hidden pt-20 pb-10">
            <h2 className="mb-8 text-center font-serif text-3xl text-veda-charcoal sm:text-4xl">
              OUR TREASURES
            </h2>
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-6"
                >
                  {/* Image */}
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={treasures[activeIndex].image}
                      alt={treasures[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-serif text-veda-charcoal">
                      {treasures[activeIndex].title}
                    </h3>
                    <p className="text-base font-light leading-relaxed text-veda-charcoal/80 max-w-md mx-auto">
                      {treasures[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Layout (>= lg) */}
          <div className="hidden lg:grid grid-cols-2 gap-24 items-center h-full">
            {/* Left: Image Area */}
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200 shadow-xl">
              {treasures.map((item, index) => (
                <motion.div
                  key={item.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>

            {/* Right: Content Area */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-16 font-serif text-6xl text-veda-charcoal">
                OUR TREASURES
              </h2>

              <div className="space-y-12">
                {treasures.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={clsx(
                      "border-b border-veda-charcoal/20 pb-12 cursor-pointer",
                      activeIndex === index ? "opacity-100" : "opacity-40"
                    )}
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                      x: activeIndex === index ? 20 : 0,
                      filter: activeIndex === index ? "blur(0px)" : "blur(1px)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => {
                      // Logic if needed
                    }}
                  >
                    <div className="flex items-start gap-8">
                      <span className={clsx(
                        "font-serif text-5xl transition-colors duration-500",
                        activeIndex === index ? "text-veda-gold-dark" : "text-veda-charcoal/20"
                      )}>
                        {item.id}
                      </span>
                      <div>
                        <h3 className={clsx(
                          "text-3xl font-serif mb-2 transition-colors duration-500",
                          activeIndex === index ? "text-veda-charcoal" : "text-veda-charcoal/40"
                        )}>
                          {item.title}
                        </h3>
                        <p className="pt-2 text-lg font-light leading-relaxed text-veda-charcoal/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
