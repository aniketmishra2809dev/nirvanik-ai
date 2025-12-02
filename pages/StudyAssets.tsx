import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Play, Pause, Download, Share2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const memes = [
  { id: 1, title: 'When the code works first try', color: 'bg-red-400' },
  { id: 2, title: 'Physics Explained', color: 'bg-blue-400' },
  { id: 3, title: 'History in 10s', color: 'bg-yellow-400' },
  { id: 4, title: 'Calculus be like', color: 'bg-green-400' },
  { id: 5, title: 'Chemistry Lab', color: 'bg-purple-400' },
  { id: 6, title: 'Geography facts', color: 'bg-orange-400' },
];

const StudyAssets: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [plan, setPlan] = useState<'student' | 'institution'>('student');

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-x-hidden">
      
      {/* Playful Header */}
      <Section className="text-center mb-16 relative">
         <motion.div 
           animate={{ rotate: [0, 5, -5, 0] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="absolute top-0 right-10 md:right-1/4 text-6xl opacity-20 select-none"
         >
           🤪
         </motion.div>
         <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 italic transform -skew-x-6">
           LEARNING IS <span className="text-accent-violet">A MEME.</span>
         </h1>
         <div className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full mt-4">
           <BookOpen size={16} className="text-accent-lime" />
           <span className="text-sm font-medium">Aligned with NCERT Standards</span>
         </div>
      </Section>

      {/* Audio Player Component */}
      <Section className="mb-20">
        <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl p-6 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-border">
             <div className="w-1/3 h-full bg-accent-violet"></div>
           </div>
           
           <div className="flex items-center gap-6">
             <button 
               onClick={() => setIsPlaying(!isPlaying)}
               className="w-16 h-16 rounded-full bg-accent-violet text-white flex items-center justify-center hover:scale-105 transition-transform"
             >
               {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
             </button>
             
             <div className="flex-1">
               <h3 className="font-bold text-lg">Chapter 4: Thermodynamics</h3>
               <p className="text-secondary text-sm">Multi-Lingual Audio Notes (Hindi/English)</p>
               <div className="flex gap-2 mt-2">
                 <span className="text-xs bg-border px-2 py-1 rounded text-secondary">1.5x Speed</span>
                 <span className="text-xs bg-border px-2 py-1 rounded text-secondary">Auto-Translate</span>
               </div>
             </div>
           </div>
        </div>
      </Section>

      {/* Meme Gallery */}
      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {memes.map((meme, idx) => (
             <motion.div
               key={meme.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="break-inside-avoid bg-surface border border-border rounded-xl overflow-hidden hover:rotate-1 transition-transform duration-300 group"
             >
               <div className={`h-48 md:h-64 w-full ${meme.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                 <span className="text-black font-bold text-2xl opacity-50">IMAGE</span>
               </div>
               <div className="p-4">
                 <h4 className="font-bold mb-4">{meme.title}</h4>
                 <div className="flex gap-2">
                    <Button variant="secondary" className="text-xs py-2 px-4 flex-1 flex justify-center items-center gap-2">
                      <Download size={14} /> Save
                    </Button>
                    <button className="p-2 border border-border rounded-full hover:bg-border transition-colors">
                      <Share2 size={16} />
                    </button>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Toggle */}
      <Section className="mt-20">
        <div className="flex justify-center mb-12">
           <div className="bg-surface border border-border p-1 rounded-full flex">
             <button 
               onClick={() => setPlan('student')}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${plan === 'student' ? 'bg-white text-black shadow-lg' : 'text-secondary hover:text-white'}`}
             >
               Student
             </button>
             <button 
               onClick={() => setPlan('institution')}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${plan === 'institution' ? 'bg-white text-black shadow-lg' : 'text-secondary hover:text-white'}`}
             >
               Institution
             </button>
           </div>
        </div>

        <div className="max-w-md mx-auto bg-surface border border-accent-violet rounded-2xl p-8 text-center relative">
           {plan === 'student' ? (
             <>
               <h3 className="text-2xl font-bold mb-2">Pro Scholar</h3>
               <div className="text-4xl font-bold mb-6">$5<span className="text-sm text-secondary font-normal">/mo</span></div>
               <p className="text-secondary mb-8">Access to all memes, audio notes, and flashcards.</p>
               <Button className="w-full">Start Studying</Button>
             </>
           ) : (
             <>
               <h3 className="text-2xl font-bold mb-2">Campus Wide</h3>
               <div className="text-4xl font-bold mb-6">Custom</div>
               <p className="text-secondary mb-8">Bulk licenses for schools and coaching centers.</p>
               <Button variant="outline" className="w-full">Contact Sales</Button>
             </>
           )}
        </div>
      </Section>

    </div>
  );
};

export default StudyAssets;