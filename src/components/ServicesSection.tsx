import { motion } from 'framer-motion';
import { Code2, BarChart3, Brain, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Crafting performant, accessible, and beautifully designed web applications that scale with your business needs.',
    skills: ['React', 'TypeScript', 'Next.js', 'Node.js'],
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description:
      'Transforming raw data into actionable insights through statistical analysis, visualization, and strategic reporting.',
    skills: ['Python', 'SQL', 'Tableau', 'Excel'],
  },
  {
    icon: Brain,
    title: 'Data Science',
    description:
      'Building intelligent systems using machine learning and AI to predict trends, automate decisions, and unlock value.',
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'MLOps'],
  },
];

const ServicesSection = () => {
  return (
    <section id="expertise" className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            Expertise
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What I bring to the table
          </h2>
          <p className="text-lg text-muted-foreground">
            A unique blend of technical expertise and creative problem-solving,
            delivering solutions that are both innovative and practical.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={0.1 * index} className="group">
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>

              {/* Title with arrow */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -5, y: 5 }}
                  whileHover={{ x: 0, y: 0 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
