import { motion } from "framer-motion";
import { Droplets, Flame, Factory, TrendingDown, ArrowRight } from "lucide-react";

const crisisStats = [
  {
    icon: Droplets,
    value: "72%",
    label: "Water Waste",
    description: "in wet processing",
    color: "destructive",
  },
  {
    icon: Flame,
    value: "60%",
    label: "Thermal Energy Waste",
    description: "in heating cycles",
    color: "warning",
  },
  {
    icon: Factory,
    value: "1.2M",
    label: "MSMEs Affected",
    description: "across textile clusters",
    color: "muted-foreground",
  },
];

const athyronDelta = [
  {
    before: "72%",
    after: "18%",
    label: "Water Waste",
    savings: "54% Reduction",
  },
  {
    before: "60%",
    after: "15%",
    label: "Energy Waste",
    savings: "45% Reduction",
  },
  {
    before: "40%",
    after: "8%",
    label: "Chemical Waste",
    savings: "32% Reduction",
  },
  {
    before: "25%",
    after: "3%",
    label: "Non-RFT Rate",
    savings: "22% Improvement",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">The Industry Crisis &</span>{" "}
            <span className="text-gradient">The Athyron Delta</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            India's textile industry faces an existential challenge. We're here to solve it.
          </p>
        </motion.div>

        {/* Crisis Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {crisisStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center border-destructive/20"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-${stat.color}/10 flex items-center justify-center mb-4`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
              <p className="text-4xl md:text-5xl font-bold font-mono text-destructive mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The Athyron Delta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-10">
            <TrendingDown className="w-8 h-8 text-success" />
            <div>
              <h3 className="text-2xl font-bold">The Athyron Delta</h3>
              <p className="text-muted-foreground">Before vs. After Retrofit Implementation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {athyronDelta.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-muted/50 border border-border"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  {item.label}
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-2xl font-mono font-bold text-destructive line-through opacity-60">
                    {item.before}
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-mono font-bold text-success">
                    {item.after}
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                    {item.savings}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Market Size */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">TAM</p>
              <p className="text-3xl font-bold text-foreground">$11B</p>
              <p className="text-sm text-muted-foreground">Indian Textile Market</p>
            </div>
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">SAM</p>
              <p className="text-3xl font-bold text-foreground">$3B</p>
              <p className="text-sm text-muted-foreground">Export-Ready Units</p>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">SOM</p>
              <p className="text-3xl font-bold text-primary">$450M</p>
              <p className="text-sm text-muted-foreground">Key Cluster Focus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
