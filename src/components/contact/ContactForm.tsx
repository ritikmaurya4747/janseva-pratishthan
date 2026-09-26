"use client";

import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Send } from "lucide-react";
import { CONTACT_PAGE } from "@/data";

/** Client island: contact form state + confetti on submit. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(CONTACT_PAGE.subjects[0]);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });

    setIsSent(true);
  };

  return (
    <div className="lg:col-span-7">
      <div className="rounded-2xl dark:bg-gradient-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 p-6 sm:p-8 shadow-md">
        {!isSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-display text-xl font-bold dark:text-white text-slate-900">
              Send a Direct Communication
            </h3>
            <p className="text-sm dark:text-slate-300 text-slate-600">
              Please provide your contact information and details of your
              inquiry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full dark:bg-[#08182e] dark:text-white dark:placeholder-slate-400 bg-stone-50 border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-900 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@domain.com"
                  className="w-full dark:bg-[#08182e] dark:text-white dark:placeholder-slate-400 bg-stone-50 border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-900 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91..."
                  className="w-full dark:bg-[#08182e] dark:text-white dark:placeholder-slate-400 bg-stone-50 border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-900 mb-1">
                  Subject / Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full dark:bg-[#08182e] dark:text-white bg-stone-50 border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                >
                  {CONTACT_PAGE.subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase dark:text-amber-300 text-amber-900 mb-1">
                Message Content *
              </label>
              <textarea
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please elaborate on your message or proposal..."
                className="w-full dark:bg-[#08182e] dark:text-white dark:placeholder-slate-400 bg-stone-50 border border-transparent hover:border-amber-300/60 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full max-sm:px-4 max-sm:tracking-wide max-sm:text-center py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_20px_rgba(212,175,55,0.4)] border-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Secretariat</span>
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-none flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl font-bold dark:text-white text-slate-900">
              Message Dispatched Successfully
            </h4>
            <p className="text-sm dark:text-amber-200 text-amber-900 max-w-md mx-auto">
              Thank you, {name}. Your inquiry regarding "{subject}" has been
              delivered to the Janseva Pratishthan Foundation secretariat. We
              will reply to {email} shortly.
            </p>
            <button
              onClick={() => setIsSent(false)}
              className="px-6 py-2 rounded-xl dark:bg-amber-400/20 dark:text-amber-200 bg-amber-100 text-amber-900 border-none text-sm font-semibold hover:bg-amber-200 cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
