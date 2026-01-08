import { motion } from "framer-motion";
import { Activity, Cpu, Wifi, WifiOff, Clock, Shield, Wrench, Gauge } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Smart Sensor Retrofit",
    description: "High-precision probes for real-time pH, dye concentration, and temperature monitoring.",
    specs: ["±0.01 pH Accuracy", "0-100°C Range", "Chemical Resistant"],
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Non-Invasive Clip-On Tech",
    description: "Zero production downtime with our revolutionary 4-hour installation process.",
    specs: ["4-Hour Install", "No Machine Mods", "Universal Fit"],
    color: "success",
  },
  {
    icon: Cpu,
    title: 'Offline-First "Local Brain"',
    description: "Edge Logic ensures <50ms response time for safety-critical decisions.",
    specs: ["<50ms Response", "Edge Computing", "Local Storage"],
    color: "warning",
  },
  {
    icon: Shield,
    title: "Predictive Maintenance",
    description: "AI-powered alerts predict failures before they happen, reducing unplanned downtime.",
    specs: ["72hr Prediction", "Auto-Scheduling", "Parts Ordering"],
    color: "accent",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
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
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1.5 rounded-lg bg-muted text-xs font-mono text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Edge Computing Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Edge-First Architecture</h3>
            <p className="text-muted-foreground">
              Smart decisions happen locally — internet blackouts won't stop your operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Sensors */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
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
              <div className="w-20 h-20 rounded-2xl bg-warning/10 border border-warning/30 flex items-center justify-center">
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
              <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 border border-success/30 flex items-center justify-center mb-4">
                <Clock className="w-10 h-10 text-success" />
              </div>
              <h4 className="font-semibold mb-2">&lt;50ms Response</h4>
              <p className="text-sm text-muted-foreground">Safety-critical decisions made instantly at the edge</p>
            </div>
          </div>

          {/* Key Point */}
          <div className="mt-10 p-6 rounded-xl bg-muted/50 border border-border text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Rural-Ready:</span> Our Local Brain ensures your machines 
              stay smart even during internet blackouts common in industrial hubs like Surat, Tiruppur, and Ludhiana.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
