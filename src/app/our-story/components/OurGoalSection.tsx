import { Target, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { ROUTES } from "@/lib/routes";
import { STORY_GOALS } from "@/data/ourStory";

export function OurGoalSection() {
  return (
    <section className="space-y-10" id="our-goals">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-amber-400/10 bg-amber-100 text-amber-900 dark:text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-xs">
          <Target className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Strategic Milestones</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">
          Our Goals: Defined Targets for Measurable Impact
        </h2>
        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
          We don&apos;t just harbor good intentions—we set ambitious, accountable targets
          to pull marginalized families out of generational deprivation into sustainable dignity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {STORY_GOALS.map((goal) => (
          <div
            key={goal.id}
            className="group relative rounded-3xl dark:bg-linear-to-br dark:from-[#0c2242]/90 dark:via-[#150a18]/90 dark:to-[#0c2242]/90 bg-white border border-slate-200/90 dark:border-amber-400/20 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-amber-400/50 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header row with Number & Target Badge */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl dark:bg-amber-400/15 bg-amber-50 dark:text-amber-300 text-amber-800 border border-amber-300/40 flex items-center justify-center font-display font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                  <Icon name={goal.icon} className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-blue-950/80 dark:text-amber-300 bg-amber-100/80 text-amber-900 border border-amber-300/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Target: {goal.target}
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300/90">
                  {goal.tagline}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-slate-900 mt-1">
                  {goal.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                {goal.description}
              </p>

              {/* Key Initiatives */}
              <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider dark:text-slate-400 text-slate-500">
                  Key Interventions:
                </p>
                <div className="space-y-1.5">
                  {goal.initiatives.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm dark:text-slate-300 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-medium text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                {goal.highlightMetric}
              </span>
              <Link
                href={ROUTES.donate}
                className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-200 transition-colors"
              >
                Support this goal <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
