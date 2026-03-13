import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import JourneyTimeline from './components/JourneyTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-background text-textMain flex">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary transform origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      
      <div className="flex-1 w-full md:ml-64 flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <JourneyTimeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
