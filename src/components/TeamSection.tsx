import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import aryanPhoto from "@/assets/aryan-photo.png";
import yashPhoto from "@/assets/yash-photo.jpeg";
import atharvaPhoto from "@/assets/atharva-photo.png";
import ronakPhoto from "@/assets/ronak-photo.png";

const founders = [{
  name: "Aryan Prabhugaonkar",
  role: "Co-Founder",
  linkedin: null,
  email: "aryanprabhu.777@gmail.com",
  image: aryanPhoto
}, {
  name: "Yash Bhasein",
  role: "Co-Founder",
  linkedin: "https://www.linkedin.com/in/yash-bhasein/",
  email: "yash.bhasein07@gmail.com",
  image: yashPhoto
}, {
  name: "Atharva Telang",
  role: "Co-Founder",
  linkedin: "https://www.linkedin.com/in/atharva-telang-6a2102375/",
  email: "f20250772@pilani.bits-pilani.ac.in",
  image: atharvaPhoto
}, {
  name: "Ronak Mandot",
  role: "Co-Founder",
  linkedin: null,
  email: "ronakmandot1234@gmail.com",
  image: ronakPhoto
}];
const TeamSection = () => {
  return <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Meet the</span>{" "}
            <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A team of students passionate about converting environmental challenges into functional, future-ready solutions. </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => <motion.div key={founder.name} initial={{
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
        }} className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border border-primary/30 mb-6 group-hover:scale-105 transition-transform duration-300">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-lg font-semibold mb-1">{founder.name}</h3>
              <p className="text-sm text-primary font-medium mb-6">{founder.role}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 relative z-20">
                {founder.linkedin && (
                  <a href={founder.linkedin} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                <a href={`mailto:${founder.email}`} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;