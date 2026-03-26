import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xl font-heading font-bold gradient-text">VK</span>
            <span className="text-sm">
              © {currentYear} Vamshi Krishna Nagula. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Vamshikrishna0372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vamshi-krishna-nagula-174b6833a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:nagulavamshi1453@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
