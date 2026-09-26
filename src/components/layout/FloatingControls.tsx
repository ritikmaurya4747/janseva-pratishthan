"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookmarkCheck, MessageCircle, Send, X } from "lucide-react";
import { FLOATING_CONTROLS, FOUNDATION_INFO } from "@/data";
import { ROUTES } from "@/lib/routes";

export function FloatingControls() {
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(FLOATING_CONTROLS.defaultMessage);

  const handleSendWhatsApp = () => {
    const url = `${FOUNDATION_INFO.contact.whatsappLink}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setWaModalOpen(false);
  };

  return (
    <>
      {/* Floating Left Tab: "JOIN US" */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          id="floating-join-us-tab"
          href={ROUTES.joinUs}
          className="group flex items-center gap-2 bg-[#0c2242] dark:bg-[#081525] text-amber-300 hover:text-amber-200 hover:bg-[#122e57] dark:hover:bg-[#112440] border-none rounded-r-xl rounded-l-none px-2 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 transform origin-left hover:scale-y-105 cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          title="Join Janseva Pratishthan Foundation as a Volunteer or Partner"
        >
          <div className="rotate-90">
            <BookmarkCheck className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-sm font-bold tracking-[0.24em] uppercase select-none">
            JOIN US
          </span>
        </Link>
      </div>

      {/* Floating Bottom-Right WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <AnimatePresence>
          {waModalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-3 w-80 sm:w-96 rounded-2xl dark:bg-linear-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 p-4 shadow-2xl backdrop-blur-xl dark:text-slate-100 text-slate-900"
            >
              <div className="flex items-center justify-between pb-3 border-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/20 border-none flex items-center justify-center text-[#25D366] shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold dark:text-slate-100 text-slate-900">
                      Foundation Help Desk
                    </h4>
                    <p className="text-sm text-emerald-500 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Typically replies within minutes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setWaModalOpen(false)}
                  className="p-1 rounded-full dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border-none"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="my-3 p-3 rounded-xl dark:bg-[#08182e] bg-slate-50 border border-slate-200/70 text-sm dark:text-slate-300 text-slate-700 leading-relaxed shadow-inner">
                <p className="font-semibold dark:text-amber-300 text-amber-800 mb-1">
                  Send a quick WhatsApp message:
                </p>
                <textarea
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border-none resize-none dark:text-slate-200 text-slate-800 text-sm focus:ring-0 focus:outline-none placeholder-slate-400"
                />
              </div>

              {/* Quick Actions — driven by navigation.json */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {FLOATING_CONTROLS.quickMessages.map((quick) => (
                  <button
                    key={quick.label}
                    onClick={() => setCustomMsg(quick.message)}
                    className="text-sm px-2 py-1 rounded dark:bg-[#08182e] dark:hover:bg-[#122e59] dark:text-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 cursor-pointer shadow-sm"
                  >
                    {quick.label}
                  </button>
                ))}
              </div>

              <button
                id="send-whatsapp-btn"
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md cursor-pointer border-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          id="floating-whatsapp-btn"
          onClick={() => setWaModalOpen((open) => !open)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border-none"
          title="Direct Support on WhatsApp"
          aria-label="Direct Support on WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-white fill-current">
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.65.74 5.14 2.03 7.27L2 30l6.95-1.99C11.02 29.28 13.44 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.07 19.53c-.34.96-1.99 1.77-2.73 1.88-.7.1-1.6.14-2.58-.17-1.42-.45-3.26-1.57-5.32-3.63-2.61-2.6-3.87-5.06-4.22-5.99-.44-1.18.06-2.3.62-2.86.35-.35.8-.57 1.25-.57.17 0 .34.02.49.04.42.06.66.19.86.66.3.71 1.03 2.5 1.12 2.69.09.19.15.41.03.66-.11.23-.21.36-.39.58-.19.22-.39.46-.57.65-.2.22-.42.45-.18.86.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.2.66.17.91-.11.25-.29 1.06-1.23 1.34-1.66.28-.42.57-.35.96-.2.39.14 2.47 1.16 2.89 1.38.42.21.71.32.81.49.1.18.1 1.04-.24 2zm0 0" />
          </svg>
        </button>
      </div>
    </>
  );
}
