import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiExternalLink, FiX } from 'react-icons/fi';
import resumePDF from './resume/Resume.pdf';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    setIsDownloading(true);

    try {
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 0,
        filename: 'Vamshi_Krishna_Nagula_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(resumeRef.current).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="flex items-center gap-3">
            <motion.a
              href={resumePDF}
              download="Vamshi_Krishna_Nagula_Resume.pdf"
              className="btn-gradient flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download PDF
            </motion.a>
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              className="btn-outline-neon flex items-center gap-2 text-sm px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className={isDownloading ? 'animate-bounce' : ''} />
              {isDownloading ? 'Generating...' : 'Generate PDF'}
            </motion.button>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 glass-card rounded-full text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX size={24} />
          </motion.button>
        </div>

        {/* Resume Content */}
        <div
          ref={resumeRef}
          className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              VAMSHI KRISHNA NAGULA
            </h1>
            <p className="text-center text-cyan-100 mb-4">
              AI & Full Stack Developer | MERN Stack | FastAPI | Machine Learning
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:nagulavamshi1453@gmail.com" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiMail size={14} /> nagulavamshi1453@gmail.com
              </a>
              <a href="tel:+916305844568" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiPhone size={14} /> +91 6305844568
              </a>
              <span className="flex items-center gap-1">
                <FiMapPin size={14} /> Hyderabad, Telangana, India
              </span>
              <a href="https://github.com/Vamshikrishna0372" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiGithub size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/vamshi-krishna-nagula-174b6833a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiLinkedin size={14} /> LinkedIn
              </a>
              <a href="https://vamshi-portfolio-dec25.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-200 transition-colors">
                <FiExternalLink size={14} /> Portfolio
              </a>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>AI & Full Stack Developer</strong> with strong hands-on experience in building scalable, production-ready web applications using the MERN stack and Python-based backend systems. Skilled in React.js, Node.js, Express.js, MongoDB, Java, Python, and SQL, with practical exposure to Machine Learning, LLMs, Prompt Engineering, and Agentic AI workflows. Experienced in developing secure multi-tenant platforms, real-time dashboards, and analytics-driven systems. Passionate about integrating AI capabilities into modern web applications to create intelligent, user-centric digital solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Professional Experience
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Full Stack Developer</h3>
                    <span className="text-sm text-gray-600">Jan 2025 – Present</span>
                  </div>
                  <div className="text-cyan-600 text-sm mb-2">
                    <a href="https://student-tech-genesis.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      Student-Tech-Genesis (Student Initiative) <FiExternalLink size={12} />
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Developed and deployed full-stack web applications using the MERN stack for real-world use cases.</li>
                    <li>Designed scalable RESTful APIs with JWT authentication and role-based access control.</li>
                    <li>Built responsive, performance-optimized frontend interfaces using React.js.</li>
                    <li>Implemented secure backend logic using Node.js and Express.js.</li>
                    <li>Collaborated in agile-style development lifecycle including planning, development, testing, and deployment.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Technical Skills
              </h2>
              <div className="grid gap-2 text-sm">
                <div><strong className="text-gray-900">Programming Languages:</strong> <span className="text-gray-700">Java, Python, JavaScript, SQL</span></div>
                <div><strong className="text-gray-900">Web & Backend:</strong> <span className="text-gray-700">React.js, Node.js, Express.js, HTML5, CSS3, REST APIs, FastAPI, Django</span></div>
                <div><strong className="text-gray-900">AI / ML / Data:</strong> <span className="text-gray-700">Machine Learning, Data Analysis, LLMs, Prompt Engineering, Agentic AI Workflows, Pandas, NumPy, Scikit-learn</span></div>
                <div><strong className="text-gray-900">Data Analytics & Visualization:</strong> <span className="text-gray-700">Power BI, Tableau, Matplotlib, Data Cleaning, Dashboard Development</span></div>
                <div><strong className="text-gray-900">Databases & Tools:</strong> <span className="text-gray-700">MongoDB, MySQL, Git, GitHub, Excel</span></div>
                <div><strong className="text-gray-900">Operating Systems:</strong> <span className="text-gray-700">Windows, Linux, Virtual Machines (VMs)</span></div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Projects
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">FeedbackPulse — Multi-Tenant SaaS Platform</h3>
                    <span className="text-sm text-gray-600">Dec 2025 – Present</span>
                  </div>
                  <div className="text-cyan-600 text-sm mb-2 flex flex-wrap items-center gap-4">
                    <a href="https://feedbackpulse-bice.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      Live Demo <FiExternalLink size={12} />
                    </a>
                    <a href="https://github.com/Vamshikrishna0372" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-gray-600">
                      GitHub <FiGithub size={12} />
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 mb-2 font-medium">Tech: React | FastAPI | MongoDB | Vercel</div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Built a scalable multi-company SaaS platform using React, FastAPI (Python), and MongoDB.</li>
                    <li>Implemented secure JWT-based authentication and role-based access control.</li>
                    <li>Designed interactive real-time dashboards and analytics modules.</li>
                    <li>Developed company-level feedback workflows with structured data management.</li>
                    <li>Deployed production builds on Vercel (Frontend) and Render (Backend). Admin demo access available upon request.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">ProLearn — Full Stack E-Learning Platform</h3>
                    <span className="text-sm text-gray-600">June 2025 – Aug 2025</span>
                  </div>
                  <div className="text-cyan-600 text-sm mb-2 flex flex-wrap items-center gap-4">
                    <a href="https://pro-learn-gold.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                      Live Demo <FiExternalLink size={12} />
                    </a>
                    <a href="https://github.com/Vamshikrishna0372" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-gray-600">
                      GitHub <FiGithub size={12} />
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 mb-2 font-medium">Tech: React.js | Node.js | Express.js | MongoDB</div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Developed a MERN-based e-learning platform supporting instructors and students.</li>
                    <li>Implemented authentication, course management, and instructor dashboards.</li>
                    <li>Integrated live session handling and recorded content workflows.</li>
                    <li>Built responsive UI optimized for desktop and mobile devices.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">Nexvigil — AI-Based Object Detection System</h3>
                    <span className="text-sm text-gray-600">Aug 2025 – Nov 2025</span>
                  </div>
                  <div className="text-cyan-600 text-sm mb-2 flex flex-wrap items-center gap-4">
                    <a href="https://github.com/Vamshikrishna0372" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-gray-600">
                      GitHub <FiGithub size={12} />
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 mb-2 font-medium">Tech: Python | YOLO | Deep Learning | PyTorch</div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Developed an advanced AI security solution for real-time object detection using YOLO models.</li>
                    <li>Implemented deep learning pipelines with pretrained neural networks for fast inference.</li>
                    <li>Engineered system to perform real-time AI-based detection rather than simple motion sensing.</li>
                    <li>Designed optimized computer vision workflows for high-accuracy security monitoring.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Achievements
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>
                  Participated in Hackathon 2K25 at Malla Reddy University, contributing to solution design and development in an 8-hour competitive challenge. <br />
                  <a href="https://drive.google.com/file/d/1r-pmY_LzN0NBZXmBXQyKHOn-QGra3cDG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline mt-1 text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
                <li>
                  Completed Prompt Engineering Workshop conducted by Google Developer Groups (GDG). <br />
                  <a href="https://drive.google.com/file/d/1onSLYUXQp7WfnqWMIu1AOvAmy61JeQiK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline mt-1 text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
                <li>
                  Participated in Promptathon 2025, focusing on advanced AI prompting strategies and LLM-based problem solving. <br />
                  <a href="https://drive.google.com/file/d/1QVuAT65eRW0Pg_XFSHG3VGBZecs62ejG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline mt-1 text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
              </ul>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Certifications
              </h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Cambridge English: C1 Advanced (CEFR Level C1) – Cambridge Assessment English</li>
                <li>
                  Certified Python Programmer (Licensed) – DataFlair <br />
                  <a href="https://drive.google.com/file/d/1V1kD9mZFor7C-hBkQDBejofEO5nHPPWz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
                <li>
                  Operating System Fundamentals – NPTEL (IIT Kharagpur) <br />
                  <a href="https://drive.google.com/file/d/1lGy3Yuwx_nDEMg1xKl28zpiE5OPkdPeD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
                <li>
                  Java Programming – Mastering the Fundamentals – Scaler <br />
                  <a href="https://drive.google.com/file/d/1n3kCxqZtalgHLlMeluprTmhiFtS6Sbq2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
                <li>
                  Data Structures in C++ – Scaler <br />
                  <a href="https://drive.google.com/file/d/1F8UIUbgMvCoECYdPpql6pnJEwk66cuDE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-600 inline-flex items-center gap-1 hover:underline text-xs">View Certificate <FiExternalLink size={10} /></a>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-cyan-700 border-b-2 border-cyan-600 pb-1 mb-3 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">B.Tech in Computer Science and Engineering</strong> — Malla Reddy University, Hyderabad
                    <span className="text-gray-600 ml-2">CGPA: 9.13 / 10</span>
                  </div>
                  <span className="text-gray-600">2024 – 2028</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">Intermediate</strong> — Sri Rama Krishna Jr. College, Kamareddy
                    <span className="text-gray-600 ml-2">94.3%</span>
                  </div>
                  <span className="text-gray-600">2022 – 2024</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <div>
                    <strong className="text-gray-900">SSC</strong> — Z.P.H.S Domakonda
                    <span className="text-gray-600 ml-2">GPA: 9.2 / 10</span>
                  </div>
                  <span className="text-gray-600">2022</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
