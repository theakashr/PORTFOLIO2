import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen text-gray-300 bg-cyber-bg font-inter overflow-hidden transition-opacity duration-700 opacity-100">
          {/* Futuristic Particle Network Background */}
          <ParticlesBackground />

          {/* Sticky Header Nav */}
          <Navbar />

          {/* Page Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Certifications />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />

          {/* Floating Action Button */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
