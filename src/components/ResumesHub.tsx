import { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Check, 
  Copy,
  Download,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { ResumeItem } from '../types';

interface ResumesHubProps {
  resumes: ResumeItem[];
  onPreviewResume: (resume: ResumeItem) => void;
  onViewResume: (resume?: ResumeItem) => void;
}

export const ResumesHub = ({ 
  resumes, 
  onPreviewResume,
  onViewResume
}: ResumesHubProps) => {
  const [selectedResumeId, setSelectedResumeId] = useState<string>(resumes[0]?.id || 'resume-soc');
  const [copied, setCopied] = useState(false);

  const activeResume = resumes.find(r => r.id === selectedResumeId) || resumes[0];

  const handleCopySummary = () => {
    if (!activeResume) return;
    navigator.clipboard.writeText(`${activeResume.title} - ${activeResume.targetRole}\n\nSummary:\n${activeResume.summary}\n\nCore Skills:\n${activeResume.coreSkills.join(', ')}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resumes" className="py-16 md:py-20 bg-[#1a1a1a] border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                ATS Verified Resumes
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Curriculum Vitae &amp; Career Tracks
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Targeted CVs tailored for SOC Level 1 Analyst (Blue Team Defense) and IT Support Specialist (Systems &amp; Helpdesk).
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onViewResume()}
              id="resume-view-all-download-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>View &amp; Download Resumes</span>
            </button>
          </div>
        </div>

        {/* Resume Selector Navigation - Only SOC Level 1 Analyst and IT Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {resumes.map((resume) => {
            const isSelected = selectedResumeId === resume.id;
            const isSoc = resume.id === 'resume-soc';
            const Icon = isSoc ? ShieldCheck : Headphones;

            return (
              <button
                key={resume.id}
                onClick={() => setSelectedResumeId(resume.id)}
                id={`resume-tab-${resume.id}`}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] border-[#2563eb] shadow-sm text-white ring-2 ring-[#2563eb]/20'
                    : 'bg-[#111111] border-[#333333] text-gray-400 hover:border-[#444444] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className={`inline-flex items-center gap-1.5 font-bold ${isSelected ? 'text-[#2563eb]' : 'text-gray-500'}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{resume.version}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-900/20 text-[#2563eb] font-semibold border border-blue-150">
                    ATS Ready
                  </span>
                </div>
                <div className="font-bold text-base text-white">
                  {resume.title}
                </div>
                <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                  {resume.targetRole}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Resume Document Sheet Preview */}
        {activeResume && (
          <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Document Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#333333]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                  Targeted Track
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeResume.targetRole}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {activeResume.lastUpdated} • Human-formatted ATS structure
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Direct Download Button */}
                <button
                  onClick={() => onViewResume(activeResume)}
                  id="resumes-view-resume-btn"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-black text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer"
                  title={`Download ${activeResume.title} PDF resume file`}
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Download {activeResume.title} (PDF)</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#222222] hover:bg-gray-200 text-gray-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={() => onPreviewResume(activeResume)}
                  id="resume-full-preview-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] text-gray-200 border border-[#444444] text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-gray-400" />
                  <span>Preview / Print</span>
                </button>
              </div>
            </div>

            {/* Document Content */}
            <div className="space-y-6 max-w-4xl">
              
              {/* Summary */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Professional Profile
                </span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#1a1a1a] p-4 rounded-xl border border-gray-150">
                  {activeResume.summary}
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Key Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeResume.coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-xs font-medium bg-[#222222] text-gray-200 rounded-full border border-[#333333]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Experience &amp; Operational Defense
                </span>
                <div className="space-y-3">
                  {activeResume.experienceList.map((exp, idx) => (
                    <div key={idx} className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-4 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-xs sm:text-sm">
                          {exp.role} <span className="text-gray-500 font-normal">@</span> {exp.company}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1 text-xs text-gray-400 pt-1">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-[#2563eb] font-bold mt-0.5">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-4 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                    Education
                  </span>
                  {activeResume.education.map((ed, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="font-bold text-white">{ed.degree}</div>
                      <div className="text-gray-500 text-[11px]">{ed.school} • {ed.year}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-4 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                    Certifications
                  </span>
                  <div className="text-xs font-bold text-white">
                    ISC2 Certified in Cybersecurity (CC) — 2026
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    Credential ID: ISC2-CC-2026-VAL
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
