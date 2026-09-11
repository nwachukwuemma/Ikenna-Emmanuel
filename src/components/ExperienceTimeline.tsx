import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Briefcase,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  const [filter, setFilter] = useState<'All' | 'Work' | 'Education'>('All');

  const filteredItems = items.filter((item) => {
    if (filter === 'Work') return item.type === 'Full-time' || item.type === 'Internship' || item.type === 'Creator';
    if (filter === 'Education') return item.type === 'Education';
    return true;
  });

  return (
    <section id="experience" className="py-16 md:py-20 bg-[#111111] border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                Professional History
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Community &amp; Career Trajectory
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Roles spanning Tier-1 SOC mentoring, virtual enterprise defense labs, digital education, and physiological sciences.
            </p>
          </div>

          {/* Filter switches */}
          <div className="flex items-center gap-1.5 bg-[#222222] p-1 rounded-xl">
            {(['All', 'Work', 'Education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                id={`exp-tab-${tab.toLowerCase()}`}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === tab
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, high-contrast timeline stream */}
        <div className="relative border-l-2 border-[#333333] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#111111] border-4 border-[#2563eb] shadow-xs group-hover:scale-125 transition-transform" />

              {/* Item Card */}
              <div className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all space-y-3">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.role}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.type === 'Education' 
                          ? 'bg-blue-900/20 text-blue-700 border border-blue-800/30' 
                          : 'bg-emerald-900/20 text-emerald-700 border border-emerald-800/30'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-semibold mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.period}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Accomplishments */}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="space-y-1.5 text-xs text-gray-300 pt-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#2563eb] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech & Framework tags */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#222222] text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
