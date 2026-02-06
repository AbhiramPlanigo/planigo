
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand (Now Left Aligned) */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <Logo className="w-10 h-10 transform group-hover:scale-110 transition-transform duration-300" />
          <span className="text-2xl font-bold tracking-tighter text-white">Planigo</span>
        </a>

        {/* Right: Socials & CTA */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/spoton-startup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200/30 hover:text-planigo-blue transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/planigoo?igsh=MTU1c244ZHd1bDF4bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200/30 hover:text-planigo-pink transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/spotonstartup?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-200/30 hover:text-planigo-blue transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <a
            href="#waitlist"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-planigo-orange to-planigo-indigo text-white text-sm font-bold hover:shadow-lg hover:shadow-planigo-indigo/25 transition-all active:scale-95 whitespace-nowrap"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
