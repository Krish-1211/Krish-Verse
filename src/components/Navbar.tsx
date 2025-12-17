import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/expertise', label: 'Expertise' },
  { to: '/work', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="section-container">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
              isScrolled ? 'glass shadow-lg' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="text-xl font-bold tracking-tight">
                krishverse<span className="text-accent">.</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      to={link.to}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-4 right-4 h-px bg-foreground origin-left"
                        initial={{ scaleX: isActive ? 1 : 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="glass px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Let's Talk
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link
                        to={link.to}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          isActive ? 'bg-muted text-foreground' : 'hover:bg-muted'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="block mt-4 px-4 py-3 text-lg font-medium text-center bg-foreground text-background rounded-xl"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
