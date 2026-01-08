import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, FlaskConical } from "lucide-react";
import ResourceFlowGraphic from "./graphics/ResourceFlowGraphic";

const HomeImpactPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Resource Flow Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ResourceFlowGraphic />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 border-l-4 border-l-destructive">
              <div className="flex items-center gap-4">
                <Droplets className="w-10 h-10 text-destructive" />
                <div>
                  <p className="text-4xl font-bold font-mono text-destructive">72%</p>
                  <p className="text-muted-foreground">Water Waste in wet processing</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-warning">
              <div className="flex items-center gap-4">
                <Zap className="w-10 h-10 text-warning" />
                <div>
                  <p className="text-4xl font-bold font-mono text-warning">60%</p>
                  <p className="text-muted-foreground">Thermal Energy Waste in heating cycles</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-success">
              <div className="flex items-center gap-4">
                <FlaskConical className="w-10 h-10 text-success" />
                <div>
                  <p className="text-4xl font-bold font-mono text-success">40%</p>
                  <p className="text-muted-foreground">Chemical Waste from re-processing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(207_100%_50%_/_0.7)] transition-all duration-300"
          >
            See Full Impact Analysis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeImpactPreview;