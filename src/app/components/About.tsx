import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const timeline = [
    {
      year: 'June 2025 - July 2025',
      title: 'Data Analytics Intern',
      icon: Briefcase,
      description: 'CTTC College, Bhubaneswar - Gained hands-on experience in data collection, cleaning, analysis, and visualization',
    },
    {
      year: 'Present',
      title: 'Computer Science Student',
      icon: GraduationCap,
      description: 'Specializing in Data Science with focus on Machine Learning and Analytics',
    },
    {
      year: '2025 - 2026',
      title: 'Hackathon Participant',
      icon: Code2,
      description: 'Smart India Hackathon, IIT Bhubaneswar Pravaah\'26, GIFT College Codenexus - Building innovative solutions',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative p-8 rounded-3xl border border-[#00F5FF]/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-[#00F5FF]/40 transition-all duration-500"
            style={{
              boxShadow: '0 8px 32px 0 rgba(0, 245, 255, 0.1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/10 via-transparent to-[#7B2EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Passionate About Data
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                I am a passionate Software Developer in the domain of Data Science, with strong knowledge of 
                Python programming and its libraries for data analysis and visualization. I have hands-on 
                experience in creating dashboards and building practical projects that enhance problem-solving 
                and analytical thinking.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Skilled in Python, SQL, Tableau, Power BI, NumPy, Pandas, Matplotlib, and Seaborn. Participated 
                in hackathons, gaining hands-on experience in problem-solving and real-world project building. 
                I'm actively seeking internships, hackathons, and collaborative project opportunities to contribute 
                to innovative data-driven solutions.
              </p>

              {/* Floating Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Python', 'Data Analysis', 'Machine Learning', 'Full Stack'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 text-[#00F5FF] text-sm font-medium backdrop-blur-sm hover:border-[#7B2EFF] hover:bg-[#7B2EFF]/20 transition-all duration-300 cursor-default"
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(123, 46, 255, 0.3)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#00F5FF] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              My Journey
            </h3>
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="group relative flex gap-4 p-6 rounded-2xl border border-[#7B2EFF]/20 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md hover:border-[#7B2EFF]/50 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#7B2EFF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)',
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#00F5FF] text-sm font-semibold mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[37px] top-[88px] w-0.5 h-8 bg-gradient-to-b from-[#7B2EFF]/50 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}