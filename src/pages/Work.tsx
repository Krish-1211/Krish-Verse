import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const projects = [
  {
    id: 1,
    title: 'SureSeal Sealants',
    description:
      'A complete e-commerce platform for an Australia-based industrial sealant company, featuring product catalogs and a responsive design.',
    role: 'Full-stack Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    outcome: 'Managed end-to-end development, SEO strategies, and responsive implementation for optimal user experience.',
    color: 'from-blue-500/20 to-cyan-500/20',
    year: '2025',
    link: 'https://krish-1211.github.io/seal-shine-project/',
    github: 'https://github.com/Krish-1211/seal-shine-project', // Inferred or generic
    image: '/sureseal_project.png',
  },
  {
    id: 2,
    title: 'MicroFastTech E-commerce',
    description:
      'A modern e-commerce platform with dynamic product rendering, cart functionality, and efficient backend structure.',
    role: 'Full-stack Developer',
    tools: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    outcome: 'Integrated a clean UI with fast navigation and seamless backend performance.',
    color: 'from-purple-500/20 to-pink-500/20',
    year: '2025',
    link: 'https://microfast-tech-ecommerce-tisb.vercel.app/',
    github: 'https://github.com/Krish-1211',
    image: '/microfast_ecommerce_project.png',
  },
  {
    id: 3,
    title: 'MicroFastTech Company Site',
    description:
      'Professional company website highlighting products and services with a focus on branding consistency.',
    role: 'Frontend Developer',
    tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    outcome: 'Delivered a professional, fast-loading site with responsive aesthetics.',
    color: 'from-orange-500/20 to-red-500/20',
    year: '2025',
    link: 'https://www.microfasttech.com',
    github: 'https://github.com/Krish-1211',
    image: '/microfast_company_project.png',
  },
  {
    id: 4,
    title: 'Real Estate Website',
    description:
      'Responsive real estate website showcasing listings, contact forms, and services with a focus on UI/UX.',
    role: 'Full-stack Developer',
    tools: ['WordPress', 'CSS', 'PHP'],
    outcome: 'Deployed a user-friendly platform for "RealEstateByReena" with mobile responsiveness.',
    color: 'from-green-500/20 to-emerald-500/20',
    year: '2024',
    link: 'https://realestatebyreena.com',
    github: 'https://github.com/Krish-1211',
    image: '/real-estate-website.png',
  },
  {
    id: 5,
    title: 'Netflix Userbase Analysis',
    description:
      'Data analysis project extracting behavioral insights from global Netflix user data.',
    role: 'Data Analyst',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    outcome: 'Visualized key metrics for audience segmentation and identifying viewing trends.',
    color: 'from-red-600/20 to-rose-600/20',
    year: '2024',
    link: 'https://github.com/Krish-1211',
    github: 'https://github.com/Krish-1211',
    image: '/netflix_project.png',
  },
  {
    id: 6,
    title: 'AI Assistant "Jarvis"',
    description:
      'Voice-activated AI assistant capable of performing tasks and interacting with the user.',
    role: 'ML Engineer',
    tools: ['Python', 'Machine Learning', 'Linear Regression', 'KNN'],
    outcome: 'Implemented core ML algorithms to create an interactive voice assistant.',
    color: 'from-indigo-500/20 to-violet-500/20',
    year: '2024',
    link: 'https://github.com/Krish-1211',
    github: 'https://github.com/Krish-1211',
    image: '/jarvis_project.png',
  },
  {
    id: 7,
    title: 'Dental Clinic Website',
    description:
      'Fully responsive frontend design for a fictional dental clinic.',
    role: 'Web Designer',
    tools: ['HTML', 'CSS', 'Bootstrap'],
    outcome: 'Created a clean, accessible, and responsive user interface.',
    color: 'from-teal-500/20 to-cyan-500/20',
    year: '2023',
    link: 'https://github.com/Krish-1211',
    github: 'https://github.com/Krish-1211',
    image: '/dental_clinic_project.png',
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
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <ExternalLink size={16} />
                          View Project
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <Github size={16} />
                          Source Code
                        </motion.a>
                      )}
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
                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} glass overflow-hidden shadow-2xl`}>
                      {project.image ? (
                        <div className="w-full h-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-3/4 h-3/4 rounded-xl bg-background/50 shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-4 space-y-3 h-full flex flex-col justify-center">
                              {/* Abstract UI representation */}
                              <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                                <div className="w-3 h-3 rounded-full bg-green-400/50" />
                              </div>
                              <div className="space-y-3">
                                <div className="h-4 bg-muted rounded w-3/4" />
                                <div className="h-32 bg-muted rounded w-full" />
                                <div className="flex gap-2">
                                  <div className="h-8 bg-muted rounded w-1/3" />
                                  <div className="h-8 bg-muted rounded w-1/3" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
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
