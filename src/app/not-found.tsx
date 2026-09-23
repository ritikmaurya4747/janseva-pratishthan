import { ROUTES } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-5 dark:bg-[#050e1c] bg-[#fbf9f4]">
      <Image
        src="/logo.jpeg"
        alt="Foundation Logo"
        width={96}
        height={96}
        quality={100}
        className="w-12 h-12 group-hover:scale-105 transition-transform shrink-0 object-contain"
        priority
      />
      <h1 className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-slate-900">
        Page not found
      </h1>
      <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 max-w-md">
        This page doesn&apos;t exist or has moved. Use the links below to
        continue.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href={ROUTES.home}
          className="px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-stone-950 bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400"
        >
          Go to Home
        </Link>
        <Link
          href={ROUTES.ourWork}
          className="px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider dark:text-amber-200 text-amber-900 bg-amber-100 dark:bg-amber-400/20"
        >
          Explore Our Work
        </Link>
      </div>
    </div>
  );
}
