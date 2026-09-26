import { TREE_ANATOMY } from "@/data";
import { Icon } from "@/lib/icons";

/** Server Component — roots / trunk / branches cards from home.json → treeAnatomy. */
export function TreeAnatomy() {
  return (
    <section className="py-20 dark:bg-linear-to-b dark:from-[#050e1c] dark:to-[#0a1830] bg-[#fbf9f4] relative border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.24em] dark:text-amber-300 text-amber-800">
            The Architecture of Hope
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold dark:text-white text-slate-900">
            The Anatomy of Our Tree of Life
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            In our foundational emblem, every branch, trunk, and root represents
            an unwavering commitment to human dignity and grassroots
            transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREE_ANATOMY.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl dark:bg-linear-to-br ${item.cardClass} bg-white border border-transparent hover:border-amber-300/60 shadow-md space-y-4 transition-all`}
            >
              <div className="flex items-start justify-between gap-4 md:max-lg:flex-col-reverse md:max-lg:gap-3">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-widest dark:text-amber-300 text-amber-800 block">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-display text-xl font-bold dark:text-white text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center shadow-sm ${item.iconClass}`}
                >
                  <Icon
                    name={item.icon}
                    className={`w-6 h-6 ${item.iconInnerClass}`}
                  />
                </div>
              </div>
              <p className="text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
