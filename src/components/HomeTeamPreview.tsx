import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import CircuitOverlay from "./graphics/CircuitOverlay";
import industrialMachine from "@/assets/industrial-machine.jpg";

const founders = [
  {
    name: "Aryan Prabhugaonkar",
    role: "Co-Founder & CEO",
    initials: "AP",
  },
  {
    name: "Yash Bhasein",
    role: "Co-Founder & CTO",
    initials: "YB",
  },
  {
    name: "Atharva Telang",
    role: "Co-Founder & COO",
    initials: "AT",
  },
  {
    name: "Ronak Mandot",
    role: "Co-Founder & CPO",
    initials: "RM",
  },
];

const HomeTeamPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Industrial Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${industrialMachine})` }}
      />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/90" />
      
      {/* Circuit Overlay */}
      <CircuitOverlay variant="section" />
      
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Meet the</span>{" "}
            <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A team of engineers and operators passionate about sustainable manufacturing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-bold text-primary">{founder.initials}</span>
              </div>

              <h3 className="text-base font-semibold mb-1">{founder.name}</h3>
              <p className="text-xs text-primary font-medium">{founder.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.5)] hover:shadow-[0_4px_40px_-4px_hsl(207_100%_50%_/_0.7)] transition-all duration-300"
          >
            Meet the Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTeamPreview;