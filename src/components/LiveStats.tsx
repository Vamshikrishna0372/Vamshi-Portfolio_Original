import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaProjectDiagram, FaUsers, FaCode, FaBrain, FaCoffee, FaGithub } from 'react-icons/fa';

const stats = [
  {
    icon: FaProjectDiagram,
    value: 15,
    suffix: '+',
    label: 'Collaborative Projects',
    color: '#00F5FF',
    description: 'Team-based development'
  },
  {
    icon: FaUsers,
    value: 3,
    suffix: '+',
    label: 'Client Projects',
    color: '#9D4EDD',
    description: 'Real-time applications'
  },
  {
    icon: FaCode,
    value: 50,
    suffix: '+',
    label: 'API Endpoints Managed',
    color: '#FF6B6B',
    description: 'RESTful & FastAPI'
  },
  {
    icon: FaBrain,
    value: 95,
    suffix: '%',
    label: 'AI Model Accuracy',
    color: '#4ECDC4',
    description: 'Nexvigil Object Detection'
  },
  {
    icon: FaCoffee,
    value: 1000,
    suffix: '+',
    label: 'Cups of Coffee',
    color: '#C77DFF',
    description: 'Fuel for coding'
  },
  {
    icon: FaGithub,
    value: 500,
    suffix: '+',
    label: 'Git Commits',
    color: '#F39C12',
    description: 'Version control'
  },
];

const AnimatedNumber = ({ value, suffix, isInView, duration = 2000 }: { value: number; suffix: string; isInView: boolean; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

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
  }, [value, isInView, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const LiveStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            By The Numbers
          </span>
          <h2 className="section-title">
            Live <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my journey so far in numbers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="glass-card p-6 md:p-8 rounded-2xl text-center h-full relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-2"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, hsl(var(--foreground)))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  animate={{
                    textShadow: [
                      `0 0 20px ${stat.color}00`,
                      `0 0 40px ${stat.color}40`,
                      `0 0 20px ${stat.color}00`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </motion.div>

                {/* Label */}
                <p className="font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
