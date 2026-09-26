import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import  UpcomingEvents  from "@/app/events/components/UpcomingEvents";
import { FOUNDATION_EVENTS_LIST } from "@/data/events";

const Events = () => {
  // Filter only Past and Ongoing events for the grid archive
  const archiveEvents = FOUNDATION_EVENTS_LIST.filter(
    (evt) => evt.category === "Past" || evt.category === "Ongoing"
  );
  return (
    <div
      id="events-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-linear-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Moments of Impact</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Transformative Gatherings & Community Drives
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            From monumental milestone ceremonies to community initiatives, witness our compassion transformed into on-ground celebration and solidarity.
          </p>
        </div>

        {/* All Events Grid Listing */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            All Events & Drives Archive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {archiveEvents.map((evt) => (
              <Link
                key={evt.id}
                href={`/events/${evt.slug}`}
                className="block group cursor-pointer"
              >
                <div className="bg-white dark:bg-[#0c2242] rounded-3xl overflow-hidden shadow-xl border border-transparent hover:border-amber-300/60 flex flex-col h-full transition-all duration-300">
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={evt.imageUrl}
                      alt={evt.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow">
                        {evt.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold dark:text-amber-300 text-amber-800">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          {evt.date.day} {evt.date.month}, {evt.date.year}
                        </span>
                        {evt.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                            {evt.location}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-slate-900 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {evt.title}
                      </h3>

                      {evt.summary && (
                        <p className="text-sm dark:text-slate-300 text-slate-600 line-clamp-2 leading-relaxed">
                          {evt.summary}
                        </p>
                      )}
                    </div>

                    {evt.highlight && (
                      <div className="p-3 rounded-xl dark:bg-[#08182e] bg-amber-50 text-xs dark:text-amber-100 text-amber-950 border border-transparent">
                        <span className="font-bold block mb-0.5">Impact Highlight:</span>
                        {evt.highlight}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming drives + RSVP modal (client island) */}
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Events;