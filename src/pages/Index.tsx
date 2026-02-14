import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ImpactStats from "@/components/ImpactStats";
import ProgramsGrid from "@/components/ProgramsGrid";
import LegislativeWins from "@/components/LegislativeWins";
import FinancialsChart from "@/components/FinancialsChart";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <MissionSection />
      <ImpactStats />
      <ProgramsGrid />
      <LegislativeWins />
      <FinancialsChart />
    </main>
    <Footer />
  </div>
);

export default Index;
