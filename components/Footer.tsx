import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-200 text-neutral-600 py-12 border-t border-slate-300/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-sm font-medium">
          © {new Date().getFullYear()} <span className="text-neutral-900 font-bold">{PROFILE.name}</span>. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a href={PROFILE.behance} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-violet-600 transition-colors">Behance</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-violet-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-sm font-medium hover:text-violet-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;