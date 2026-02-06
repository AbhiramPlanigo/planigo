
import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Primary Indigo Blob */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full aura-blob"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animationDuration: '15s'
        }}
      />
      
      {/* Secondary Fuchsia Blob */}
      <div 
        className="absolute bottom-[-5%] right-[-5%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full aura-blob"
        style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%)',
          filter: 'blur(120px)',
          animationDelay: '-5s',
          animationDuration: '18s'
        }}
      />

      {/* Tertiary Orange Accent Blob */}
      <div 
        className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full aura-blob"
        style={{
          background: 'radial-gradient(circle, rgba(255, 77, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(150px)',
          animationDelay: '-8s',
          animationDuration: '20s'
        }}
      />
      
      {/* Deep Blue Base Glow */}
      <div 
        className="absolute bottom-[20%] left-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full aura-blob"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(130px)',
          animationDelay: '-12s',
          animationDuration: '25s'
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
