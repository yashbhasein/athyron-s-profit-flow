import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplets, Leaf, Play } from "lucide-react";
import HeroGraphic from "./graphics/HeroGraphic";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Industrial IoT for Textile MSMEs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Athyron's AI retrofit upgrades </span>
              <span className="text-gradient">legacy machinery</span>{" "}
              <span className="text-foreground">into intelligent assets.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Promoting sustainable industrial practices while enabling MSMEs across India to optimize profitability.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(207_100%_50%_/_0.7)] transition-all duration-300"
                >
                  Request Demo
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-border bg-muted/50 text-foreground font-semibold text-base hover:bg-muted hover:border-primary/50 transition-all duration-300"
              >
                <Play className="w-5 h-5 text-primary" fill="currentColor" />
                Watch Demo
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">72%</p>
                  <p className="text-xs text-muted-foreground">Water Saved</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10 border border-success/30">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">60%</p>
                  <p className="text-xs text-muted-foreground">Energy Cut</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10 border border-warning/30">
                  <Leaf className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">EU 2026</p>
                  <p className="text-xs text-muted-foreground">Ready</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;