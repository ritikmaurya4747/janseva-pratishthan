"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FOCUS_AREAS, PILLAR_CATEGORIES } from "@/data";
import { Icon } from "@/lib/icons";
import { pillarHref } from "@/lib/routes";

/** Client island: category filter state for the /our-work grid. Cards are real <Link>s. */
export function PillarsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filteredCauses =
    activeCategory === "all"
      ? FOCUS_AREAS
      : FOCUS_AREAS.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {PILLAR_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer border-none shadow-sm ${
              activeCategory === cat.id
                ? "bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 text-slate-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                : "dark:bg-[#0c2242]/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-[#0c2242] bg-white text-slate-700 hover:text-amber-900 hover:bg-amber-50 border border-slate-200/70"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cause Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCauses.map((cause) => {
          return (
            <Link
              key={cause.id}
              id={`cause-card-${cause.id}`}
              href={pillarHref(cause.id)}
              className="group rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border border-slate-200/80 hover:border-amber-300/60 shadow-md cursor-pointer dark:bg-linear-to-b dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 dark:hover:from-[#13305a] dark:hover:to-[#280c16] bg-white hover:bg-amber-50/40 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow"
                    style={{
                      backgroundColor: `${cause.accentColor}25`,
                      color: cause.accentColor,
                    }}
                  >
                    <Icon name={cause.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-blue-950 dark:text-amber-200 bg-amber-100 text-amber-900 border-none shadow-sm">
                    {cause.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold dark:text-white dark:group-hover:text-amber-200 text-slate-900 group-hover:text-amber-800 transition-colors">
                  {cause.title}
                </h3>
                {cause.hindiTitle && (
                  <p className="text-sm dark:text-amber-300 text-amber-700 font-medium mt-0.5">
                    {cause.hindiTitle}
                  </p>
                )}

                <p className="text-sm dark:text-slate-300 text-slate-600 mt-3 leading-relaxed">
                  {cause.shortDesc}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 pt-4 border-none space-y-1.5">
                  <span className="text-sm font-bold uppercase tracking-wider dark:text-amber-200 text-amber-800 block">
                    Active Initiatives:
                  </span>
                  {cause.initiatives.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-1.5 text-sm dark:text-slate-300 text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-none flex items-center justify-between">
                <span className="text-sm font-semibold dark:text-amber-200 text-amber-800">
                  {cause.stats}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold dark:text-amber-300 dark:group-hover:underline text-amber-800 flex items-center gap-1">
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
