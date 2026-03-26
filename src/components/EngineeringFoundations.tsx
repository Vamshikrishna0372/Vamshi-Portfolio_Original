import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaWindows, FaLinux, FaUbuntu, FaNetworkWired, FaServer, FaGlobe, FaLock, FaExchangeAlt } from 'react-icons/fa';
import { SiGnubash } from 'react-icons/si';

const osKnowledge = [
  { name: 'Windows', icon: FaWindows, color: '#00A4EF', description: 'Desktop development, PowerShell scripting' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624', description: 'Server management, shell scripting' },
  { name: 'Ubuntu', icon: FaUbuntu, color: '#E95420', description: 'Development environment, deployment' },
];

const networkKnowledge = [
  { name: 'OSI Model', icon: FaNetworkWired, color: '#00F5FF', description: '7-layer network architecture understanding' },
  { name: 'TCP/IP', icon: FaServer, color: '#FF6B6B', description: 'Protocol suite for internet communication' },
  { name: 'HTTP/HTTPS', icon: FaGlobe, color: '#4ECDC4', description: 'Web protocols & secure communication' },
  { name: 'DNS', icon: SiGnubash, color: '#9B59B6', description: 'Domain name resolution system' },
  { name: 'REST APIs', icon: FaExchangeAlt, color: '#F39C12', description: 'RESTful architecture & API design' },
  { name: 'Security', icon: FaLock, color: '#2ECC71', description: 'Network security fundamentals' },
];

const EngineeringFoundations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section id="foundations" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Engineering Foundations
          </span>
          <h2 className="section-title">
            CS <span className="gradient-text">Core Knowledge</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong understanding of system-level fundamentals including Operating Systems and Computer Networks,
            enabling me to build efficient, scalable, and reliable software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Operating Systems */}
          <motion.div
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              Operating Systems
            </h3>
            
            <div className="flex flex-wrap gap-4 relative">
              {osKnowledge.map((os, index) => (
                <motion.div
                  key={os.name}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setActiveTooltip(os.name)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-muted/50 border border-border flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-primary/50"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: `0 0 30px ${os.color}40`
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    }}
                  >
                    <os.icon className="w-10 h-10" style={{ color: os.color }} />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground whitespace-nowrap z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activeTooltip === os.name ? 1 : 0,
                      y: activeTooltip === os.name ? 0 : 10
                    }}
                  >
                    <p className="font-semibold text-primary">{os.name}</p>
                    <p className="text-muted-foreground text-xs">{os.description}</p>
                  </motion.div>
                  
                  <p className="text-center text-sm text-muted-foreground mt-2">{os.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Computer Networks */}
          <motion.div
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-br-full" />
            
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
              Computer Networks
            </h3>
            
            {/* Network Diagram Animation */}
            <div className="relative h-64">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <motion.line
                  x1="50%" y1="50%"
                  x2="20%" y2="20%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.line
                  x1="50%" y1="50%"
                  x2="80%" y2="20%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.line
                  x1="50%" y1="50%"
                  x2="20%" y2="80%"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.line
                  x1="50%" y1="50%"
                  x2="80%" y2="80%"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
              
              {/* Center Node */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <FaNetworkWired className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              {/* Network Nodes */}
              {networkKnowledge.map((item, index) => {
                const positions = [
                  { top: '10%', left: '15%' },
                  { top: '10%', right: '15%' },
                  { top: '50%', left: '5%' },
                  { top: '50%', right: '5%' },
                  { bottom: '10%', left: '15%' },
                  { bottom: '10%', right: '15%' },
                ];
                const pos = positions[index];
                
                return (
                  <motion.div
                    key={item.name}
                    className="absolute group"
                    style={pos}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onMouseEnter={() => setActiveTooltip(item.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center cursor-pointer"
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: `0 0 25px ${item.color}50`
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${item.color}20`,
                          `0 0 20px ${item.color}40`,
                          `0 0 10px ${item.color}20`,
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                      }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </motion.div>
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-card border border-border text-xs text-foreground whitespace-nowrap z-20"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ 
                        opacity: activeTooltip === item.name ? 1 : 0,
                        y: activeTooltip === item.name ? 0 : 5
                      }}
                    >
                      <p className="font-semibold" style={{ color: item.color }}>{item.name}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringFoundations;
