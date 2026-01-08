import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ROICalculator from "@/components/ROICalculator";
import SolutionSection from "@/components/SolutionSection";
import ImpactSection from "@/components/ImpactSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <ROICalculator />
        <div className="section-divider" />
        <SolutionSection />
        <div className="section-divider" />
        <ImpactSection />
        <div className="section-divider" />
        <TeamSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
