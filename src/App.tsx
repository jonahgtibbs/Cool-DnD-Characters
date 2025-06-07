// Main entry: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { KharzekPage } from './components/KharzekPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kharzek" element={<KharzekPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// Component: src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Cool DnD Characters</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Explore a collection of original and flavorful D&D characters.
      </p>
      <div className="space-y-4">
        <Link to="/kharzek" className="text-xl underline text-cyan-400 hover:text-cyan-200">
          Kharzek the Cipherblade
        </Link>
        {/* Add more character links here as you create them */}
      </div>
    </div>
  );
};

// Component: src/components/KharzekPage.tsx
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';

export const KharzekPage: React.FC = () => {
  return (
    <div className="px-6 pb-12">
      <Hero />
      <About />
      <div className="max-w-4xl mx-auto text-center mt-12">
        <img
          src="/images/kharzek.png"
          alt="Kharzek the Cipherblade"
          className="mx-auto rounded-2xl shadow-lg mb-6"
        />
        <a
          href="/sheets/kharzek.pdf"
          download
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded"
        >
          Download Character Sheet
        </a>
      </div>
    </div>
  );
};
