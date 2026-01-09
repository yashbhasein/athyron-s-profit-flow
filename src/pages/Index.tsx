import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import HeroSection from "@/components/HeroSection";
import HomeROISection from "@/components/HomeROISection";
import HomeSolutionPreview from "@/components/HomeSolutionPreview";
import HomeImpactPreview from "@/components/HomeImpactPreview";
import HomeTeamPreview from "@/components/HomeTeamPreview";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Index = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <HomeROISection />
        <div className="section-divider" />
        <HomeSolutionPreview />
        <div className="section-divider" />
        <HomeImpactPreview />
        <div className="section-divider" />
        <HomeTeamPreview />
      </main>
      <Footer />
      <ChatbotButton />
    </motion.div>
  );
};

export default Index;