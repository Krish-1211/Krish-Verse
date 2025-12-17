import { motion } from 'framer-motion';
import { Code2, BarChart3, Brain, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import GlassCard from '@/components/GlassCard';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Crafting performant, accessible, and beautifully designed web applications that scale with your business needs.',
    skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    details: [
      'Custom web application development',
      'Responsive design & mobile-first approach',
      'API design & integration',
      'Performance optimization',
      'SEO best practices',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description:
      'Transforming raw data into actionable insights through statistical analysis, visualization, and strategic reporting.',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'R'],
    details: [
      'Exploratory data analysis',
      'Dashboard development',
      'KPI tracking & reporting',
      'A/B testing & experimentation',
      'Business intelligence',
    ],
  },
  {
    icon: Brain,
    title: 'Data Science',
    description:
      'Building intelligent systems using machine learning and AI to predict trends, automate decisions, and unlock value.',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLOps'],
    details: [
      'Predictive modeling',
      'Natural language processing',
      'Computer vision solutions',
      'Recommendation systems',
      'Model deployment & monitoring',
    ],
  },
];

const Expertise = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Expertise"
        title="What I bring to the table"
        description="A unique blend of technical expertise and creative problem-solving, delivering solutions that are both innovative and practical."
      />

      <section className="section-padding pt-0">
        <div className="section-container">
          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="glass rounded-3xl p-8 md:p-12 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left side */}
                    <div>
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <service.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors duration-300" />
                      </motion.div>

                      {/* Title with arrow */}
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -5, y: 5 }}
                          whileHover={{ x: 0, y: 0 }}
                        >
                          <ArrowUpRight className="w-6 h-6 text-accent" />
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
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
                            className="px-4 py-2 text-sm font-medium bg-muted rounded-lg text-muted-foreground"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Details */}
                    <div className="lg:border-l lg:border-border lg:pl-12">
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                        What I Deliver
                      </h3>
                      <ul className="space-y-4">
                        {service.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detail}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + detailIndex * 0.1,
                            }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to discuss your project?
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
