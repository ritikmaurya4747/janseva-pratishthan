import type { Metadata } from "next";
import { FOUNDATION_INFO } from "@/data";
import { LeadershipSection } from "./components/LeadershipSection";

export const metadata: Metadata = {
  title: "Our Leadership",
  description: `Meet the national leadership team steering ${FOUNDATION_INFO.name}'s mission across every district we serve.`,
};

const page = () => {
  return (
    <div className="pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4 sm:mb-8">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Our National Leadership
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          The people steering {FOUNDATION_INFO.name}&apos;s mission — from the
          grassroots to the national office.
        </p>
      </div>

      <LeadershipSection />
    </div>
  );
}
export default page;
