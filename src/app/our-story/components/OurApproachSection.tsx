import { Workflow, CheckCircle } from "lucide-react";
import { Icon } from "@/lib/icons";
import { STORY_APPROACH } from "@/data/ourStory";

export function OurApproachSection() {
  return (
    <section className="space-y-10" id="our-approach">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-amber-400/10 bg-amber-100 text-amber-900 dark:text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Workflow className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Execution Blueprint</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">
          Our Approach: A 4-Stage Lifecycle of Lasting Change
        </h2>
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
          From doorstep diagnostic audits to continuous multi-year mentorship, our
          methodology ensures that resources transform into authentic, audited human breakthroughs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {STORY_APPROACH.map((step,index) => (
          <div
            key={index}
            className="relative rounded-3xl dark:bg-linear-to-br dark:from-[#0b1f3d] dark:to-[#170810] bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Top numbering and icon */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                {step.phase}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold dark:text-white text-slate-900 leading-tight">
                {step.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                {step.summary}
              </p>
            </div>

            {/* Activities */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">
                Action Items:
              </p>
              <div className="space-y-1.5">
                {step.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs dark:text-slate-300 text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
