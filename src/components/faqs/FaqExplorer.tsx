"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { FAQS_DATA, FAQ_CATEGORIES } from "@/data";

/** Client island: FAQ search, category filter and accordion state. */
export function FaqExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Search Input Bar */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 dark:text-amber-400 text-amber-600" />
        <input
          type="text"
          placeholder="Search questions (e.g. 80G, laptops, donation, Swabhiman)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full dark:bg-[#08182e] dark:text-white dark:placeholder-slate-400 bg-white text-slate-900 placeholder-slate-400 border border-transparent hover:border-amber-300/60 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md transition-colors"
        />
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold tracking-wider transition-all cursor-pointer border-none shadow-sm ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 text-slate-950 shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                : "dark:bg-[#0c2242]/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-[#0c2242] bg-white text-slate-700 hover:text-slate-950 hover:bg-amber-100/60 border border-transparent hover:border-amber-300/60"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl dark:bg-gradient-to-r dark:from-[#0c2242]/90 dark:via-[#1b080f]/90 dark:to-[#0c2242]/90 bg-white border border-transparent hover:border-amber-300/60 overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 dark:hover:bg-[#122e59]/40 hover:bg-amber-50/60 transition-colors cursor-pointer border-none bg-transparent"
                >
                  <span className="font-display text-base sm:text-lg font-semibold dark:text-white text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full dark:bg-blue-950 dark:text-amber-300 bg-amber-100 text-amber-800 transform transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? "rotate-180 dark:bg-amber-400/20 dark:text-amber-200 bg-amber-200 text-amber-900"
                        : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-sm dark:text-slate-200 text-slate-600 leading-relaxed border-none pt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 p-6 rounded-2xl dark:bg-[#0c2242]/70 bg-white border border-transparent hover:border-amber-300/60 shadow-md space-y-2">
            <HelpCircle className="w-8 h-8 text-amber-500 mx-auto" />
            <p className="text-sm font-semibold dark:text-white text-slate-900">
              No matching questions found
            </p>
            <p className="text-sm dark:text-slate-400 text-slate-500">
              Try searching for a different keyword or contact our support team.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
