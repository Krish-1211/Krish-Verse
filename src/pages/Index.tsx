import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


        <div className="section-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left">
              {/* Intro Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <span className="text-accent font-medium text-lg tracking-wide uppercase">
                  Hello, I'm
                </span>
              </motion.div>

              {/* Name/Identity Headline */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8 text-foreground tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Krish
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-muted-foreground"
                >
                  Kavathia<span className="text-accent">.</span>
                </motion.span>
              </h1>

              {/* Personal Bio */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl leading-relaxed"
              >
                A <span className="text-foreground font-medium">Creative Developer</span> & <span className="text-foreground font-medium">Data Analyst</span> transforming complex data into beautiful, intelligent digital experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/work"
                    className="block w-full sm:w-auto text-center px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  >
                    View My Work
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Cube Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.3 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className="relative flex items-center justify-center pointer-events-none mt-10 lg:mt-0"
            >
              <div
                className="relative w-full max-h-[400px] lg:max-h-[600px] flex items-center justify-center transform scale-90 sm:scale-100"
                dangerouslySetInnerHTML={{
                  __html: `
                    <video
                      src="/cube.mp4"
                      autoplay
                      loop
                      muted
                      playsinline
                      webkit-playsinline
                      disablepictureinpicture
                      class="w-full h-auto object-contain mix-blend-screen"
                      style="filter: contrast(1.2) brightness(0.8); mask-image: radial-gradient(circle, black 40%, transparent 70%); -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%);"
                    ></video>
                  `
                }}
              />
            </motion.div>

          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-muted blur-3xl opacity-50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      {/* Selected Work Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12"
          >
            <div>
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-2 block">Selected Work</span>
              <h2 className="text-3xl md:text-5xl font-bold">Recent Projects</h2>
            </div>
            <Link to="/work" className="hidden md:flex items-center text-lg font-medium hover:text-accent transition-colors mt-6 md:mt-0">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Featured Project Preview (Mockup/Link) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/work" className="group block relative overflow-hidden rounded-3xl aspect-[4/5] sm:aspect-video md:aspect-[21/9] bg-card border border-white/5 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10" />
              <img
                src="/netflix_project.png"
                alt="Featured Project"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-12 z-20 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                  <div>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-white leading-tight">Netflix Userbase Analysis</h3>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl line-clamp-2 md:line-clamp-none">
                      Data visualization project extracting key behavioral insights from global Netflix user data.
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 md:p-4 rounded-full backdrop-blur-sm group-hover:bg-accent group-hover:text-white transition-colors hidden sm:block">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/work" className="inline-flex items-center text-lg font-medium hover:text-accent transition-colors">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-2 block">My Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What I Bring to the Table</h2>
            <p className="text-muted-foreground text-lg">
              Bridging the gap between functional code and stunning design, with data-driven insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Full-Stack Development', desc: 'Building scalable applications with React, Node.js, and modern frameworks.', icon: 'F' },
              { title: 'Data Analytics', desc: 'Transforming raw data into actionable business intelligence and visualizations.', icon: 'D' },
              { title: 'UI/UX Design', desc: 'Crafting intuitive and aesthetically pleasing user interfaces.', icon: 'U' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-subtle border border-white/5 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xl mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/expertise" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium tracking-wide uppercase">
              View Full Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-2 block">My Process</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">From Concept to Deployment</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I follow a structured approach to ensure every project is delivered with the highest quality, performance, and user experience in mind.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  { step: '01', title: 'Discover', desc: 'Understanding the problem and defining goals.' },
                  { step: '02', title: 'Build', desc: 'Clean infrastructure and responsive design.' },
                  { step: '03', title: 'Refine', desc: 'Testing, optimizing, and deploying.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent font-mono text-xl mr-4 mt-1">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/process" className="inline-flex items-center text-accent font-medium hover:underline">
                Explore Detailed Process <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-full bg-gradient-to-tr from-accent/20 to-transparent flex items-center justify-center p-12"
            >
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-reverse-slower" />
              <div className="text-center relative z-10 glass p-8 rounded-2xl max-w-xs">
                <span className="text-4xl mb-4 block">🚀</span>
                <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                <p className="text-muted-foreground text-sm mb-6">Let's turn your ideas into reality.</p>
                <Link to="/contact" className="px-6 py-2 bg-accent text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & CTA Section */}
      <section className="section-padding">
        <div className="section-container text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build something extraordinary together.</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-10 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:bg-foreground/90 transition-all">
                Let's Talk
              </Link>
              <Link to="/about" className="px-10 py-4 border border-white/10 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
