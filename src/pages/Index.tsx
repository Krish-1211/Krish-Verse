import BackgroundCanvas from '@/components/BackgroundCanvas';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background canvas for future enhancements */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
