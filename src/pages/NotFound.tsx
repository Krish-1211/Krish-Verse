import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-9xl font-bold text-muted/30 mb-8"
            >
              404
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Page not found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Sorry, the page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:bg-accent transition-colors duration-300"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:bg-muted transition-colors duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
