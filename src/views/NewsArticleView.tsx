import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Quote,
} from "lucide-react";
import { ShareButtons } from "@/components/news/ShareButtons";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/T";
import { NEWS_ARTICLES, getNewsArticleBySlug } from "@/data";
import { ROUTES, newsHref } from "@/lib/routes";

/**
 * Server Component for /news/[slug]. The article is looked up from news.json;
 * share buttons and animations are small client islands.
 */
export function NewsArticleView({ slug }: { slug: string }) {
  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = NEWS_ARTICLES.filter(
    (item) => item.id !== article.id,
  ).slice(0, 3);

  return (
    <div className="w-full bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Back Button */}
        <div className="flex items-center justify-between gap-4 mb-8 pt-2">
          <Link
            href={ROUTES.news}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#a47b1e] dark:text-amber-400 hover:text-[#78570f] dark:hover:text-amber-300 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>
              <T en="Back to All News" hi="सभी समाचारों पर वापस जाएं" />
            </span>
          </Link>

          {/* Category Pill */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50">
            {article.category}
          </span>
        </div>

        {/* Article Header */}
        <Reveal onMount y={15} duration={0.4} className="space-y-4 mb-8">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            <T en={article.title} hi={article.hindiTitle} />
          </h1>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1 pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>{article.date}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>{article.location}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>{article.readTime}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <span>By {article.author}</span>
            </div>

            {/* Share Buttons (client island) */}
            <ShareButtons slug={article.slug} title={article.title} />
          </div>
        </Reveal>

        {/* Featured Hero Image */}
        <Reveal
          onMount
          y={0}
          scale={0.98}
          className="mb-10 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-amber-400/20 shadow-md bg-slate-100 dark:bg-slate-900"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover object-center"
            />
          </div>
          {article.imageCaption && (
            <div className="p-3.5 bg-slate-50 dark:bg-[#0a182c] border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic">
              Photo: {article.imageCaption}
            </div>
          )}
        </Reveal>

        {/* Quick Impact Stats if available */}
        {article.stats && article.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {article.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white dark:bg-[#0c2242] border border-slate-200/80 dark:border-amber-400/20 text-center shadow-sm"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#a47b1e] dark:text-amber-300">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Main Body Content */}
        <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed font-normal text-base sm:text-lg">
          {/* Lead Paragraph */}
          <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-amber-100/90 leading-relaxed border-l-4 border-[#a47b1e] pl-4 py-1">
            {article.lead}
          </p>

          {/* Content Sections */}
          {article.contentSections.map((sec, idx) => (
            <div key={sec.heading ?? idx} className="space-y-3 pt-3">
              {sec.heading && (
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-2">
                  {sec.heading}
                </h2>
              )}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}

          {/* Quote Callout Box */}
          {article.quote && (
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-amber-50/70 to-white dark:from-[#0a182c] dark:to-[#0c2242] border border-amber-200 dark:border-amber-400/30 shadow-sm relative overflow-hidden">
              <Quote className="w-10 h-10 text-amber-300/40 dark:text-amber-500/20 absolute -top-1 right-3" />
              <p className="italic text-base sm:text-lg text-slate-800 dark:text-amber-100/90 leading-relaxed mb-4">
                &ldquo;{article.quote.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center font-display">
                  {article.quote.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {article.quote.author}
                  </div>
                  <div className="text-xs text-[#a47b1e] dark:text-amber-400 font-medium">
                    {article.quote.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Takeaways & Highlights Box */}
          {article.highlights && article.highlights.length > 0 && (
            <div className="my-8 p-6 rounded-2xl bg-white dark:bg-[#0a182c] border border-slate-200 dark:border-amber-400/20 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Key Project Highlights</span>
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                {article.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Article Footer & Action Callout */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={ROUTES.news}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#a47b1e] dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              <T en="View all press releases" hi="सभी समाचार देखें" />
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.donate}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white/30" />
              <span>Support This Initiative</span>
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              <T en="Related News & Updates" hi="संबंधित समाचार एवं अपडेट" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={newsHref(item.slug)}
                  className="group bg-white dark:bg-[#0c2242] rounded-xl overflow-hidden border border-slate-200/80 dark:border-amber-400/20 shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#a47b1e] dark:text-amber-400">
                      {item.category}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#a47b1e] dark:group-hover:text-amber-300 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-auto pt-2 flex items-center justify-between gap-2">
                      <span className="whitespace-nowrap">{item.date}</span>
                      <span className="text-[#a47b1e] dark:text-amber-400 font-semibold inline-flex items-center gap-1 shrink-0 whitespace-nowrap">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
