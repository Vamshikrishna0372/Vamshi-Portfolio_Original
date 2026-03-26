import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const philosophyLines = [
  { text: 'I focus on writing clean, efficient, and maintainable code', icon: FaCode },
  { text: 'while continuously improving performance, scalability, and user experience.', icon: FaRocket },
  { text: 'Every problem is an opportunity to learn and grow.', icon: FaLightbulb },
];

const ProblemSolving = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsla(var(--primary), 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Philosophy
          </span>
          <h2 className="section-title">
            Problem Solving <span className="gradient-text">Mindset</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Quote Icon */}
          <motion.div
            className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center"
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaQuoteLeft className="w-6 h-6 text-primary-foreground" />
          </motion.div>

          <div className="space-y-6 mt-4">
            {philosophyLines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <line.icon className="w-5 h-5 text-secondary" />
                </motion.div>
                <motion.p
                  className="text-lg md:text-xl text-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {line.text}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute bottom-4 right-4 text-6xl font-heading font-bold text-muted-foreground/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            &ldquo;
          </motion.div>
        </motion.div>

        {/* Additional Mindset Points */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Think First', desc: 'Understand before implementing' },
            { title: 'Keep It Simple', desc: 'Complexity is the enemy of reliability' },
            { title: 'Never Stop Learning', desc: 'Technology evolves, so should I' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-heading font-bold text-lg gradient-text mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
