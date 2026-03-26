import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaGitAlt, FaCodeBranch, FaUsers, FaComments, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const stats = [
  { label: 'Collaborative Projects', value: 15, suffix: '+', icon: FaProjectDiagram },
  { label: 'Code Reviews', value: 50, suffix: '+', icon: FaCheckCircle },
  { label: 'Team Members Worked With', value: 30, suffix: '+', icon: FaUsers },
  { label: 'Git Commits', value: 500, suffix: '+', icon: FaGitAlt },
];

const collaborationSkills = [
  { name: 'Git Workflows', icon: FaGitAlt, description: 'Branch management, merging, rebasing' },
  { name: 'Code Reviews', icon: FaCodeBranch, description: 'Constructive feedback & quality assurance' },
  { name: 'Team Communication', icon: FaComments, description: 'Clear, effective collaboration' },
  { name: 'Agile Development', icon: FaProjectDiagram, description: 'Sprint planning, standups, retrospectives' },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, isInView]);
  
  return <span>{count}{suffix}</span>;
};

const Collaboration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collaboration" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Teamwork
          </span>
          <h2 className="section-title">
            Collaboration & <span className="gradient-text">Team Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Actively collaborated on 15+ team-based projects, contributing to design, development, 
            debugging, and deployment while following version control best practices.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="font-heading font-bold text-4xl md:text-5xl gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborationSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6 rounded-xl group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground">{skill.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Git Animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="relative flex items-center gap-4">
            {/* Git Branch Animation */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  {i < 4 && (
                    <motion.div
                      className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.1 + i * 0.1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.p
              className="text-muted-foreground text-sm ml-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
            >
              Consistent contributor • Clean commit history
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
