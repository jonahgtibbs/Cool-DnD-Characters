import React from 'react';

export const KharzekAbout: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Origin</h2>
      <p className="mb-6">
        Once a spectral hunter in a realm of arcane beasts, Kharzek was cast into a data-warped city called the Prism Grid,
        where light and code fuse into reality. There, he adapted—hacking both minds and machines.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Abilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Quantum Stealth: Shifts hues for perfect camouflage.</li>
        <li>Neurohack Pistols: Twin disruptors that short minds and machines alike.</li>
        <li>Subdimensional Step: Instantly phases between grid sectors.</li>
      </ul>
    </section>
  );
};
