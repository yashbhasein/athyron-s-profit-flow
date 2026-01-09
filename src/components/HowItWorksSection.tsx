import { motion } from "framer-motion";
import { Wrench, Wifi, Activity, Cpu } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    step: "01",
    title: "Mount",
    description: "Clip-on sensors install in 4 hours",
    detail: "Zero production downtime, no machine modifications required",
    color: "primary",
  },
  {
    icon: Wifi,
    step: "02",
    title: "Connect",
    description: "Probes link to the Edge-AI 'Local Brain'",
    detail: "Secure wireless connection with offline-first architecture",
    color: "success",
  },
  {
    icon: Activity,
    step: "03",
    title: "Detect",
    description: "Real-time monitoring of pH, Dye, and Temperature",
    detail: "±0.01 pH accuracy with continuous data streaming",
    color: "warning",
  },
  {
    icon: Cpu,
    step: "04",
    title: "Optimize",
    description: "AI adjusts parameters on the fly to hit 95.5% RFT",
    detail: "Dynamic control replaces static timers for precision dyeing",
    color: "accent",
  },
];

const HowItWorksSection = () => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
          How It Works
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-foreground">From Installation to</span>{" "}
          <span className="text-gradient">Intelligence in 4 Steps</span>
        </h3>
      </motion.div>

      {/* Flowchart */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
          <div className="h-full bg-gradient-to-r from-primary via-success via-warning to-accent opacity-30 rounded-full" />
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-success via-warning to-accent rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card p-6 text-center h-full hover:border-primary/40 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`inline-block px-3 py-1 rounded-full bg-${step.color}/20 border border-${step.color}/40 text-${step.color} text-xs font-bold`}>
                    STEP {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_hsl(var(--${step.color})_/_0.2)]`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-foreground/90 mb-2">{step.description}</p>
                <p className="text-xs text-muted-foreground">{step.detail}</p>

                {/* Pulse effect on hover */}
                <div className={`absolute inset-0 rounded-xl bg-${step.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Arrow - Mobile/Tablet */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-primary rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Result Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-success/10 to-warning/10 border border-primary/20 text-center"
        >
          <p className="text-lg font-medium">
            <span className="text-muted-foreground">Result: </span>
            <span className="text-foreground">Legacy machines become </span>
            <span className="text-gradient font-bold">intelligent assets</span>
            <span className="text-foreground"> — achieving </span>
            <span className="text-success font-bold">95.5% Right-First-Time</span>
            <span className="text-foreground"> rates</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
