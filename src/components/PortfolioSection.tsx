import { useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Plus, 
  Shield, 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface PortfolioSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddProject: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: ProjectCategory;
  setActiveCategory: (cat: ProjectCategory) => void;
}

export const PortfolioSection = ({ 
  projects, 
  onSelectProject, 
  onOpenAddProject,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory
}: PortfolioSectionProps) => {

  const categories: ProjectCategory[] = [
    'All', 
    'Cybersecurity & SOC', 
    'AI & Automation', 
    'Infrastructure & Labs', 
    'Web & Digital Tools'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesQuery = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-[#1a1a1a] border-t border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                Security Labs &amp; Engineering
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Security Labs &amp; Technical Projects
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-2xl">
              All engineering writeups, defense telemetry configurations, and production tools verified directly with step-by-step documentation and source repositories.
            </p>
          </div>

          <button
            onClick={onOpenAddProject}
            id="portfolio-add-project-btn"
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Lab / Project</span>
          </button>
        </div>

        {/* Categories Bar & Quick Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#333333]">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gray-900 text-white shadow-xs'
                    : 'bg-[#111111] text-gray-300 hover:bg-[#222222] border border-[#333333]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-white">{filteredProjects.length}</strong> projects &amp; labs
          </div>
        </div>

        {/* Listings Container (Cards styled as in photo) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#111111] border border-[#333333] rounded-2xl p-8 shadow-xs">
            <Terminal className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-200">No matching projects or labs found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or clear the category filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-gray-900 text-xs font-semibold text-white hover:bg-black transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left Side: Avatar / Badge & Core Info */}
                <div className="flex items-start gap-4 flex-1">
                  
                  {/* Category icon avatar */}
                  <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-gray-300">
                    {project.category.includes('Cybersecurity') ? (
                      <Shield className="w-6 h-6 text-[#2563eb]" />
                    ) : project.category.includes('AI') ? (
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    ) : (
                      <Terminal className="w-6 h-6 text-blue-600" />
                    )}
                  </div>

                  {/* Title and metadata */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-[#2563eb] text-left transition-colors cursor-pointer"
                      >
                        {project.title}
                      </button>
                      
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold">
                          ★ Featured Lab
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-900/20 px-2 py-0.5 rounded-md border border-emerald-800/30">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Writeup
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta info tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1 text-gray-400 font-medium">
                        <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                        {project.category}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-gray-500 font-mono text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        Production Ready
                      </span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#222222] text-gray-300 border border-[#333333]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Action Buttons */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
