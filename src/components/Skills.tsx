import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaAws, FaChevronDown,
  FaBrain, FaRobot, FaChartLine, FaNetworkWired, FaBug, FaClipboardCheck
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSelenium, SiOpenai, SiScikitlearn, SiJira } from 'react-icons/si';
import { TbPrompt, TbTestPipe } from 'react-icons/tb';
import { VscDebugAlt } from 'react-icons/vsc';
import { MdOutlineSpeed } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        color: '#ED8B00',
        depth: {
          projects: 'Backend systems & API logic',
          usage: 'Object-oriented programming, data structures',
          level: 'Advanced'
        }
      },
      {
        name: 'Python',
        icon: FaPython,
        color: '#3776AB',
        depth: {
          projects: 'ML projects, automation scripts',
          usage: 'Data analysis, machine learning, AI development',
          level: 'Advanced'
        }
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        color: '#F7DF1E',
        depth: {
          projects: '15+ projects',
          usage: 'ES6+, async/await, DOM manipulation',
          level: 'Advanced'
        }
      },
      {
        name: 'SQL',
        icon: FaDatabase,
        color: '#00758F',
        depth: {
          projects: 'IBM certified',
          usage: 'Complex queries, joins, optimization',
          level: 'Intermediate'
        }
      },
    ],
  },
  {
    title: 'AI / ML / Data',
    skills: [
      {
        name: 'Machine Learning',
        icon: FaBrain,
        color: '#FF6B6B',
        depth: {
          projects: 'Nexvigil (AI Object Detection), Sleep Analysis',
          usage: 'YOLO, Deep Learning, Real-time inference',
          level: 'Intermediate'
        }
      },
      {
        name: 'Data Analysis',
        icon: FaChartLine,
        color: '#4ECDC4',
        depth: {
          projects: 'Multiple analytics projects',
          usage: 'Preprocessing, visualization, correlation analysis',
          level: 'Intermediate'
        }
      },
      {
        name: 'LLMs',
        icon: SiOpenai,
        color: '#00A67E',
        depth: {
          projects: 'AI-driven solutions',
          usage: 'GPT models, fine-tuning, API integration',
          level: 'Intermediate'
        }
      },
      {
        name: 'Prompt Engineering',
        icon: TbPrompt,
        color: '#9B59B6',
        depth: {
          projects: 'AI automation workflows',
          usage: 'Crafting effective prompts, chain-of-thought',
          level: 'Advanced'
        }
      },
      {
        name: 'Agentic AI',
        icon: FaRobot,
        color: '#3498DB',
        depth: {
          projects: 'AI workflow automation',
          usage: 'Agent design, multi-step reasoning, tool use',
          level: 'Intermediate'
        }
      },
      {
        name: 'Scikit-learn',
        icon: SiScikitlearn,
        color: '#F7931E',
        depth: {
          projects: 'ML classifier projects',
          usage: 'Model training, evaluation, pipelines',
          level: 'Intermediate'
        }
      },
    ],
  },
  {
    title: 'Data Analytics',
    skills: [
      {
        name: 'Power BI',
        icon: FaChartLine,
        color: '#F2C811',
        depth: {
          projects: 'Dashboard Development',
          usage: 'Interactive dashboards, visual reports',
          level: 'Intermediate'
        }
      },
      {
        name: 'Tableau',
        icon: FaChartLine,
        color: '#E97627',
        depth: {
          projects: 'Data Visualization',
          usage: 'Business intelligence, visual analytics',
          level: 'Intermediate'
        }
      },
      {
        name: 'Matplotlib',
        icon: FaChartLine,
        color: '#11557C',
        depth: {
          projects: 'Python Data Vis',
          usage: 'Plotting, charts, exploratory data analysis',
          level: 'Advanced'
        }
      },
      {
        name: 'Pandas',
        icon: FaChartLine,
        color: '#150458',
        depth: {
          projects: 'Data Manipulation',
          usage: 'Data cleaning, structuring, analysis',
          level: 'Advanced'
        }
      },
      {
        name: 'NumPy',
        icon: FaChartLine,
        color: '#013243',
        depth: {
          projects: 'Numerical Computing',
          usage: 'Arrays, matrices, scientific computing',
          level: 'Advanced'
        }
      },
      {
        name: 'Data Cleaning',
        icon: FaClipboardCheck,
        color: '#10B981',
        depth: {
          projects: 'Preprocessing Pipelines',
          usage: 'Outlier detection, missing values, normalization',
          level: 'Advanced'
        }
      },
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      {
        name: 'React.js',
        icon: FaReact,
        color: '#61DAFB',
        depth: {
          projects: 'MERN stack applications',
          usage: 'Hooks, state management, performance optimization',
          level: 'Advanced'
        }
      },
      {
        name: 'Node.js',
        icon: FaNodeJs,
        color: '#339933',
        depth: {
          projects: 'Scalable backend services',
          usage: 'REST APIs, middleware, authentication',
          level: 'Intermediate'
        }
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: '#FFFFFF',
        depth: {
          projects: 'MERN stack applications',
          usage: 'Routing, middleware, API development',
          level: 'Intermediate'
        }
      },
      {
        name: 'HTML5',
        icon: FaHtml5,
        color: '#E34F26',
        depth: {
          projects: 'Modern web development',
          usage: 'Semantic markup, accessibility',
          level: 'Advanced'
        }
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        color: '#1572B6',
        depth: {
          projects: 'Responsive designs, animations',
          usage: 'Flexbox, Grid, Tailwind CSS',
          level: 'Advanced'
        }
      },
      {
        name: 'REST APIs',
        icon: FaNetworkWired,
        color: '#00D4AA',
        depth: {
          projects: 'Multiple API integrations',
          usage: 'Design, consumption, authentication',
          level: 'Intermediate'
        }
      },
      {
        name: 'FastAPI',
        icon: FaPython,
        color: '#009688',
        depth: {
          projects: 'Multi-Tenant SaaS',
          usage: 'Async endpoints, Pydantic, performance',
          level: 'Advanced'
        }
      }
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
        depth: {
          projects: 'Relational & NoSQL design',
          usage: 'Schema design, aggregation, indexing',
          level: 'Intermediate'
        }
      },
      {
        name: 'Git',
        icon: FaGitAlt,
        color: '#F05032',
        depth: {
          projects: '500+ commits',
          usage: 'Branching, merging, rebasing',
          level: 'Advanced'
        }
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        color: '#FFFFFF',
        depth: {
          projects: '20+ repositories',
          usage: 'CI/CD, Actions, collaboration',
          level: 'Advanced'
        }
      },
    ],
  },
];

