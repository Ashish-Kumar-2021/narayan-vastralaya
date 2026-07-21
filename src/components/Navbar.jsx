import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { shopInfo } from '../data/mockData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-sm py-4'
      : 'bg-transparent py-6'
  }`;

  const textClasses = isScrolled ? 'text-brand-black dark:text-brand-beige' : 'text-white';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-brand-maroon dark:text-brand-gold' : 'text-white'}`}>
          {shopInfo.name}
        </a>

        <div className={`hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-semibold ${textClasses}`}>
          <a href="#collection" className="hover:text-brand-gold transition-colors">Collection</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>

          <button onClick={() => setDarkMode(!darkMode)} className="hover:text-brand-gold transition-colors p-1" aria-label="Toggle Theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={textClasses} /> : <Menu className={textClasses} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-brand-darkGray w-full absolute top-full left-0 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <a href="#collection" onClick={() => setIsOpen(false)} className="text-brand-black dark:text-brand-beige">Collection</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-brand-black dark:text-brand-beige">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="flex items-center space-x-2 text-brand-black dark:text-brand-beige">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>Toggle Theme</span>
          </button>
        </div>
      )}
    </nav>
  );
}
