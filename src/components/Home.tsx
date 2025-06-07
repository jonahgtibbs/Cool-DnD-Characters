// Component: src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Cool DnD Characters</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
        Explore a collection of original and flavorful D&D characters.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/kharzek" className="relative w-60 h-80 group overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/Kharzek.png"
            alt="Kharzek"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl font-semibold">Kharzek</h2>
          </div>
        </Link>
        {/* Add more character entries here */}
      </div>
    </div>
  );
};
