import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Send, MapPin, Phone, Github, Code } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 245, 255, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00F5FF] rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] mx-auto rounded-full" />
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about data and technology.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#00F5FF]/30 scrollbar-track-transparent">
              <motion.a
                href="mailto:psubhransubehera@gmail.com"
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#00F5FF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#0088FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <div className="text-white font-semibold">psubhransubehera@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/priyabrata-subhransu-behera-a3992a369"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#7B2EFF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#7B2EFF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7B2EFF] to-[#B24EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(123, 46, 255, 0.4)' }}
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">LinkedIn</div>
                  <div className="text-white font-semibold">Connect with me</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#00F5FF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#7B2EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white font-semibold">Cuttack, Odisha, India</div>
                </div>
              </motion.div>

              <motion.a
                href="tel:7325997743"
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#7B2EFF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#7B2EFF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7B2EFF] to-[#B24EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(123, 46, 255, 0.4)' }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <div className="text-white font-semibold">+91 7325997743</div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Priyabratasubhransubehera"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#00F5FF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#0088FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
                >
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">GitHub</div>
                  <div className="text-white font-semibold">View my repositories</div>
                </div>
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/Priyabrata_Subhransu_Behera/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#7B2EFF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-[#7B2EFF]/50 hover:bg-white/10 transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#7B2EFF] to-[#B24EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ boxShadow: '0 0 20px rgba(123, 46, 255, 0.4)' }}
                >
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">LeetCode</div>
                  <div className="text-white font-semibold">Check my solutions</div>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <motion.a
                href="https://www.linkedin.com/in/priyabrata-subhransu-behera-a3992a369"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/10 flex items-center justify-center hover:border-[#00F5FF] hover:bg-[#00F5FF]/20 transition-all duration-300"
                style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
              >
                <Linkedin className="w-5 h-5 text-[#00F5FF]" />
              </motion.a>
              <motion.a
                href="mailto:psubhransubehera@gmail.com"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-12 h-12 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 flex items-center justify-center hover:border-[#7B2EFF] hover:bg-[#7B2EFF]/20 transition-all duration-300"
                style={{ boxShadow: '0 0 20px rgba(123, 46, 255, 0.3)' }}
              >
                <Mail className="w-5 h-5 text-[#7B2EFF]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 via-transparent to-[#7B2EFF]/5 opacity-50" />
            
            <form className="relative z-10 space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#00F5FF] focus:bg-white/10 transition-all duration-300"
                  placeholder="Your Name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' 
                      ? '-top-6 text-sm text-[#00F5FF]' 
                      : 'top-4 text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00F5FF] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#00F5FF] focus:bg-white/10 transition-all duration-300"
                  placeholder="Your Email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email'
                      ? '-top-6 text-sm text-[#00F5FF]'
                      : 'top-4 text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00F5FF] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  className="peer w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#00F5FF] focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  onFocus={() => setFocusedField('message')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message'
                      ? '-top-6 text-sm text-[#00F5FF]'
                      : 'top-4 text-gray-400 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00F5FF] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white font-semibold overflow-hidden transition-all duration-300"
                style={{ 
                  boxShadow: '0 10px 30px rgba(0, 245, 255, 0.3)',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}