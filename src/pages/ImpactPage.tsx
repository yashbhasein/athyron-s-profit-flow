import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";
import ImpactSection from "@/components/ImpactSection";
import textileWasteImg from "@/assets/textile-waste.jpg";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ImpactPage = () => {
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
        {/* Mission Statement Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${textileWasteImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-8">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-foreground">"Promoting sustainable industrial practices while enabling </span>
                <span className="text-gradient">MSMEs across India</span>
                <span className="text-foreground"> to optimize profitability."</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                The textile industry generates 92 million tons of waste annually. 
                We're changing that — one machine at a time.
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </section>

        <ImpactSection />
      </main>
      <Footer />
      <ChatbotButton />
    </motion.div>
  );
};

export default ImpactPage;
