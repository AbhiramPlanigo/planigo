import React from 'react';
import { ROUTES } from '../constants';
import { ArrowRight } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#030014]">
      {/* Deep Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0518] via-[#050511] to-[#030214] opacity-80"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Modern Aurora Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[1000px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen rotate-12"></div>

        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>

        {/* Dynamic HUD Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-white/[0.03] rounded-full shadow-[0_0_100px_rgba(99,102,241,0.05)]"></div>

        {/* Decorative "Map Nodes" - Small glowing points */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></div>
        <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.8)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        {/* Enhanced Grid Segment */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            maskImage: 'linear-gradient(to bottom, transparent, black 40%, transparent)'
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-planigo-orange mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-planigo-orange"></span>
              Strategic Networks
            </div>
            <h2 className="text-4xl md:text-6xl font-[1000] tracking-tighter mb-6 text-white leading-tight">
              Your Favorite Routes, <br className="hidden md:block" /> <span className="text-white/40">Simplified.</span>
            </h2>
            <p className="text-purple-200/50 text-lg md:text-xl font-medium leading-relaxed">
              Whether it's a short hop for a weekend or a long-haul cross-state journey,
              Planigo optimizes for your specific path and budget.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl group cursor-default transition-all hover:bg-white/[0.05]">
              <span className="text-base font-bold text-white/80 group-hover:text-white transition-colors">50+ Popular Routes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ROUTES.map((route, idx) => (
            <div key={idx} className="relative group rounded-[2.5rem] overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-4 text-white mb-3">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter">{route.from}</span>

                  {/* Gen Z / Professional Arrow Connector */}
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-planigo-orange/50 group-hover:bg-planigo-orange/10 transition-all duration-500 group-hover:scale-110 backdrop-blur-md overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-planigo-orange transition-all duration-500 group-hover:translate-x-1" strokeWidth={3} />
                  </div>

                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-white/60">{route.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-purple-200/60 text-sm font-bold uppercase tracking-widest">One-click booking starting from ₹4,999</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-planigo-indigo rounded-full shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Popular</span>
              </div>

              {/* Interaction Glow */}
              <div className="absolute inset-0 border-[3px] border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
