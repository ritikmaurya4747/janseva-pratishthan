"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { MedallionEmblem } from "./MedallionEmblem";
import { PILLARS_SLIDER } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { pillarHref } from "@/lib/routes";

const MotionLink = motion.create(Link);

// Two copies per track + a duplicated track = seamless infinite marquee.
const TRACK = [...PILLARS_SLIDER, ...PILLARS_SLIDER];

export function PillarsIconSlider() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const renderTrack = (isDuplicate: boolean) => (
    <div
      className="flex shrink-0 gap-6 sm:gap-8 md:gap-10 pr-6 sm:pr-8 md:pr-10"
      aria-hidden={isDuplicate || undefined}
    >
      {TRACK.map((pillar, index) => (
        <MotionLink
          key={`${pillar.id}-${isDuplicate ? "dup" : "orig"}-${index}`}
          href={pillarHref(pillar.id)}
          tabIndex={
            isDuplicate || index >= PILLARS_SLIDER.length ? -1 : undefined
          }
          whileHover={{ y: -4 }}
          className="shrink-0 flex flex-col items-center text-center cursor-pointer group w-29 sm:w-32.5"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
            <div className="absolute inset-0 rounded-full border-2 border-[#c59426] dark:border-amber-300 shadow-[0_2px_10px_rgba(197,148,38,0.18)] dark:shadow-[0_2px_12px_rgba(251,191,36,0.2)] group-hover:shadow-[0_6px_20px_rgba(197,148,38,0.35)] dark:group-hover:shadow-[0_6px_24px_rgba(251,191,36,0.35)] transition-all duration-300" />
            <div className="absolute inset-[3.5px] sm:inset-[4.5px] rounded-full border border-[#c59426]/70 dark:border-amber-400/70 transition-colors duration-300" />
            <div className="absolute inset-1.5 sm:inset-1.75 rounded-full bg-[#fdfaf5] dark:bg-[#0a1527] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-[#f6efe1] dark:group-hover:bg-[#0f1f38]">
              <div className="absolute inset-0 bg-radial from-amber-200/25 via-transparent to-transparent pointer-events-none" />
              <MedallionEmblem iconType={pillar.iconType} />
            </div>
          </div>

          <h4 className="mt-3 text-sm font-semibold tracking-tight text-stone-800 dark:text-amber-100 group-hover:text-[#911d33] dark:group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug px-1">
            {t(pillar.title, pillar.hindiTitle)}
          </h4>
        </MotionLink>
      ))}
    </div>
  );

  return (
    <section
      id="pillars-icon-slider"
      className="relative z-10 w-full py-7 sm:py-9 bg-[#fbf9f4] dark:bg-brand-deep border-y border-black/5 dark:border-white/5 select-none transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Impact Pillars Carousel"
    >
      <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />

      <div className="relative w-full mx-auto pt-2 pb-4">
        {/* keyframes live in globals.css (.animate-marquee-track) */}
        <div
          className="animate-marquee-track"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {renderTrack(false)}
          {renderTrack(true)}
        </div>
      </div>
    </section>
  );
}