interface SkillDepth {
  projects: string;
  usage: string;
  level: string;
}

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  depth: SkillDepth;
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Technical Skills
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
            <span className="text-primary"> Click any skill to see depth!</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 md:p-8 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill: Skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-muted/50 border cursor-pointer transition-all duration-300 ${expandedSkill === skill.name
                        ? 'border-primary shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                        : 'border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]'
                        }`}
                      onClick={() => toggleSkill(skill.name)}
                      whileHover={{ y: -3 }}
                    >
                      <skill.icon
                        className="w-5 h-5 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <motion.div
                        animate={{ rotate: expandedSkill === skill.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="w-3 h-3 text-muted-foreground" />
                      </motion.div>
                    </motion.div>


                  </motion.div>
                ))}
              </div>

              {/* Category-level Inline Details */}
              <AnimatePresence>
                {category.skills.some(s => s.name === expandedSkill) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {(() => {
                      const skill = category.skills.find(s => s.name === expandedSkill);
                      if (!skill) return null;
                      return (
                        <div className="mt-2 text-left bg-zinc-950/50 backdrop-blur-md p-5 rounded-xl border border-primary/20 shadow-inner">
                          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                            <div className="p-2 rounded-lg bg-white/5">
                              <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg leading-none mb-1">{skill.name}</h4>
                              <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border ${skill.depth.level === 'Advanced'
                                ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                }`}>
                                {skill.depth.level}
                              </span>
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Experience</p>
                              <p className="text-sm text-zinc-300 leading-relaxed">{skill.depth.projects}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Usage</p>
                              <p className="text-sm text-zinc-300 leading-relaxed">{skill.depth.usage}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Skill Animation */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            {/* Center circle */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-heading font-bold text-xl">MERN</span>
            </div>

            {/* Orbiting icons */}
            {[FaReact, SiMongodb, FaNodeJs, SiExpress].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center"
                style={{
                  transformOrigin: 'center',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 5,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 5,
                  }}
                  style={{
                    transform: `translateX(${60 + i * 10}px)`,
                  }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
