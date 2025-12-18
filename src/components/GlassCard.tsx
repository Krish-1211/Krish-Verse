import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const GlassCard = ({ children, className = '', delay = 0, hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={hoverEffect ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`glass rounded-2xl p-8 transition-shadow duration-300 ${
        hoverEffect ? 'hover:shadow-xl hover:shadow-accent/5' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
