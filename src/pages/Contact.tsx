import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@krishverse.dev',
    description: 'Drop me a line',
    value: 'hello@krishverse.dev',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    description: 'Check my code',
    value: 'github.com/krishverse',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    description: "Let's connect",
    value: 'linkedin.com/in/krishverse',
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's build something great together"
        description="Have a project in mind or just want to chat about data and code? I'm always open to interesting conversations and new opportunities."
      />

      <section className="section-padding pt-0">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              {/* Social Links */}
              <div className="space-y-4 mb-12">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group glass p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 block"
                  >
                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <link.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground flex items-center gap-1">
                        {link.label}
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <div className="text-sm text-muted-foreground">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for remote work worldwide
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      Usually within 24-48 hours
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-accent outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-xl border-0 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Prefer email? Reach out directly at{' '}
                <a href="mailto:hello@krishverse.dev" className="text-accent hover:underline">
                  hello@krishverse.dev
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
