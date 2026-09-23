import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { PillarsGrid } from "@/components/our-work/PillarsGrid";
import { SWABHIMAN_STATS } from "@/data";
import { donateHref, pillarHref } from "@/lib/routes";

/** Server Component for /our-work. Only the filterable grid is a client island. */
export function OurWorkView() {
  return (
    <div
      id="our-work-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title & Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-linear-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Our 10 Core Focus Areas</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Nurturing Sustainable Impact Across Every Sector
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            From digital classrooms and laptop distribution to remote village
            upliftment and stray rescue, our 10 pillars embody our commitment to
            holistic social transformation.
          </p>
        </div>

        {/* Flagship Project Swabhiman Highlight Banner */}
        <div className="relative rounded-3xl overflow-hidden dark:bg-linear-to-r dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-linear-to-r from-amber-100/90 via-amber-50 to-amber-100/90 border border-transparent hover:border-amber-300/60 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-sm font-bold uppercase tracking-[0.2em] bg-amber-400 text-slate-950 px-2.5 py-1 rounded shadow">
                Flagship Initiative
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
                Project Swabhiman: Restoring Dignity, Fueling Independence
              </h2>
              <p className="text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                Project Swabhiman is our dedicated holistic women’s welfare
                movement. Built upon four critical pillars—Nutrition, Health &
                Hygiene, Vocational Micro-Enterprise, and Legal
                Autonomy—Swabhiman transforms vulnerable women into community
                leaders and financially self-sufficient breadwinners.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-sm">
                {SWABHIMAN_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-2.5 rounded-lg dark:bg-[#08182e]/80 bg-white border border-transparent hover:border-amber-300/60 shadow-sm"
                  >
                    <span className="font-bold dark:text-amber-200 text-amber-800 block text-base">
                      {stat.value}
                    </span>
                    <span className="text-sm dark:text-slate-300 text-slate-600">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                href={pillarHref("women-empowerment")}
                className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Full Swabhiman Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={donateHref("women-empowerment")}
                className="w-full py-3 rounded-xl font-semibold text-sm tracking-wider dark:text-amber-200 dark:bg-[#0c2242] dark:hover:bg-[#132e57] text-amber-900 bg-amber-100 hover:bg-amber-200 border border-transparent hover:border-amber-300/60 shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-amber-500" />
                <span>Sponsor Swabhiman Kit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Category filters + cards (client island) */}
        <PillarsGrid />
      </div>
    </div>
  );
}
