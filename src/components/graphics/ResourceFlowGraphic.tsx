import { motion } from "framer-motion";
import { Droplets, Zap, FlaskConical, AlertTriangle } from "lucide-react";

const ResourceFlowGraphic = () => {
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
      <div className="absolute inset-0 glass-card border-beam overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="p-6 h-full flex flex-col">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-sm text-muted-foreground">Resource Multiplier Effect</h4>
            <p className="text-xs text-muted-foreground">One defect triggers a cascade of waste</p>
          </div>
          
          {/* Defect Trigger */}
          <div className="flex justify-center mb-4">
            <motion.div 
              className="p-3 rounded-lg bg-destructive/20 border border-destructive/50"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-sm font-medium text-destructive">1 Non-RFT Batch</span>
              </div>
            </motion.div>
          </div>
          
          {/* Flow Lines */}
          <svg className="absolute left-1/2 top-[45%] -translate-x-1/2 w-48 h-24" viewBox="0 0 192 96">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(0 84% 60%)" />
                <stop offset="100%" stopColor="hsl(207 100% 50%)" />
              </linearGradient>
            </defs>
            <path d="M96 0 L32 96" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M96 0 L96 96" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M96 0 L160 96" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          </svg>
          
          {/* Waste Icons */}
          <div className="mt-auto grid grid-cols-3 gap-4">
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-primary/10 border border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-2">
                <Droplets className="w-6 h-6 text-primary" />
                <Droplets className="w-6 h-6 text-primary/70" />
                <Droplets className="w-6 h-6 text-primary/40" />
              </div>
              <span className="text-xl font-bold font-mono text-primary">3X</span>
              <span className="text-xs text-muted-foreground">Water</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-warning/10 border border-warning/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-2">
                <Zap className="w-6 h-6 text-warning" />
                <Zap className="w-6 h-6 text-warning/60" />
              </div>
              <span className="text-xl font-bold font-mono text-warning">2X</span>
              <span className="text-xs text-muted-foreground">Energy</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-4 rounded-lg bg-success/10 border border-success/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-2">
                <FlaskConical className="w-6 h-6 text-success" />
                <FlaskConical className="w-5 h-5 text-success/50" />
              </div>
              <span className="text-xl font-bold font-mono text-success">1.5X</span>
              <span className="text-xs text-muted-foreground">Chemicals</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceFlowGraphic;