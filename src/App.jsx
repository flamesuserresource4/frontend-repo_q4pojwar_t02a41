import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#0a0a0c] dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Sections />
        <Contact />
      </main>
    </div>
  );
}

export default App;
