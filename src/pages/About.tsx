import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '3', label: 'Core Domains' },
];

const timeline = [
  {
    year: 'Nov 2025 - Present',
    title: 'E-commerce Website Manager',
    description: 'Managing development, deployment, and SEO for SureSeal Sealants (Australia). Overseeing UI/UX and full-stack integration.',
  },
  {
    year: 'Jun 2025 - Present',
    title: 'IT Trainer (BIT-Baroda)',
    description: 'Mentoring students in C, C++, Python, Web Development, and Data Science. Designed structured courses and guided hands-on projects.',
  },
  {
    year: '2022 - 2026',
    title: 'B.Tech - Computer Science Engineering',
    description: 'Pursuing engineering at Parul University, Vadodara. Focusing on core CS concepts, AI, and Data Science. CGPA: 6.91',
  },
  {
    year: '2022',
    title: '12th Grade (CBSE)',
    description: 'Completed higher secondary education at Urmi School, Vadodara. Percentage: 73%',
  },
  {
    year: '2020',
    title: '10th Grade (IGCSE)',
    description: 'Completed early education via homeschooling under the Cambridge Board.',
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Me"
        title="Driven by data, powered by code"
        description="I'm a Computer Science student and freelancer passionate about data science, web development, and building intelligent digital solutions."
      />

      <section className="section-padding pt-0">
        <div className="section-container">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Image/Visual side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:order-last"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 sticky top-32">
                {/* Background shapes */}
                <motion.div
                  className="absolute -top-8 -left-8 w-full h-full bg-accent/10 rounded-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-full h-full border border-border rounded-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Main image placeholder */}
                <motion.div
                  className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/krish-avatar.jpg"
                    alt="Krish Kavathia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg"
                >
                  Motivated and detail-oriented Computer Science Engineering student with a strong passion for
                  data science, web development, and emerging technologies.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  I have experience delivering real-world projects and teaching core computer science subjects.
                  My journey involves not just learning but applying concepts in Data Analysis, Machine Learning,
                  and Full-Stack Web Development to solve actual problems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Currently pursuing my B.Tech at Parul University, I am committed to continuous learning
                  and technical growth, having earned certifications in Data Science, Data Analysis, and
                  Frontend Web Development.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 glass rounded-2xl"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      type: 'spring',
                    }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:bg-muted transition-colors duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Journey</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:text-right'
                      }`}
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-background"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    />

                    {/* Content */}
                    <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <span className="text-sm font-medium text-accent">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:order-1'} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
