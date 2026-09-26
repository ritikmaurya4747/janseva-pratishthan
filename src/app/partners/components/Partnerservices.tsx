import { Reveal } from "@/components/ui/Reveal";
import { PartnerService } from "../types/partnerTypes";

type PartnerServicesProps = {
  services: PartnerService[];
};

const PartnerServices = ({ services }: PartnerServicesProps) => {
  if (services.length === 0) return null;

  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal
          y={30}
          duration={0.8}
          margin="-100px"
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            What This Partnership Delivers
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Programs run in collaboration with the foundation&apos;s Healthcare
            and Anti-Drugs De-Addiction pillars.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <Reveal
                key={service.title}
                y={20}
                duration={0.6}
                margin="-60px"
                className="royal-card rounded-2xl p-6 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center mb-4">
                  <ServiceIcon className="w-5 h-5 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerServices;