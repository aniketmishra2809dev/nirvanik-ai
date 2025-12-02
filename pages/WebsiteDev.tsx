import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const timeline = [
  { time: '10:00 AM', title: 'Kickoff', desc: 'Requirements gathering & design strategy.' },
  { time: '01:00 PM', title: 'Development', desc: 'High-performance coding with Next.js.' },
  { time: '06:00 PM', title: 'Content', desc: 'Integration of copy and media assets.' },
  { time: '09:00 AM', title: 'Launch', desc: 'Final QA and deployment to global edge.' },
];

const techStack = ['Next.js 14', 'React', 'Tailwind CSS', 'TypeScript', 'AWS', 'Framer Motion', 'PostgreSQL', 'Vercel'];

const WebsiteDev: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      
      <Section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          LIVE IN <span className="text-accent-lime">24 HOURS.</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          We strip away the agency bloat. Pure performance, rapid delivery, and elite design standards.
        </p>
      </Section>

      {/* Horizontal Timeline */}
      <Section>
        <div className="overflow-x-auto pb-12 no-scrollbar">
          <div className="min-w-[800px] flex items-center justify-between relative px-8">
            {/* Connector Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -z-10"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4 bg-background p-4 z-10">
                <div className="w-4 h-4 rounded-full bg-accent-lime shadow-[0_0_20px_rgba(204,243,129,0.5)]"></div>
                <div className="text-center border border-border bg-surface p-6 rounded-xl w-48 hover:border-accent-lime transition-colors">
                  <span className="text-accent-lime font-mono text-sm block mb-2">{item.time}</span>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-xs text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack Marquee */}
      <div className="bg-surface border-y border-border py-8 mb-20 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-2xl font-display font-bold text-secondary/50 uppercase">
              {tech}
            </span>
          ))}
        </div>
        <style>{`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      {/* Pricing */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-2">Professional</h3>
            <p className="text-secondary mb-6">Perfect for portfolios and small businesses.</p>
            <div className="text-4xl font-bold mb-8">$999<span className="text-sm font-normal text-secondary">/one-time</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> 5-Page Responsive Site</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> CMS Integration</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> Basic SEO Setup</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> 24h Delivery</li>
            </ul>
            <Button variant="secondary" className="w-full">Choose Professional</Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-surface border border-accent-lime p-8 rounded-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-lime text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-2xl font-display font-bold mb-2">Integrated Marketing</h3>
            <p className="text-secondary mb-6">Website + Growth engine setup.</p>
            <div className="text-4xl font-bold mb-8">$2,499<span className="text-sm font-normal text-secondary">/one-time</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> Everything in Professional</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> Analytics Dashboard</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> Email Marketing Setup</li>
              <li className="flex gap-3 text-sm"><Check size={18} className="text-accent-lime" /> 3 Month Support</li>
            </ul>
            <Button variant="primary" className="w-full">Go Integrated</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WebsiteDev;