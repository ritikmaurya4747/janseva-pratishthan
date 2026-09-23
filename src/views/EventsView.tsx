import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { FoundationLogo } from "@/components/FoundationLogo";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { FOUNDATION_EVENTS } from "@/data";

/** Server Component for /events. Only the upcoming list (RSVP modal) is a client island. */
export function EventsView() {
  const pastEvents = FOUNDATION_EVENTS.filter((e) => e.status === "past");

  return (
    <div
      id="events-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-gradient-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100 text-amber-900 border border-transparent hover:border-amber-300/60 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Moments of Impact</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Transformative Gatherings & Community Drives
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            From monumental milestone ceremonies to nocturnal winter blanket
            caravans, witness our compassion transformed into on-ground
            celebration and solidarity.
          </p>
        </div>

        {/* Featured Historic Inaugural Launch Event */}
        {pastEvents.map((evt) => (
          <div
            key={evt.id}
            className="rounded-3xl dark:bg-gradient-to-r dark:from-[#0c2242] dark:via-[#240810] dark:to-[#0c2242] bg-white border border-transparent hover:border-amber-300/60 p-6 sm:p-10 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border-none shadow-xl group">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  width={1200}
                  height={800}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061122] via-[#061122]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-sm font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-1 rounded shadow">
                    {evt.badge}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
                  {evt.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
                  {evt.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm dark:text-amber-200 text-amber-800">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    {evt.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    {evt.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-500" />
                    {evt.attendees}
                  </span>
                </div>

                <p className="text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                  {evt.summary}
                </p>

                <div className="p-4 rounded-xl dark:bg-[#08182e]/90 bg-amber-50 border border-transparent hover:border-amber-300/60 text-sm dark:text-amber-100 text-amber-950 shadow-sm">
                  <span className="font-bold dark:text-white text-slate-900 block mb-1">
                    Impact Highlight:
                  </span>
                  {evt.highlight}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Upcoming drives + RSVP modal (client island) */}
        <UpcomingEvents />
      </div>
    </div>
  );
}
