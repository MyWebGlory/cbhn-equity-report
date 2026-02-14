import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import YearInNumbers from "@/components/YearInNumbers";
import ImpactStats from "@/components/ImpactStats";
import ProgramsGrid from "@/components/ProgramsGrid";
import CommunityStories from "@/components/CommunityStories";
import EventsTimeline from "@/components/EventsTimeline";
import LegislativeWins from "@/components/LegislativeWins";
import Leadership from "@/components/Leadership";
import Partners from "@/components/Partners";
import LookingAhead from "@/components/LookingAhead";
import FinancialsChart from "@/components/FinancialsChart";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <MissionSection />
      <YearInNumbers />
      <ImpactStats />
      <ProgramsGrid />
      <CommunityStories />
      <EventsTimeline />
      <LegislativeWins />
      <Leadership />
      <Partners />
      <LookingAhead />
      <FinancialsChart />
    </main>
    <Footer />
  </div>
);

export default Index;
