import { Fragment } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { NewsletterForm } from "./NewsletterForm";
import { FOOTER_LINKS, FOUNDATION_INFO } from "@/data";
import { pillarHref } from "@/lib/routes";

const linkClass =
  "inline-block dark:text-slate-300 text-slate-700 dark:hover:text-amber-200 hover:text-amber-800 transition-colors cursor-pointer text-left";
const highlightLinkClass =
  "inline-block font-semibold dark:text-amber-300 text-amber-900 hover:underline transition-colors cursor-pointer text-left";
const headingClass =
  "font-display text-xl font-bold dark:text-amber-300 text-amber-900 tracking-wide";

export function Footer() {
  const { contact } = FOUNDATION_INFO;

  return (
    <footer
      id="foundation-footer"
      className="relative dark:bg-[#050c18] bg-[#ede5d4] border-t dark:border-transparent border-transparent hover:border-amber-300/60 dark:text-slate-300 text-slate-700 pt-16 pb-12 max-lg:pb-24 overflow-hidden transition-colors duration-300"
    >
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-amber-400/80 to-transparent absolute top-0 left-0" />
      <div className="absolute -top-24 left-1/4 w-125 h-44 dark:bg-blue-600/10 bg-amber-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-125 h-44 dark:bg-rose-900/15 bg-rose-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-none">
          {/* Brand & Philosophy Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <FoundationLogo
                size="lg"
                className="hover:scale-105 transition-transform shrink-0"
              />
              <div>
                <h3 className="font-display text-xl font-bold dark:text-white text-slate-900 tracking-wide">
                  {FOUNDATION_INFO.name}
                </h3>
                <p className="text-sm tracking-[0.22em] uppercase dark:text-amber-300 text-amber-800 font-semibold mt-0.5">
                  {FOUNDATION_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed max-w-md">
              {FOUNDATION_INFO.missionStatement}
            </p>

            <div className="p-3.5 rounded-xl dark:bg-[#07182b] bg-white border border-transparent hover:border-amber-300/60 dark:border-none shadow-md max-w-md">
              <div className="flex items-center gap-2 text-sm font-bold dark:text-amber-300 text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Statutory Trust Registration</span>
              </div>
              <p className="text-sm dark:text-slate-300 text-slate-600 mt-1.5 leading-relaxed">
                {FOOTER_LINKS.trustNote}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className={headingClass}>Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={link.highlight ? highlightLinkClass : linkClass}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Initiatives */}
          <div className="space-y-3">
            <h4 className={headingClass}>Key Initiatives</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.initiatives.map((initiative) => (
                <li key={initiative.label}>
                  <Link
                    href={pillarHref(initiative.pillarId)}
                    className={linkClass}
                  >
                    {initiative.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-3">
            <h4 className={headingClass}>Get Connected</h4>
            <div className="space-y-2.5 text-sm dark:text-slate-300 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 dark:text-amber-400 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-snug">New Delhi - 110001, India</span>
              </div>
              {/* mailto:/tel: are not routes, so they stay plain <a> tags */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 dark:text-amber-400 text-amber-700 shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="dark:hover:text-amber-300 hover:text-amber-800 transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 dark:text-amber-400 text-amber-700 shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="dark:hover:text-amber-300 hover:text-amber-800 transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t dark:border-slate-800/80 border-slate-300/60 flex flex-col sm:flex-row items-center justify-between text-sm dark:text-slate-400 text-slate-600 gap-4">
          <p className="max-sm:text-center">
            © {new Date().getFullYear()} {FOUNDATION_INFO.name}. All Rights
            Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 max-sm:justify-center max-sm:gap-y-2 text-sm">
            {FOOTER_LINKS.legalLinks.map((link, index) => (
              <Fragment key={link.label}>
                {index > 0 && <span className="max-sm:hidden">•</span>}
                <Link
                  href={link.href}
                  className="dark:hover:text-amber-200 hover:text-amber-800 cursor-pointer text-slate-600 dark:text-slate-400"
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
