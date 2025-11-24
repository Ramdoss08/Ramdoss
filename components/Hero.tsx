import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 relative overflow-hidden bg-slate-100">
      {/* Refined Background - Grid Pattern with higher contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-slate-100"></div>
      
      {/* Abstract Background Blobs - Vibrant & Softer */}
      <div className="absolute top-0 -left-20 w-[30rem] h-[30rem] bg-violet-300/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-[30rem] h-[30rem] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-fuchsia-300/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/50 shadow-sm shadow-violet-100 text-violet-700 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
            Based in {PROFILE.location}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.05] font-display">
            Designing <br/>
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 blur-lg opacity-50"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500">intuitive</span>
            </span>
            <br/> experiences.
          </h1>
          
          <p className="text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed font-light">
            Hi, I'm <span className="font-semibold text-neutral-900">{PROFILE.name}</span>. {PROFILE.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={PROFILE.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white font-medium rounded-full shadow-xl shadow-violet-500/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/30 group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
              <span className="relative z-20 flex items-center">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            
            <a 
              href={PROFILE.whatsapp}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-800 font-medium rounded-full hover:bg-white transition-all hover:border-violet-200 hover:text-violet-700 shadow-sm hover:shadow-lg hover:shadow-violet-100 group"
            >
              <MessageCircle className="mr-2 text-violet-500 group-hover:text-violet-700 transition-colors" size={20} />
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Hero Image - High End Style */}
        <div className="hidden md:block relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-200 perspective-1000">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-900/10 border-[6px] border-white transform rotate-2 hover:rotate-1 transition-transform duration-700 ease-out group">
             <div className="absolute inset-0 bg-violet-900/0 group-hover:bg-violet-900/5 transition-colors z-20"></div>
             <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop" 
                alt="UX Design Process and Prototyping" 
                className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-1000"
             />
          </div>
          
          {/* Stacked Cards Effect */}
          <div className="absolute top-4 left-4 w-full h-full border border-neutral-200 bg-white/50 backdrop-blur-sm rounded-[2rem] -z-10 transform -rotate-2"></div>
          <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-br from-violet-100 to-fuchsia-50 rounded-[2rem] -z-20 transform -rotate-4 opacity-60"></div>
          
          {/* Floating Element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-100/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg border border-white/50 animate-bounce delay-700 duration-[3000ms]">
            <span className="text-cyan-700 font-bold font-display text-lg">UI/UX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;