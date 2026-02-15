import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/HeroSection";
import ExecutiveDirectorLetter from "@/components/ExecutiveDirectorLetter";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import HistoryOverview from "@/components/HistoryOverview";
import FourDecadesTimeline from "@/components/FourDecadesTimeline";
import NewBeginning2020 from "@/components/NewBeginning2020";
import GrantPrograms from "@/components/GrantPrograms";
import ImpactStats from "@/components/ImpactStats";
import LegislativeWins from "@/components/LegislativeWins";
import BlackHealthNetwork from "@/components/BlackHealthNetwork";
import KeyAccomplishments from "@/components/KeyAccomplishments";
import HowDoICampaign from "@/components/HowDoICampaign";
import StakeholderFeedback from "@/components/StakeholderFeedback";
import LookingAhead from "@/components/LookingAhead";
import FinancialsChart from "@/components/FinancialsChart";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <BackToTop />
    <main>
      <HeroSection />
      <ExecutiveDirectorLetter />
      <ExecutiveSummary />
      <HistoryOverview />
      <FourDecadesTimeline />
      <NewBeginning2020 />
      <GrantPrograms />
      <ImpactStats />
      <LegislativeWins />
      <BlackHealthNetwork />
      <KeyAccomplishments />
      <HowDoICampaign />
      <StakeholderFeedback />
      <LookingAhead />
      <FinancialsChart />
    </main>
    <Footer />
  </div>
);

export default Index;
