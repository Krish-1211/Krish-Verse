import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Understand the Problem',
    description:
      'Deep dive into your business challenges, goals, and constraints. Every great solution starts with the right questions.',
    details: [
      'Stakeholder interviews & requirement gathering',
      'Market & competitive analysis',
      'User research & persona development',
      'Technical feasibility assessment',
    ],
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design the Solution',
    description:
      "Map out the architecture and approach. Whether it's a web app or ML model, the blueprint defines success.",
    details: [
      'System architecture design',
      'Data modeling & schema design',
      'UX/UI wireframing & prototyping',
      'Technology stack selection',
    ],
  },
  {
    icon: Code,
    number: '03',
    title: 'Build & Iterate',
    description:
      'Rapid development with continuous feedback loops. Ship early, learn fast, and refine relentlessly.',
    details: [
      'Agile development sprints',
      'Continuous integration & deployment',
      'Code reviews & quality assurance',
      'Regular stakeholder demos',
    ],
  },
  {
    icon: LineChart,
    number: '04',
    title: 'Analyze & Optimize',
    description:
      'Measure impact, identify improvements, and ensure the solution evolves with your needs.',
    details: [
      'Performance monitoring & analytics',
      'A/B testing & experimentation',
      'User feedback integration',
      'Continuous improvement roadmap',
    ],
  },
];

const Process = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Process"
        title="How I work"
        description="A systematic approach that balances creativity with rigor, ensuring every project delivers measurable value."
      />

      <section className="section-padding pt-0">
        <div className="section-container">
          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="glass rounded-3xl p-8 md:p-12 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    {/* Number & Icon */}
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.1,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className="text-5xl md:text-6xl font-bold text-muted/50"
                      >
                        {step.number}
                      </motion.div>
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                      >
                        <step.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-5">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-5 md:border-l md:border-border md:pl-8">
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                        Key Activities
                      </h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
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

          {/* Principles Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Guiding Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clarity Over Complexity',
                  desc: 'Simple solutions that solve real problems are better than complex ones that impress no one.',
                },
                {
                  title: 'Data-Informed Decisions',
                  desc: 'Every choice is backed by evidence, research, or validated assumptions.',
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Technology evolves rapidly. Staying curious and adaptable is non-negotiable.',
                },
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your project?
            </p>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
              >
                Let's Collaborate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
