import { X, Printer, Copy, Check, Mail, MapPin, Github, Download, FileText } from 'lucide-react';
import { useState } from 'react';
import { ResumeItem, ProfileInfo } from '../types';

interface ResumePreviewModalProps {
  resume: ResumeItem | null;
  profile: ProfileInfo;
  onClose: () => void;
  onDownloadPdf?: () => void;
}

export const ResumePreviewModal = ({ resume, profile, onClose, onDownloadPdf }: ResumePreviewModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!resume) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${profile.name}
${resume.targetRole}
Email: ${profile.email} | GitHub: ${profile.githubUrl} | Location: ${profile.location}

PROFESSIONAL SUMMARY:
${resume.summary}

CERTIFICATIONS:
${(resume.certificationsList || ['ISC2 Certified in Cybersecurity (CC) — January 2026']).join('\n')}

CORE TECHNICAL COMPETENCIES:
${resume.coreSkills.join(', ')}

EXPERIENCE:
${resume.experienceList.map(e => `
${e.role} - ${e.company} (${e.period})
${e.points.map(p => `- ${p}`).join('\n')}
`).join('\n')}

EDUCATION:
${resume.education.map(ed => `${ed.degree}, ${ed.school} (${ed.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#111111] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl my-6 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden p-4 bg-[#1a1a1a] border-b border-[#333333] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white">
              {resume.title}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              ({resume.version})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onDownloadPdf && (
              <button
                onClick={onDownloadPdf}
                id="modal-view-resume-download-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gray-900 hover:bg-black text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                title="Download PDF file"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Download PDF</span>
              </button>
            )}

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-gray-300 text-xs font-semibold transition-colors border border-[#333333]"
              title="Copy plain text resume to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
              title="Print directly or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-200 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Sheet (Styled cleanly for print & screen) */}
        <div className="p-8 sm:p-12 max-h-[75vh] overflow-y-auto bg-[#111111] print:bg-[#111111] print:text-black print:p-0 print:max-h-none print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-[#333333] pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#2563eb] mt-1">
              {resume.targetRole}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <span>{profile.email}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-gray-400" />
                <span>{profile.githubUrl}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{profile.location}</span>
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6 space-y-1.5">
            <h2 className="text-xs uppercase tracking-wider text-[#2563eb] font-bold pb-1 border-b border-[#333333]">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {resume.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-6 space-y-1.5">
            <h2 className="text-xs uppercase tracking-wider text-[#2563eb] font-bold pb-1 border-b border-[#333333]">
              Core Technical Competencies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {resume.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 text-xs font-medium bg-[#222222] text-gray-200 rounded-full border border-[#333333]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6 space-y-3">
            <h2 className="text-xs uppercase tracking-wider text-[#2563eb] font-bold pb-1 border-b border-[#333333]">
              Work Experience &amp; Lab Architecture
            </h2>
            <div className="space-y-4">
              {resume.experienceList.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-xs sm:text-sm text-white">
                      {exp.role} <span className="text-gray-400 font-normal">@</span> {exp.company}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-400 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#2563eb] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#333333]">
            <div>
              <h2 className="text-xs uppercase tracking-wider text-[#2563eb] font-bold mb-2">
                Education
              </h2>
              {resume.education.map((ed, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-white">{ed.degree}</div>
                  <div className="text-gray-500 text-[11px]">{ed.school} • {ed.year}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wider text-[#2563eb] font-bold mb-2">
                Certifications
              </h2>
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
    </div>
  );
};
