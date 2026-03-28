import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, BarChart3, Layout, GitBranch, Brain } from 'lucide-react';

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      color: '#00F5FF',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 75 },
        { name: 'C#', level: 70 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Data Processing',
      icon: Database,
      color: '#7B2EFF',
      skills: [
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 85 },
        { name: 'MS Excel', level: 82 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'Visualization',
      icon: BarChart3,
      color: '#00F5FF',
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 83 },
        { name: 'Matplotlib', level: 82 },
        { name: 'Seaborn', level: 80 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: '#7B2EFF',
      skills: [
        { name: 'ML Algorithms', level: 78 },
        { name: 'Data Analysis', level: 88 },
      ],
    },
    {
      title: 'Web Development',
      icon: Layout,
      color: '#00F5FF',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Python Web', level: 80 },
      ],
    },
    {
      title: 'Cloud & Tools',
      icon: GitBranch,
      color: '#7B2EFF',
      skills: [
        { name: 'Google Cloud (GCP)', level: 75 },
        { name: 'Git', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF] rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] mx-auto rounded-full" />
          <p className="text-gray-400 text-xl mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A comprehensive toolkit for turning data into insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-500"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px 0 ${category.color}40`,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}15 0%, transparent 100%)`,
                  }}
                />

                {/* Animated Border */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${category.color} 0%, transparent 100%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}30 0%, ${category.color}10 100%)`,
                      boxShadow: `0 0 20px ${category.color}40`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold text-white mb-6"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{
                              background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                              boxShadow: `0 0 10px ${category.color}60`,
                            }}
                          >
                            {/* Animated Shine Effect */}
                            <motion.div
                              className="absolute inset-0 w-1/2"
                              style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                              }}
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3D Depth Shadow */}
                <div 
                  className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl -z-10 opacity-50 blur-xl transition-all duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}30 0%, transparent 100%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}