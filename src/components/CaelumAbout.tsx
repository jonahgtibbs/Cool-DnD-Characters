import React from 'react';

export const CaelumAbout: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Origin</h2>
      <p className="mb-6">
        Born beneath twin moons in the mirrored spires of Elyria’s Mindspire Citadel, 
        Caelum was once heir to a celestial chorus—but renounced his place to wander 
        fractured dimensions. In the forgotten Annexes, where psionic echoes never die, 
        he awakened to the Mindshaper’s path.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Abilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Synaptic Pulse: Overloads nearby enemies with cascading thought-echoes.</li>
        <li>Astral Grasp: Invisible hand of will that manipulates, restrains, or rends from afar.</li>
        <li>Halo of Intellect: A radiant glyph above his brow that shields allies and fractures illusions.</li>
      </ul>
    </section>
  );
};
