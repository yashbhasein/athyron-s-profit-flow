import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Droplets,
  Zap,
  FlaskConical,
  TrendingUp,
  QrCode,
  Info,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CircuitOverlay from "./graphics/CircuitOverlay";
import industrialMachine from "@/assets/industrial-machine.jpg";

const tooltipContainer =
  typeof window !== "undefined" ? document.body : undefined;


const HomeROISection = () => {
  const [batchCount, setBatchCount] = useState([50]);
  const [nonRFTRate, setNonRFTRate] = useState([15]);
  const [showPassport, setShowPassport] = useState(false);
  const [profitIncrease, setProfitIncrease] = useState(0);

  // Calculate waste multipliers based on inputs
  const waterMultiplier = 1 + (nonRFTRate[0] / 100) * 3;
  const energyMultiplier = 1 + (nonRFTRate[0] / 100) * 2;
  const chemicalMultiplier = 1 + (nonRFTRate[0] / 100) * 1.5;

  useEffect(() => {
    const avgBatchValue = 25000;
    const savingsRate = (nonRFTRate[0] / 100) * 0.7;
    const monthlyProfit = batchCount[0] * avgBatchValue * savingsRate * 30;
    setProfitIncrease(Math.round(monthlyProfit));
  }, [batchCount, nonRFTRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Industrial Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${industrialMachine})` }}
      />
      {/* Deep Navy Overlay */}
      <div className="absolute inset-0 bg-[#020617]/85" />

      {/* Circuit Overlay */}
      <CircuitOverlay variant="section" />

      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute inset-0 radial-glow-center" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Profit & Compliance</span>{" "}
            <span className="text-gradient">Command Center</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See exactly how much you're losing to inefficiency — and what Athyron
            can recover.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card border-beam p-8 overflow-visible"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                ROI & Inefficiency Calculator
              </h3>

              {/* ✅ WORKING TOOLTIP */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-xs text-muted-foreground hover:text-[#35bdf8] flex items-center gap-1 transition-colors">
                      <Info className="w-3 h-3" />
                      How is this calculated?
                    </button>
                  </TooltipTrigger>

                  <TooltipContent
                    container={tooltipContainer}
                    side="bottom"
                    align="end"
                    sideOffset={10}
                    className="z-[2147483647] max-w-md p-5
                              bg-[#020617]/95 backdrop-blur-sm
                              border-2 border-[#35bdf8]
                              rounded-xl
                              shadow-[0_0_30px_rgba(53,189,248,0.35)]"
                  >
                    <p className="text-sm leading-relaxed">
                      <strong className="text-[#35bdf8] block mb-2">
                        Calculation Logic:
                      </strong>
                      <span className="text-foreground/90">
                        Profit Increase = (15% reduction in water & chemical
                        waste) + (steam energy savings) + (revenue gain from RFT
                        optimization). By improving Right-First-Time from ~75% to
                        95.5%, the 2× cost of re-dyeing is eliminated, effectively
                        doubling profit per batch.
                      </span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Batch Count Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-muted-foreground">
                  Current Batch Count (Daily)
                </label>
                <span className="text-sm font-mono font-bold text-primary">
                  {batchCount[0]} batches
                </span>
              </div>
              <Slider
                value={batchCount}
                onValueChange={setBatchCount}
                min={10}
                max={200}
                step={5}
                className="w-full"
              />
            </div>

            {/* Non-RFT Rate Slider */}
            <div className="mb-10">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-muted-foreground">
                  Non-RFT (Right-First-Time) Rate
                </label>
                <span className="text-sm font-mono font-bold text-destructive">
                  {nonRFTRate[0]}%
                </span>
              </div>
              <Slider
                value={nonRFTRate}
                onValueChange={setNonRFTRate}
                min={5}
                max={40}
                step={1}
                className="w-full"
              />
            </div>

            {/* Resource Multipliers */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <Droplets className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-primary">
                  {waterMultiplier.toFixed(1)}X
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Water Wasted
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-warning">
                  {energyMultiplier.toFixed(1)}X
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Energy Wasted
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <FlaskConical className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-3xl font-bold font-mono text-success">
                  {chemicalMultiplier.toFixed(1)}X
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Chemicals Wasted
                </p>
              </div>
            </div>

            {/* Profit Counter */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Potential Monthly Profit Increase
              </p>
              <motion.p
                key={profitIncrease}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="data-counter"
              >
                {formatCurrency(profitIncrease)}
              </motion.p>
            </div>
          </motion.div>

          {/* EU 2026 Passport Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card border-beam p-8"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-primary" />
              EU 2026 Digital Product Passport
            </h3>

            <p className="text-muted-foreground text-sm mb-8">
              From 2026, textiles exported to the EU require a Digital Product
              Passport (DPP) with complete traceability data. Athyron
              auto-generates this compliance data.
            </p>

            <div
              className="relative p-6 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border cursor-pointer group"
              onMouseEnter={() => setShowPassport(true)}
              onMouseLeave={() => setShowPassport(false)}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-28 h-28 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center"
                  animate={
                    showPassport
                      ? {
                          boxShadow:
                            "0 0 30px hsl(207 100% 50% / 0.5)",
                          borderColor: "hsl(207 100% 50%)",
                        }
                      : {}
                  }
                >
                  <QrCode className="w-16 h-16 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Product ID
                  </p>
                  <p className="font-mono text-sm mb-4">
                    ATH-2026-DPP-001
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Certification Status
                  </p>
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

            <AnimatePresence>
              {showPassport && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-6 rounded-xl bg-muted border border-primary/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-sm">
                      Auto-Logged Compliance Data
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      Live Preview
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeROISection;
