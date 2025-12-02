import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, GraduationCap, TrendingUp, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6">
        <div className="w-full md:w-1/2 space-y-8 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-display font-bold leading-tight tracking-tighter"
          >
            DO WHAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-lime to-accent-violet">
              YOU LOVE.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-xl max-w-md border-l-2 border-accent-lime pl-4"
          >
            We handle the rest. Automation for professionals, modern education for the next generation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <Button>Start Building</Button>
            <Button variant="secondary">Explore Assets</Button>
          </motion.div>
        </div>

        {/* Abstract 3D Placeholder */}
        <div className="w-full md:w-1/2 h-[500px] relative mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/20 to-transparent rounded-full blur-3xl" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border border-border/30 rounded-full flex items-center justify-center relative"
          >
            <div className="w-3/4 h-3/4 border border-accent-lime/30 rounded-full flex items-center justify-center animate-pulse">
               <div className="w-1/2 h-1/2 bg-accent-violet/10 backdrop-blur-xl rounded-full border border-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Avatars */}
          <Link to="/ai-avatars" className="group md:col-span-2 relative bg-surface border border-border hover:border-accent-violet transition-colors rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?grayscale')] opacity-20 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 bg-accent-violet/20 rounded-xl backdrop-blur-md border border-accent-violet/30">
                <User className="text-accent-violet" />
              </div>
              <ArrowRight className="text-secondary group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-2">Your Digital Twin</h3>
              <p className="text-secondary">Scale your presence with hyper-realistic AI avatars. No studio required.</p>
            </div>
          </Link>

          {/* Card 2: Web Dev */}
          <Link to="/website" className="group relative bg-surface border border-border hover:border-accent-lime transition-colors rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-20">
               <div className="flex flex-col gap-2">
                 <div className="w-32 h-2 bg-secondary rounded-full"></div>
                 <div className="w-24 h-2 bg-secondary rounded-full"></div>
                 <div className="w-28 h-2 bg-secondary rounded-full"></div>
               </div>
            </div>
            
            <div className="relative z-10">
               <div className="p-3 bg-accent-lime/20 w-fit rounded-xl backdrop-blur-md border border-accent-lime/30 mb-auto">
                <Code className="text-accent-lime" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-display font-bold mb-2">Live in 24 Hours</h3>
              <p className="text-secondary text-sm">Professional websites delivered at lightspeed.</p>
            </div>
          </Link>

          {/* Card 3: Study */}
          <Link to="/study-assets" className="group relative bg-surface border border-border hover:border-white transition-colors rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
             <div className="absolute inset-0 opacity-10 flex flex-wrap gap-2 p-4 rotate-12 scale-150">
                {/* Simulated Meme background */}
                <div className="w-20 h-20 bg-white rounded-lg"></div>
                <div className="w-20 h-20 bg-secondary rounded-lg"></div>
                <div className="w-20 h-20 bg-accent-lime rounded-lg"></div>
                <div className="w-20 h-20 bg-accent-violet rounded-lg"></div>
             </div>

             <div className="relative z-10">
               <div className="p-3 bg-white/10 w-fit rounded-xl backdrop-blur-md border border-white/20">
                <GraduationCap className="text-white" />
              </div>
             </div>

             <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-display font-bold mb-2">Meme Learning</h3>
              <p className="text-secondary text-sm">Modern education assets for the visual generation.</p>
            </div>
          </Link>

          {/* Card 4: Marketing */}
          <div className="group md:col-span-2 relative bg-surface border border-border hover:border-blue-500 transition-colors rounded-2xl overflow-hidden p-8 flex flex-row items-center gap-8">
             <div className="flex-1 z-10">
                <div className="p-3 bg-blue-500/20 w-fit rounded-xl backdrop-blur-md border border-blue-500/30 mb-6">
                  <TrendingUp className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">Growth Engines</h3>
                <p className="text-secondary mb-4">Data-driven marketing strategies to scale your business.</p>
                <div className="text-xs text-secondary font-mono">
                  ROI: +400% <br/>
                  CAC: -25%
                </div>
             </div>
             
             {/* Chart Container - Fixed Height to prevent Recharts warning */}
             <div className="hidden md:block w-1/2 h-[200px] z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Home;