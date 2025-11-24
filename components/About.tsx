import React from 'react';
import { EXPERIENCE, PROFILE } from '../constants';
import { Code, Figma, PenTool, Search, Layout, Smartphone, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Figma', color: 'text-rose-600', icon: Figma },
    { name: 'Adobe XD', color: 'text-fuchsia-600', icon: PenTool },
    { name: 'User Research', color: 'text-violet-600', icon: Search },
    { name: 'Wireframing', color: 'text-blue-600', icon: Layout },
    { name: 'Prototyping', color: 'text-amber-600', icon: Zap },
    { name: 'Usability Testing', color: 'text-emerald-600', icon: Users },
    { name: 'Visual Design', color: 'text-cyan-600', icon: Smartphone },
    { name: 'Interaction', color: 'text-indigo-600', icon: Code }
  ];

  return (
    <section id="about" className="py-32 bg-white relative scroll-mt-28">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 relative z-10">
        <div className="order-2 md:order-1">
          <div className="inline-block mb-4">
            <span className="text-fuchsia-600 font-bold tracking-wide uppercase text-xs bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-100">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 font-display">Experience</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative pl-12 border-l-2 border-violet-100 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-4 ring-white shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute left-[9px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-violet-100 to-transparent group-hover:from-violet-300 transition-colors"></div>
                
                <h3 className="text-2xl font-bold text-neutral-900 font-display">{exp.role}</h3>
                <div className="flex items-center gap-3 mb-6 mt-1">
                  <span className="text-fuchsia-600 font-semibold text-lg">{exp.company}</span>
                  <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></span>
                  <span className="text-neutral-500 font-medium text-sm bg-neutral-100 px-2 py-0.5 rounded-md">{exp.period}</span>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-neutral-600 leading-relaxed flex items-start group/item">
                      <span className="mr-4 mt-2.5 w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="inline-block mb-4">
            <span className="text-violet-600 font-bold tracking-wide uppercase text-xs bg-violet-50 px-3 py-1 rounded-full border border-violet-100">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 font-display">A bit about me</h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-10 font-light">
            {PROFILE.bio}
          </p>
          
          {/* Glassmorphism Skills Card */}
          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-xl shadow-violet-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-100/50 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            
            <h3 className="text-xl font-bold mb-8 font-display flex items-center gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">Technical Proficiency</span>
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group px-4 py-3 bg-white/80 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-0.5"
                >
                  <div className={`p-1.5 rounded-lg bg-neutral-50 group-hover:bg-white transition-colors ${skill.color}`}>
                    <skill.icon size={16} />
                  </div>
                  <span className="text-sm font-semibold text-neutral-700 group-hover:text-neutral-900">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;