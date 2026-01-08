import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import athyronLogo from "@/assets/athyron-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <img src={athyronLogo} alt="Athyron" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-foreground">ATHYRON</p>
              <p className="text-xs text-muted-foreground">Industrial IoT Solutions</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8"
          >
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Solution
            </a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-end gap-4"
          >
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Athyron Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            CIN: U72900MH2024PTC123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
