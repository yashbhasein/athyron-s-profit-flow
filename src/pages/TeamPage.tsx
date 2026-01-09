import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import TeamSection from "@/components/TeamSection";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const TeamPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />
      <main className="pt-20">
        <TeamSection />
      </main>
      <Footer />
      <ChatbotButton />
    </motion.div>
  );
};

export default TeamPage;