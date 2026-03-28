import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Smart India Hackathon 2025',
      description: 'Participated in internal hackathon under Smart India Hackathon 2025 initiative. Developed innovative software solutions with peers, focusing on problem-solving and teamwork.',
      tags: ['Python', 'Hackathon', 'Team Work', 'Innovation'],
      gradient: 'from-[#00F5FF] to-[#0088FF]',
      image: 'https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbiUyMHRlY2h8ZW58MXx8fHwxNzczNjcwMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Created comprehensive dashboards at CTTC College internship using Tableau and Power BI. Analyzed real-world datasets and generated actionable insights for data-driven decision-making.',
      tags: ['Tableau', 'Power BI', 'Data Analytics', 'Python'],
      gradient: 'from-[#7B2EFF] to-[#B24EFF]',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzM2NDgwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'IIT Bhubaneswar Pravaah\'26',
      description: 'Competed in Web Hackathon at Pravaah\'26 organized by IIT Bhubaneswar. Designed and developed innovative web-based solutions under strict time constraints.',
      tags: ['Web Dev', 'HTML/CSS', 'JavaScript', 'Hackathon'],
      gradient: 'from-[#00F5FF] to-[#7B2EFF]',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzM2NDU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'GIFT College Codenexus',
      description: 'Participated in Codenexus Hackathon at GIFT Autonomous College during FESTRONIX 2K26. Collaborated to brainstorm and develop solutions, enhancing technical skills.',
      tags: ['Problem Solving', 'Team Work', 'Coding', 'Innovation'],
      gradient: 'from-[#FF2E7B] to-[#7B2EFF]',
      image: 'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzY3MDEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Data Visualization Projects',
      description: 'Built multiple data visualization projects using Python libraries including Matplotlib, Seaborn, and Pandas for comprehensive data analysis and presentation.',
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Pandas'],
      gradient: 'from-[#00F5FF] to-[#00FFAA]',
      image: 'https://images.unsplash.com/photo-1724925188921-224ff39d6311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoc3xlbnwxfHx8fDE3NzM2NzAxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'ML & Analytics Portfolio',
      description: 'Developed machine learning models and analytics solutions focusing on predictive analysis, data processing with NumPy and Pandas, and cloud deployment on GCP.',
      tags: ['ML', 'NumPy', 'GCP', 'Analytics'],
      gradient: 'from-[#FFD700] to-[#FF8C00]',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3MzY2ODU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(123,46,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,46,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/5 backdrop-blur-sm text-[#7B2EFF] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Work
          </div>
          <h2 
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] mx-auto rounded-full" />
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Transforming ideas into impactful data-driven solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <motion.div
                className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                }}
                whileHover={{
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: '0 20px 60px 0 rgba(0, 245, 255, 0.3)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Animated Gradient Border */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.gradient}`}
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '2px',
                  }}
                />

                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Image Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`} />
                    {/* Tech Badge Overlay */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </div>
                  </div>

                  {/* Project Number Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span 
                      className={`text-6xl font-bold opacity-10 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      className="flex gap-2"
                    >
                      <button 
                        className="w-10 h-10 rounded-full border border-[#00F5FF]/50 bg-[#00F5FF]/10 flex items-center justify-center hover:bg-[#00F5FF]/20 hover:border-[#00F5FF] transition-all duration-300"
                        style={{ boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
                      >
                        <Github className="w-5 h-5 text-[#00F5FF]" />
                      </button>
                      <button 
                        className="w-10 h-10 rounded-full border border-[#7B2EFF]/50 bg-[#7B2EFF]/10 flex items-center justify-center hover:bg-[#7B2EFF]/20 hover:border-[#7B2EFF] transition-all duration-300"
                        style={{ boxShadow: '0 0 20px rgba(123, 46, 255, 0.3)' }}
                      >
                        <ExternalLink className="w-5 h-5 text-[#7B2EFF]" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F5FF] transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-400 text-sm leading-relaxed mb-6 flex-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Particle Effect on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[#00F5FF]"
                        initial={{ 
                          x: '50%', 
                          y: '50%',
                          opacity: 1,
                        }}
                        animate={{
                          x: `${50 + Math.cos(i * 45 * Math.PI / 180) * 100}%`,
                          y: `${50 + Math.sin(i * 45 * Math.PI / 180) * 100}%`,
                          opacity: 0,
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grid {
          0% { background-position: 0 0; }
          100% { background-position: 80px 80px; }
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
      `}</style>
    </section>
  );
}