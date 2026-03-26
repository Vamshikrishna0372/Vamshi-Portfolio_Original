import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SiJira, SiSelenium } from 'react-icons/si';
import { FaCode, FaClipboardCheck, FaRocket, FaBug, FaSyncAlt } from 'react-icons/fa';

const workflowSteps = [
    {
        id: 1,
        title: 'Planning & Tracking',
        icon: SiJira,
        color: '#0052CC',
        description: 'Sprint planning, user stories, and issue tracking using Jira.',
        tools: ['Jira', 'Confluence', 'Agile']
    },
    {
        id: 2,
        title: 'Development',
        icon: FaCode,
        color: '#F7DF1E',
        description: 'Writing scalable code and version control with Git.',
        tools: ['VS Code', 'Git', 'GitHub']
    },
    {
        id: 3,
        title: 'Manual Testing',
        icon: FaClipboardCheck,
        color: '#4ECDC4',
        description: 'Test case execution, exploratory testing, and bug reporting.',
        tools: ['Test Cases', 'Bug Reports', 'Exploratory']
    },
    {
        id: 4,
        title: 'Automation',
        icon: SiSelenium,
        color: '#43B02A',
        description: 'Automated regression testing using Selenium WebDriver.',
        tools: ['Selenium', 'Java/Python', 'TestNG']
    },
    {
        id: 5,
        title: 'Deployment',
        icon: FaRocket,
        color: '#FF6B6B',
        description: 'CI/CD pipelines and production deployment.',
        tools: ['CI/CD', 'Docker', 'Cloud']
    },
    {
        id: 6,
        title: 'Review & Feedback',
        icon: FaSyncAlt,
        color: '#A855F7',
        description: 'Sprint retrospective and continuous improvement.',
        tools: ['Retrospective', 'Feedback Loop']
    }
];

const SDLCWorkflow = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section id="sdlc-workflow" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
                        Methodology
                    </span>
                    <h2 className="section-title">
                        Agile & <span className="gradient-text">Quality Assurance</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My simplified SDLC workflow integrating Agile practices with robust manual and automated testing.
                    </p>
                </motion.div>

                {/* Visual Map Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Path (S-Curve or Cycle) */}
                    <svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 hidden md:block pointer-events-none z-0 overflow-visible">
                        <path
                            d="M 50 100 C 250 100, 250 300, 550 200 C 850 100, 950 100, 1150 100"
                            fill="none"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            className="opacity-20 translate-y-12"
                        />
                        <defs>
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00F5FF" />
                                <stop offset="100%" stopColor="#FF0080" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                        {workflowSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative group"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15 }}
                                onMouseEnter={() => setActiveStep(step.id)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Connector Line (Mobile) */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-border md:hidden translate-y-full -translate-x-1/2" />
                                )}

                                {/* Card */}
                                <div
                                    className={`h-full glass-card p-4 rounded-xl border transition-all duration-300 ${activeStep === step.id
                                        ? 'border-primary/50 shadow-[0_0_30px_rgba(0,245,255,0.2)] -translate-y-2'
                                        : 'border-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <div className="flex flex-col items-center text-center h-full">
                                        {/* Icon */}
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
                                            style={{
                                                backgroundColor: activeStep === step.id ? `${step.color}20` : 'rgba(255,255,255,0.05)',
                                                color: step.color
                                            }}
                                        >
                                            <step.icon className="w-6 h-6" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-heading font-bold text-sm mb-2">{step.title}</h3>

                                        {/* Description */}
                                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Tools Tags */}
                                        <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-2 border-t border-white/5 w-full">
                                            {step.tools.map(tool => (
                                                <span key={tool} className="text-[10px] px-1.5 py-0.5 rounded bg-muted/50 text-muted-foreground">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow Connector (Desktop) */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-muted-foreground/30">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Integration Note */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/20 border border-white/5">
                        <FaBug className="text-primary animate-pulse" />
                        <span className="text-sm text-muted-foreground">
                            Ensuring <span className="text-primary font-semibold">Zero Defect Leakage</span> through rigorous QA cycles
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SDLCWorkflow;
