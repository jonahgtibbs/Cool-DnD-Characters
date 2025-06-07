import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-700">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kharzek Chronicles. All rights reserved.
      </p>
    </footer>
  );
};