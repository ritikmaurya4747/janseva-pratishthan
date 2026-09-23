"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/** Only interactive piece of the footer — kept as a small client island. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <form onSubmit={handleSubscribe} className="pt-2">
      <span className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1.5">
        Subscribe to Impact Bulletin:
      </span>
      <div className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full dark:bg-[#081525] dark:text-white dark:placeholder-slate-500 bg-white border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-lg dark:bg-amber-400/20 dark:text-amber-300 bg-amber-100 text-amber-900 hover:bg-amber-200 border-none cursor-pointer flex items-center justify-center shrink-0 transition-colors"
          aria-label="Subscribe"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {subscribed && (
        <span className="inline-flex items-center gap-1 text-sm text-emerald-600 font-medium mt-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for joining!
        </span>
      )}
    </form>
  );
}
