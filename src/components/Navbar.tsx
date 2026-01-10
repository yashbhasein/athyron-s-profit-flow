import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import athyronLogo from "@/assets/athyron-logo.png";
const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "Solution",
  href: "/solution"
}, {
  name: "Impact",
  href: "/impact"
}, {
  name: "Team",
  href: "/team"
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={athyronLogo} alt="Athyron" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <li key={link.name}>
              <Link to={link.href} className={`text-sm font-medium transition-colors duration-200 relative group ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            </li>)}
        </ul>

        <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          <Link to="/contact" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-[0_4px_20px_-4px_hsl(207_100%_50%_/_0.4)] hover:shadow-[0_4px_30px_-4px_hsl(207_100%_50%_/_0.6)] transition-all duration-300">​Contact Us   </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="md:hidden absolute top-full left-0 right-0 glass-nav">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => <li key={link.name}>
                <Link to={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block text-lg font-medium transition-colors ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"}`}>
                  {link.name}
                </Link>
              </li>)}
            <li className="pt-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold">
                Request Demo
              </Link>
            </li>
          </ul>
        </motion.div>}
    </motion.header>;
};
export default Navbar;