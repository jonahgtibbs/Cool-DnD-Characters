// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
