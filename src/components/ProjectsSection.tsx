import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description:
      'A real-time analytics platform providing comprehensive insights into user behavior, conversion funnels, and business KPIs.',
    role: 'Full-stack Development & Data Engineering',
    tools: ['React', 'D3.js', 'Python', 'PostgreSQL', 'AWS'],
    outcome: 'Reduced reporting time by 75% and increased data-driven decisions across the organization.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'ML Prediction Engine',
    description:
      'Machine learning system for predicting customer churn with 94% accuracy, enabling proactive retention strategies.',
    role: 'Data Science & Model Development',
    tools: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'Docker'],
    outcome: 'Helped reduce churn rate by 23% in the first quarter after deployment.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description:
      'Modern, performant e-commerce solution with personalized recommendations and seamless checkout experience.',
    role: 'Frontend Architecture & Integration',
    tools: ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Vercel'],
    outcome: 'Achieved 40% improvement in page load times and 25% increase in conversion rate.',
    color: 'from-orange-500/20 to-red-500/20',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className="relative mb-32 last:mb-0"
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={index % 2 === 1 ? 'lg:order-2' : ''}
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Project {String(project.id).padStart(2, '0')}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Role */}
          <div className="mb-6">
            <span className="text-sm font-medium text-foreground">Role:</span>
            <span className="text-sm text-muted-foreground ml-2">{project.role}</span>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool, toolIndex) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                className="px-3 py-1.5 text-sm font-medium glass rounded-lg"
              >
                {tool}
              </motion.span>
            ))}
          </div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-4 bg-muted/50 rounded-xl border border-border/50"
          >
            <span className="text-sm font-medium text-accent">Outcome:</span>
            <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
          </motion.div>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              whileHover={{ x: 4 }}
            >
              <ExternalLink size={16} />
              View Project
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 4 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Placeholder */}
        <motion.div
          style={{ y }}
          className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden`}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-3/4 h-3/4 rounded-xl bg-background/50 shadow-2xl"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="p-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-3/4" />
                    <div className="h-2 bg-muted rounded w-1/2" />
                    <div className="h-2 bg-muted rounded w-5/6" />
                    <div className="h-2 bg-muted rounded w-2/3" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            Selected Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projects that made an impact
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated selection of projects showcasing the intersection of
            technical excellence and meaningful outcomes.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
          />

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
