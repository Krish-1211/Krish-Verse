import { ReactNode } from 'react';
import BackgroundCanvas from './BackgroundCanvas';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <BackgroundCanvas />
      <Navbar />
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
