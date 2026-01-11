import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, Wifi, WifiOff, Clock, Shield, Wrench, Gauge, BarChart3, Globe2 } from "lucide-react";
import localBrainImg from "@/assets/local-brain.png";
import circuitBrain from "@/assets/circuit-brain.jpg";
import CircuitOverlay from "./graphics/CircuitOverlay";
import HowItWorksSection from "./HowItWorksSection";
const features = [{
  icon: Activity,
  title: "High-Precision Probes",
  description: "Real-time pH, dye concentration, and temperature monitoring.",
  deepDetail: "Detailed visibility into dye bath exhaustion rates. Our probes achieve ±0.01 pH accuracy across 0-100°C range with chemical-resistant construction for harsh industrial environments.",
  specs: ["±0.01 pH Accuracy", "0-100°C Range", "Chemical Resistant"],
  color: "primary"
}, {
  icon: BarChart3,
  title: "AI Dynamic Control",
  description: "Intelligent algorithms replace static timers for precision.",
  deepDetail: "Our AI learns your machine's behavior patterns and dynamically adjusts parameters in real-time, replacing fixed timer-based operations with adaptive control curves.",
  specs: ["Adaptive Learning", "Real-time Adjustment", "Pattern Recognition"],
  color: "success"
}, {
  icon: Gauge,
  title: "RFT Optimization",
  description: "Fewer defects, higher Right-First-Time rates.",
  deepDetail: "A visual funnel showing fewer defects leading to higher RFT rates. By optimizing from 75% to 95% RFT, we eliminate costly re-dyeing cycles that waste resources.",
  specs: ["75%→95% RFT", "Defect Prevention", "Quality Assurance"],
  color: "warning"
}, {
  icon: Wrench,
  title: 'The "Clip-On" Advantage',
  description: "Zero production downtime with 4-hour installation.",
  deepDetail: "A split-image comparing a 4-hour install vs. weeks of downtime. Our non-invasive sensors clip directly onto existing pipes and tanks without modifications.",
  specs: ["4-Hour Install", "No Machine Mods", "Universal Fit"],
  color: "accent"
}, {
  icon: Globe2,
  title: "Global Compliance",
  description: "Auto-generate EU 2026 Digital Product Passport data.",
  deepDetail: "Icons of green certifications and a passport. Athyron automatically logs pH, dye concentration, carbon footprint, and water usage for complete traceability.",
  specs: ["EU DPP Ready", "Carbon Tracking", "Full Traceability"],
  color: "primary"
}, {
  icon: Cpu,
  title: 'Offline-First "Local Brain"',
  description: "Edge Logic ensures <50ms response for safety-critical decisions.",
  deepDetail: "Safety-critical decisions made on-site to prevent batch ruins during power/internet flux. The Local Brain processes all sensor data locally, ensuring uninterrupted operation.",
  specs: ["<50ms Response", "Edge Computing", "Zero Downtime"],
  color: "warning"
}];
const SolutionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return <section id="solution" className="py-24 relative overflow-hidden">
      {/* Industrial Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${circuitBrain})`
    }} />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/95" />
      
      {/* Circuit Overlay */}
      <CircuitOverlay variant="section" />
      
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* How It Works Section */}
        <HowItWorksSection />

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            The Brain Transplant
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Transform Legacy Machines Into</span>{" "}
            <span className="text-gradient">Intelligent Assets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our retrofit solution adds intelligence to your existing machinery without 
            replacement costs or production interruption.
          </p>
        </motion.div>

        {/* 6 Pillars - Hover Expansion Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="relative glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:border-primary/30" style={{
          minHeight: hoveredCard === index ? '320px' : '220px'
        }}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                
                <AnimatePresence mode="wait">
                  {hoveredCard === index ? <motion.div key="detail" initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }}>
                      <p className="text-sm text-muted-foreground mb-4">{feature.deepDetail}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.specs.map(spec => <span key={spec} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                            {spec}
                          </span>)}
                      </div>
                    </motion.div> : <motion.p key="summary" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="text-sm text-muted-foreground">
                      {feature.description}
                    </motion.p>}
                </AnimatePresence>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>)}
        </div>

        {/* Edge Computing Diagram with Local Brain Image */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url(${localBrainImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">Offline-First Architecture</h3>
              <p className="text-muted-foreground">
                Smart decisions happen locally — internet blackouts won't stop your operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Sensors */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 shadow-[0_0_30px_hsl(207_100%_50%_/_0.2)]">
                  <Gauge className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Smart Sensors</h4>
                <p className="text-sm text-muted-foreground">Real-time data collection from pH, temperature, and dye probes</p>
              </div>

              {/* Connection Lines */}
              <div className="hidden md:flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <Wifi className="w-5 h-5 text-success" />
                  <div className="w-20 h-0.5 bg-gradient-to-r from-success to-primary" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-warning/10 border border-warning/30 flex items-center justify-center shadow-[0_0_30px_hsl(47_100%_50%_/_0.2)]">
                  <Cpu className="w-10 h-10 text-warning" />
                </div>
                <div className="flex items-center gap-4">
                  <WifiOff className="w-5 h-5 text-destructive" />
                  <div className="w-20 h-0.5 bg-gradient-to-r from-destructive to-warning" />
                  <span className="text-xs text-muted-foreground">Offline</span>
                </div>
              </div>

              {/* Response */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 border border-success/30 flex items-center justify-center mb-4 shadow-[0_0_30px_hsl(142_76%_36%_/_0.2)]">
                  <Clock className="w-10 h-10 text-success" />
                </div>
                <h4 className="font-semibold mb-2">&lt;50ms Response</h4>
                <p className="text-sm text-muted-foreground">Safety-critical decisions made instantly 
on the go.</p>
              </div>
            </div>

            {/* Key Point */}
            <div className="mt-10 p-6 rounded-xl bg-muted/50 border border-border text-center">
              <p className="text-sm text-muted-foreground">Rural-Ready: Our Local Brain ensures your machines stay smart even during internet blackouts common in industrial hubs across the country.<span className="text-foreground font-semibold">Rural-Ready:</span> Our Local Brain ensures your machines 
                stay smart even during internet blackouts common in industrial hubs like Surat, Tiruppur, and Ludhiana.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default SolutionSection;