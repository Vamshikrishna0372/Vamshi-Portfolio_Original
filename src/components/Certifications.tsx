import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiAward, FiDatabase, FiCode } from 'react-icons/fi';
import { FaJava, FaPython } from 'react-icons/fa';

const certifications = [
  {
    title: 'Java Full Stack Development Internship (10 Weeks)',
    issuer: 'EduSkills Academy',
    icon: FaJava,
    link: 'https://drive.google.com/file/d/1412xgS8sw2yaHBa2qg3JbJwt8PAqOkhZ/view?usp=sharing',
    color: '#ED8B00',
  },
  {
    title: 'Cambridge English: C1 Advanced (CEFR Level C1)',
    issuer: 'Cambridge Assessment English',
    icon: FiAward,
    link: '#',
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
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Credentials
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-xl block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${cert.color}15` }}
              >
                <cert.icon className="w-6 h-6" style={{ color: cert.color }} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              {cert.description && (
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              )}

              {/* Link indicator */}
              <div className="flex items-center gap-1 text-primary text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiExternalLink className="w-4 h-4" />
                <span>View Certificate</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
