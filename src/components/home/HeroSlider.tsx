"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HERO_SLIDES } from "@/data";
import { ROUTES, pillarHref } from "@/lib/routes";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length),
    [],
  );

  // Auto-play every 6.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 6500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="main-hero-slider"
      className="relative w-full h-[600px] sm:h-[660px] md:h-[720px] lg:h-[780px] overflow-hidden select-none bg-[#080e18]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Foundation Highlights Slider"
    >
      {/* Stacked crossfade background images (all mounted → zero flicker) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#080e18]">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
              style={{ willChange: "opacity" }}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? undefined : "eager"}
                className={`object-cover object-center brightness-[1.05] contrast-[1.02] transition-transform duration-[7500ms] ease-out ${
                  isActive ? "scale-100" : "scale-105"
                }`}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            </div>
          );
        })}

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center max-w-3xl space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2">
              <span className="font-bold tracking-[0.22em] text-sm uppercase text-amber-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                {currentSlide.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-semibold leading-[1.14] tracking-tight max-w-3xl text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              {currentSlide.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-slate-100 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {currentSlide.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-4 sm:pt-6">
              <Link
                id="hero-slider-story-btn"
                href={
                  currentSlide.causeId
                    ? pillarHref(currentSlide.causeId)
                    : ROUTES.ourWork
                }
                className="px-6 sm:px-7 py-3 rounded-lg font-bold text-sm tracking-wide text-white bg-[#87101c] hover:bg-[#a31422] active:scale-95 border border-[#d4af37]/30 hover:border-[#facc15]/60 shadow-[0_4px_18px_rgba(135,16,28,0.5)] transition-all duration-200 cursor-pointer"
              >
                {currentSlide.secondaryBtnText}
              </Link>

              <Link
                id="hero-slider-donate-btn"
                href={ROUTES.donate}
                className="px-6 sm:px-7 py-3 rounded-lg font-bold text-sm tracking-wide text-stone-950 bg-[#d4af37] hover:bg-[#e2ad3b] active:scale-95 border border-transparent hover:border-[#facc15] shadow-[0_4px_20px_rgba(212,175,55,0.55)] transition-all duration-200 cursor-pointer"
              >
                {currentSlide.primaryBtnText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-2.5">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer border-none p-0 ${
                isActive
                  ? "w-8 h-2.5 bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.85)] border border-[#facc15]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              title={`Go to slide ${index + 1}: ${slide.title}`}
              aria-label={`Slide ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
