import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Droplets, Zap, FlaskConical, TrendingUp, QrCode, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CircuitOverlay from "./graphics/CircuitOverlay";
import industrialMachine from "@/assets/industrial-machine.jpg";
const HomeROISection = () => {
  const [batchCount, setBatchCount] = useState([50]);
  const [nonRFTRate, setNonRFTRate] = useState([15]);
  const [showPassport, setShowPassport] = useState(false);
  const [profitIncrease, setProfitIncrease] = useState(0);

  // Calculate waste multipliers based on inputs
  const waterMultiplier = 1 + nonRFTRate[0] / 100 * 3;
  const energyMultiplier = 1 + nonRFTRate[0] / 100 * 2;
  const chemicalMultiplier = 1 + nonRFTRate[0] / 100 * 1.5;
  useEffect(() => {
    const avgBatchValue = 10000;
    const savingsRate = nonRFTRate[0] / 100 * 0.2; // 20% of waste can be saved
    const monthlyProfit = batchCount[0] * avgBatchValue * savingsRate * 30;
    setProfitIncrease(Math.round(monthlyProfit));
  }, [batchCount, nonRFTRate]);
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };
  return <section className="py-24 relative overflow-hidden">
      {/* Industrial Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
      backgroundImage: `url(${industrialMachine})`
    }} />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/85" />
      
      {/* Circuit Overlay */}
      <CircuitOverlay variant="section" />
      
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute inset-0 radial-glow-center" />
      
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
            <span className="text-foreground">Profit & Compliance</span>{" "}
            <span className="text-gradient">Command Center</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See exactly how much you may be losing to inefficiency — and what Athyron can recover.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ROI Calculator */}
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
        }} className="glass-card border-beam p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                ROI & Inefficiency Calculator
              </h3>
            </div>

            {/* Batch Count Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-muted-foreground">Current Batch Count (Daily)</label>
                <span className="text-sm font-mono font-bold text-primary">{batchCount[0]} batches</span>
              </div>
              <Slider value={batchCount} onValueChange={setBatchCount} min={10} max={200} step={5} className="w-full" />
            </div>

            {/* Non-RFT Rate Slider */}
            <div className="mb-10">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-muted-foreground">Non-RFT (Right-First-Time) Rate</label>
                <span className="text-sm font-mono font-bold text-destructive">{nonRFTRate[0]}%</span>
              </div>
              <Slider value={nonRFTRate} onValueChange={setNonRFTRate} min={5} max={40} step={1} className="w-full" />
            </div>

            {/* Resource Multipliers */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <Droplets className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-primary">{waterMultiplier.toFixed(1)}X</p>
                <p className="text-xs text-muted-foreground mt-1">Water Wasted</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-warning">{energyMultiplier.toFixed(1)}X</p>
                <p className="text-xs text-muted-foreground mt-1">Energy Wasted</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <FlaskConical className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-success">{chemicalMultiplier.toFixed(1)}X</p>
                <p className="text-xs text-muted-foreground mt-1">Chemicals Wasted</p>
              </div>
            </div>

            {/* Profit Counter */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Potential Monthly Profit Increase
              </p>
              <motion.p key={profitIncrease} initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} className="data-counter">
                {formatCurrency(profitIncrease)}
              </motion.p>
            </div>
          </motion.div>

          {/* EU 2026 Passport Preview */}
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
        }} className="glass-card border-beam p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-primary" />
              EU 2026 Digital Product Passport
            </h3>

            <p className="text-muted-foreground text-sm mb-8">
              From 2026, textiles exported to the EU require a Digital Product Passport (DPP) 
              with complete traceability data. Athyron auto-generates this compliance data.
            </p>

            {/* Mock DPP Card */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border cursor-pointer group" onMouseEnter={() => setShowPassport(true)} onMouseLeave={() => setShowPassport(false)}>
              <div className="flex items-start gap-6">
                <motion.div className="w-28 h-28 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center" animate={showPassport ? {
                boxShadow: "0 0 30px hsl(207 100% 50% / 0.5)",
                borderColor: "hsl(207 100% 50%)"
              } : {}}>
                  <QrCode className="w-16 h-16 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Product ID</p>
                  <p className="font-mono text-sm mb-4">ATH-2026-DPP-001</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Certification Status</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    EU Compliant
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Hover to preview passport data
              </p>
            </div>

            {/* DPP Modal Preview */}
            <AnimatePresence>
              {showPassport && <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: 10
            }} className="mt-6 p-6 rounded-xl bg-muted border border-primary/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-sm">Auto-Logged Compliance Data</h4>
                    <span className="text-xs text-muted-foreground">Live Preview</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">pH Level Range</span>
                      <span className="font-mono text-sm text-primary">6.8 - 7.5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Dye Concentration</span>
                      <span className="font-mono text-sm text-success">98.2% Optimal</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Carbon Footprint</span>
                      <span className="font-mono text-sm text-warning">12.4 kg CO₂e</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Water Usage</span>
                      <span className="font-mono text-sm text-primary">45L/batch</span>
                    </div>
                  </div>
                </motion.div>}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>;
};
export default HomeROISection;