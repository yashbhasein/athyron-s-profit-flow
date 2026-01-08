import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import athyronLogo from "@/assets/athyron-logo.png";

const chatOptions = [
  { id: "business", label: "I want Athyron for my business", response: "Great! Let me help you explore how Athyron can transform your operations.", followUp: ["See ROI Calculator", "Request Demo"] },
  { id: "technical", label: "Technical Support", response: "Our edge-first platform ensures <50ms response times. What would you like to know?", followUp: ["How it works", "View specs"] },
  { id: "join", label: "Join the Team", response: "We're always looking for talented individuals passionate about sustainable manufacturing!", followUp: ["View openings", "Contact HR"] },
  { id: "case-studies", label: "View Case Studies", response: "See how we've helped textile MSMEs across Surat, Tiruppur, and Ludhiana.", followUp: ["Impact metrics", "Contact sales"] },
];

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(chatOptions);
  const [hasGreeted, setHasGreeted] = useState(false);
  const navigate = useNavigate();

  // Proactive popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasGreeted) {
        setIsOpen(true);
        setHasGreeted(true);
        addBotMessage("Hi! I'm Athyron's assistant. How can I help you today?");
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, hasGreeted]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: "bot", text }]);
    }, 1500);
  };

  const handleOptionClick = (option: typeof chatOptions[0]) => {
    setMessages(prev => [...prev, { type: "user", text: option.label }]);
    addBotMessage(option.response);
    
    if (option.followUp) {
      setCurrentOptions(option.followUp.map((label, i) => ({
        id: `followup-${i}`,
        label,
        response: label === "Request Demo" || label === "Contact sales" || label === "Contact HR" 
          ? "I'll take you to our contact page!"
          : "Let me show you more details.",
        followUp: undefined,
      })));
    }
  };

  const handleFollowUp = (label: string) => {
    setMessages(prev => [...prev, { type: "user", text: label }]);
    if (label === "Request Demo" || label === "Contact sales" || label === "Contact HR") {
      addBotMessage("Taking you to our contact page...");
      setTimeout(() => {
        navigate("/contact");
        setIsOpen(false);
      }, 2000);
    } else if (label === "See ROI Calculator") {
      addBotMessage("Check out our ROI calculator on the home page!");
      setCurrentOptions(chatOptions);
    } else {
      addBotMessage("Would you like to explore more?");
      setCurrentOptions(chatOptions);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => {
          setIsOpen(true);
          if (messages.length === 0) {
            addBotMessage("Hi! I'm Athyron's assistant. How can I help you today?");
          }
        }}
        className="chatbot-button pulse-ring"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <img src={athyronLogo} alt="Chat" className="w-8 h-8 object-contain" />
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
                  <p className="font-semibold text-sm">Athyron Assistant</p>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px]">
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
              <div className="flex flex-wrap gap-2">
                {currentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => option.followUp ? handleOptionClick(option) : handleFollowUp(option.label)}
                    disabled={isTyping}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 disabled:opacity-50"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;