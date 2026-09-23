"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { CategoryIcon } from "./CategoryIcon";
import { FallbackImage } from "@/components/ui/FallbackImage";
import {
  ADVISORY_CATEGORIES,
  ADVISORY_CHARTER,
  ADVISORY_HIGHLIGHTS,
  ADVISORY_MEMBERS,
} from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { advisorHref } from "@/lib/routes";

export function AdvisoryPanelSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMembers =
    selectedCategory === "all"
      ? ADVISORY_MEMBERS
      : ADVISORY_MEMBERS.filter((m) => m.category === selectedCategory);

  return (
    <section id="advisory-panel-section" className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-amber-400/10 bg-amber-100 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/25 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>
            {t("Honorary Advisory Panel", "प्रतिष्ठित सलाहकार समिति")}
          </span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
          {t(
            "Guiding Social Impact with Expertise & Integrity",
            "अनुभवी विचारकों व विशेषज्ञों का मार्गदर्शन",
          )}
        </h2>

        <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
          {t(
            "Janseva Pratishthan Foundation is counseled by an independent panel of distinguished jurists, medical leaders, educationalists, and defense veterans who ensure our grassroots programs remain impactful, transparent, and ethically grounded.",
            "जनसेवा प्रतिष्ठान फाउंडेशन को भारत के शीर्ष न्यायविदों, डॉक्टरों, शिक्षाविदों, सैन्य दिग्गजों और सामाजिक अर्थशास्त्रियों का निःस्वार्थ मार्गदर्शन प्राप्त है।",
          )}
        </p>

        {/* Quick Highlights / Metrics Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {ADVISORY_HIGHLIGHTS.map((highlight) => (
            <span
              key={highlight.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 border border-slate-200 dark:border-white/10"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${highlight.iconColor}`} />
              {t(highlight.label, highlight.hindiLabel)}
            </span>
          ))}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {ADVISORY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            id={`advisory-filter-${cat.id}`}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all border cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-amber-400/90 text-stone-950 font-bold border-amber-300 shadow-md transform -translate-y-0.5"
                : "dark:bg-[#0c1f38] dark:text-slate-300 dark:border-white/10 dark:hover:border-amber-400/50 bg-white text-slate-700 border-slate-200 hover:border-amber-400/60 shadow-sm"
            }`}
          >
            {t(cat.label, cat.hindiLabel)}
          </button>
        ))}
      </div>

      {/* Advisory Members Grid - Clean, Uncluttered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredMembers.map((member) => (
          <Link
            key={member.id}
            id={`advisory-member-${member.id}`}
            href={advisorHref(member.id)}
            className="group rounded-2xl dark:bg-[#0c2242] bg-white border border-slate-200 dark:border-white/10 hover:border-amber-400/60 dark:hover:border-amber-400/60 p-5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              {/* Member Photo with Golden Frame & Badges */}
              <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden bg-slate-900 shadow-md p-1 bg-linear-to-tr from-amber-400/90 via-yellow-200 to-amber-600/90">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <FallbackImage
                    src={member.photo}
                    fallbackName={member.name}
                    alt={`${member.name} - ${member.designation}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark linear overlay at bottom of photo for text contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Experience Badge */}
                  {member.experienceYears && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[11px] font-bold dark:bg-black/75 bg-white/95 dark:text-amber-300 text-amber-900 backdrop-blur-md shadow-md border border-amber-400/30">
                      {member.experienceYears}+ {t("Yrs Exp", "वर्ष अनुभव")}
                    </div>
                  )}

                  {/* Domain Category Pill */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/80 text-white backdrop-blur-md border border-white/20 shadow-sm">
                    <CategoryIcon category={member.category} />
                    <span className="capitalize">
                      {member.category.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title, Designation & Credentials - Clean & Focused */}
              <div className="space-y-1.5 text-left font-sans">
                <h3 className="font-sans text-lg sm:text-xl font-bold dark:text-white text-slate-900 leading-snug group-hover:text-amber-500 transition-colors">
                  {t(member.name, member.hindiName)}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-amber-800 dark:text-amber-300 tracking-wide">
                  {t(member.designation, member.hindiDesignation)}
                </p>
                <p className="font-sans text-xs font-medium dark:text-slate-400 text-slate-500 line-clamp-2">
                  {member.credentials}
                </p>
              </div>
            </div>

            {/* View Profile Action */}
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10">
              <span
                id={`view-profile-${member.id}`}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider dark:bg-amber-400/15 hover:dark:bg-amber-400/25 dark:text-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 transition-colors border border-amber-300/40 cursor-pointer group-hover:bg-amber-400 group-hover:text-slate-950"
              >
                <span>{t("View Profile", "प्रोफ़ाइल देखें")}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Advisory Mandate & Ethics Charter Card */}
      <div className="rounded-3xl dark:bg-linear-to-r dark:from-[#0a1c36] dark:via-[#190914] dark:to-[#0a1c36] bg-white border border-slate-200/90 dark:border-amber-400/25 p-8 sm:p-12 shadow-xl space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 dark:bg-amber-400/10 bg-amber-100 border border-amber-400/25 font-sans">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t("Council Charter", "सलाहकार आचार संहिता")}</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
            {t(ADVISORY_CHARTER.title, ADVISORY_CHARTER.hindiTitle)}
          </h3>
          <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed font-sans">
            {t(ADVISORY_CHARTER.summary, ADVISORY_CHARTER.hindiSummary)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVISORY_CHARTER.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl dark:bg-white/5 bg-slate-50 border border-slate-200/80 dark:border-white/10 space-y-2 hover:border-amber-400/50 transition-colors font-sans"
            >
              <div className="w-7 h-7 rounded-lg dark:bg-amber-400/20 dark:text-amber-300 bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold font-mono">
                0{idx + 1}
              </div>
              <h4 className="font-sans text-sm font-bold dark:text-white text-slate-900">
                {t(pillar.title, pillar.hindiTitle)}
              </h4>
              <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
