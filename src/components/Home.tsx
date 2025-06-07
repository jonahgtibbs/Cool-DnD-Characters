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
        {/* Add more character links here */}
      </div>
    </div>
  );
};
