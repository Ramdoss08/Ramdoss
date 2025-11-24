import React, { useState, useEffect } from 'react';
import { PROJECTS, PROFILE } from '../constants';
import { ExternalLink, ArrowUpRight, X, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-32 bg-slate-100 relative overflow-hidden scroll-mt-28">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-fuchsia-100/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-cyan-600 font-bold tracking-wide uppercase text-xs mb-3 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 font-display">Featured Work</h2>
            <p className="text-neutral-500 max-w-xl text-lg font-light leading-relaxed">
              Selected projects showcasing my passion for creating functional, beautiful, and user-centric digital products.
            </p>
          </div>
          <a href={PROFILE.behance} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center px-8 py-4 bg-white text-neutral-900 font-medium rounded-full shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:text-violet-600 transition-all border border-neutral-100 group">
            View Behance <ExternalLink size={18} className="ml-2 text-neutral-400 group-hover:text-violet-600 transition-colors" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-[2.5rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all duration-500 border border-neutral-50 flex flex-col h-full transform hover:-translate-y-2 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500"></div>
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-neutral-900 font-bold flex items-center px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Project <ArrowUpRight className="ml-2" size={20} />
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-neutral-900 group-hover:text-violet-600 transition-colors font-display">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-violet-50 transition-colors">
                    <ArrowUpRight size={20} className="text-neutral-400 group-hover:text-violet-600" />
                  </div>
                </div>
                
                <p className="text-neutral-500 mb-8 leading-relaxed font-light line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-neutral-50 text-neutral-600 text-xs font-semibold rounded-full border border-neutral-100 group-hover:border-violet-100 group-hover:bg-violet-50/50 group-hover:text-violet-700 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href={PROFILE.behance} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 rounded-full text-neutral-900 font-medium w-full hover:bg-neutral-50">
            View Behance <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Project Modal - Immersive */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity duration-500" 
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header/Close */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-end z-20 pointer-events-none">
              <button 
                onClick={() => setSelectedProject(null)}
                className="pointer-events-auto p-3 bg-white/80 hover:bg-white backdrop-blur-md rounded-full text-neutral-800 hover:text-red-500 transition-colors shadow-lg border border-white/50"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto overflow-x-hidden flex-1 no-scrollbar">
              {/* Hero Image */}
              <div className="w-full h-[50vh] relative">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20 shadow-lg">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold font-display leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-8 md:p-16 bg-white">
                <div className="flex flex-col lg:flex-row gap-16">
                  {/* Details Sidebar */}
                  <div className="lg:w-1/3 space-y-10">
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">About Project</h3>
                      <p className="text-neutral-600 leading-relaxed text-lg font-light">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:bg-violet-600 transition-all shadow-xl shadow-neutral-900/10 hover:shadow-violet-600/20 hover:-translate-y-1"
                      >
                        View Case Study <ExternalLink size={18} className="ml-2" />
                      </a>
                    )}
                  </div>

                  {/* Gallery Grid */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-100">
                      <ImageIcon className="text-violet-500" size={24} />
                      <h3 className="text-2xl font-bold font-display text-neutral-900">Visual Gallery</h3>
                    </div>
                    
                    {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                      <div className="grid gap-8">
                        {selectedProject.gallery.map((img, index) => (
                          <div key={index} className="rounded-3xl overflow-hidden shadow-lg border border-neutral-100 group relative">
                            <img 
                              src={img} 
                              alt={`${selectedProject.title} preview ${index + 1}`} 
                              className="w-full h-auto"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 border-[6px] border-white/10 rounded-3xl pointer-events-none"></div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-16 bg-neutral-50 rounded-3xl border border-dashed border-neutral-300 text-center">
                        <p className="text-neutral-400 font-medium">Additional gallery images coming soon.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;