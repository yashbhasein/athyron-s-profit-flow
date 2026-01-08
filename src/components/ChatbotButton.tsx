import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "What's the installation time?",
    answer: "Our non-invasive clip-on technology can be installed in just 4 hours with zero production downtime.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes! Our edge-first architecture ensures <50ms response time even during internet blackouts, common in rural industrial hubs.",
  },
  {
    question: "What sensors are included?",
    answer: "Our retrofit kit includes high-precision probes for pH levels, dye concentration, and temperature monitoring with ±0.01 accuracy.",
  },
  {
    question: "EU 2026 compliance?",
    answer: "Athyron auto-generates Digital Product Passport (DPP) data required for EU 2026 textile exports, including carbon footprint and chemical usage logs.",
  },
];

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([
    { type: "bot", text: "Hi! I'm Athyron's technical assistant. Ask me anything about our retrofit solutions!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");

    // Simple FAQ matching
    setTimeout(() => {
      const matchedFaq = faqs.find((faq) =>
        userMessage.toLowerCase().includes(faq.question.toLowerCase().split(" ")[0])
      );
      
      const response = matchedFaq
        ? matchedFaq.answer
        : "Great question! For detailed technical discussions, please reach out to our team through the contact form or email us at hello@athyron.com";
      
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    }, 800);
  };

  const handleQuickQuestion = (faq: typeof faqs[0]) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: faq.question },
      { type: "bot", text: faq.answer },
    ]);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="chatbot-button"
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
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] glass-card flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Athyron Assistant</p>
                  <p className="text-xs text-muted-foreground">Technical FAQs</p>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[280px]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-3 border-t border-border bg-muted/30">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {faqs.slice(0, 2).map((faq) => (
                  <button
                    key={faq.question}
                    onClick={() => handleQuickQuestion(faq)}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs hover:bg-secondary/80 transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="bg-muted/50 border-border text-sm"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;
