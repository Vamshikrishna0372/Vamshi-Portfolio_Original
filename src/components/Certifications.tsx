import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiAward, FiDatabase, FiCode } from 'react-icons/fi';
import { FaJava, FaPython } from 'react-icons/fa';

const certifications = [
  {
    title: 'Java Full Stack Developer Virtual Internship',
    issuer: 'EduSkills Academy (AICTE Supported)',
    date: 'Mar 2026',
    icon: FaJava,
    link: 'https://drive.google.com/file/d/1mbMz80-6fxcpSUtih2J52j3PxOBv1Iwh/view?usp=drive_link',
    color: '#ED8B00',
  },
  {
    title: 'Cambridge English: C1 Advanced (CEFR Level C1)',
    issuer: 'Cambridge Assessment English',
    icon: FiAward,
    link: 'https://drive.google.com/file/d/1l9vClsxgRPPUHlIshNpGiQo3q8STJHT9/view?usp=sharing',
    color: '#E01E2E',
  },
  {
    title: 'Certified Python Programmer',
    issuer: 'DataFlair',
    icon: FaPython,
    link: 'https://drive.google.com/file/d/1V1kD9mZFor7C-hBkQDBejofEO5nHPPWz/view?usp=sharing',
    color: '#3776AB',
  },
  {
    title: 'Operating System Fundamentals',
    issuer: 'NPTEL (IIT Kharagpur)',
    icon: FiDatabase,
    link: 'https://drive.google.com/file/d/1lGy3Yuwx_nDEMg1xKl28zpiE5OPkdPeD/view?usp=sharing',
    color: '#0F62FE',
  },
  {
    title: 'Java Programming Fundamentals',
    issuer: 'Scaler',
    icon: FaJava,
    link: 'https://drive.google.com/file/d/1n3kCxqZtalgHLlMeluprTmhiFtS6Sbq2/view?usp=sharing',
    color: '#ED8B00',
  },
  {
    title: 'Data Structures in C++',
    issuer: 'Scaler',
    icon: FiCode,
    link: 'https://drive.google.com/file/d/1F8UIUbgMvCoECYdPpql6pnJEwk66cuDE/view?usp=sharing',
    color: '#00f5ff',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary/8 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Credentials
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials from globally recognized institutions and platforms
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-xl block relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Colored left accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 group-hover:w-1.5"
                style={{ backgroundColor: cert.color }}
              />

              <div className="pl-4">
                {/* Icon + Date row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cert.color}18` }}
                  >
                    <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
                  </div>
                  {cert.date && (
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${cert.color}18`, color: cert.color }}
                    >
                      {cert.date}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                {/* Link indicator */}
                <div className="flex items-center gap-1.5 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: cert.color }}>
                  <FiExternalLink className="w-4 h-4" />
                  <span>View Certificate</span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{ background: `radial-gradient(circle at bottom right, ${cert.color}10, transparent 70%)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
