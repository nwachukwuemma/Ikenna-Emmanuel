import { X, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#111111] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="p-6 border-b border-[#333333] flex items-start justify-between gap-4 bg-[#1a1a1a]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2563eb] mb-1">
              <span>{project.category}</span>
              {project.stars && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400">{project.stars} GitHub Stars</span>
                </>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-xs text-gray-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-[#333333]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222222] hover:bg-gray-200 text-white text-xs font-semibold transition-colors"
            >
              <Github className="w-4 h-4 text-gray-400" />
              <span>View Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo / Artifact</span>
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Overview &amp; Scope
            </span>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Problem & Solution */}
          {project.architectureDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-150 space-y-1.5">
                <span className="text-xs uppercase tracking-wider block font-bold text-white">
                  Threat Context / Challenge
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.architectureDetails.problem}
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-150 space-y-1.5">
                <span className="text-xs uppercase tracking-wider block font-bold text-white">
                  Defensive Architecture
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.architectureDetails.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.architectureDetails?.keyFeatures && project.architectureDetails.keyFeatures.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Technical Highlights &amp; Validation
              </span>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {project.architectureDetails.keyFeatures.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2 border-t border-[#333333]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Technologies &amp; Libraries Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#222222] text-gray-200 border border-[#333333]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
