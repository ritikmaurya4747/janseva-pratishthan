"use client";

import { useEffect, useState } from "react";
import { Eye, FileText, ShieldCheck, X } from "lucide-react";
import { LEGAL_DOCS } from "@/data";
import type { LegalDocument } from "@/types";

/** Client island: certificate cards + the verification modal (scroll lock, Escape to close). */
export function LegalDocsGrid() {
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);

  // Lock background body scroll when certificate modal popup is open
  useEffect(() => {
    if (selectedDoc) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedDoc(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedDoc]);

  return (
    <>
      {/* Legal Certificates Grid */}
      <div className="space-y-6">
        <div className="border-none pb-2 flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold dark:text-white text-slate-900">
            Official Legal Registrations & Accreditations
          </h3>
          <span className="text-sm dark:text-amber-300 text-amber-800 font-semibold uppercase">
            {LEGAL_DOCS.length} Registered Accreditations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEGAL_DOCS.map((doc) => (
            <div
              key={doc.registrationNumber}
              className="rounded-2xl dark:bg-gradient-to-b dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 bg-white border border-slate-200/80 hover:border-amber-300/60 p-6 flex flex-col justify-between transition-all duration-300 shadow-md space-y-4 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl dark:bg-amber-400/20 dark:text-amber-300 bg-amber-100 text-amber-900 flex items-center justify-center shadow">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-blue-950 dark:text-amber-200 bg-blue-50 text-blue-900 border border-blue-200/40 shadow-sm">
                    {doc.validity}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold dark:text-white text-slate-900">
                  {doc.title}
                </h4>

                <div className="mt-3 p-2.5 rounded-lg dark:bg-[#08182e] bg-slate-50 border border-slate-200 text-sm font-mono dark:text-amber-200 text-amber-900 shadow-inner">
                  <span className="text-sm dark:text-slate-400 text-slate-500 block font-sans">
                    REGISTRATION / ORDER NO:
                  </span>
                  <span className="font-semibold dark:text-white text-slate-900 select-all">
                    {doc.registrationNumber}
                  </span>
                </div>

                <p className="text-sm dark:text-slate-300 text-slate-600 mt-3 leading-relaxed">
                  {doc.description}
                </p>

                <p className="text-sm dark:text-slate-400 text-slate-500 mt-2">
                  <strong className="dark:text-slate-300 text-slate-700">
                    Issuing Authority:
                  </strong>{" "}
                  {doc.issuingAuthority}
                </p>
              </div>

              <div className="pt-4 border-none flex items-center justify-between">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="inline-flex items-center gap-1 text-sm font-semibold dark:text-amber-300 text-amber-800 hover:dark:text-amber-100 hover:text-amber-950 transition-colors cursor-pointer border-none"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 !m-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overscroll-contain"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative w-full max-w-xl dark:bg-gradient-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 rounded-2xl p-6 sm:p-8 shadow-2xl dark:text-slate-100 text-slate-900 space-y-5 max-h-[90vh] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-none pb-2">
              <ShieldCheck className="w-7 h-7 text-amber-500" />
              <div>
                <h4 className="font-display text-xl font-bold dark:text-white text-slate-900">
                  {selectedDoc.title}
                </h4>
                <p className="text-sm dark:text-amber-300 text-amber-800">
                  {selectedDoc.issuingAuthority}
                </p>
              </div>
            </div>

            {/* Simulated Government Document Paper Frame */}
            <div className="p-6 rounded-xl dark:bg-[#08182e] bg-slate-50 border border-slate-200 font-mono text-sm dark:text-slate-300 text-slate-800 space-y-3 shadow-inner">
              <div className="text-center border-none pb-2">
                <span className="font-bold dark:text-white text-slate-900 uppercase text-sm block">
                  GOVERNMENT OF INDIA / STATUTORY TRUST REGISTER
                </span>
                <span className="text-sm dark:text-amber-400 text-amber-700">
                  JANSEVA PRATISHTHAN FOUNDATION • OFFICIAL GAZETTE &
                  ACCREDITATION
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="dark:text-slate-400 text-slate-500 block text-sm">
                    NAME OF TRUST:
                  </span>
                  <span className="dark:text-white text-slate-900 font-semibold">
                    JANSEVA PRATISHTHAN FOUNDATION
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 text-slate-500 block text-sm">
                    CERTIFICATE / URN:
                  </span>
                  <span className="dark:text-amber-300 text-amber-800 font-semibold select-all">
                    {selectedDoc.registrationNumber}
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 text-slate-500 block text-sm">
                    STATUS:
                  </span>
                  <span className="text-emerald-500 font-semibold">
                    {selectedDoc.validity}
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 text-slate-500 block text-sm">
                    JURISDICTION:
                  </span>
                  <span className="dark:text-white text-slate-900">
                    New Delhi, India
                  </span>
                </div>
              </div>

              <p className="text-sm dark:text-slate-400 text-slate-600 font-sans leading-relaxed border-none pt-2">
                {selectedDoc.description}
              </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm dark:text-slate-400 text-slate-500">
                Verified against Ministry records • Public Charitable Trust
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-2 rounded-xl dark:bg-amber-400/20 dark:text-amber-200 bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold hover:bg-amber-200 cursor-pointer"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
