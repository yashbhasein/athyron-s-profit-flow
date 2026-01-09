import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const focusAreas = [
  { city: "Surat", state: "Gujarat", specialty: "Synthetic Textiles" },
  { city: "Tiruppur", state: "Tamil Nadu", specialty: "Knitwear & Hosiery" },
  { city: "Ludhiana", state: "Punjab", specialty: "Woolen & Hosiery" },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">We'd Love to</span>{" "}
            <span className="text-gradient">Hear from You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're interested in a demo, partnership, or technical discussion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-center">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto"
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto"
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto"
                      style={{ pointerEvents: 'auto' }}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select required>
                      <SelectTrigger className="bg-muted/50 border-border focus:border-primary relative z-10 pointer-events-auto">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="z-50">
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="investment">Investment Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                    className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary resize-none relative z-10 pointer-events-auto"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_20px_-4px_hsl(185_100%_50%_/_0.4)] h-12"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Focus Areas
              </h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{area.city}</h4>
                        <p className="text-sm text-muted-foreground">{area.state}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {area.specialty}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@athyron.com"
                  className="block p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-foreground font-medium">hello@athyron.com</p>
                </a>
                <a
                  href="tel:+919876543210"
                  className="block p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
