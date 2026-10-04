import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FOUNDATION_EVENTS } from "@/data";
import { ROUTES } from "@/lib/routes";

/** Server Component — spotlight on the inaugural laptop distribution event. */
export function LaunchSpotlight() {
  const launchEvent = FOUNDATION_EVENTS[0];

  return (
    <section className="py-20 dark:bg-linear-to-br dark:from-[#0c1f38] dark:via-[#1a070f] dark:to-[#071324] bg-[#fbf9f4] border-y border-transparent hover:border-amber-300/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image & Badge */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl group p-1 bg-linear-to-tr from-amber-400 via-yellow-200 to-amber-600">
            <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
              <Image
                src={launchEvent.image}
                alt="Laptop Distribution Ceremony"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#061122] via-[#061122]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-sm font-bold uppercase tracking-widest bg-amber-400 text-slate-950 px-2.5 py-1 rounded mb-2 shadow">
                  {launchEvent.badge}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  50 Laptops Distributed to Meritorious Girl Students
                </h4>
                <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  August 9, 2026 • New Delhi, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Story */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-800">
              Historic Launch Event
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold dark:text-white text-slate-900">
              Empowering Dreams Through Digital Access
            </h2>
            <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
              During the grand inaugural event of Janseva Pratishthan Foundation
              in New Delhi, 50 young women from economically constrained
              households were awarded high-performance laptops along with sports
              apparel.
            </p>
            <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
              "Our goal is not merely charitable hand-outs, but equipping youth
              with tools that permanently elevate their earning potential and
              self-confidence," highlighted founder Shabbir Shaikh during his
              keynote address.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href={ROUTES.events}
                className="px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider dark:bg-amber-400/20 dark:hover:bg-amber-400/30 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-transparent hover:border-amber-300/60 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Event Gallery & Future Drives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
