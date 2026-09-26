"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  SECRETARY_PHOTO_KEY,
  useSecretaryPhoto,
} from "@/components/ui/SecretaryPhoto";
import { FOUNDATION_INFO } from "@/data";
import { Icon } from "@/lib/icons";
import { ROUTES } from "@/lib/routes";

const { generalSecretary: secretary, founder, contact } = FOUNDATION_INFO;

/** Client Component: governance modal + photo upload need state and browser APIs. */
export function GeneralSecretarySection() {
  const [showGovernanceModal, setShowGovernanceModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useSecretaryPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!showGovernanceModal) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0)
      document.body.style.paddingRight = `${scrollBarWidth}px`;

    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowGovernanceModal(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showGovernanceModal]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) return;
      setPhotoUrl(result);
      try {
        localStorage.setItem(SECRETARY_PHOTO_KEY, result);
        window.dispatchEvent(new Event("storage"));
      } catch (err) {
        console.error("Failed to save to localStorage", err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      id="general-secretary-section"
      className="relative w-full py-16 sm:py-24 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-linear-to-br from-[#0c2242] via-[#0e2a52] to-[#12243d] dark:from-[#081525] dark:via-[#0c1d33] dark:to-[#140812] rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center shadow-2xl border border-amber-400/20"
        >
          {/* Big closing quote mark */}
          <div className="absolute -top-8 sm:-top-10 right-8 sm:right-14 pointer-events-none select-none">
            <svg
              viewBox="0 0 409.294 409.294"
              fill="currentColor"
              className="text-white w-16 sm:w-24 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            >
              <path d="M409.294 204.647v175.412h-175.412V204.647h116.941c0-64.48-52.461-116.941-116.941-116.941V29.235c96.728 0 175.412 78.684 175.412 175.412zM0 87.706V29.235c96.728 0 175.412 78.684 175.412 175.412v175.412H0V204.647h116.941c0-64.48-52.461-116.941-116.941-116.941z" />
            </svg>
          </div>

          <div className="flex-1 space-y-6">
            <div className="inline-flex mt-5 items-center gap-2 px-5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-sm font-semibold tracking-wider uppercase">
              National General Secretary
            </div>

            <blockquote className="text-[1rem] sm:text-[1.125rem] lg:text-[1.18rem] font-sans text-slate-100 dark:text-slate-200 leading-[1.85] sm:leading-[1.95] text-left sm:text-justify lg:text-left font-normal">
              &ldquo;{secretary.quote}&rdquo;
            </blockquote>

            {/* Strategic Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {secretary.pillars.slice(0, 2).map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-1 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 max-sm:flex-wrap">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">
                  {secretary.displayName}
                </h3>
                <span className="px-2 py-0.5 rounded text-sm font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Verified Executive
                </span>
              </div>
              <p className="text-sm font-medium text-slate-300/90">
                {secretary.title}
              </p>
              <p className="text-sm font-semibold text-amber-300/80">
                {secretary.role} — {FOUNDATION_INFO.name}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href={ROUTES.joinUs}
                className="px-6 py-3 max-sm:w-full max-sm:px-4 max-sm:text-center max-sm:tracking-wider rounded-xl font-bold text-sm uppercase tracking-[0.14em] text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 border-none"
              >
                Connect With Secretary&apos;s Office
              </Link>

              <button
                onClick={() => setShowGovernanceModal(true)}
                className="px-5 py-3 max-sm:w-full max-sm:px-4 max-sm:justify-center max-sm:tracking-wider rounded-xl font-bold text-sm uppercase tracking-[0.12em] text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-amber-300/40 transition-all cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-amber-300" />
                <span>Governance & Compliance</span>
              </button>
            </div>
          </div>

          {/* Portrait — click to upload a replacement photo */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative w-full aspect-4/5 max-w-sm mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              title="Click photo to select/update image"
            >
              <Image
                src={photoUrl}
                alt={`${secretary.displayName} - ${secretary.role}`}
                fill
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Governance & Compliance Modal */}
      <AnimatePresence>
        {showGovernanceModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overscroll-contain"
            onClick={() => setShowGovernanceModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0c2242] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-amber-400/30 space-y-6 max-h-[90vh] overflow-y-auto overscroll-contain"
            >
              <button
                onClick={() => setShowGovernanceModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#996515] dark:text-amber-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  Office of the General Secretary
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Institutional Governance & Transparency
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Janseva Pratishthan Foundation operates under strict
                  institutional compliance, independent audits, and
                  constitutional accountability.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-amber-300 flex items-center gap-2">
                    <Building className="w-4 h-4 text-amber-500" />
                    Executive Governance Council
                  </h4>
                  <p className="leading-relaxed">
                    Under the leadership of {founder.role}{" "}
                    <strong>{founder.displayName}</strong> and {secretary.role}{" "}
                    <strong>{secretary.displayName}</strong>, all projects
                    undergo rigorous pre-feasibility analysis, community
                    consultation, and post-distribution verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {secretary.governanceCards.map((card) => (
                    <div
                      key={card.title}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1"
                    >
                      <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Icon
                          name={card.icon}
                          className="w-3.5 h-3.5 text-amber-500"
                        />{" "}
                        {card.title}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-amber-200 space-y-1 text-sm">
                  <p className="font-bold">
                    Contact General Secretary&apos;s Desk Directly:
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> {secretary.secretaryEmail}{" "}
                    / {contact.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> {contact.phone}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowGovernanceModal(false)}
                  className="px-6 py-2 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
