import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight, Users, Play, Briefcase, Settings, ArrowLeft } from "lucide-react";
import athyronLogo from "@/assets/athyron-logo.png";
const menuOptions = [{
  id: "demo",
  label: "See Athyron in Action",
  icon: Play,
  response: "Athyron transforms legacy textile machines into AI-powered smart systems. Our retrofit solution monitors pH, dye concentration, and temperature in real-time, achieving 95.5% Right-First-Time rates while reducing water and chemical waste by 15%. Watch your machines become intelligent assets without replacement costs or downtime."
}, {
  id: "business",
  label: "I want Athyron for my business",
  icon: Briefcase,
  response: "Great choice! Athyron is perfect for textile wet processing units looking to optimize profitability. Most customers see positive ROI within 3-6 months through reduced re-dyeing cycles and resource savings. Our clip-on sensors install in just 4 hours with zero production downtime. Ready to transform your operations?",
  followUp: "request-demo"
}, {
  id: "specs",
  label: "Technical Specs",
  icon: Settings,
  response: "Here's what powers Athyron:\n\n• **Local Brain**: Edge computing with <50ms response time\n• **Sensors**: ±0.01 pH accuracy, 0-100°C range\n• **Installation**: 4 hours, zero machine modifications\n• **Compatibility**: Jet dyeing, soft flow, jigger, pad dyeing\n• **Connectivity**: Works offline - rural-ready for Surat, Tiruppur, Ludhiana\n• **Compliance**: Auto-generates EU 2026 DPP data"
}, {
  id: "founder",
  label: "Talk to a Founder",
  icon: Users,
  showFounders: true,
  response: "Meet our founding team! Each brings unique expertise to revolutionizing textile manufacturing:"
}];
const founders = [{
  name: "Aryan Prabhugaonkar",
  role: "CEO & Co-founder",
  focus: "Vision & Strategy"
}, {
  name: "Yash Bhasein",
  role: "CTO & Co-founder",
  focus: "AI & Technology"
}, {
  name: "Atharva Telang",
  role: "COO & Co-founder",
  focus: "Operations"
}, {
  name: "Ronak Mandot",
  role: "CFO & Co-founder",
  focus: "Finance & Growth"
}];
type ViewState = "main" | "response" | "founders";
const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [messages, setMessages] = useState<{
    type: "bot" | "user";
    text: string;
    isMarkdown?: boolean;
  }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>("main");
  const [selectedOption, setSelectedOption] = useState<typeof menuOptions[0] | null>(null);

  // Proactive pop-up after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowProactive(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);
  const addBotMessage = (text: string, isMarkdown?: boolean, callback?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: "bot",
        text,
        isMarkdown
      }]);
      callback?.();
    }, 1500);
  };
  const handleOpen = () => {
    setIsOpen(true);
    setShowProactive(false);
    if (messages.length === 0) {
      addBotMessage("Hi! I'm Athyron's assistant. How can I help you today?");
    }
  };
  const handleOptionClick = (option: typeof menuOptions[0]) => {
    setMessages(prev => [...prev, {
      type: "user",
      text: option.label
    }]);
    setSelectedOption(option);
    if (option.showFounders) {
      addBotMessage(option.response, false, () => {
        setCurrentView("founders");
      });
    } else {
      addBotMessage(option.response, true, () => {
        setCurrentView("response");
      });
    }
  };
  const handleBack = () => {
    setCurrentView("main");
    setSelectedOption(null);
  };
  const resetChat = () => {
    setMessages([]);
    setCurrentView("main");
    setSelectedOption(null);
    setIsOpen(false);
  };
  const renderMarkdown = (text: string) => {
    // Simple markdown rendering for bold text and line breaks
    const parts = text.split(/(\*\*.*?\*\*|\n)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
      }
      if (part === '\n') {
        return <br key={index} />;
      }
      return part;
    });
  };
  return <>
      {/* Proactive Pop-up */}
      <AnimatePresence>
        {showProactive && !isOpen && <motion.div initial={{
        opacity: 0,
        y: 10,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 10,
        scale: 0.9
      }} className="fixed bottom-24 right-6 z-50">
            <div className="relative bg-card border border-border rounded-2xl p-4 shadow-[0_0_30px_hsl(207_100%_50%_/_0.2)] max-w-[280px]">
              <button onClick={() => setShowProactive(false)} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <img src={athyronLogo} alt="Athyron" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">How can I help you?</p>
                  <p className="text-xs text-muted-foreground">Click to explore Athyron's AI-powered solutions.</p>
                </div>
              </div>
              <button onClick={handleOpen} className="w-full mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Let's Chat
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button onClick={handleOpen} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-[0_0_30px_hsl(207_100%_50%_/_0.4)] flex items-center justify-center hover:shadow-[0_0_40px_hsl(207_100%_50%_/_0.6)] transition-shadow duration-300" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1,
      type: "spring"
    }}>
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[520px] rounded-2xl bg-card border border-border shadow-[0_0_40px_hsl(207_100%_50%_/_0.15)] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <img src={athyronLogo} alt="Athyron" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Athyron Assistant</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={resetChat} className="p-2 rounded-lg hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[280px]">
              {messages.map((message, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${message.type === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md"}`}>
                    {message.isMarkdown ? renderMarkdown(message.text) : message.text}
                  </div>
                </motion.div>)}
              
              {/* Typing Indicator */}
              {isTyping && <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-bl-md flex gap-1 items-center">
                    <span className="text-xs text-muted-foreground mr-2">Typing</span>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{
                animationDelay: '0ms'
              }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{
                animationDelay: '150ms'
              }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{
                animationDelay: '300ms'
              }} />
                  </div>
                </div>}
            </div>

            {/* Options */}
            <div className="p-4 border-t border-border bg-muted/30">
              <AnimatePresence mode="wait">
                {currentView === "main" && !isTyping && <motion.div key="main" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="space-y-2">
                    {menuOptions.map(option => <button key={option.id} onClick={() => handleOptionClick(option)} className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 group">
                        <div className="flex items-center gap-3">
                          <option.icon className="w-4 h-4" />
                          <span>{option.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>)}
                  </motion.div>}

                {currentView === "response" && !isTyping && <motion.div key="response" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="space-y-3">
                    {selectedOption?.followUp === "request-demo" && <a href="/contact" className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200">
                        Request a Demo
                      </a>}
                    <button onClick={handleBack} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                      <ArrowLeft className="w-4 h-4" />
                      Back to menu
                    </button>
                  </motion.div>}

                {currentView === "founders" && !isTyping && <motion.div key="founders" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {founders.map(founder => <div key={founder.name} className="p-3 rounded-xl bg-secondary text-center hover:bg-secondary/80 transition-colors">
                          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">
                              {founder.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-xs font-medium">{founder.name.split(' ')[0]}</p>
                          <p className="text-[10px] text-muted-foreground">{founder.focus}</p>
                        </div>)}
                    </div>
                    <a href="/contact" className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200">
                      Book a Meeting
                    </a>
                    <button onClick={handleBack} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                      <ArrowLeft className="w-3 h-3" />
                      Back to menu
                    </button>
                  </motion.div>}
              </AnimatePresence>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default ChatbotButton;