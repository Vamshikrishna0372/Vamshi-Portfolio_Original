import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLightbulb, FaDraftingCompass, FaTools, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: FaLightbulb,
    title: 'Understand',
    subtitle: 'Problem Analysis',
    description: 'Deep dive into requirements, identify core challenges, and define clear objectives.',
    color: '#FFD93D',
  },
  {
    icon: FaDraftingCompass,
    title: 'Design',
    subtitle: 'Solution Architecture',
    description: 'Create system design, plan data flow, and establish component structure.',
    color: '#6BCB77',
  },
  {
    icon: FaTools,
    title: 'Choose Stack',
    subtitle: 'Technology Selection',
    description: 'Select optimal technologies based on project requirements and scalability needs.',
    color: '#4D96FF',
  },
  {
    icon: FaCode,
    title: 'Develop & Test',
    subtitle: 'Implementation',
    description: 'Write clean, maintainable code with comprehensive testing at each stage.',
    color: '#FF6B6B',
  },
  {
    icon: FaRocket,
    title: 'Optimize & Deploy',
    subtitle: 'Launch',
    description: 'Performance optimization, security hardening, and seamless deployment.',
    color: '#C77DFF',
  },
];

const BuildProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="build-process" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            My Approach
          </span>
          <h2 className="section-title">
            How I <span className="gradient-text">Build Software</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to creating efficient, scalable, and maintainable solutions.
          </p>
        </motion.div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
          
          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-8 text-5xl font-heading font-bold text-muted-foreground/20"
                  animate={activeStep === index ? { scale: 1.2, color: step.color } : {}}
                >
                  0{index + 1}
                </motion.div>
                
                {/* Icon Circle */}
                <motion.div
                  className="relative z-10 w-20 h-20 rounded-full glass-card flex items-center justify-center cursor-pointer mb-6"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: activeStep === index 
                      ? `0 0 40px ${step.color}60`
                      : `0 0 20px ${step.color}20`,
                  }}
                >
                  <motion.div
                    animate={activeStep === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-primary mb-2">{step.subtitle}</p>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    animate={{ 
                      opacity: activeStep === index ? 1 : 0.7,
                      y: activeStep === index ? 0 : 5
                    }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative flex gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary" />
              )}
              
              {/* Icon */}
              <motion.div
                className="relative z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${step.color}50` }}
              >
                <step.icon className="w-6 h-6" style={{ color: step.color }} />
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 glass-card p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-primary font-mono">0{index + 1}</span>
                  <h3 className="font-heading font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-xs text-primary mb-1">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;
