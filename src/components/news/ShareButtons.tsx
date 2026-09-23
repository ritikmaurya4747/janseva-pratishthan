"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { newsHref } from "@/lib/routes";

/** Client island: clipboard + WhatsApp share need browser APIs. */
export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const articleUrl = () => `${window.location.origin}${newsHref(slug)}`;

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(articleUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `${title}\n\nRead more at: ${articleUrl()}`,
    );
    window.open(
      `https://api.whatsapp.com/send?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="ml-auto flex items-center gap-2">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#0c2242] border border-slate-200 dark:border-amber-400/20 text-slate-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors shadow-sm cursor-pointer"
        title="Copy link to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              Copied!
            </span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={handleWhatsApp}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm cursor-pointer"
        title="Share on WhatsApp"
      >
        <span>WhatsApp</span>
      </button>
    </div>
  );
}
