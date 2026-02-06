import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import BackgroundBlobs from './components/BackgroundBlobs';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-purple-500/30">
      <BackgroundBlobs />
      <Header />
      
      <main>
        <div id="waitlist">
          <Hero />
        </div>
        <Features />
        <SocialProof />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-purple-200/40 text-sm relative z-10">
        <p>&copy; 2025 Planigo (Formerly SPOTON). All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:info@spotonindia.us" className="hover:text-purple-400 transition-colors">info@spotonindia.us</a>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div 
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <a 
          href="#waitlist"
          className="flex items-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold shadow-2xl shadow-purple-600/40 active:scale-95 transition-all"
        >
          <span>Join Waitlist</span>
          <ArrowUp size={18} />
        </a>
      </div>
    </div>
  );
};

export default App;