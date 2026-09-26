"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FOUNDATION_EVENTS_LIST, EventItem } from "@/data/events";
import { ROUTES } from "@/lib/routes";

const tabs = ["Past", "Upcoming", "Ongoing"] as const;

const HomeEventsSection = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Past");
  
  const filteredEvents = FOUNDATION_EVENTS_LIST.filter(
    (event) => event.category === activeTab,
  );

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#fbf9f4] dark:bg-[#050e1c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#a47b1e] dark:text-amber-400">
            EVENTS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Moments of Impact
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Join our journey through upcoming workshops, ongoing initiatives,
            and a legacy of transformative events.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-8 mb-12 border-b border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer ${
                activeTab === tab
                  ? "text-[#c59426] dark:text-amber-400"
                  : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59426] dark:bg-amber-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
            Events
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="block group cursor-pointer"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-[#0c2242] rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.2)] flex flex-col h-full"
                  >
                    <div className="w-full h-64 sm:h-80 overflow-hidden relative">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent dark:from-black/50 pointer-events-none" />
                    </div>

                    <div className="p-6 sm:p-8 flex items-stretch gap-6 sm:gap-8 flex-1">
                      <div className="flex flex-col items-center justify-center shrink-0 border-r border-slate-100 dark:border-slate-700/50 pr-6 sm:pr-8 min-w-18">
                        <span className="text-sm font-bold text-[#c59426] dark:text-amber-400 uppercase tracking-widest">
                          {event.date.month}
                        </span>
                        <span className="text-3xl font-display font-bold text-slate-900 dark:text-white leading-none my-1">
                          {event.date.day}
                        </span>
                        <span className="text-sm font-bold text-slate-400 dark:text-slate-500">
                          {event.date.year}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-[#c59426] dark:group-hover:text-amber-300 transition-colors">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center text-slate-500 dark:text-slate-400"
              >
                No {activeTab.toLowerCase()} events found at the moment.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href={ROUTES.events}
            className="px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white dark:text-slate-950 bg-[#745e31] hover:bg-[#5c4a25] dark:bg-amber-400 dark:hover:bg-amber-300 transition-colors shadow-lg cursor-pointer border-none"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
export default HomeEventsSection ;