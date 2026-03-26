import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiMapPin, FiCalendar, FiAward, FiCpu, FiBookOpen } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Malla Reddy University',
    location: 'Hyderabad',
    period: '2024 - 2028',
    grade: 'CGPA: 9.13 / 10',
    icon: <FiCpu className="w-6 h-6" />,
    achievements: ['Specialization in AI & ML'],
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Rama Krishna Jr. College',
    location: 'Kamareddy',
    period: '2022 – 2024',
    grade: 'Percentage: 94.3%',
    icon: <FiBookOpen className="w-6 h-6" />,
    achievements: ['Focus on Mathematics, Physics, Chemistry'],
  },
  {
    degree: 'Secondary School (SSC)',
    institution: 'Z.P.H.S Domakonda',
    location: 'Domakonda',
    period: '2022',
    grade: 'GPA: 9.2 / 10',
    icon: <FiAward className="w-6 h-6" />,
    achievements: ['Excellence in Mathematics'],
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6 animate-pulse-glow">
            <FiBook className="inline-block mr-2" />
            Education Journey
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My educational foundation and academic achievements that have shaped my technical expertise.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main timeline line - vertical */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/20 md:-translate-x-1/2" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <motion.div
                  className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 245, 255, 0.1)' }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl">{edu.icon}</span>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                      {edu.grade}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-secondary font-medium mb-4">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md">
                      <FiCalendar className="w-4 h-4 text-primary" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-md">
                      <FiMapPin className="w-4 h-4 text-secondary" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Achievements List */}
                  {edu.achievements && (
                    <div className="border-t border-white/10 pt-4 mt-2">
                      <ul className="space-y-2">
                        {edu.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <FiAward className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Timeline Dot Center */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-background border-4 border-primary z-20"
                  whileInView={{ scale: [1, 1.5, 1], borderColor: ["#00F5FF", "#A855F7", "#00F5FF"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping opacity-75 md:block hidden"></div>
              </div>

              {/* Empty side for layout balance */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
