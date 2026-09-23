import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_AREAS } from "@/data";
import { ROUTES, donateHref, pillarHref } from "@/lib/routes";

/** Server Component — first four focus areas as teaser cards. */
export function FeaturedCauses() {
  const featuredCauses = FOCUS_AREAS.slice(0, 4);

  return (
    <section className="py-20 dark:bg-[#061122] bg-[#f7f2e7] border-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
              Core Initiatives
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold dark:text-white text-slate-900">
              Transforming Lives at the Grassroots
            </h2>
          </div>
          <Link
            href={ROUTES.ourWork}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider dark:text-amber-300 dark:hover:text-white text-amber-800 hover:text-amber-950 transition-colors cursor-pointer border-none bg-transparent"
          >
            <span>View All 10 Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCauses.map((cause) => (
            <div
              key={cause.id}
              className="group relative rounded-2xl dark:bg-linear-to-b dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 bg-white hover:bg-amber-50/50 border border-transparent hover:border-amber-300/60 p-6 transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-blue-950/90 dark:text-amber-200 bg-amber-100 text-amber-900 border-none">
                    {cause.tag}
                  </span>
                  <span className="text-sm font-semibold dark:text-amber-300 text-amber-700">
                    {cause.stats}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold dark:text-white dark:group-hover:text-amber-200 text-slate-900 group-hover:text-amber-800 transition-colors">
                  {cause.title}
                </h3>

                <p className="text-sm dark:text-slate-300 text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {cause.shortDesc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-none flex items-center justify-between">
                <Link
                  href={pillarHref(cause.id)}
                  className="text-sm font-semibold dark:text-amber-300 dark:hover:text-white text-amber-800 hover:text-amber-950 flex items-center gap-1 transition-colors cursor-pointer border-none bg-transparent"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={donateHref(cause.id)}
                  className="text-sm px-2.5 py-1 rounded dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold transition-colors border border-transparent hover:border-amber-300/60 cursor-pointer"
                >
                  Support
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
