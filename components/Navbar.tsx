import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`mx-auto transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'max-w-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-violet-500/5 rounded-full px-8 py-3' 
          : 'max-w-6xl px-6 bg-transparent'
      } flex justify-between items-center`}>
        
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-2xl font-bold tracking-tight font-display group flex items-center gap-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:from-fuchsia-600 group-hover:to-violet-600 transition-all duration-500">Portfolio</span>
          <span className="text-cyan-500 text-3xl leading-none animate-bounce delay-1000">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-neutral-600 hover:text-violet-600 transition-all relative group px-4 py-2 rounded-full hover:bg-violet-50/50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-900 hover:text-violet-600 transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-2xl shadow-violet-500/20 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-neutral-600 hover:text-violet-600 hover:bg-violet-50 p-3 rounded-xl transition-all"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;