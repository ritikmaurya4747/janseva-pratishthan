import { HeroSlider } from "@/components/home/HeroSlider";
import { PillarsIconSlider } from "@/components/home/PillarsIconSlider";
import { FounderSection } from "@/components/home/FounderSection";
import { GeneralSecretarySection } from "@/components/home/GeneralSecretarySection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { HomeEventsSection } from "@/components/home/HomeEventsSection";
import { AreasOfImpactSection } from "@/components/home/AreasOfImpactSection";
import { WhereWeWorkSection } from "@/components/home/WhereWeWorkSection";
import { WhatsNewSection } from "@/components/home/WhatsNewSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { TreeOfLifeHero } from "@/components/home/TreeOfLifeHero";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { TreeAnatomy } from "@/components/home/TreeAnatomy";
import { FeaturedCauses } from "@/components/home/FeaturedCauses";
import { LaunchSpotlight } from "@/components/home/LaunchSpotlight";
import { FounderVision } from "@/components/home/FounderVision";
import { HomeCta } from "@/components/home/HomeCta";
import { LeadershipSection } from "@/components/home/LeadershipSection";

/**
 * Server Component. Every section is self-contained (imports its own data),
 * so the home page is just an ordered list — no props anywhere.
 */
export function HomeView() {
  return (
    <div
      id="home-view"
      className="relative min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 overflow-hidden transition-colors duration-300"
    >
      <HeroSlider />
      <PillarsIconSlider />
      {/* <FounderSection /> */}
      <LeadershipSection />
      {/* <GeneralSecretarySection /> */}
      <VisionMissionSection />
      <HomeEventsSection />
      <AreasOfImpactSection />
      <WhereWeWorkSection />
      <WhatsNewSection />
      <ReviewsSection />
      <TreeOfLifeHero />
      <ImpactMetrics />
      <TreeAnatomy />
      <FeaturedCauses />
      <LaunchSpotlight />
      <FounderVision />
      <HomeCta />
    </div>
  );
}
