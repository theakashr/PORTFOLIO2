import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { FloatingThemeSwitcher } from './components/ThemeToggle';
import { FeedbackModal } from './components/FeedbackModal';
import { FeedbackAdminModal } from './components/FeedbackAdminModal';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('intro');
  const { isLight } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'projects', 'about', 'skills', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full selection:bg-red-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300 ${
        isLight ? 'bg-white text-zinc-900' : 'bg-[#050505] text-white'
      }`}
    >
      {/* Fixed Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="w-full overflow-x-hidden">
        {/* SECTION 1: Cinematic Intro with PORTFOLIO lettering and front portrait cutout */}
        <HeroSection />

        {/* SECTION 2: Project Showcase with deep crimson red / white dynamic theme */}
        <ProjectShowcase />

        {/* SECTION 3: About Me with profile and full-body cutouts at BIET Davanagere */}
        <AboutSection />

        {/* SECTION 4: Interactive Skills Repertoire */}
        <SkillsSection />

        {/* SECTION 5: Journey, Education, Hackathons & Certifications */}
        <JourneySection />

        {/* SECTION 6: Cinematic Finale & Contact */}
        <ContactSection />
      </main>

      {/* Persistent Floating Theme Switcher (White / Black Background Switch) */}
      <FloatingThemeSwitcher />

      {/* Floating Feedback Trigger & Modal */}
      <FeedbackModal />

      {/* Secret Owner Admin Feedback Vault (Ctrl + Shift + F or lock button) */}
      <FeedbackAdminModal />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
