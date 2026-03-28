import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, CheckCircle2 } from 'lucide-react';

export function Certifications() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const certifications = [
    {
      title: 'Data Analyst',
      issuer: 'Professional Certification',
      description: 'Comprehensive data analysis certification covering statistical methods, data visualization, and analytical techniques.',
      year: '2025',
      color: '#00F5FF',
    },
    {
      title: 'Data Analytics',
      issuer: 'Professional Certification',
      description: 'Advanced analytics certification focused on business intelligence, predictive analytics, and data-driven decision making.',
      year: '2025',
      color: '#7B2EFF',
    },
    {
      title: 'Python Essential 2',
      issuer: 'Programming Certification',
      description: 'Advanced Python programming certification covering object-oriented programming, data structures, and algorithms.',
      year: '2025',
      color: '#00F5FF',
    },
    {
      title: 'Python Web Developer Masterclass',
      issuer: 'Web Development',
      description: 'Built 6 comprehensive websites covering full-stack development, Django framework, and web application deployment.',
      year: '2025',
      color: '#7B2EFF',
    },
  ];

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 backdrop-blur-sm text-[#00F5FF] text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Achievements
          </div>
          <h2
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] mx-auto rounded-full" />
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Continuously learning and earning industry-recognized credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-500"
              style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)' }}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px 0 ${cert.color}40`,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}15 0%, transparent 100%)`,
                }}
              />

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cert.color} 0%, transparent 100%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  padding: '2px',
                }}
              />

              <div className="relative z-10 flex gap-6">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}30 0%, ${cert.color}10 100%)`,
                    boxShadow: `0 0 20px ${cert.color}40`,
                  }}
                >
                  <Award className="w-8 h-8" style={{ color: cert.color }} />
                </div>

                <div className="flex-1">
                  {/* Year Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-semibold mb-3">
                    <CheckCircle2 className="w-3 h-3" style={{ color: cert.color }} />
                    {cert.year}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-semibold mb-3" style={{ color: cert.color, fontFamily: 'Inter, sans-serif' }}>
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: cert.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}