import { motion } from "framer-motion";

interface CircuitOverlayProps {
  variant?: "hero" | "section" | "card";
  className?: string;
}

const CircuitOverlay = ({ variant = "section", className = "" }: CircuitOverlayProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg 
        className="absolute inset-0 w-full h-full opacity-20" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(197 100% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(197 100% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(197 100% 60%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Main circuit paths */}
        <g stroke="hsl(197 100% 60%)" strokeWidth="1" fill="none" filter="url(#glow)">
          {/* Horizontal lines */}
          <motion.path
            d="M0 200 H400 L450 250 H800 L850 200 H1200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0 400 H200 L250 350 H600 L650 400 H900 L950 350 H1200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M0 600 H300 L350 650 H700 L750 600 H1200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
          />
          
          {/* Vertical connectors */}
          <motion.path
            d="M400 0 V150 L450 200 V400 L400 450 V600"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.path
            d="M800 0 V200 L850 250 V500 L800 550 V800"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, delay: 0.7, repeat: Infinity, repeatType: "loop" }}
          />
        </g>
        
        {/* Circuit nodes */}
        <g fill="hsl(197 100% 60%)" filter="url(#glow)">
          <motion.circle
            cx="450" cy="250" r="4"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="650" cy="400" r="4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="350" cy="650" r="4"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, delay: 0.2, repeat: Infinity }}
          />
          <motion.circle
            cx="850" cy="200" r="4"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
          />
          <motion.circle
            cx="400" cy="450" r="4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, delay: 0.4, repeat: Infinity }}
          />
        </g>
        
        {/* Data pulse dots traveling along paths */}
        <motion.circle
          cx="0" cy="200" r="3"
          fill="hsl(197 100% 70%)"
          filter="url(#glow)"
          animate={{ 
            cx: [0, 400, 450, 800, 850, 1200],
            cy: [200, 200, 250, 250, 200, 200]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="0" cy="400" r="3"
          fill="hsl(197 100% 70%)"
          filter="url(#glow)"
          animate={{ 
            cx: [0, 200, 250, 600, 650, 900, 950, 1200],
            cy: [400, 400, 350, 350, 400, 400, 350, 350]
          }}
          transition={{ duration: 5, delay: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default CircuitOverlay;
