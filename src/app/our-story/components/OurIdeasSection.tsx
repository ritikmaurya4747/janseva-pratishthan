import { STORY_IDEAS } from "@/data/ourStory";
import { Lightbulb, Sparkles } from "lucide-react";

export function OurIdeasSection() {
  return (
    <section className="space-y-10" id="our-ideas">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-amber-400/10 bg-amber-100 text-amber-900 dark:text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Intellectual Foundations</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">
          Our Ideas: Radical Compassion Rooted in Reality
        </h2>
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
          Meaningful change starts with disruptive, ethical thinking. These core principles
          re-imagine grassroots philanthropy to discard dependency and elevate human agency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORY_IDEAS.map((idea) => (
          <div
            key={idea.id}
            className="group relative rounded-3xl dark:bg-linear-to-b dark:from-[#0d1e38] dark:to-[#081224] bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider dark:bg-amber-950/80 dark:text-amber-200 bg-amber-100 text-amber-900 border border-amber-400/30 mb-2">
                  {idea.tag}
                </span>
                <h3 className="font-display text-xl font-bold dark:text-white text-slate-900 leading-snug">
                  {idea.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                {idea.concept}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Key Tenet:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {idea.keyPillars.map((pillar, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-[11px] px-2 py-0.5 rounded-md dark:bg-slate-800/90 dark:text-slate-300 bg-slate-100 text-slate-700 font-medium"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
