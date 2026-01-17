import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Droplets, Leaf, Play } from "lucide-react";
import HeroGraphic from "./graphics/HeroGraphic";
import CircuitOverlay from "./graphics/CircuitOverlay";
import industrialMachine from "@/assets/industrial-machine.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Industrial Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${industrialMachine})`
    }} />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/90" />
      
      {/* Glowing Circuit Lines Overlay */}
      <CircuitOverlay variant="hero" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="space-y-8">
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
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(207_100%_50%_/_0.7)] transition-all duration-300">
                  ​Enhance Your Factory Today        
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              
            </div>

            {/* Stat Cards Grid - Glassmorphism */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[{
              value: "95.5%",
              label: "RFT Rate",
              icon: Zap
            }, {
              value: "<50ms",
              label: "Response Time",
              icon: Droplets
            }, {
              value: "15%",
              label: "Water Savings",
              icon: Droplets
            }, {
              value: "4hrs",
              label: "Install Time",
              icon: Leaf
            }].map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }} className="relative p-4 rounded-xl bg-white/5 backdrop-blur-md border border-[#35bdf8]/30 hover:border-[#35bdf8]/60 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#35bdf8]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <stat.icon className="w-5 h-5 text-[#35bdf8] mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-[#35bdf8]">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Right Content - Interactive Hero Graphic */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2
        }} className="relative">
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;