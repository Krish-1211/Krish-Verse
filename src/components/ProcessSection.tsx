import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Understand the Problem',
    description:
      'Deep dive into your business challenges, goals, and constraints. Every great solution starts with the right questions.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design the Solution',
    description:
      'Map out the architecture and approach. Whether it\'s a web app or ML model, the blueprint defines success.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Build & Iterate',
    description:
      'Rapid development with continuous feedback loops. Ship early, learn fast, and refine relentlessly.',
  },
  {
    icon: LineChart,
    number: '04',
    title: 'Analyze & Optimize',
    description:
      'Measure impact, identify improvements, and ensure the solution evolves with your needs.',
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block"
          >
            Process
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How I work
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach that balances creativity with rigor,
            ensuring every project delivers measurable value.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8 h-full group"
                >
                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.15,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="absolute -top-4 left-8 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <step.icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector dot - visible on lg screens */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.15,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full hidden lg:block"
                  style={{ marginTop: 'calc(-50% - 2rem)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
