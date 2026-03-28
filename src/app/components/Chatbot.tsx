import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Priyabrata's AI assistant. Feel free to ask me anything about his skills, experience, projects, or how to get in touch!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    skills: "Priyabrata has expertise in Python, C++, C#, Data Analysis, Machine Learning, SQL, Tableau, Power BI, Pandas, NumPy, Matplotlib, Seaborn, Google Cloud Platform (GCP), and web development with HTML, CSS, and JavaScript!",
    experience: "He has participated in multiple hackathons including Smart India Hackathon 2025, Codenexus at GIFT College, and Web Hackathon at IIT Bhubaneswar's Pravaah'26. He also completed a Data Analytics internship at CTTC College, Bhubaneswar (June-July 2025).",
    education: "Priyabrata is currently studying Computer Science and Engineering, specializing in Data Science with a focus on Machine Learning and Analytics in Cuttack, Odisha, India.",
    contact: "You can reach Priyabrata at:\n📧 Email: psubhransubehera@gmail.com\n📱 Phone: 7325997743\n💼 LinkedIn: linkedin.com/in/priyabrata-subhransu-behera-a3992a369\n🐙 GitHub: github.com/Priyabratasubhransubehera\n💻 LeetCode: leetcode.com/u/Priyabrata_Subhransu_Behera/",
    projects: "Priyabrata has worked on various data analytics projects, dashboards using Tableau and Power BI, machine learning models, and web-based solutions. He's particularly passionate about data visualization and building data-driven applications!",
    certifications: "He holds certifications in Data Analyst, Data Analytics, Python Essential 2, and Python Web Developer Masterclass where he built 6 websites!",
    location: "Priyabrata is based in Cuttack, Odisha, India and is open to remote opportunities.",
    hire: "Priyabrata is actively seeking internships, hackathons, and collaborative project opportunities! He's passionate about data science, machine learning, and building innovative solutions. Feel free to reach out to him at psubhransubehera@gmail.com",
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return botResponses.skills;
    }
    if (message.includes('experience') || message.includes('hackathon') || message.includes('internship') || message.includes('work')) {
      return botResponses.experience;
    }
    if (message.includes('education') || message.includes('university') || message.includes('college') || message.includes('study')) {
      return botResponses.education;
    }
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return botResponses.contact;
    }
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return botResponses.projects;
    }
    if (message.includes('certificate') || message.includes('certification') || message.includes('course')) {
      return botResponses.certifications;
    }
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return botResponses.location;
    }
    if (message.includes('hire') || message.includes('job') || message.includes('opportunity') || message.includes('available')) {
      return botResponses.hire;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 I can help you learn more about Priyabrata. You can ask me about his skills, experience, projects, education, or how to contact him!";
    }
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Feel free to ask if you have any other questions about Priyabrata! 😊";
    }

    return "I can help you with information about Priyabrata's skills, experience, projects, education, certifications, and contact details. What would you like to know?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        data-chatbot-button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            !
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 w-96 h-[600px] rounded-3xl border border-white/20 bg-gradient-to-br from-[#0B0F19]/95 to-[#1a1042]/95 backdrop-blur-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: '0 20px 60px 0 rgba(0, 245, 255, 0.3)' }}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-white/10 bg-gradient-to-r from-[#00F5FF]/10 to-[#7B2EFF]/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F5FF] to-[#7B2EFF] flex items-center justify-center"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Ask Me
                  </h3>
                  <p className="text-xs text-gray-400">AI Assistant • Online</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-[#00F5FF]/30 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'bot' 
                      ? 'bg-gradient-to-br from-[#00F5FF] to-[#7B2EFF]' 
                      : 'bg-gradient-to-br from-[#7B2EFF] to-[#B24EFF]'
                  }`}>
                    {message.sender === 'bot' ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`max-w-[70%] ${message.sender === 'user' ? 'items-end' : ''}`}>
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.sender === 'bot'
                        ? 'bg-white/10 border border-white/10'
                        : 'bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF]'
                    }`}>
                      <p className="text-sm text-white whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {message.text}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00F5FF] transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(0, 245, 255, 0.3);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 245, 255, 0.5);
        }
      `}</style>
    </>
  );
}