import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;