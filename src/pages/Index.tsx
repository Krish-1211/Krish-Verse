import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  const headlineWords = "Building intelligent, data-driven digital experiences.".split(' ');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />

        <div className="section-container relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-muted-foreground">
                <motion.span
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available for new projects
              </span>
            </motion.div>

            {/* Main headline with staggered word animation */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground mb-12 font-medium"
            >
              <span className="inline-flex items-center gap-3 flex-wrap justify-center">
                <span>Web Development</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Data Analysis</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Data Science</span>
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/work"
                  className="group relative px-8 py-4 bg-foreground text-background rounded-xl font-medium text-base overflow-hidden inline-flex items-center gap-2"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="glass px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:bg-muted inline-block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs font-medium uppercase tracking-widest">Explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-muted blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { to: '/expertise', title: 'Expertise', desc: 'Web Dev, Data Analysis & Science' },
              { to: '/work', title: 'Work', desc: 'Featured projects & case studies' },
              { to: '/about', title: 'About', desc: 'My journey & approach' },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="group block glass rounded-2xl p-8 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
