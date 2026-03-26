import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiGlobe, FiZap } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: FiGlobe,
    title: 'Full Stack',
    description: 'End-to-end development from frontend to backend systems',
  },
  {
    icon: FiDatabase,
    title: 'AI Native',
    description: 'Integrating LLMs, Prompt Engineering and Agentic AI workflows',
  },
  {
    icon: FiZap,
    title: 'Performance',
    description: 'Optimizing for speed and exceptional user experience',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.span>

            <h2 className="section-title">
              Passionate about building{' '}
              <span className="gradient-text">impactful solutions</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                I am an <span className="text-primary font-semibold">AI & Full Stack Developer</span> with strong hands-on experience in building scalable, production-ready web applications using the MERN stack and Python-based backend systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                With robust experience in <span className="text-secondary font-semibold">Agentic AI Workflows</span>, LLMs, and Prompt Engineering, I build secure multi-tenant SaaS platforms, real-time dashboards, and analytics-driven systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Currently pursuing B.Tech in Computer Science and Engineering at Malla Reddy University, Hyderabad with a CGPA of 9.13, I am passionate about integrating AI capabilities into modern web applications.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">MERN</div>
                <div className="text-sm text-muted-foreground mt-1">& FastAPI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">AI</div>
                <div className="text-sm text-muted-foreground mt-1">Integration</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 rounded-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
