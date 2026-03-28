import { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { LiveDateTime } from './components/LiveDateTime';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Live Date and Time */}
      <LiveDateTime />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Texture Noise */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00F5FF]/5 via-transparent to-[#7B2EFF]/5" />
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-[#00F5FF] rounded-full blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-1/2 h-1/2 bg-[#7B2EFF] rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Chatbot />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Styles */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0B0F19;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00F5FF 0%, #7B2EFF 100%);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00F5FF 0%, #B24EFF 100%);
        }

        /* Selection */
        ::selection {
          background-color: rgba(0, 245, 255, 0.3);
          color: #FFFFFF;
        }

        /* Disable default cursor on interactive elements */
        a, button, input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}

export default App;