import React, { useState, useRef } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Lock, Fingerprint, Shield } from 'lucide-react';

const AiAvatars: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      
      <Section className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          YOUR <span className="text-accent-violet">DIGITAL TWIN.</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Scale your content production infinitely. No cameras, no studios, just text-to-video magic.
        </p>
      </Section>

      {/* Before/After Component */}
      <Section>
        <div className="max-w-4xl mx-auto h-[500px] relative rounded-3xl overflow-hidden border border-border cursor-ew-resize select-none"
             ref={containerRef}
             onMouseMove={handleMouseMove}
             onTouchMove={(e) => {
               if (!containerRef.current) return;
               const { left, width } = containerRef.current.getBoundingClientRect();
               const position = ((e.touches[0].clientX - left) / width) * 100;
               setSliderPosition(Math.min(Math.max(position, 0), 100));
             }}
        >
           {/* Old Way Image (Background) */}
           <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
             <div className="text-center opacity-50">
               <span className="text-9xl block mb-4">🎥</span>
               <h3 className="text-4xl font-bold">THE OLD WAY</h3>
               <p>Expensive Studios & Chaos</p>
             </div>
           </div>

           {/* New Way Image (Overlay) */}
           <div 
             className="absolute inset-0 bg-accent-violet flex items-center justify-center overflow-hidden"
             style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
           >
              <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm absolute top-0 left-0" style={{ width: '100vw' }}> {/* Hack to keep content centered relative to screen not clipped area */}
                 <div className="text-center">
                    <span className="text-9xl block mb-4">🤖</span>
                    <h3 className="text-4xl font-bold text-white">NIRVANIK AI</h3>
                    <p className="text-white">Perfect Lighting, Instant Gen</p>
                 </div>
              </div>
           </div>

           {/* Slider Handle */}
           <div 
             className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
             style={{ left: `${sliderPosition}%` }}
           >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
               <div className="w-6 h-6 bg-black rounded-full" />
             </div>
           </div>
        </div>
        <p className="text-center text-sm text-secondary mt-4">Drag to compare</p>
      </Section>

      {/* Ethics & Security */}
      <Section className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-surface border border-border p-8 rounded-2xl">
             <Lock className="text-accent-lime w-10 h-10 mb-4" />
             <h3 className="text-xl font-bold mb-2">Encrypted Voice Data</h3>
             <p className="text-secondary text-sm">Your biometric data is AES-256 encrypted and never shared with third parties.</p>
           </div>
           <div className="bg-surface border border-border p-8 rounded-2xl">
             <Fingerprint className="text-accent-lime w-10 h-10 mb-4" />
             <h3 className="text-xl font-bold mb-2">Ownership Rights</h3>
             <p className="text-secondary text-sm">You retain 100% commercial rights to your digital twin's output.</p>
           </div>
           <div className="bg-surface border border-border p-8 rounded-2xl">
             <Shield className="text-accent-lime w-10 h-10 mb-4" />
             <h3 className="text-xl font-bold mb-2">Deepfake Protection</h3>
             <p className="text-secondary text-sm">Watermarking technology ensures your avatar cannot be used without authorization.</p>
           </div>
        </div>
      </Section>

      <div className="flex justify-center pb-20">
        <Button className="scale-125">Create Your Twin</Button>
      </div>

    </div>
  );
};

export default AiAvatars;