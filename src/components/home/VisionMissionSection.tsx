import { Reveal } from "@/components/ui/Reveal";
import { VISION_MISSION } from "@/data";
import { Icon } from "@/lib/icons";

/** Server Component — both cards are rendered from home.json → visionMission. */
const VisionMissionSection = () => {
  return (
    <section className="relative w-full bg-[#fbf9f4] dark:bg-[#071324] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VISION_MISSION.map((card, index) => (
            <Reveal
              key={card.id}
              duration={0.6}
              delay={index * 0.1}
              margin="-100px"
              className="bg-white dark:bg-[#0a182b] p-6 sm:p-12 lg:p-14 rounded-3xl sm:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-none"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100">
                  {card.title}
                </h3>
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-[#f8f4e6] dark:bg-[#112440] flex items-center justify-center shadow-sm">
                  <Icon
                    name={card.icon}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-[#c59426] dark:text-amber-400"
                  />
                </div>
              </div>
              <p className="text-justify text-[1rem] sm:text-[1.05rem] text-slate-600 dark:text-slate-300/90 leading-relaxed font-normal">
                {card.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default VisionMissionSection;
