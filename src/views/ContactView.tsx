import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FoundationLogo } from "@/components/FoundationLogo";
import { CONTACT_PAGE, FOUNDATION_INFO } from "@/data";
import { Icon } from "@/lib/icons";

const { contact } = FOUNDATION_INFO;

/** Server Component for /contact. Only the message form is a client island. */
export function ContactView() {
  return (
    <div
      id="contact-page"
      className="min-h-screen dark:bg-[#050e1c] bg-[#fbf9f4] dark:text-slate-100 text-slate-800 py-12 lg:py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-gradient-to-r dark:from-blue-950 dark:to-[#2c0812] bg-amber-100/80 border border-transparent hover:border-amber-300/60 dark:border-none dark:text-amber-300 text-amber-900 text-sm font-semibold uppercase tracking-widest shadow-sm">
            <FoundationLogo size="xs" showLabel={false} />
            <span>Official Communications</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 tracking-tight">
            Connect with the Foundation
          </h1>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
            We welcome collaboration with donors, volunteers, educational
            institutions, and media. Reach out through our official channels
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl dark:bg-gradient-to-br dark:from-[#0c2242] dark:to-[#1e0710] bg-white border border-transparent hover:border-amber-300/60 space-y-6 shadow-md">
              <h3 className="font-display text-xl font-bold dark:text-white text-slate-900 border-none pb-2">
                Headquarters & Secretariat
              </h3>

              <div className="space-y-4 text-sm dark:text-slate-300 text-slate-700">
                {CONTACT_PAGE.detailRows.map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl dark:bg-amber-400/20 dark:text-amber-300 bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon name={row.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider dark:text-amber-300 text-amber-900 block">
                        {row.label}
                      </span>
                      {row.fields.map((field, index) => (
                        <p
                          key={field}
                          className={`text-sm ${row.mono ? "font-mono" : ""} ${
                            index === 0
                              ? "dark:text-white text-slate-800 mt-0.5 leading-snug"
                              : "dark:text-slate-400 text-slate-500"
                          }`}
                        >
                          {contact[field as keyof typeof contact]}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Quick Link */}
              <a
                href={`${contact.whatsappLink}?text=${encodeURIComponent(CONTACT_PAGE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl dark:bg-emerald-600/30 dark:hover:bg-emerald-600/40 dark:text-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/50 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Instant Connect via WhatsApp</span>
              </a>
            </div>

            {/* Coverage Region Box */}
            <div className="p-5 rounded-2xl dark:bg-[#08182e] bg-white border border-transparent hover:border-amber-300/60 text-sm dark:text-slate-300 text-slate-700 space-y-2 shadow-md">
              <span className="text-sm font-bold uppercase tracking-widest dark:text-amber-300 text-amber-900 block">
                Operational Field Hubs
              </span>
              <p className="dark:text-slate-300 text-slate-600 leading-relaxed text-sm">
                {CONTACT_PAGE.fieldHubs}
              </p>
            </div>
          </div>

          {/* Interactive Form Column (client island) */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
