"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Building2, Search } from "lucide-react";
import { FOUNDATION_INFO, NEWS_ARTICLES, NEWS_CATEGORIES } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES, newsHref } from "@/lib/routes";

const MotionLink = motion.create(Link);

/** Client Component for /news: live search + category filter. Every card is a real <Link>. */
export function NewsListView() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Filtered list of articles for the listing page
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((item) => {
      const matchesCategory =
        selectedCategory === "ALL" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        (item.hindiTitle && item.hindiTitle.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="w-full bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#a47b1e] dark:text-amber-400 block">
            {t(
              "Official Press & Media Releases",
              "आधिकारिक समाचार एवं प्रेस विज्ञप्ति",
            )}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("News & Media Center", "समाचार एवं मीडिया केंद्र")}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed font-normal">
            {t(
              "Official updates, on-ground laptop handovers, youth wellness drives, and transparent grassroots impact reports from Janseva Pratishthan Foundation.",
              "जनसेवा प्रतिष्ठान फाउंडेशन की आधिकारिक घोषणाएं, लैपटॉप वितरण पहल, स्वास्थ्य शिविर, और जमीनी सामाजिक सुधार की खबरें।",
            )}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#a47b1e] text-white shadow-md"
                    : "bg-white dark:bg-[#0c2242] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-amber-400/20 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                }`}
              >
                {cat === "ALL" ? t("All Releases", "सभी अपडेट") : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                "Search news, drives, cities...",
                "समाचार खोजें...",
              )}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#0c2242] border border-slate-200 dark:border-amber-400/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#a47b1e]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If no articles match filter */}
        {filteredArticles.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#0c2242] border border-slate-200 dark:border-slate-800 space-y-3">
            <BookOpen className="w-12 h-12 mx-auto text-slate-400" />
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              No news releases match your criteria
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Try searching with different keywords or switch back to &ldquo;All
              Releases&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-bold text-[#a47b1e] dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Featured Hero Article Card (if available) */}
        {featuredArticle && (
          <MotionLink
            href={newsHref(featuredArticle.slug)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group mb-12 bg-white dark:bg-[#0c2242] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-amber-400/20 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image Column */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#0c2242]/90 text-amber-300 backdrop-blur-md shadow-md border border-amber-400/30">
                  Featured Release
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#a47b1e] dark:text-amber-400">
                  {featuredArticle.category}
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#a47b1e] dark:group-hover:text-amber-300 transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-normal">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.location}</span>
                </div>

                <div className="font-bold text-[#a47b1e] dark:text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </MotionLink>
        )}

        {/* Grid of Remaining Articles */}
        {remainingArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((item, idx) => (
              <MotionLink
                key={item.id}
                href={newsHref(item.slug)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-white dark:bg-[#0c2242] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-amber-400/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#a47b1e] dark:text-amber-400">
                    {item.category}
                  </div>

                  <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-[#a47b1e] dark:group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed line-clamp-3 font-normal">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                    <div className="whitespace-nowrap">{item.date}</div>
                    <div className="font-bold text-[#a47b1e] dark:text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </MotionLink>
            ))}
          </div>
        )}

        {/* Media Kit & Inquiries Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-amber-50/50 via-white to-amber-50/50 dark:from-[#0a182c] dark:via-[#0c2242] dark:to-[#0a182c] border border-amber-200/80 dark:border-amber-400/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
              <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Press & Media Inquiries</span>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              For official press releases, high-resolution media kits, interview
              requests with Founder Shabbir Shaikh, or statutory documentation
              verification:
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
              Official Media Desk: {FOUNDATION_INFO.contact.mediaEmail} | Mumbai
              Head Office
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={ROUTES.contact}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-800 dark:text-white bg-white dark:bg-[#11274a] border border-slate-200 dark:border-amber-400/30 hover:bg-amber-50 transition-colors shadow-sm cursor-pointer"
            >
              Contact Press Desk
            </Link>
            <Link
              href={ROUTES.registration}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md transition-all cursor-pointer"
            >
              Statutory Credentials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
