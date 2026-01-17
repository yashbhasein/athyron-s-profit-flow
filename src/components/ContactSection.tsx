import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CheckCircle, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const focusAreas = [{
  city: "Surat",
  state: "Gujarat",
  specialty: "Synthetic Textiles"
}, {
  city: "Tiruppur",
  state: "Tamil Nadu",
  specialty: "Knitwear & Hosiery"
}, {
  city: "Ludhiana",
  state: "Punjab",
  specialty: "Woolen & Hosiery"
}];
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string || null;
    const category = formData.get('category') as string;
    const message = formData.get('message') as string;
    try {
      const {
        error
      } = await supabase.from('contact_submissions').insert({
        name,
        email,
        phone,
        category,
        message
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours."
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
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
            <span className="text-foreground">We'd Love to</span>{" "}
            <span className="text-gradient">Hear from You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're interested in a demo, partnership, or technical discussion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="glass-card p-8">
            {isSubmitted ? <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-center">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
              </div> : <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input name="name" placeholder="Your name" required className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto" style={{
                  pointerEvents: 'auto'
                }} />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input name="email" type="email" placeholder="your@email.com" required className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto" style={{
                  pointerEvents: 'auto'
                }} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary relative z-10 pointer-events-auto" style={{
                  pointerEvents: 'auto'
                }} />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select name="category" required>
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
                  <Textarea name="message" placeholder="Tell us about your requirements..." rows={5} required className="bg-muted/50 border-border focus:border-primary focus-visible:ring-primary resize-none relative z-10 pointer-events-auto" style={{
                pointerEvents: 'auto'
              }} />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_20px_-4px_hsl(185_100%_50%_/_0.4)] h-12">
                  {isSubmitting ? <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span> : <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>}
                </Button>
              </form>}
          </motion.div>

          {/* Focus Areas */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="space-y-6">
            

            {/* Quick Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <a href="https://www.instagram.com/athyron.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Instagram</p>
                    <p className="text-foreground font-medium">@athyron.in</p>
                  </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">YouTube</p>
                    <p className="text-foreground font-medium">Athyron</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;