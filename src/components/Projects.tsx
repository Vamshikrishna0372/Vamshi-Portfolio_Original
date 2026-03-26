import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiCalendar, FiStar } from 'react-icons/fi';
import TiltCard from '@/components/ui/TiltCard';

const projects = [
  {
    title: 'Nexvigil',
    subtitle: 'AI-Powered Intelligent Surveillance System',
    period: 'Jan 2026 – Present',
    description:
      'Full-stack AI surveillance platform for real-time CCTV monitoring and automated incident detection, combining computer vision with a modern web dashboard.',
    highlights: [
      'Built a full-stack AI surveillance platform for real-time CCTV monitoring and automated incident detection.',
      'Integrated YOLOv8 with OpenCV for object detection and rule-based alert generation from video streams.',
      'Built a FastAPI backend with MongoDB and a React dashboard for real-time alerts and incident monitoring.',
    ],
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI', 'MongoDB', 'React'],
    liveLink: 'https://nexvigil.vercel.app/',
    githubLink: 'https://github.com/Vamshikrishna0372',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Eventra',
    subtitle: 'Campus Event Management Platform',
    period: 'Mar 2026',
    description:
      'Full-stack event management platform that streamlines university event organization, participation, and attendance tracking with role-based access and AI assistance.',
    highlights: [
      'Developed a full-stack event platform using React.js, FastAPI (Python), and MongoDB to streamline university event organization.',
      'Designed role-based access control for admins and students (volunteers) to enable secure and efficient platform access.',
      'Engineered QR code-based attendance tracking, event registration workflows, volunteer management, and an AI-powered chatbot using Gemini APIs.',
    ],
    technologies: ['React.js', 'FastAPI', 'Python', 'MongoDB', 'Gemini API', 'QR Code'],
    liveLink: 'https://eventra-iota-mocha.vercel.app/',
    githubLink: 'https://github.com/Vamshikrishna0372',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'FeedbackPulse',
    subtitle: 'Multi-Tenant SaaS Feedback Platform',
    period: 'Dec 2025 – Present',
    description:
      'A scalable multi-company SaaS platform for managing real-time feedback with interactive dashboards and analytics.',
    highlights: [
      'Implemented secure JWT authentication and role-based access control.',
      'Developed company-level feedback workflows with structured data management.',
      'Deployed production builds on Vercel (Frontend) and Render (Backend).',
    ],
    technologies: ['React', 'FastAPI', 'Python', 'MongoDB', 'Vercel'],
    liveLink: 'https://feedbackpulse-bice.vercel.app/',
    githubLink: 'https://github.com/Vamshikrishna0372',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'ProLearn',
    subtitle: 'Full Stack E-Learning Platform',
    period: 'Jun 2025 – Aug 2025',
    description:
      'A MERN-based e-learning platform supporting instructors and students with live session handling and recorded content workflows.',
    highlights: [
      'Implemented authentication, course management, and instructor dashboards.',
      'Integrated live session handling and recorded content workflows.',
      'Built responsive UI optimized for desktop and mobile devices.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'https://pro-learn-gold.vercel.app/',
    githubLink: 'https://github.com/Vamshikrishna0372',
    gradient: 'from-orange-500 to-rose-600',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Featured Work
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <TiltCard className="relative glass-card rounded-2xl overflow-hidden">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Card content */}
                <div className="p-6 md:p-8 relative z-10 pointer-events-auto">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-secondary font-medium">{project.subtitle}</span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 relative z-50">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <FiStar className="w-3 h-3 text-primary mt-1 flex-shrink-0 fill-current" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none z-0`} />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Vamshikrishna0372"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-neon inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
