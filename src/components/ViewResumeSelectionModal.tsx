import { X, Download, Eye, ShieldCheck, Headphones, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { ResumeItem, ProfileInfo } from '../types';

interface ViewResumeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumes: ResumeItem[];
  profile: ProfileInfo;
  onDownloadResume: (resume: ResumeItem) => void;
  onPreviewResume: (resume: ResumeItem) => void;
}

export const ViewResumeSelectionModal = ({
  isOpen,
  onClose,
  resumes,
  profile,
  onDownloadResume,
  onPreviewResume
}: ViewResumeSelectionModalProps) => {
  if (!isOpen) return null;

  const socResume = resumes.find(r => r.id === 'resume-soc') || resumes[0];
  const itSupportResume = resumes.find(r => r.id === 'resume-it-support') || resumes[1] || resumes[0];

  const resumeTracks = [
    {
      resume: socResume,
      icon: ShieldCheck,
      badge: 'Blue Team & SIEM',
      badgeColor: 'bg-blue-900/20 text-[#2563eb] border-blue-800/30',
      accentColor: 'border-blue-500',
      iconBg: 'bg-blue-900/20 text-[#2563eb]',
      headline: 'SOC Level 1 Analyst',
      subtitle: 'Detection, Incident Triage & Telemetry Analysis',
      highlights: [
        'Splunk Enterprise & SPL Queries',
        'Tier-1 SOC Incident Triage & Playbooks',
        'Wireshark Deep Packet Inspection',
        'Active Directory Security & GPO',
        'ISC2 Certified in Cybersecurity (CC)'
      ],
      downloadBtnId: 'select-download-soc-btn'
    },
    {
      resume: itSupportResume,
      icon: Headphones,
      badge: 'Systems & Infrastructure',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      accentColor: 'border-indigo-500',
      iconBg: 'bg-indigo-50 text-indigo-700',
      headline: 'IT Support',
      subtitle: 'Technical Helpdesk, Systems & Network Administration',
      highlights: [
        'Active Directory DS & User Administration',
        'Tier 1/2 Hardware & OS Troubleshooting',
        'Network Configuration (TCP/IP, DNS, DHCP)',
        'pfSense Firewall & Router Deployment',
        'Remote Desktop & User Support'
      ],
      downloadBtnId: 'select-download-it-support-btn'
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#111111] rounded-2xl border border-[#333333] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#1a1a1a]/80 border-b border-[#333333] flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-900/20 text-[#2563eb] text-xs font-semibold mb-2 border border-blue-150">
              <FileText className="w-3.5 h-3.5" />
              <span>Verified Resume Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Select Resume to Download
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Choose the targeted resume version for your recruitment review. Click below to download the ATS-verified PDF document.
            </p>
          </div>

          <button
            onClick={onClose}
            id="close-resume-selection-modal-btn"
            className="p-2 rounded-xl text-gray-400 hover:text-gray-300 hover:bg-gray-200/80 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Choices Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111]">
          {resumeTracks.map((track) => {
            const ResumeIcon = track.icon;
            const r = track.resume;

            return (
              <div
                key={r.id}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-xl border border-[#333333] hover:border-[#444444] bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/80 transition-all hover:shadow-md"
              >
                <div>
                  {/* Card Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${track.iconBg}`}>
                      <ResumeIcon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${track.badgeColor}`}>
                      {track.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {track.headline}
                  </h3>
                  <p className="text-xs font-medium text-[#2563eb] mt-0.5 mb-3">
                    {track.subtitle}
                  </p>

                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {r.summary}
                  </p>

                  {/* Core competencies */}
                  <div className="space-y-1.5 pt-3 border-t border-[#333333]/80 mb-6">
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block">
                      Key Competencies
                    </span>
                    <div className="space-y-1">
                      {track.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      onDownloadResume(r);
                      onClose();
                    }}
                    id={track.downloadBtnId}
                    className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-blue-400" />
                    <span>Download {track.headline} (PDF)</span>
                  </button>

                  <button
                    onClick={() => {
                      onPreviewResume(r);
                      onClose();
                    }}
                    id={`preview-choice-${r.id}`}
                    className="w-full py-2 px-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-gray-300 border border-[#333333] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-gray-500" />
                    <span>Preview Document Sheet</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#1a1a1a] border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ATS formatted • ISC2 CC Credential Included</span>
          </span>
          <span>
            Candidate: <strong className="text-gray-200">{profile.name}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
