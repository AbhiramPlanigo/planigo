
import React from 'react';
import { Sparkles, MousePointer2 } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import Logo from './Logo';
import TripPreview from './TripPreview';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden grid-background">
      {/* Premium Badge */}
      <div className="relative z-10 mb-8 flex items-center gap-2 px-5 py-2 rounded-full glass-card text-white/80 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all cursor-default group">
        <Sparkles size={12} className="text-planigo-indigo group-hover:rotate-12 transition-transform" />
        <span>Beta waitlist now live</span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo Container */}
        <div className="mb-4 group">
          <div className="p-6 glass-card rounded-[2.5rem] shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)] animate-float">
            <Logo className="w-16 h-16 md:w-20 md:h-20" />
          </div>
        </div>

        {/* Brand Title - Centered Layout */}
        <div className="relative mb-8 group brand-title-group select-none w-full flex flex-col items-center">
          {/* Enhanced Subtle Blooms */}
          <div className="absolute inset-0 blur-[120px] bg-planigo-indigo/10 -z-10 group-hover:bg-planigo-indigo/30 transition-all duration-700"></div>

          <div className="relative w-full max-w-fit mx-auto">
            <h1 className="text-[5rem] sm:text-[8rem] md:text-[16rem] font-[1000] tracking-[-0.08em] px-4 pt-4 pb-20 leading-[0.8] mesh-text text-glow-premium text-center">
              Planigo
            </h1>
            {/* Chromatic Shimmer Bar */}
            <div className="shimmer-bar left-1/2 -translate-x-1/2"></div>
          </div>

          {/* Subtle Ground Reflection */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/40 font-medium tracking-tight mb-14 max-w-2xl leading-relaxed px-4 text-center">
          The all-in-one travel automation platform <br className="hidden sm:block" />
          designed for <span className="text-white italic">effortless exploration.</span>
        </p>

        {/* Restored Gen-Z Aesthetic "Single Click" Badge (Untouched) */}
        <div className="mb-20 flex flex-col items-center w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-6 text-2xl md:text-5xl font-[1000] uppercase tracking-tighter">
            <span className="text-white/40 italic">Trips in a</span>

            <div className="neon-badge-wrapper group">
              <div className="neon-glow-blob"></div>
              <div className="neon-badge-border"></div>
              <div className="neon-badge-content">
                <MousePointer2 className="w-6 h-6 md:w-8 md:h-8 text-planigo-orange group-hover:scale-110 transition-transform" />
                <span className="neon-text-gradient italic">Single Click.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-2xl mb-20 px-4 flex justify-center">
          <WaitlistForm />
        </div>

        {/* Visual Preview */}
        <div className="flex justify-center w-full">
          <TripPreview />
        </div>
      </div>

      {/* Footer Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
