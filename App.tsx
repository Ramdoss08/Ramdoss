import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-slate-100 min-h-screen text-neutral-900 font-sans selection:bg-violet-200 selection:text-violet-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Community />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;