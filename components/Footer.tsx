import React from 'react';
import { Mail, Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
             <h3 className="font-display font-bold text-2xl">NIRVANIK AI</h3>
             <p className="text-secondary text-sm leading-relaxed">
               Do what you love, we handle the rest. The future of automation and education is here.
             </p>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-accent-lime text-xs font-bold">
               <ShieldCheck size={14} /> Verified Business
             </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-violet" />
                <span>+91 637-250-9529</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-violet" />
                <span>ai.nirvanik@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-accent-violet" />
                <span>9am - 11pm IST</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Website Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">AI Avatars</li>
              <li className="hover:text-white cursor-pointer transition-colors">Study Assets</li>
              <li className="hover:text-white cursor-pointer transition-colors">Marketing Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-xs">© 2025 Nirvanik AI. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent-violet transition-colors cursor-pointer">X</div>
            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent-violet transition-colors cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent-violet transition-colors cursor-pointer">Ig</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;