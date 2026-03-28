import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User, Briefcase, Code2, FolderGit2, Mail, MessageCircle, Download } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: FolderGit2, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
    { name: 'Ask Question', icon: MessageCircle, onClick: 'chatbot' },
    { name: 'Download Resume', icon: Download, onClick: 'download' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.onClick === 'chatbot') {
      // Trigger chatbot
      const chatButton = document.querySelector('[data-chatbot-button]') as HTMLElement;
      if (chatButton) {
        chatButton.click();
      }
    } else if (item.onClick === 'download') {
      // Download resume
      const resumeUrl = 'https://drive.google.com/uc?export=download&id=16UWbclhUyv794C6Hj8jKx0MYRttreTdK';
      window.open(resumeUrl, '_blank');
    } else if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[60] w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:border-[#00F5FF]/50 transition-all duration-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
        whileHover={{ scale: 1.05 }}
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
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-[#0B0F19]/98 to-[#1a1042]/98 backdrop-blur-2xl border-r border-white/10 z-[56] overflow-y-auto"
              style={{ boxShadow: '0 0 60px rgba(0, 245, 255, 0.2)' }}
            >
              {/* Header */}
              <div className="p-8 border-b border-white/10">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 
                    className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Navigation
                  </h2>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Explore my portfolio
                  </p>
                </motion.div>
              </div>

              {/* Navigation Items */}
              <nav className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => handleNavClick(item)}
                    className="group w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent hover:border-[#00F5FF]/50 hover:bg-gradient-to-r hover:from-[#00F5FF]/10 hover:to-[#7B2EFF]/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F5FF]/20 to-[#7B2EFF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' }}
                    >
                      <item.icon className="w-5 h-5 text-[#00F5FF]" />
                    </div>
                    <div className="flex-1 text-left">
                      <span 
                        className="text-white font-semibold group-hover:text-[#00F5FF] transition-colors duration-300"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {item.name}
                      </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-[#0B0F19] to-transparent">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-gray-400 text-xs mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Designed & Developed by
                  </p>
                  <p 
                    className="text-sm font-semibold bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Priyabrata Subhransu Behera
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}