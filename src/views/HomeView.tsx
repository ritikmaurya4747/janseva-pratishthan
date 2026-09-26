import AreasOfImpactSection from "@/components/home/AreasOfImpactSection";
import { FeaturedCauses } from "@/components/home/FeaturedCauses";
import FounderSection from "@/components/home/FounderSection";
import { FounderVision } from "@/components/home/FounderVision";
import { HeroSlider } from "@/components/home/HeroSlider";
import { HomeCta } from "@/components/home/HomeCta";
import HomeEventsSection from "@/components/home/HomeEventsSection";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { LaunchSpotlight } from "@/components/home/LaunchSpotlight";
import { PillarsIconSlider } from "@/components/home/PillarsIconSlider";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { TreeAnatomy } from "@/components/home/TreeAnatomy";
import { TreeOfLifeHero } from "@/components/home/TreeOfLifeHero";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import { WhatsNewSection } from "@/components/home/WhatsNewSection";
import { WhereWeWorkSection } from "@/components/home/WhereWeWorkSection";

/**
 * Server Component. Every section is self-contained (imports its own data),
 * so the home page is just an ordered list — no props anywhere.
 */
const HomeView =() =>{
  return (
    <div
      id="home-view"
      className="relative min-h-screen dark:bg-[#050e1c] dark:text-slate-100 bg-[#fbf9f4] text-slate-900 overflow-hidden transition-colors duration-300"
    >
      <HeroSlider />
      <PillarsIconSlider />
      <FounderSection />
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
export default HomeView;