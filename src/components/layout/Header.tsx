"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { MAIN_NAV, WORK_MENU } from "@/data";
import { Icon } from "@/lib/icons";
import { ROUTES, isActivePath, pillarHref } from "@/lib/routes";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import FoundationLogo from "../FoundationLogo";

const desktopLinkClass = (active: boolean) =>
  `relative px-2 lg:px-2 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wider transition-all duration-200 uppercase cursor-pointer border-none whitespace-nowrap shrink-0 ${active
    ? "dark:text-amber-200 text-amber-800 font-bold"
    : "dark:text-slate-300 dark:hover:text-amber-100 text-slate-700 hover:text-amber-800"
  }`;

const ActiveUnderline = () => (
  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full" />
);

export function Header() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkAccordionOpen, setMobileWorkAccordionOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close every menu whenever the route changes (Link navigation).
  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
  }, [pathname]);

  const openWorkDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setWorkDropdownOpen(true);
  };

  const closeWorkDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => setWorkDropdownOpen(false), 200);
  };

  const themeLabel = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-200 border-none shadow-md dark:bg-linear-to-r dark:from-[#050e1c]/95 dark:via-[#1a060d]/95 dark:to-[#050e1c]/95 dark:text-slate-100 bg-white/95 text-slate-900 border-b border-transparent hover:border-amber-300/60"
    >
      {/* Top Hairline Gold Glow */}
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-amber-400/80 to-transparent" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-20 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo & Official Crest */}
        <Link
          id="brand-logo-btn"
          href={ROUTES.home}
          className="flex items-center gap-2.5 xl:gap-3.5 group text-left cursor-pointer focus:outline-none border-none shrink-0"
        >
          <FoundationLogo
            size="md"
            className="group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-display text-base lg:text-base xl:text-lg leading-none tracking-wide font-bold transition-colors dark:text-white dark:group-hover:text-amber-200 text-slate-900 group-hover:text-amber-800 whitespace-nowrap">
              Janseva Pratishthan
            </span>
            <span className="text-xs tracking-widest uppercase font-semibold mt-1 dark:text-amber-300 text-amber-700 whitespace-nowrap">
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2 2xl:space-x-3 flex-nowrap shrink-0">
          {MAIN_NAV.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            if (!item.hasMegaMenu) {
              return (
                <Link
                  key={item.id}
                  id={`nav-${item.id}`}
                  href={item.href}
                  className={desktopLinkClass(isActive)}
                >
                  <span className="whitespace-nowrap">
                    {t(item.label, item.hindiLabel)}
                  </span>
                  {isActive && <ActiveUnderline />}
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                className="relative shrink-0"
                onMouseEnter={openWorkDropdown}
                onMouseLeave={closeWorkDropdown}
              >
                <Link
                  id={`nav-${item.id}`}
                  href={item.href}
                  className={`inline-flex items-center gap-1 ${desktopLinkClass(isActive || workDropdownOpen)}`}
                >
                  <span className="whitespace-nowrap">
                    {t(item.label, item.hindiLabel)}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${workDropdownOpen
                        ? "rotate-180 dark:text-amber-300 text-amber-700"
                        : "dark:text-slate-400 text-slate-500"
                      }`}
                  />
                  {isActive && <ActiveUnderline />}
                </Link>

                {/* Mega Dropdown for Our Work with Subtitles & Pages */}
                {workDropdownOpen && (
                  <div
                    onMouseEnter={openWorkDropdown}
                    onMouseLeave={closeWorkDropdown}
                    className="absolute left-0 top-full pt-2 w-screen max-w-3xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="rounded-2xl border-none shadow-2xl p-6 backdrop-blur-2xl transition-colors duration-200 dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] dark:text-slate-100 bg-white text-slate-900 border border-transparent hover:border-amber-300/60">
                      {/* Dropdown Header Bar */}
                      <div className="flex items-center justify-between pb-4 border-none border-b-0">
                        <div>
                          <span className="text-sm font-bold uppercase tracking-[0.22em] dark:text-amber-300 text-amber-800 block">
                            {t(WORK_MENU.eyebrow, WORK_MENU.eyebrowHindi)}
                          </span>
                          <h3 className="font-display text-lg font-bold dark:text-white text-slate-900">
                            {t(WORK_MENU.title, WORK_MENU.titleHindi)}
                          </h3>
                        </div>
                        <Link
                          href={ROUTES.ourWork}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border-none text-sm font-semibold transition-colors cursor-pointer"
                        >
                          <span>
                            {t(WORK_MENU.viewAll, WORK_MENU.viewAllHindi)}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* Thematic Columns with Subtitles */}
                      <div className="grid grid-cols-2 gap-5 pt-2">
                        {WORK_MENU.sections.map((section) => (
                          <div key={section.subtitle} className="space-y-2.5">
                            <div className="flex items-center gap-2 pb-1 border-none">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              <h4 className="text-sm font-bold uppercase tracking-wider dark:text-amber-300 text-amber-800">
                                {t(section.subtitle, section.subtitleHindi)}
                              </h4>
                            </div>

                            <div className="space-y-1.5">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={pillarHref(subItem.id)}
                                  className="w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group cursor-pointer border-none shadow-sm dark:bg-[#08182e]/80 dark:hover:bg-[#122e57] bg-slate-50 hover:bg-amber-50/70 border border-slate-200/60 hover:border-amber-300/60"
                                >
                                  <div className="p-1.5 rounded-lg dark:bg-amber-400/15 dark:text-amber-300 dark:group-hover:bg-amber-400 dark:group-hover:text-slate-950 bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0 mt-0.5">
                                    <Icon
                                      name={subItem.icon}
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="font-semibold text-sm transition-colors truncate dark:text-slate-100 dark:group-hover:text-amber-200 text-slate-800 group-hover:text-amber-900">
                                        {t(subItem.title, subItem.hindiTitle)}
                                      </span>
                                      {subItem.tag && (
                                        <span className="text-sm font-bold uppercase tracking-wider px-1.5 py-0.2 rounded dark:bg-red-900/60 dark:text-amber-200 bg-rose-100 text-rose-800 border-none shrink-0">
                                          {subItem.tag}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm line-clamp-1 mt-0.5 leading-snug dark:text-slate-400 text-slate-500">
                                      {subItem.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Quick Feature Banner */}
                      <div className="mt-5 pt-3 border-none flex items-center justify-between text-sm p-3 rounded-xl dark:bg-[#08182e]/50 dark:text-slate-300 bg-amber-50/80 text-slate-700 border border-transparent hover:border-amber-300/60">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>
                            <strong className="dark:text-white text-slate-900">
                              {WORK_MENU.banner.label}
                            </strong>{" "}
                            {WORK_MENU.banner.text}
                          </span>
                        </div>
                        <Link
                          href={pillarHref(WORK_MENU.banner.pillarId)}
                          className="dark:text-amber-300 dark:hover:text-amber-100 text-amber-800 hover:text-amber-950 font-semibold inline-flex items-center gap-1 cursor-pointer border-none"
                        >
                          <span>{WORK_MENU.banner.ctaLabel}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action: Dark/Light Mode Toggle & Donate CTA */}
        <div className="hidden sm:flex items-center space-x-2 xl:space-x-3 shrink-0 max-lg:ml-auto">
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-200 flex items-center justify-center border-none cursor-pointer focus:outline-none dark:bg-amber-400/10 dark:hover:bg-amber-400/20 dark:text-amber-300 bg-amber-100/70 hover:bg-amber-200/80 text-amber-900 shadow-sm"
            title={themeLabel}
            aria-label={themeLabel}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-amber-800 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          <Link
            id="header-donate-btn"
            href={ROUTES.donate}
            className="relative inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-bold uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-amber-200 to-yellow-400 hover:from-amber-200 hover:to-yellow-200 shadow-md hover:shadow-lg border-none transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 no-underline"
          >
            <Heart className="w-3.5 h-3.5 fill-stone-950 text-stone-950" />
            <span>Donate</span>
          </Link>
        </div>

        {/* Mobile Header Controls: Quick Theme Toggle + Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-quick-theme-toggle"
            onClick={toggleTheme}
            className="sm:hidden p-2 rounded-full dark:bg-amber-400/10 dark:text-amber-300 bg-amber-100 text-amber-900 border-none cursor-pointer"
            aria-label={themeLabel}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-amber-800" />
            )}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 rounded-lg dark:text-slate-200 dark:hover:text-white dark:hover:bg-[#08182e] text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-none px-4 pt-3 pb-6 space-y-1.5 backdrop-blur-xl shadow-2xl max-h-[85vh] overflow-y-auto dark:bg-[#050e1c]/98 dark:text-slate-100 bg-white/98 text-slate-800 border-b border-transparent hover:border-amber-300/60">
          <div className="flex items-center justify-between p-2.5 mb-2 rounded-xl dark:bg-[#08182e]/70 bg-slate-100">
            <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">
              Theme & Display
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold dark:bg-amber-400/20 dark:text-amber-200 bg-white text-slate-800 shadow-sm border-none cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-amber-800" />
              )}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>

          {MAIN_NAV.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            if (!item.hasMegaMenu) {
              return (
                <Link
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-between cursor-pointer border-none ${isActive
                      ? "dark:bg-amber-500/15 dark:text-amber-200 bg-amber-100 text-amber-800 font-bold"
                      : "dark:text-slate-300 dark:hover:bg-[#08182e] dark:hover:text-amber-100 text-slate-700 hover:bg-slate-100 hover:text-amber-800"
                    }`}
                >
                  <span>{t(item.label, item.hindiLabel)}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                  )}
                </Link>
              );
            }

            return (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors dark:bg-[#08182e]/60 bg-slate-50">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left flex-1 dark:text-slate-200 dark:hover:text-amber-200 text-slate-800 hover:text-amber-800 cursor-pointer border-none"
                  >
                    <span>{t(item.label, item.hindiLabel)}</span>
                  </Link>
                  <button
                    onClick={() => setMobileWorkAccordionOpen((open) => !open)}
                    className="p-1.5 dark:text-amber-300 text-amber-700 hover:text-white cursor-pointer border-none"
                    aria-label="Expand our work categories"
                    aria-expanded={mobileWorkAccordionOpen}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileWorkAccordionOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {mobileWorkAccordionOpen && (
                  <div className="pl-3 pr-1 py-2 space-y-3 dark:bg-[#08182e]/40 bg-slate-100/70 rounded-xl">
                    {WORK_MENU.sections.map((section) => (
                      <div key={section.subtitle} className="space-y-1">
                        <span className="text-sm font-bold uppercase tracking-wider dark:text-amber-300 text-amber-800 px-2 block">
                          {t(section.subtitle, section.subtitleHindi)}
                        </span>
                        <div className="space-y-1">
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={pillarHref(subItem.id)}
                              onClick={() => setMobileMenuOpen(false)}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm dark:text-slate-200 dark:hover:text-amber-200 dark:hover:bg-white/5 text-slate-700 hover:text-amber-800 hover:bg-white transition-colors flex items-center justify-between cursor-pointer border-none"
                            >
                              <span>
                                {t(subItem.title, subItem.hindiTitle)}
                              </span>
                              <ArrowRight className="w-3 h-3 text-amber-500" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-none flex flex-col gap-2.5">
            <Link
              id="mobile-drawer-donate-btn"
              href={ROUTES.donate}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm sm:text-base text-center font-bold uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 shadow-md border-none cursor-pointer no-underline"
            >
              <Heart className="w-4 h-4 fill-stone-950" />
              <span>
                {t(
                  "Support & Donate (80G Exempt)",
                  "दान / सहयोग करें (80G कर छूट)",
                )}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
