import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown, FiTerminal } from 'react-icons/fi';
import profileImage from '@/components/images/Vamshi.png';
import resumePDF from './resume/Resume.pdf';

const titles = [
  'AI & Full Stack Developer',
  'MERN Stack Expert',
  'FastAPI & AI Integration',
  'Prompt Engineer',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Two Column Layout: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary flex items-center gap-2 w-fit mx-auto lg:mx-0">
                <FiTerminal className="w-4 h-4 animate-pulse" />
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Vamshi Krishna Nagula</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="h-12 md:h-16 mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-muted-foreground">
                <span className="neon-text">{displayText}</span>
                <span className="typing-cursor text-primary">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building scalable, production-ready web applications using the MERN stack and Python-based backend systems. Passionate about integrating AI capabilities into modern web applications to create intelligent, user-centric digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                href="#projects"
                className="btn-gradient flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
              </motion.a>
              <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                download="Vamshi_Krishna_Nagula_Resume.pdf"
                className="btn-outline-neon flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-6">
              <motion.a
                href="https://github.com/Vamshikrishna0372"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vamshi-krishna-nagula-174b6833a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              className="relative group"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-75 blur-md"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Profile image container */}
              <motion.div
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 245, 255, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                />

                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Vamshi Krishna Nagula"
                  className="w-full h-full object-cover object-top"
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Floating particles around profile */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

        </div >
      </motion.div >

      {/* Scroll Indicator */}
      < motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm">Scroll Down</span>
          <FiArrowDown size={20} />
        </motion.a>
      </motion.div >
    </section >
  );
};

export default Hero;
