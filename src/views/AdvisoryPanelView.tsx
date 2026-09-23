import Link from "next/link";
import { ArrowRight, Building2, ChevronRight } from "lucide-react";
import { AdvisoryPanelSection } from "@/components/advisory/AdvisoryPanelSection";
import { FoundationLogo } from "@/components/FoundationLogo";
import { T } from "@/components/ui/T";
import { ADVISORY_STATS } from "@/data";
import { ROUTES } from "@/lib/routes";

/** Server Component for /advisory-panel. The filterable member grid is a client island. */
export function AdvisoryPanelView() {
  return (
    <div
      id="advisory-panel-page"
      className="min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 py-10 lg:py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <Link
            href={ROUTES.home}
            className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors border-none bg-transparent cursor-pointer p-0"
          >
            <T en={"Home"} hi={"होम"} />
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={ROUTES.ourStory}
            className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors border-none bg-transparent cursor-pointer p-0"
          >
            <T en={"Our Story & Governance"} hi={"हमारी कहानी एवं नेतृत्व"} />
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-amber-700 dark:text-amber-300">
            <T en={"Advisory Panel"} hi={"सलाहकार समिति"} />
          </span>
        </nav>

        {/* Hero Banner Section */}
        <div className="relative rounded-3xl dark:bg-gradient-to-r dark:from-[#091a33] dark:via-[#1c0812] dark:to-[#091a33] bg-white border border-slate-200/90 dark:border-amber-400/25 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full dark:bg-amber-400/10 bg-amber-100 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider border border-amber-400/30 shadow-sm">
              <FoundationLogo size="xs" showLabel={false} />
              <span>
                <T
                  en={"Honorary Advisory Council"}
                  hi={"जनसेवा प्रतिष्ठान सलाहकार परिषद"}
                />
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight">
              <T
                en={"Distinguished Minds Steering Grassroots Transformation"}
                hi={"अनुभवी विचारकों का मार्गदर्शन, निष्कलंक सामाजिक सेवा"}
              />
            </h1>

            <p className="text-sm sm:text-base lg:text-lg dark:text-slate-300 text-slate-700 leading-relaxed font-normal">
              <T
                en={
                  "The Advisory Panel of Janseva Pratishthan Foundation comprises eminent constitutional jurists, senior medical consultants, academic policy leaders, and defense veterans. Their pro-bono stewardship guarantees statutory compliance, audited governance, and uncompromising social impact."
                }
                hi={
                  "जनसेवा प्रतिष्ठान फाउंडेशन की स्वतंत्र सलाहकार समिति में भारत के प्रख्यात कानूनी विशेषज्ञ, वरिष्ठ चिकित्सक, शिक्षाविद् एवं पूर्व सैन्य अधिकारी शामिल हैं। वे हमारे कार्यक्रमों में 100% पारदर्शिता, वैधानिक शुचिता और ज़मीनी प्रभाव सुनिश्चित करते हैं।"
                }
              />
            </p>

            {/* Key Governance Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
              {ADVISORY_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-2xl sm:text-3xl font-bold dark:text-amber-300 text-amber-800">
                    {stat.value}
                  </p>
                  <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">
                    <T en={stat.label} hi={stat.hindiLabel} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisory Panel Core Interactive Section (Simplified, clean cards) */}
        <AdvisoryPanelSection />

        {/* Advisory Secretariat & Institutional Contact Banner */}
        <div className="rounded-3xl dark:bg-gradient-to-r dark:from-[#091b34] dark:to-[#170a16] bg-slate-100 border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              <Building2 className="w-4 h-4" />
              <span>
                <T en={"Advisory Secretariat"} hi={"सलाहकार सचिवालय संपर्क"} />
              </span>
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold dark:text-white text-slate-900">
              <T
                en={"Connect with our Governance & Advisory Office"}
                hi={"संस्थागत साझेदारी व विचार-विमर्श"}
              />
            </h3>
            <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed">
              <T
                en={
                  "For CSR partnerships, institutional governance inquiries, or to connect with our honorary advisory secretariat, reach out directly to our central office in New Delhi."
                }
                hi={
                  "यदि आप एक कानूनी संस्था, सीएसआर प्रतिनिधि, चिकित्सालय या शैक्षणिक निकाय हैं और हमारे सलाहकार पैनल से विचार-विमर्श करना चाहते हैं, तो कृपया हमारे सचिवालय से संपर्क करें।"
                }
              />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href={ROUTES.contact}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider dark:bg-amber-400 dark:text-stone-950 bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border-none"
            >
              <span>
                <T en={"Contact Secretariat"} hi={"सचिवालय संपर्क"} />
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={ROUTES.donate}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider dark:bg-white/10 dark:hover:bg-white/20 dark:text-white bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 dark:border-white/10 shadow transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>
                <T en={"Donate (80G Exemption)"} hi={"दान करें (80G)"} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
