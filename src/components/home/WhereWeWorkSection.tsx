"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import IndiaMapData from "@svg-maps/india";
import { WHERE_WE_WORK } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

const {
  office,
  pin: mumbaiCoords,
  activeStateId,
  activeStateName,
} = WHERE_WE_WORK;

/** Client Component: the India map reacts to hover. Office details come from home.json. */
export function WhereWeWorkSection() {
  const { t } = useLanguage();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#fbf9f4] dark:bg-brand-deep border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      {/* Subtle brand ambient glow in the background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-maroon-crimson/5 dark:bg-brand-maroon-crimson/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* HEADER                                                                    */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#a47b1e] dark:text-amber-400">
            {t("OUR FOOTPRINT", "हमारा पदचिह्न")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t("Where We Work", "हम कहाँ काम करते हैं")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t(
              "Explore our active centers and key initiatives across different regions.",
              "विभिन्न क्षेत्रों में हमारे सक्रिय केंद्रों और प्रमुख पहलों का अन्वेषण करें।",
            )}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN 2-COLUMN GRID (INDIA MAP & OFFICE CARD)                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: INDIA VECTOR MAP - Styled in Brand Deep Navy & Royal Gold Accent */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <div className="relative w-full max-w-540px aspect-612/696 select-none">
              {/* SVG Map of India with States */}
              <svg
                viewBox={IndiaMapData.viewBox}
                className="w-full h-full drop-shadow-md transition-all duration-300"
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(10, 28, 56, 0.12))",
                }}
              >
                <g id="india-states">
                  {IndiaMapData.locations.map((loc) => {
                    const isMaharashtra = loc.id === activeStateId;
                    const isHovered = hoveredState === loc.name;

                    // Brand Colors:
                    // Base States: Brand Deep Navy/Slate Blue with crisp borders
                    // Active State (Maharashtra): Rich Royal Gold (#d4af37)
                    let fillColor = "#103264"; // Brand deep royal blue in light mode
                    let strokeColor = "rgba(255, 255, 255, 0.4)";
                    let strokeWidth = "0.75";

                    if (isMaharashtra) {
                      fillColor = "#d4af37"; // Brand Royal Gold
                      strokeColor = "#ffffff";
                      strokeWidth = "1.2";
                    } else if (isHovered) {
                      fillColor = "#1d4ed8"; // Bright blue on hover
                    }

                    return (
                      <path
                        key={loc.id}
                        id={loc.id}
                        name={loc.name}
                        d={loc.path}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        aria-label={`${loc.name}${isMaharashtra ? " (Operational Regional Center)" : ""
                          }`}
                        className={`transition-all duration-300 cursor-pointer ${isMaharashtra
                            ? "dark:fill-brand-gold fill-[#c59b27] hover:brightness-110"
                            : "dark:fill-[#0d2346] fill-[#133568] dark:hover:fill-[#1e457e] hover:fill-[#1a4484]"
                          }`}
                        onMouseEnter={() => setHoveredState(loc.name)}
                        onMouseLeave={() => setHoveredState(null)}
                      />
                    );
                  })}
                </g>

                {/* Pin Aura Glow Effect - Brand Gold & Crimson Radar */}
                <g
                  transform={`translate(${mumbaiCoords.x}, ${mumbaiCoords.y})`}
                >
                  {/* Outermost pulsing aura */}
                  <circle
                    r="40"
                    className="fill-rose-600/20 dark:fill-amber-400/20 animate-ping"
                    style={{ animationDuration: "2.5s" }}
                  />
                  {/* Stable brand gold & crimson halo */}
                  <circle
                    r="26"
                    className="fill-brand-gold/35 dark:fill-brand-gold/40"
                  />
                  <circle
                    r="15"
                    className="fill-brand-maroon-crimson/45 dark:fill-brand-maroon-crimson/50"
                  />
                </g>

                {/* Active Pinpoint Marker - Brand Royal Crimson with Gold Halo & White Dot */}
                <g
                  transform={`translate(${mumbaiCoords.x - 13}, ${mumbaiCoords.y - 30})`}
                  className="cursor-pointer group"
                >
                  {/* Pin Drop Shadow */}
                  <ellipse
                    cx="13"
                    cy="29"
                    rx="7"
                    ry="3"
                    className="fill-black/40"
                  />

                  {/* Pin Body - Imperial Crimson (#87101c) with Gold Stroke */}
                  <path
                    d="M13 0C5.82 0 0 5.82 0 13c0 9.2 13 18.5 13 18.5s13-9.3 13-18.5c0-7.18-5.82-13-13-13z"
                    className="fill-brand-maroon-crimson stroke-brand-gold stroke-[1.8] transition-transform duration-200 group-hover:scale-110 drop-shadow-md"
                    style={{ transformOrigin: "13px 30px" }}
                  />

                  {/* Inner Royal White Dot */}
                  <circle
                    cx="13"
                    cy="12"
                    r="4.2"
                    className="fill-white shadow-sm"
                  />

                  {/* Tiny Center Gold Spark */}
                  <circle cx="13" cy="12" r="1.8" className="fill-brand-gold" />
                </g>
              </svg>

              {/* State Tooltip Overlay (when hovering over states) */}
              {hoveredState && (
                <div className="absolute top-2 left-2 bg-slate-950/90 backdrop-blur-md text-amber-300 px-3.5 py-1.5 rounded-lg text-sm font-medium pointer-events-none shadow-xl border border-amber-500/20">
                  <span>{hoveredState}</span>
                  {hoveredState === activeStateName && (
                    <span className="ml-1.5 text-sm text-white/80 font-normal">
                      • Mumbai (Goregaon) Office
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: OFFICE INFORMATION CARD - Styled with Brand Navy & Gold */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-brand-navy rounded-3xl p-7 sm:p-9 shadow-xl dark:shadow-2xl border border-slate-200/80 dark:border-amber-400/20 space-y-6"
            >
              {/* Badge & Active Status (Brand Royal Gold / Crimson Theme) */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-amber-500/10 text-[#a47b1e] dark:text-amber-300 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-brand-maroon-crimson dark:bg-amber-400 animate-pulse" />
                  {t(office.badge, office.badgeHindi)}
                </span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {office.area}
                </span>
              </div>

              {/* Office Title */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {t(office.title, office.titleHindi)}
                </h3>
                <p className="text-sm text-[#a47b1e] dark:text-amber-300 font-semibold tracking-wide uppercase">
                  Janseva Pratishthan Foundation
                </p>
              </div>

              {/* Address with MapPin Icon */}
              <div className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-400/10 shrink-0 flex items-center justify-center text-amber-700 dark:text-amber-300 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm leading-relaxed">
                  <p className="font-medium text-slate-900 dark:text-white">
                    {office.addressLine1}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    {office.addressLine2}
                  </p>
                </div>
              </div>

              {/* Quick Contact & Timings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{office.hours}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>

              {/* Key Initiatives Supported Here */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {t("Key Initiatives Managed", "सक्रिय स्थानीय पहलें")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {office.initiatives.map((init) => (
                    <span
                      key={init}
                      className="text-sm px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                    >
                      {init}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-brand-navy dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-slate-950 font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>
                    {t("Get Directions", "दिशा-निर्देश प्राप्त करें")}
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <Link
                  href={ROUTES.contact}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium text-sm tracking-wide border border-slate-200 dark:border-white/10 transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t("Contact Office", "कार्यालय से संपर्क करें")}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
