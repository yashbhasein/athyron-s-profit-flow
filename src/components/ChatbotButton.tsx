import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import athyronLogo from "@/assets/athyron-logo.png";

const technicalFAQs = [
  { 
    id: "local-brain", 
    question: "What is the Local Brain?", 
    answer: "The Local Brain is our edge computing module that processes sensor data locally with <50ms response times. It ensures safety-critical decisions are made instantly, even during internet outages common in rural industrial hubs."
  },
  { 
    id: "machines", 
    question: "Compatible Machines?", 
    answer: "Athyron works with all major textile wet processing machines including jet dyeing, soft flow, jigger, and pad dyeing machines. Our non-invasive clip-on sensors require zero modifications to existing equipment."
  },
  { 
    id: "install", 
    question: "Installation Time (4hrs)?", 
    answer: "Yes! Our retrofit solution installs in just 4 hours with zero production downtime. Our trained technicians handle the entire process while your machines continue operating."
  },
];

const businessFAQs = [
  { 
    id: "roi", 
    question: "ROI Timeline", 
    answer: "Most customers see positive ROI within 3-6 months. By optimizing RFT rates from ~75% to 95%, you eliminate costly re-dyeing cycles and reduce water, energy, and chemical waste by up to 15%."
  },
  { 
    id: "compliance", 
    question: "Compliance & DPP", 
    answer: "Athyron auto-generates Digital Product Passport (DPP) data required for EU 2026 textile regulations. We track pH levels, dye concentration, carbon footprint, and water usage for full traceability."
  },
];

const founders = [
  { name: "Aryan Prabhugaonkar", role: "CEO & Co-founder" },
  { name: "Yash Bhasein", role: "CTO & Co-founder" },
  { name: "Atharva Telang", role: "COO & Co-founder" },
  { name: "Ronak Mandot", role: "CFO & Co-founder" },
];

type ViewState = "main" | "technical" | "business" | "founders" | "faq-detail";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>("main");
  const [selectedFAQ, setSelectedFAQ] = useState<typeof technicalFAQs[0] | null>(null);

  const addBotMessage = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: "bot", text }]);
      callback?.();
    }, 1500);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      addBotMessage("Hi! I'm Athyron's assistant. How can I help you today?");
    }
  };

  const handleMainOption = (option: string) => {
    setMessages(prev => [...prev, { type: "user", text: option }]);
    
    if (option === "Technical FAQ") {
      addBotMessage("Here are our most common technical questions:", () => {
        setCurrentView("technical");
      });
    } else if (option === "Business FAQ") {
      addBotMessage("Here's what you need to know about ROI and compliance:", () => {
        setCurrentView("business");
      });
    } else if (option === "Talk to a Founder") {
      addBotMessage("Meet our founding team! You can book a meeting directly with any of them:", () => {
        setCurrentView("founders");
      });
    }
  };

  const handleFAQClick = (faq: typeof technicalFAQs[0]) => {
    setMessages(prev => [...prev, { type: "user", text: faq.question }]);
    setSelectedFAQ(faq);
    addBotMessage(faq.answer, () => {
      setCurrentView("faq-detail");
    });
  };

  const handleBack = () => {
    setCurrentView("main");
    setSelectedFAQ(null);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentView("main");
    setSelectedFAQ(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-[0_0_30px_hsl(207_100%_50%_/_0.4)] flex items-center justify-center hover:shadow-[0_0_40px_hsl(207_100%_50%_/_0.6)] transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[520px] glass-card flex flex-col overflow-hidden border-beam"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <img src={athyronLogo} alt="Athyron" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Intelligent FAQ</p>
                  <p className="text-xs text-muted-foreground">Athyron Assistant</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[250px]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-bl-md flex gap-1">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              )}
            </div>

            {/* Options */}
            <div className="p-4 border-t border-border bg-muted/30">
              <AnimatePresence mode="wait">
                {currentView === "main" && !isTyping && (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <button
                      onClick={() => handleMainOption("Technical FAQ")}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <span>Technical FAQ</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleMainOption("Business FAQ")}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <span>Business FAQ</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleMainOption("Talk to a Founder")}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      <span>Talk to a Founder</span>
                      <Users className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {currentView === "technical" && !isTyping && (
                  <motion.div
                    key="technical"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    {technicalFAQs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleFAQClick(faq)}
                        className="w-full text-left px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {faq.question}
                      </button>
                    ))}
                    <button
                      onClick={handleBack}
                      className="w-full text-center px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Back to main menu
                    </button>
                  </motion.div>
                )}

                {currentView === "business" && !isTyping && (
                  <motion.div
                    key="business"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    {businessFAQs.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleFAQClick(faq)}
                        className="w-full text-left px-4 py-3 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {faq.question}
                      </button>
                    ))}
                    <button
                      onClick={handleBack}
                      className="w-full text-center px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Back to main menu
                    </button>
                  </motion.div>
                )}

                {currentView === "founders" && !isTyping && (
                  <motion.div
                    key="founders"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {founders.map((founder) => (
                        <div
                          key={founder.name}
                          className="p-3 rounded-lg bg-secondary text-center"
                        >
                          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">
                              {founder.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-xs font-medium">{founder.name.split(' ')[0]}</p>
                          <p className="text-[10px] text-muted-foreground">{founder.role.split(' ')[0]}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200"
                    >
                      Book a Meeting
                    </Link>
                    <button
                      onClick={handleBack}
                      className="w-full text-center px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Back to main menu
                    </button>
                  </motion.div>
                )}

                {currentView === "faq-detail" && !isTyping && (
                  <motion.div
                    key="faq-detail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200"
                    >
                      Request Demo
                    </Link>
                    <button
                      onClick={handleBack}
                      className="w-full text-center px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Back to main menu
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;
