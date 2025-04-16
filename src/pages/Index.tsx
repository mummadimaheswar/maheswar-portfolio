
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsCloud from '../components/SkillsCloud';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Set up intersection observer for animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px'
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.section-fade').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background" id="home">
      <ParticlesBackground />
      <Navbar />
      <ScrollToTop />
      
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsCloud />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
