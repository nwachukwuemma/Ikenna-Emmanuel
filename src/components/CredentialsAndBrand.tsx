import { 
  ShieldCheck, 
  ExternalLink, 
  Check, 
  BookOpen,
  ArrowUpRight,
  Dumbbell, 
  Gamepad2, 
  Activity
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface CredentialsAndBrandProps {
  profile: ProfileInfo;
}

export const CredentialsAndBrand = ({ profile }: CredentialsAndBrandProps) => {
  return (
    <section id="credentials" className="py-16 md:py-20 bg-[#111111] border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              Verified Credentials &amp; Media
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Official Certification, Creator Platform &amp; Mindset
          </h2>
          <p className="text-gray-400 text-sm mt-1 max-w-xl">
            Official cybersecurity certifications, educational resources created under the kendikreator brand, and physical disciplines that anchor mental focus.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. Official Cybersecurity Certification */}
          <div className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                  Official Credential
                </span>
                <span className="text-[11px] font-bold text-emerald-700 px-2 py-0.5 rounded-full bg-emerald-900/20 border border-emerald-800/30">
                  Active
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  ISC2 Certified in Cybersecurity (CC)
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                  Issued by (ISC)² • Earned January 2026
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Validates core foundational competencies in access management, network defense, incident response, and business continuity.
              </p>

              {/* Validated Domains */}
              <div className="space-y-2 pt-2 border-t border-gray-150">
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block">
                  Core Validated Domains:
                </span>
                <div className="space-y-1.5 text-xs text-gray-300">
                  {[
                    'Network Security & Defensive Topologies',
                    'Security Principles & Governance',
                    'Incident Response Playbooks',
                    'Access Controls & Identity Authentication',
                    'Business Continuity & Disaster Recovery'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-gray-150 flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono">ID: ISC2-CC-2026</span>
              <a
                href="#resumes"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold inline-flex items-center gap-1"
              >
                <span>View on CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Digital Media Brand & Selar Store */}
          <div className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                  Creator Platform
                </span>
                <span className="text-[11px] font-mono text-gray-300 px-2 py-0.5 rounded-md bg-[#222222] border border-[#333333]">
                  @{profile.brandAlias || 'kendikreator'}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  kendikreator Media &amp; Digital Store
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                  Educational Content &amp; Transition Roadmaps
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Producing technical video breakdowns, career transition guides, and visual explainers that demystify cybersecurity topics for beginners and students.
              </p>

              {/* Product Card */}
              <div className="bg-[#1a1a1a] border border-[#333333] rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-white text-xs font-bold">
                  <BookOpen className="w-4 h-4 text-[#2563eb]" />
                  <span>Certification Navigator (E-Book)</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A structured roadmap and practical study guide published on the Selar platform, helping aspiring candidates pass their early security certifications.
                </p>
                <div className="flex items-center gap-2 pt-1 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-[#111111] text-gray-300 border border-[#333333] font-semibold">
                    Selar E-Commerce
                  </span>
                  <span className="text-gray-500">
                    Self-published Guide
                  </span>
                </div>
              </div>

              {/* Tooling */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block">
                  Production Workflow:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['CapCut', 'Canva', 'OBS Studio', 'Selar Store'].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-[#222222] text-gray-300 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-gray-150 flex items-center justify-between text-xs text-gray-500">
              <span>Platform: Selar.co</span>
              <a
                href="https://selar.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold inline-flex items-center gap-1"
              >
                <span>Browse Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3. Physical Discipline, Routine & Physiology */}
          <div className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                  Lifestyle &amp; Foundation
                </span>
                <span className="text-[11px] font-medium text-gray-500">
                  Daily Rhythm
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Discipline, Athletics &amp; Systems
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                  Physical Conditioning &amp; Tactical Mindset
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {/* Athletic Training */}
                <div className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-3 space-y-1">
                  <div className="flex items-center gap-2 text-white text-xs font-bold">
                    <Dumbbell className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>Progressive Bodybuilding &amp; Conditioning</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Consistent weightlifting, intense jump rope sessions, and high daily step targets that build physical stamina for prolonged alert investigations.
                  </p>
                </div>

                {/* Tactical Football */}
                <div className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-3 space-y-1">
                  <div className="flex items-center gap-2 text-white text-xs font-bold">
                    <Gamepad2 className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>Tactical Football (EA Sports FC 25 / PS5)</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Studying set-piece formations, passing lane geometry, and split-second spatial decisions under fast-paced gameplay.
                  </p>
                </div>

                {/* Physiology Background */}
                <div className="bg-[#1a1a1a] border border-gray-150 rounded-xl p-3 space-y-1">
                  <div className="flex items-center gap-2 text-white text-xs font-bold">
                    <Activity className="w-3.5 h-3.5 text-[#2563eb]" />
                    <span>Biological Systems Thinking</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    B.Sc. in Physiology: applying biological homeostasis, pathogen defense barriers, and negative feedback loops to zero-trust networks.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-gray-150 flex items-center justify-between text-xs text-gray-500">
              <span>Location: Benin City, Nigeria</span>
              <span className="text-gray-300 font-medium">Mental Focus</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
