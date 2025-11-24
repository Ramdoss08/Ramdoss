import React from 'react';
import { COMMUNITY_ACTIVITIES } from '../constants';
import { Users, PenTool, MessageCircle, Heart } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 bg-white border-b border-neutral-100 scroll-mt-28 relative">
       {/* Background Decoration */}
       <div className="absolute left-0 top-1/3 w-64 h-64 bg-fuchsia-100/50 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-violet-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-pink-50 rounded-2xl mb-6 shadow-sm rotate-3 hover:rotate-0 transition-transform">
            <Heart className="text-pink-500 fill-pink-500" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display">Community & Contributions</h2>
          <p className="text-neutral-500 text-lg font-light">
            Beyond pixels and wireframes, I believe in giving back to the design community through sharing, learning, and mentoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COMMUNITY_ACTIVITIES.map((activity, index) => {
            let iconColor = "";
            let bgColor = "";
            let Icon = Users;

            if (index === 0) {
              Icon = Users;
              iconColor = "text-violet-600";
              bgColor = "bg-violet-50";
            } else if (index === 1) {
              Icon = PenTool;
              iconColor = "text-fuchsia-600";
              bgColor = "bg-fuchsia-50";
            } else {
              Icon = MessageCircle;
              iconColor = "text-cyan-600";
              bgColor = "bg-cyan-50";
            }

            return (
              <div key={index} className="group p-10 bg-white border border-neutral-100 rounded-[2.5rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-full blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={iconColor} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display">{activity.title}</h3>
                <p className="text-neutral-600 leading-relaxed font-light">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;