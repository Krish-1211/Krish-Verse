import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

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
    year: '2024',
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
    year: '2024',
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
    year: '2023',
  },
  {
    id: 4,
    title: 'Data Pipeline Automation',
    description:
      'End-to-end data pipeline automating ETL processes for a financial services company processing millions of daily transactions.',
    role: 'Data Engineering & DevOps',
    tools: ['Apache Airflow', 'Python', 'Snowflake', 'dbt', 'Kubernetes'],
    outcome: 'Reduced data processing time from hours to minutes with 99.9% uptime.',
    color: 'from-green-500/20 to-emerald-500/20',
    year: '2023',
  },
];

const Work = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Selected Work"
        title="Projects that made an impact"
        description="A curated selection of projects showcasing the intersection of technical excellence and meaningful outcomes."
      />

      <section className="section-padding pt-0">
        <div className="section-container">
          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        Project {String(project.id).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
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
                      className="p-4 bg-muted/50 rounded-xl border border-border/50 mb-6"
                    >
                      <span className="text-sm font-medium text-accent">Outcome:</span>
                      <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
                    </motion.div>

                    {/* Links */}
                    <div className="flex gap-4">
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
                  </div>

                  {/* Visual Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-3/4 h-3/4 rounded-xl bg-background/50 shadow-2xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
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
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-24 pt-12 border-t border-border"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together?
            </p>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
