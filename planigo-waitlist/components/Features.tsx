
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-4 bg-[#030014] border-y border-white/5 relative scroll-mt-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Central HUD Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/[0.01] rounded-full"></div>
        
        {/* Animated Scanner Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
           <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
        </div>

        {/* Localized Glows */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full"></div>
        
        {/* Subtle Grid Overlay (Section Specific) */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            Comprehensive Automation
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter mb-6 text-white leading-tight">
            Everything Sorted. <br className="sm:hidden" /> <span className="text-white/40">Instantly.</span>
          </h2>
          <p className="text-purple-200/40 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Planigo handles the logistics layer so you can focus on the journey. 
            From local transit to exclusive perks, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-600/10 group-hover:border-purple-500/30 transition-all duration-500">
                  {/* Fix: Check if icon is a valid React element and cast to React.ReactElement<any> to allow 'className' property injection. */}
                  {React.isValidElement(feature.icon) && React.cloneElement(feature.icon as React.ReactElement<any>, { 
                    className: "w-7 h-7 text-white/60 group-hover:text-purple-400 transition-colors" 
                  })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-purple-100/40 leading-relaxed text-base group-hover:text-purple-100/60 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 rounded-full bg-purple-500/40"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
