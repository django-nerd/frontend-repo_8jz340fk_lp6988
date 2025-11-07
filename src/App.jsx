import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Flames • Built with love, motion, and clean code.
      </footer>
    </div>
  );
}

export default App;
