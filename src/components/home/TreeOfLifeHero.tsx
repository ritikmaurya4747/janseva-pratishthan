import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { Reveal } from "@/components/ui/Reveal";
import { TreeOfLife } from "./TreeOfLife";
import { FOUNDATION_INFO, OFFICIAL_BANNER_FIELDS } from "@/data";
import { ROUTES, pillarHref } from "@/lib/routes";

/**
 * Server Component: "Small Steps, Big Impact" hero with the Tree of Life.
 * Interactive parts (<TreeOfLife>, <Reveal>) are client islands inside it.
 */
export function TreeOfLifeHero() {
  return (
    <section
      id="tree-of-life-section"
      className="relative pt-12 sm:pt-16 pb-16 lg:pb-24 overflow-hidden border-b border-transparent dark:border-transparent hover:border-amber-300/60"
    >
      {/* Background Gradients: Royal Navy Blue in Dark, Warm Pearl & Amber in Light */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-[#061224] dark:via-[#0f2142] dark:to-[#1c060d] bg-gradient-to-b from-[#fbf9f4] via-[#f7f2e7] to-[#f3ecdc] -z-20 transition-colors duration-300" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] dark:bg-blue-600/15 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] dark:bg-rose-900/20 bg-rose-400/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] dark:bg-amber-500/10 bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Constellation Grid Dots on Top Right */}
      <div className="absolute top-8 right-8 sm:right-16 pointer-events-none opacity-40">
        <div className="grid grid-cols-6 gap-3 sm:gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full dark:bg-amber-200/60 bg-amber-600/40"
              style={{ opacity: (i % 5) * 0.2 + 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Metallic Silver Foliage Sprigs on Left Margin */}
      <div className="absolute top-12 left-0 pointer-events-none opacity-30 sm:opacity-50 select-none">
        <svg width="120" height="220" viewBox="0 0 120 220" fill="none">
          <path
            d="M-20,180 Q30,120 70,60 Q100,10 110,-10"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Silver leaf pairs */}
          <path
            d="M40,110 C55,95 70,95 65,115 C55,125 45,120 40,110 Z"
            fill="#e2e8f0"
          />
          <path
            d="M30,125 C15,115 15,100 30,105 C40,110 38,120 30,125 Z"
            fill="#94a3b8"
          />
          <path
            d="M60,75 C75,60 90,60 85,80 C75,90 65,85 60,75 Z"
            fill="#e2e8f0"
          />
          <path
            d="M50,90 C35,80 35,65 50,70 C60,75 58,85 50,90 Z"
            fill="#94a3b8"
          />
          <path
            d="M85,35 C100,20 115,20 110,40 C100,50 90,45 85,35 Z"
            fill="#e2e8f0"
          />
        </svg>
      </div>

      {/* Decorative Bronze/Gold Leaves on Bottom Right */}
      <div className="absolute bottom-4 right-0 pointer-events-none opacity-40 sm:opacity-60 select-none">
        <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
          <path
            d="M160,160 Q110,120 80,70 Q60,30 50,0"
            stroke="#d4af37"
            strokeWidth="1.5"
          />
          <path
            d="M90,95 C110,85 120,70 105,65 C90,65 80,80 90,95 Z"
            fill="#b45309"
            opacity="0.6"
          />
          <path
            d="M75,110 C60,100 50,85 65,80 C80,80 85,95 75,110 Z"
            fill="#f59e0b"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Mission Copy */}
          <Reveal
            onMount
            x={-30}
            y={0}
            duration={0.8}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Trust Badge & Official Crest Emblem Indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-gradient-to-r dark:from-blue-950/70 dark:to-[#2c0812]/70 dark:text-amber-200 bg-amber-100/90 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold tracking-wide shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 dark:text-amber-300 text-amber-700" />
                <span>Registered Public Charitable Trust • 80G Tax Exempt</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full dark:bg-[#18050b]/80 dark:text-amber-300 bg-rose-50 text-rose-900 border border-transparent hover:border-rose-300/60 text-sm font-medium shadow-sm">
                <FoundationLogo size="xs" showLabel={false} />
                <span>Official Emblem</span>
              </div>
            </div>

            {/* Main Headline styled like the image */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.08] tracking-tight dark:text-[#fdfcf7] text-slate-900">
                Small Steps,
                <br />
                <span className="italic font-normal dark:text-amber-100/95 text-amber-700 dark:drop-shadow-[0_2px_20px_rgba(212,175,55,0.3)]">
                  Big Impact.
                </span>
              </h1>
              {/* Refined Gold Underline Accent */}
              <div className="w-28 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-200 to-transparent rounded-full mt-3" />
            </div>

            {/* Subtitle text */}
            <p className="text-base sm:text-lg dark:text-slate-300/90 text-slate-700 leading-relaxed font-normal max-w-xl">
              {FOUNDATION_INFO.missionStatement}
            </p>

            {/* Core Mantra Quote Pill in Royal Navy & Maroon */}
            <div className="p-4 rounded-xl dark:bg-gradient-to-r dark:from-[#0c2242] dark:via-[#1c0811] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 shadow-md max-w-xl">
              <p className="text-sm italic dark:text-amber-100/95 text-slate-800 font-editorial">
                "{FOUNDATION_INFO.coreBelief}"
              </p>
              <p className="text-sm dark:text-amber-300 text-amber-800 uppercase tracking-widest mt-1 font-semibold">
                — Core Principle, Janseva Pratishthan Foundation
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                id="hero-explore-work-btn"
                href={ROUTES.ourWork}
                className="px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_25px_rgba(212,175,55,0.4)] border-none transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore 10 Focus Areas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                id="hero-donate-btn"
                href={ROUTES.donate}
                className="px-5 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider dark:text-amber-200 dark:bg-gradient-to-r dark:from-[#0c213f] dark:to-[#250810] dark:hover:from-[#132d54] dark:hover:to-[#330b16] text-amber-900 bg-amber-100 hover:bg-amber-200 border border-transparent hover:border-amber-300/60 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-amber-400/40 text-amber-600 dark:text-amber-300" />
                <span>Donate / 80G Relief</span>
              </Link>

              <Link
                id="hero-join-btn"
                href={ROUTES.joinUs}
                className="px-4 py-3.5 rounded-xl font-semibold text-sm tracking-wider dark:text-slate-300 dark:hover:text-amber-200 text-slate-700 hover:text-amber-800 transition-colors cursor-pointer"
              >
                Join as Volunteer →
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-none max-w-lg dark:text-slate-400 text-slate-600 text-sm">
              {FOUNDATION_INFO.trustHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: The Sacred Tree of Life (as shown in image) */}
          <Reveal
            onMount
            y={0}
            scale={0.95}
            duration={1}
            delay={0.2}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <TreeOfLife />
          </Reveal>
        </div>

        {/* Official Core Focus Area Banner (Exact Replicant of Foundation Coat-of-Arms Banner) */}
        <Reveal
          onMount
          duration={0.6}
          delay={0.3}
          className="mt-12 rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.25)] border-none"
        >
          <div className="flex flex-col lg:flex-row items-stretch bg-gradient-to-r from-[#cfa139] via-[#bf8e2a] to-[#0c2652]">
            {/* Left Gold Section with Crest Logo */}
            <div className="flex items-center gap-4 px-6 py-4 bg-[#c59426] shrink-0 border-none">
              <FoundationLogo size="md" showLabel={false} />
              <div className="text-stone-950 font-display">
                <span className="text-sm uppercase tracking-widest font-bold block text-stone-900/80">
                  Registered Trust
                </span>
                <span className="text-base font-extrabold tracking-tight">
                  Janseva Pratishthan
                </span>
              </div>
            </div>

            {/* Right Royal Blue Section with Foundation Title & 6 Official Focus Titles */}
            <div className="flex-1 px-6 py-4 bg-[#0c2652] flex flex-col sm:flex-row items-center justify-between gap-4 border-none text-white">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white drop-shadow-md">
                  Janseva Pratishthan Foundation
                </h3>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-sm sm:text-[0.78rem] font-bold tracking-wider text-amber-200 mt-1">
                  {OFFICIAL_BANNER_FIELDS.map((field, index) => (
                    <Fragment key={field.id}>
                      {index > 0 && (
                        <span className="text-amber-400/60 font-normal">|</span>
                      )}
                      <Link
                        href={pillarHref(field.id)}
                        className="hover:text-white transition-colors cursor-pointer border-none bg-transparent"
                      >
                        {field.label}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>

              <Link
                href={ROUTES.ourWork}
                className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 hover:from-amber-200 hover:to-yellow-200 shadow-md border-none transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
