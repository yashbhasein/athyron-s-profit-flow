import { motion } from "framer-motion";
import { Cpu, Activity, Wifi, Database } from "lucide-react";

const HeroGraphic = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      
      {/* Main Container */}
      <div className="relative w-full h-full border-beam rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card to-background" />
        
        {/* Grid Background */}
        <div className="absolute inset-0 tech-grid opacity-50" />
        
        {/* Central Machine Illustration */}
        <div className="absolute inset-8 flex flex-col items-center justify-center">
          {/* Machine Body */}
          <div className="relative w-48 h-32 border-2 border-border rounded-lg bg-muted/50 flex items-center justify-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/20 border border-primary/40 rounded text-xs font-mono text-primary">
              LEGACY MACHINE
            </div>
            
            {/* Internal Animation */}
            <div className="flex gap-2">
              <div className="w-8 h-16 bg-border rounded animate-pulse" />
              <div className="w-8 h-16 bg-border rounded animate-pulse delay-100" />
              <div className="w-8 h-16 bg-border rounded animate-pulse delay-200" />
            </div>
          </div>
          
          {/* Data Flow Lines */}
          <div className="relative w-32 h-12 my-4">
            <svg className="w-full h-full" viewBox="0 0 128 48">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(207 100% 50%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(207 100% 50%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(207 100% 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M64 0 L64 24 M64 24 L32 48 M64 24 L96 48"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="64" cy="12" r="3" fill="hsl(207 100% 50%)">
                <animate attributeName="cy" values="0;48" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          
          {/* Athyron Module */}
          <motion.div 
            className="relative w-40 h-20 border-2 border-primary rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center glow-blue"
            animate={{ 
              boxShadow: [
                "0 0 20px hsl(207 100% 50% / 0.3)",
                "0 0 40px hsl(207 100% 50% / 0.5)",
                "0 0 20px hsl(207 100% 50% / 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary border border-primary rounded text-xs font-mono text-primary-foreground">
              ATHYRON MODULE
            </div>
            <Cpu className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
        
        {/* Floating Data Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-8 left-4 p-3 rounded-lg bg-card/80 backdrop-blur border border-border"
        >
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary">pH 7.42</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute top-8 right-4 p-3 rounded-lg bg-card/80 backdrop-blur border border-border"
        >
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-success" />
            <span className="text-xs font-mono text-success">Online</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-lg bg-card/80 backdrop-blur border border-primary/30"
        >
          <div className="flex items-center gap-3">
            <Database className="w-4 h-4 text-primary" />
            <div className="flex gap-2">
              <span className="text-xs font-mono text-muted-foreground">Response:</span>
              <span className="text-xs font-mono text-warning">&lt;50ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroGraphic;