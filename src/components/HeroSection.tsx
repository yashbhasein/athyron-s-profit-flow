import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Leaf } from "lucide-react";
import heroMachine from "@/assets/hero-machine.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[96px]" />

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
              <span className="text-foreground">Promoting</span>{" "}
              <span className="text-gradient">sustainable</span>{" "}
              <span className="text-foreground">industrial practices</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Enabling MSMEs across India to optimize profitability through
              smart retrofit solutions. Transform legacy machines into
              intelligent, EU-compliant assets.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#calculator"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-[0_4px_30px_-4px_hsl(185_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(185_100%_50%_/_0.7)] transition-all duration-300"
              >
                Calculate Your ROI
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#solution"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-border bg-muted/50 text-foreground font-semibold text-base hover:bg-muted hover:border-primary/50 transition-all duration-300"
              >
                Explore Solution
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Droplets className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">72%</p>
                  <p className="text-xs text-muted-foreground">Water Saved</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">60%</p>
                  <p className="text-xs text-muted-foreground">Energy Cut</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Leaf className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">EU 2026</p>
                  <p className="text-xs text-muted-foreground">Ready</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={heroMachine}
                alt="Athyron Smart Retrofit Technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Data Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-4 left-4 right-4 glass-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Real-time pH Level</p>
                    <p className="text-2xl font-mono font-bold text-primary">7.42</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Dye Concentration</p>
                    <p className="text-2xl font-mono font-bold text-success">98.3%</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Response Time</p>
                    <p className="text-2xl font-mono font-bold text-warning">&lt;50ms</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
