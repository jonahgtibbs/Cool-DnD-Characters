import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Kharzek the Cipherblade</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        A rogue Thri-Kreen, lurking in neon shadows between dimensions, armed with twin pistols and four deadly limbs.
      </p>
    </div>
  );
};