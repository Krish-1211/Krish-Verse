import { motion } from 'framer-motion';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            {eyebrow}
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
