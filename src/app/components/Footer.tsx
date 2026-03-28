import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10 overflow-hidden">
      {/* Animated Gradient Line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent"
        initial={{ width: '0%', x: '-100%' }}
        animate={{ width: '100%', x: '0%' }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#7B2EFF] flex items-center justify-center"
              style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
            >
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                PSB
              </span>
            </div>
            <span className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Portfolio 2026
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>Designed & Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-[#00F5FF] fill-[#00F5FF]" />
            </motion.div>
            <span>by</span>
            <span className="font-semibold text-white">Priyabrata Subhransu Behera</span>
          </motion.div>

          {/* Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF]"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-[#00F5FF]/10 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
}
