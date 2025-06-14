import React from 'react';
import { KharzekHero } from './KharzekHero';
import { KharzekAbout } from './KharzekAbout';

export const KharzekPage: React.FC = () => {
  return (
    <div className="px-6 pb-12">
      <KharzekHero />
      <KharzekAbout />
      <div className="max-w-4xl mx-auto text-center mt-12">
        <img
          src={`${window.location.origin}/images/Kharzek.png`}
          alt="Kharzek the Cipherblade"
          className="mx-auto rounded-2xl shadow-lg mb-6"
        />
        <a
          href={`${window.location.origin}/sheets/Kharzek.pdf`}
          download
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded"
        >
          Download Character Sheet
        </a>
      </div>
    </div>
  );
};
