import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaLinux, FaNetworkWired, FaServer } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';

const techNodes = [
  // Frontend
  { id: 'react', name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend', x: 20, y: 30 },
  { id: 'js', name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend', x: 10, y: 50 },
  { id: 'ts', name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend', x: 30, y: 50 },
  
  // Backend
  { id: 'node', name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend', x: 50, y: 30 },
  { id: 'express', name: 'Express', icon: SiExpress, color: '#FFFFFF', category: 'Backend', x: 50, y: 50 },
  
  // Database
  { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database', x: 80, y: 30 },
  { id: 'sql', name: 'SQL', icon: FaDatabase, color: '#00758F', category: 'Database', x: 80, y: 50 },
  
  // Infrastructure
  { id: 'aws', name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Cloud', x: 50, y: 70 },
  { id: 'linux', name: 'Linux', icon: FaLinux, color: '#FCC624', category: 'OS', x: 20, y: 70 },
  { id: 'network', name: 'Networks', icon: FaNetworkWired, color: '#00F5FF', category: 'Infrastructure', x: 80, y: 70 },
];

const connections = [
  { from: 'react', to: 'node' },
  { from: 'js', to: 'react' },
  { from: 'ts', to: 'react' },
  { from: 'node', to: 'express' },
  { from: 'express', to: 'mongodb' },
  { from: 'express', to: 'sql' },
  { from: 'node', to: 'aws' },
  { from: 'aws', to: 'mongodb' },
  { from: 'linux', to: 'node' },
  { from: 'network', to: 'aws' },
];

const TechStackMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [...new Set(techNodes.map(n => n.category))];

  const getNodeById = (id: string) => techNodes.find(n => n.id === id);

  return (
    <section id="tech-map" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Visual Overview
          </span>
          <h2 className="section-title">
            Tech Stack <span className="gradient-text">Visual Map</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual representation of how my technologies connect and work together.
          </p>
        </motion.div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                hoveredCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setHoveredCategory(hoveredCategory === category ? null : category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Visual Map */}
        <motion.div
          className="relative h-[400px] md:h-[500px] glass-card rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, i) => {
              const from = getNodeById(conn.from);
              const to = getNodeById(conn.to);
              if (!from || !to) return null;
              
              const isHighlighted = 
                !hoveredCategory || 
                from.category === hoveredCategory || 
                to.category === hoveredCategory;
              
              return (
                <motion.line
                  key={i}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke={isHighlighted ? 'hsl(var(--primary))' : 'hsl(var(--muted))'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeOpacity={isHighlighted ? 0.5 : 0.2}
                  strokeDasharray={isHighlighted ? '0' : '5,5'}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Tech Nodes */}
          {techNodes.map((node, index) => {
            const isHighlighted = !hoveredCategory || node.category === hoveredCategory;
            
            return (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: isHighlighted ? 1 : 0.3, 
                  scale: isHighlighted ? 1 : 0.8 
                } : {}}
                transition={{ delay: 0.3 + index * 0.05 }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: { duration: 2 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center"
                    animate={{
                      boxShadow: activeNode === node.id 
                        ? `0 0 30px ${node.color}60`
                        : `0 0 10px ${node.color}20`,
                    }}
                  >
                    <node.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: node.color }} />
                  </motion.div>
                  
                  {/* Label */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap"
                    animate={{ opacity: activeNode === node.id ? 1 : 0.7 }}
                  >
                    <p className="text-xs font-medium text-foreground">{node.name}</p>
                    <p className="text-[10px] text-muted-foreground text-center">{node.category}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackMap;
