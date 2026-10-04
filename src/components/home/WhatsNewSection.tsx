import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealLink } from "@/components/ui/Reveal";
import { NEWS_ARTICLES } from "@/data";
import { ROUTES, newsHref } from "@/lib/routes";

/** Server Component — the first three articles from news.json. */
export function WhatsNewSection() {
  const displayArticles = NEWS_ARTICLES.slice(0, 3);

  return (
    <section
      id="whats-new-section"
      className="relative w-full py-16 sm:py-24 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2e35] dark:text-amber-100 tracking-tight">
            What&apos;s New
          </h2>
          <Link
            href={ROUTES.news}
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#a47b1e] dark:text-amber-400 hover:text-[#78570f] dark:hover:text-amber-300 transition-colors cursor-pointer"
          >
            <span>View All News</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((item) => (
            <RevealLink
              key={item.id}
              href={newsHref(item.slug)}
              margin="-50px"
              className="group flex flex-col bg-white dark:bg-[#0c2242] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-amber-400/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-1 bg-linear-to-tr from-amber-400 via-yellow-200 to-amber-600 m-3 mb-0 rounded-xl overflow-hidden shadow-sm">
                <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-3">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#a47b1e] dark:text-amber-400">
                  {item.category}
                </div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-[#a47b1e] dark:group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed flex-1">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-2">
                  <div className="flex items-center gap-1.5 font-medium whitespace-nowrap min-w-0">
                    <span className="truncate">{item.location}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      |
                    </span>
                    <span className="whitespace-nowrap shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#a47b1e] dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 whitespace-nowrap">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </RevealLink>
          ))}
        </div>
      </div>
    </section>
  );
}
