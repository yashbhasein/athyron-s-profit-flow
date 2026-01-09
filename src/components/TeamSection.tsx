import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const founders = [
  {
    name: "Aryan Prabhugaonkar",
    role: "Co-Founder & CEO",
    bio: "Leading vision and strategy with deep expertise in industrial IoT and manufacturing technology.",
    linkedin: "#",
    email: "aryan@athyron.com",
    initials: "AP",
  },
  {
    name: "Yash Bhasein",
    role: "Co-Founder & CTO",
    bio: "Architecting the edge-first platform with expertise in embedded systems and real-time computing.",
    linkedin: "#",
    email: "yash@athyron.com",
    initials: "YB",
  },
  {
    name: "Atharva Telang",
    role: "Co-Founder & COO",
    bio: "Driving operations and partnerships across textile clusters in Surat, Tiruppur, and Ludhiana.",
    linkedin: "#",
    email: "atharva@athyron.com",
    initials: "AT",
  },
  {
    name: "Ronak Mandot",
    role: "Co-Founder & CPO",
    bio: "Shaping product experience with a focus on factory-floor usability and data visualization.",
    linkedin: "#",
    email: "ronak@athyron.com",
    initials: "RM",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
      
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary">{founder.initials}</span>
              </div>

              <h3 className="text-lg font-semibold mb-1">{founder.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-muted-foreground mb-6">{founder.bio}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={founder.linkedin}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
