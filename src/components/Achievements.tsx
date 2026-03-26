import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiAward, FiCode, FiUsers, FiTrendingUp, FiExternalLink } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    icon: FaTrophy,
    title: '🏆 3rd Place — Hackathon 2K25',
    description:
      'Secured 3rd Place in a 7-hour Coding Challenge at Malla Reddy University, demonstrating strong problem-solving, debugging, and full-stack development skills across multiple competitive rounds.',
    metric: '3rd',
    metricLabel: 'Place Winner',
    link: 'https://drive.google.com/file/d/1YrW9Zbwr8T1y93-hE2FfxUAYaIqFucwx/view?usp=sharing',
    color: 'primary',
    highlight: true,
  },
  {
    icon: FiUsers,
    title: 'GDG Workshop',
    description: 'Completed Prompt Engineering Workshop conducted by Google Developer Groups (GDG).',
    metric: '1',
    metricLabel: 'Workshop',
    link: 'https://drive.google.com/file/d/1onSLYUXQp7WfnqWMIu1AOvAmy61JeQiK/view?usp=sharing',
    color: 'secondary',
    highlight: false,
  },
  {
    icon: FiTrendingUp,
    title: 'Promptathon 2025',
    description: 'Participated in Promptathon 2025, focusing on advanced AI prompting strategies and LLM-based problem solving.',
    metric: '1x',
    metricLabel: 'Participation',
    link: 'https://drive.google.com/file/d/1QVuAT65eRW0Pg_XFSHG3VGBZecs62ejG/view?usp=sharing',
    color: 'accent',
    highlight: false,
  },
  {
    icon: FiAward,
    title: 'MERN SaaS Platforms',
    description: 'Developed scalable multi-tenant SaaS platforms and real-time dashboards with MERN & FastAPI.',
    metric: '3+',
    metricLabel: 'Platforms Built',
    color: 'primary',
    highlight: false,
  },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * numericTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
            <FiAward className="inline-block mr-2" />
            Achievements
          </span>
          <h2 className="section-title">
            Milestones &amp; <span className="gradient-text">Accomplishments</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {/* Special highlight ring for hackathon winner */}
              {achievement.highlight && (
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-yellow-400 via-primary to-secondary opacity-60 blur-sm animate-pulse pointer-events-none" />
              )}

              <div
                className={`glass-card p-6 md:p-8 rounded-xl h-full flex flex-col relative z-10 ${
                  achievement.highlight
                    ? 'border border-yellow-400/40 bg-yellow-400/5'
                    : ''
                }`}
              >
                {/* Winner badge */}
                {achievement.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-400/40">
                    🥉 3rd Place
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    achievement.highlight
                      ? 'bg-yellow-400/15'
                      : `bg-${achievement.color}/10`
                  }`}
                >
                  <achievement.icon
                    className={`w-7 h-7 ${
                      achievement.highlight ? 'text-yellow-400' : `text-${achievement.color}`
                    }`}
                  />
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div
                    className={`text-4xl md:text-5xl font-heading font-bold ${
                      achievement.highlight ? 'text-yellow-400' : 'gradient-text'
                    }`}
                  >
                    {achievement.highlight ? (
                      <span>{achievement.metric}</span>
                    ) : (
                      <AnimatedCounter target={achievement.metric} />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{achievement.metricLabel}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  {achievement.description}
                </p>

                {/* Link */}
                {achievement.link && (
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm mt-4 hover:underline font-medium ${
                      achievement.highlight ? 'text-yellow-400' : 'text-primary'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    {achievement.highlight ? 'View Achievement' : 'View Certificate'}
                  </motion.a>
                )}
              </div>

              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 pointer-events-none ${
                  achievement.highlight
                    ? 'bg-yellow-400/10'
                    : `bg-${achievement.color}/5`
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
