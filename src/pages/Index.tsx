import { useEffect, useState } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import BackToTop from '@/components/ui/BackToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import EngineeringFoundations from '@/components/EngineeringFoundations';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Collaboration from '@/components/Collaboration';
import BuildProcess from '@/components/BuildProcess';
import SDLCWorkflow from '@/components/SDLCWorkflow';
import LiveStats from '@/components/LiveStats';
import TechStackMap from '@/components/TechStackMap';
import DevEnvironment from '@/components/DevEnvironment';
import ProblemSolving from '@/components/ProblemSolving';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Resume from '@/components/Resume';

const Index = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Easter Eggs
  useEffect(() => {
    // Konami-style code: Shift + D for Dev mode
    const keys: string[] = [];
    const devModeCode = ['Shift', 'D'];

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys.splice(-10, keys.length - 10);

      if (keys.slice(-2).join('') === devModeCode.join('')) {
        // Dev mode activated
        console.log('%c🚀 Developer Mode Activated!', 'color: #00F5FF; font-size: 20px; font-weight: bold;');
        console.log('%c$ whoami', 'color: #4ECDC4; font-family: monospace;');
        console.log('%cVAMSHI KRISHNA NAGULA', 'color: #9D4EDD; font-size: 16px;');
        console.log('%cAI & Full Stack Developer | MERN + FastAPI', 'color: #FF6B6B;');
        console.log('%c$ cat skills.txt', 'color: #4ECDC4; font-family: monospace;');
        console.log('%cReact, Node.js, MongoDB, FastAPI, Machine Learning, LLMs', 'color: #FFD93D;');

        // Visual Easter egg
        document.body.classList.add('dev-mode');
        setTimeout(() => document.body.classList.remove('dev-mode'), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const handleHashChange = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true);
        // Clear hash to allow reopening without needing to change hash to something else first
        history.replaceState(null, '', ' ');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check in case they loaded with #resume
    handleHashChange();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />
      <ScrollProgressBar />
      {/* Visual Effects */}
      <CustomCursor />
      <BackToTop />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <LiveStats />
        <Skills />
        <EngineeringFoundations />
        <TechStackMap />
        <BuildProcess />
        <SDLCWorkflow />
        <Experience />
        <Projects />
        <Collaboration />
        <Achievements />
        <Certifications />
        <Education />
        <DevEnvironment />
        <ProblemSolving />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Index;
