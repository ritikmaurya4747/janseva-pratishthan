"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import confetti from "canvas-confetti";
import { Calendar, CheckCircle2, MapPin, X } from "lucide-react";
import { FOUNDATION_EVENTS } from "@/data";
import type { FoundationEvent } from "@/types";

/** Client island: upcoming drives + the RSVP / digital pass modal. */
export function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState<FoundationEvent | null>(
    null,
  );
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [rsvpPhone, setRsvpPhone] = useState("");
  const [rsvpPassGenerated, setRsvpPassGenerated] = useState(false);

  const upcomingEvents = FOUNDATION_EVENTS.filter(
    (e) => e.status === "upcoming",
  );

  const handleRsvpSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });

    setRsvpPassGenerated(true);
  };

  return (
    <>
      {/* Upcoming Events Section */}
      <div className="space-y-8">
        <div className="border-none pb-4 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <h3 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
            Upcoming Community Action Drives
          </h3>
          <span className="text-sm dark:text-amber-300 text-amber-800 font-semibold uppercase tracking-wider">
            {upcomingEvents.length} Active Events
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl dark:bg-gradient-to-b dark:from-[#0c2242]/90 dark:to-[#1b080f]/90 bg-white border border-slate-200/80 hover:border-amber-300/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden h-44 border-none shadow">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-2.5 right-2.5 text-sm font-bold uppercase tracking-wider bg-blue-950/90 text-amber-300 border-none px-2 py-0.5 rounded shadow">
                    {event.badge}
                  </span>
                </div>

                <span className="text-sm font-bold uppercase tracking-wider dark:text-amber-300 text-amber-800 block">
                  {event.category}
                </span>

                <h4 className="font-display text-lg font-bold dark:text-white text-slate-900 leading-snug">
                  {event.title}
                </h4>

                <div className="space-y-1 text-sm dark:text-slate-300 text-slate-600">
                  <div className="flex items-center gap-1.5 dark:text-amber-200 text-amber-800">
                    <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 dark:text-slate-300 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm dark:text-slate-300 text-slate-600 line-clamp-3 leading-relaxed">
                  {event.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-none flex items-center justify-between">
                <span className="text-sm dark:text-slate-400 text-slate-500">
                  {event.attendees}
                </span>
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setRsvpPassGenerated(false);
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 transition-colors cursor-pointer"
                >
                  RSVP / Join Drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 !m-0">
          <div className="relative w-full max-w-lg dark:bg-gradient-to-br dark:from-[#0c2242] dark:via-[#210810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 rounded-2xl p-6 shadow-2xl dark:text-slate-100 text-slate-900">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer border-none"
            >
              <X className="w-5 h-5" />
            </button>

            {!rsvpPassGenerated ? (
              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
                  Event RSVP Registration
                </span>
                <h3 className="font-display text-xl font-bold dark:text-white text-slate-900">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm dark:text-slate-300 text-slate-600">
                  Register to attend as a guest, supporter, or volunteer for
                  this upcoming community drive.
                </p>

                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address (for entry pass) *"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={rsvpPhone}
                    onChange={(e) => setRsvpPhone(e.target.value)}
                    className="w-full dark:bg-[#08182e] dark:text-white bg-slate-50 text-slate-900 border border-slate-300 rounded-lg px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full max-sm:px-4 max-sm:tracking-wide max-sm:text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-100 shadow-[0_0_15px_rgba(212,175,55,0.4)] border-none transition-all cursor-pointer"
                >
                  Generate Digital Entry Pass
                </button>
              </form>
            ) : (
              /* Event Pass Preview */
              <div className="text-center space-y-4 py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-none flex items-center justify-center mx-auto text-emerald-500 shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold dark:text-white text-slate-900">
                    Registration Confirmed!
                  </h4>
                  <p className="text-sm dark:text-amber-200 text-amber-800">
                    We look forward to welcoming you, {rsvpName}.
                  </p>
                </div>

                {/* Digital Pass Card */}
                <div className="p-4 rounded-xl dark:bg-[#08182e] bg-slate-100 border border-slate-200 text-left font-mono text-sm dark:text-slate-300 text-slate-800 space-y-2 shadow-inner">
                  <div className="flex justify-between border-none pb-2">
                    <span className="font-bold dark:text-white text-slate-900">
                      JANSEVA PRATISHTHAN FOUNDATION
                    </span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      EVENT PASS
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div>ATTENDEE: {rsvpName}</div>
                    <div>EVENT: {selectedEvent.title}</div>
                    <div>DATE: {selectedEvent.date}</div>
                    <div>VENUE: {selectedEvent.location}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2 rounded-xl dark:bg-amber-400/20 dark:text-amber-200 bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold hover:bg-amber-200 cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
