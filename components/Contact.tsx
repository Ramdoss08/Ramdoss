import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-neutral-900 text-white relative overflow-hidden scroll-mt-28">
      {/* Deep Gradient Background with Grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-fuchsia-900"></div>
      
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display leading-[1.1] drop-shadow-lg">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">great together.</span>
        </h2>
        <p className="text-violet-100/80 text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          I'm currently looking for new opportunities in UX/UI design. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 flex-wrap">
          <a 
            href={`mailto:${PROFILE.email}`} 
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-white text-violet-900 rounded-full font-bold hover:bg-cyan-50 transition-all hover:-translate-y-1 shadow-xl shadow-violet-900/50 group"
          >
            <Mail className="mr-3 group-hover:scale-110 transition-transform" size={20} />
            Say Hello
          </a>
          
          <a 
            href={PROFILE.whatsapp}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-400 transition-all hover:-translate-y-1 shadow-xl shadow-emerald-900/20 group"
          >
            <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" size={20} />
            WhatsApp
          </a>

          <a 
            href={PROFILE.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-full font-bold hover:bg-white/10 hover:border-white/40 transition-all group"
          >
            <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={20} />
            LinkedIn
            <ArrowRight size={16} className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;