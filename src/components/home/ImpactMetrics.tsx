import { FOUNDATION_INFO } from "@/data";

/** Server Component — impact counters from site.json → metrics. */
export function ImpactMetrics() {
  return (
    <section className="relative py-10 dark:bg-linear-to-r dark:from-[#050e1c] dark:via-[#1a060d] dark:to-[#050e1c] bg-[#f2ebd9] border-y dark:border-transparent border-transparent hover:border-amber-300/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-sm:gap-3 text-center">
          {FOUNDATION_INFO.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 max-sm:p-4 rounded-2xl dark:bg-linear-to-b dark:from-[#0c2242]/80 dark:to-[#1f070e]/80 bg-white border border-transparent hover:border-amber-300/60 shadow-md backdrop-blur-sm transition-all group"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold dark:text-transparent dark:bg-clip-text dark:bg-linear-to-r dark:from-amber-200 dark:via-yellow-100 dark:to-amber-400 text-amber-700 group-hover:scale-105 transition-transform">
                {m.value}
              </div>
              <div className="text-sm font-semibold dark:text-amber-100/95 text-slate-900 mt-1 uppercase tracking-wide">
                {m.label}
              </div>
              <p className="text-sm dark:text-slate-400 text-slate-600 mt-1 leading-snug">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
