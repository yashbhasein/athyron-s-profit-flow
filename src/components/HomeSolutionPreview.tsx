import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Wrench, Cpu } from "lucide-react";
import CircuitOverlay from "./graphics/CircuitOverlay";
import circuitBrain from "@/assets/circuit-brain.jpg";

const pillars = [
  {
    icon: Activity,
    title: "High-Precision Probes",
    description: "Real-time pH, dye concentration, and temperature monitoring with ±0.01 accuracy.",
  },
  {
    icon: Wrench,
    title: 'Non-Invasive "Clip-On" Tech',
    description: "Zero production downtime with our revolutionary 4-hour installation process.",
  },
  {
    icon: Cpu,
    title: 'Offline-First "Local Brain"',
    description: "Edge computing ensures <50ms response time even during internet blackouts.",
  },
];

const HomeSolutionPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Industrial Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${circuitBrain})` }}
      />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/90" />
      
      {/* Circuit Overlay */}
      <CircuitOverlay variant="section" />
      
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card border-beam p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/solution"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(207_100%_50%_/_0.7)] transition-all duration-300"
          >
            Explore Full Solution
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSolutionPreview;