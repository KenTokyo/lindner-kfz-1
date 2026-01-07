import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Eurogarant } from './components/Eurogarant';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Eurogarant />
        <Careers />
        <Contact />
      </main>
    </div>
  );
}

export default App;