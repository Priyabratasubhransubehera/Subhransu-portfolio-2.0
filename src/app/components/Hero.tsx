import { motion } from 'motion/react';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    // Local direct download using an anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Subhransu_Resume.pdf'; // Desired filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#1a1042] to-[#0B0F19]" />

      {/* 3D AI Orb */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none transition-transform duration-300 ease-out"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] opacity-20 blur-3xl animate-pulse" />
        <div className="absolute inset-12 rounded-full border border-[#00F5FF] opacity-30 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-24 rounded-full border border-[#7B2EFF] opacity-20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 300 + Math.cos(angle) * 150;
            const y1 = 300 + Math.sin(angle) * 150;
            const x2 = 300 + Math.cos(angle) * 250;
            const y2 = 300 + Math.sin(angle) * 250;
            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gradient)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="#7B2EFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full p-1 auto-glow group">
            {/* Soft glowing gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00F5FF] via-[#7B2EFF] to-[#00F5FF] animate-spin-slow opacity-90 blur-[3px]" style={{ animationDuration: '4s' }} />
            
            {/* Inner circular frame containing the photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center border-4 border-[#0B0F19] bg-[#0B0F19] shadow-[0_0_35px_rgba(0,245,255,0.4)] group-hover:shadow-[0_0_60px_rgba(123,46,255,0.7)] transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-[center_15%] rounded-full group-hover:scale-[1.05] transition-transform duration-700 ease-out"
              />
              
              {/* Soft inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 backdrop-blur-sm text-[#00F5FF] text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <div className="text-7xl md:text-9xl font-bold mb-4 leading-none">
            <span className="inline-block bg-gradient-to-r from-[#00F5FF] via-[#7B2EFF] to-[#00F5FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Priyabrata
            </span>
          </div>
          <div className="text-6xl md:text-8xl font-bold text-white leading-none">
            Subhransu Behera
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Computer Science Student • <span className="text-[#00F5FF]">Data Enthusiast</span> • Software Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
            onClick={handleViewProjects}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </button>

          <button
            className="group relative px-8 py-4 rounded-full border border-[#00F5FF]/50 text-white font-semibold backdrop-blur-md bg-white/5 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#00F5FF] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
            onClick={handleDownloadResume}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/20 to-[#7B2EFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[#00F5FF] text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-[#00F5FF]" />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}