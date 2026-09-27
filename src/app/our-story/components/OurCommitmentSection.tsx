import { ShieldCheck, ArrowRight, FileCheck2 } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { ROUTES } from "@/lib/routes";
import { STORY_COMMITMENTS } from "@/data/ourStory";

export function OurCommitmentSection() {
  return (
    <section className="space-y-10" id="our-commitments">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-emerald-400/10 bg-emerald-50 text-emerald-800 dark:text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Uncompromising Integrity</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">
          Our Commitment: Unwavering Standards of Trust
        </h2>
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
          Public trust is our most treasured asset. Every pledge we make is backed by
          statutory compliance, open auditing, and uncompromising ethical conduct.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {STORY_COMMITMENTS.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl dark:bg-linear-to-br dark:from-[#0c203b] dark:via-[#190915] dark:to-[#0c203b] bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header with Stat and Badge */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl dark:bg-emerald-400/15 bg-emerald-50 dark:text-emerald-300 text-emerald-800 border border-emerald-400/30 flex items-center justify-center shadow-xs">
                    <Icon name={item.icon} className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                      {item.stat}
                    </span>
                    <span className="block text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold dark:bg-emerald-950/80 dark:text-emerald-300 bg-emerald-100 text-emerald-900 border border-emerald-300/40 shrink-0">
                  {item.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                <FileCheck2 className="w-4 h-4" />
                Statutorily Guaranteed
              </span>
              <Link
                href={ROUTES.registration}
                className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition-colors"
              >
                View Audits & Certifications <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
