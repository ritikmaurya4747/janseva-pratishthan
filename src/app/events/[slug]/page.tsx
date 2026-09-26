import Image from "next/image";
import { notFound } from "next/navigation";
import { FOUNDATION_EVENTS_LIST } from "@/data/events";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = FOUNDATION_EVENTS_LIST.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            {event.category} Event
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 leading-tight">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              {event.date.day} {event.date.month}, {event.date.year}
            </span>
            {event.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" />
                {event.location}
              </span>
            )}
            {event.attendees && (
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-500" />
                {event.attendees}
              </span>
            )}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 sm:h-112.5">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
          <p>{event.summary || "Detailed overview and highlights for this community gathering. Janseva Pratishthan Foundation continues to drive impactful changes through these dedicated drives."}</p>
          
          {event.highlight && (
            <div className="p-4 rounded-xl dark:bg-[#08182e]/90 bg-amber-50 border border-transparent hover:border-amber-300/60 text-sm dark:text-amber-100 text-amber-950 shadow-sm mt-4">
              <span className="font-bold dark:text-white text-slate-900 block mb-1">
                Impact Highlight:
              </span>
              {event.highlight}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}