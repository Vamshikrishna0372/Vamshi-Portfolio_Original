import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaWindows, FaLinux, FaGitAlt, FaGithub, FaChrome, FaTerminal } from 'react-icons/fa';
import { SiPostman, SiUbuntu } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const devTools = [
  { name: 'VS Code', icon: VscCode, color: '#007ACC', category: 'IDE' },
  { name: 'Windows', icon: FaWindows, color: '#00A4EF', category: 'OS' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624', category: 'OS' },
  { name: 'Ubuntu', icon: SiUbuntu, color: '#E95420', category: 'OS' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Version Control' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF', category: 'Version Control' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'API Testing' },
  { name: 'DevTools', icon: FaChrome, color: '#4285F4', category: 'Debugging' },
];

const terminalCommands = [
  { cmd: '$ whoami', output: 'Vamshi Krishna Nagula' },
  { cmd: '$ cat role.txt', output: 'AI & Full Stack Developer | MERN & FastAPI' },
  { cmd: '$ ls skills/', output: 'react/ node/ mongodb/ fastapi/ llms/ machine_learning/' },
  { cmd: '$ git status', output: 'On branch main - Ready to build intelligent solutions!' },
];

const DevEnvironment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    const currentCommand = terminalCommands[terminalIndex];
    const fullText = `${currentCommand.cmd}\n${currentCommand.output}`;

    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);

        setTimeout(() => {
          setTerminalIndex((prev) => (prev + 1) % terminalCommands.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [terminalIndex, isInView]);

  return (
    <section id="dev-env" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Workspace
          </span>
          <h2 className="section-title">
            Development <span className="gradient-text">Environment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and environment I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dev Tools Grid */}
          <motion.div
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <FaTerminal className="text-primary" />
              My Toolbox
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {devTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.div
                    className="flex flex-col items-center p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 25px ${tool.color}30`
                    }}
                  >
                    <tool.icon className="w-8 h-8 mb-2" style={{ color: tool.color }} />
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                    <span className="text-xs text-muted-foreground">{tool.category}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            className="glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground ml-2 font-mono">vamshi@portfolio:~</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm min-h-[300px] bg-[#0D1117]">
              <pre className="text-green-400 whitespace-pre-wrap">
                {displayedText}
                {isTyping && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </pre>

              {/* Previous commands (faded) */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <p className="text-muted-foreground text-xs mb-2">Recent commands:</p>
                {terminalCommands.map((cmd, i) => (
                  <p key={i} className="text-muted-foreground/50 text-xs">{cmd.cmd}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevEnvironment;
