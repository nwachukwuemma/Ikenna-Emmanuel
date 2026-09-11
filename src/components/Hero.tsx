import { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Copy, 
  FileText, 
  ArrowRight,
  Camera,
  MessageCircle,
  Linkedin,
  Download
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { DoodleBackground } from './DoodleBackground';

interface HeroProps {
  profile: ProfileInfo;
  onOpenCustomizer: () => void;
  onSelectResumeModal: () => void;
  onViewResume: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const Hero = ({ 
  profile, 
  onOpenCustomizer, 
  onSelectResumeModal,
  onViewResume,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}: HeroProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const countries = [
    'All Remote & African Countries',
    'Nigeria (Benin City / Lagos)',
    'Kenya (Nairobi)',
    'Ghana (Accra)',
    'South Africa (Cape Town / Joburg)',
    'Rwanda (Kigali)',
    'Global Remote (Anywhere)'
  ];

  return (
    <section id="about" className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      
      {/* 1. Background Image with Netflix-Style Fade */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')` }}
        />
        {/* Gradient overlay: Darkens the image for text readability and fades to the app's dark background (#0a0a0a) at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 shadow-2xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ISC2 Certified Cybersecurity &amp; IT Support Analyst • Blue Team Specialist</span>
        </div>

        {/* Main Central Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto drop-shadow-lg">
          Defending Critical Networks &amp;
          <br />
          <span className="text-gray-200">Engineering Resilient Systems</span>
        </h1>

        {/* Subtitle connecting to Ikenna's Portfolio & Talent */}
        <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Welcome to my professional engineering portfolio. I'm{' '}
          <strong className="text-white font-semibold">{profile.name}</strong>{' '}
          <span className="text-gray-200 font-mono text-sm">(@{profile.brandAlias || 'kendikreator'})</span>—specializing in Splunk SIEM telemetry, threat hunting, Windows Active Directory defense, and automated incident triage.
        </p>

        {/* Central Tech Blue CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#portfolio"
            id="hero-explore-labs-btn"
            className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
          >
            <span>Explore Defense Labs &amp; Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          
          {/* Requested Button: "View Resume" - Downloads uploaded PDF */}
          <button
            onClick={onViewResume}
            id="hero-view-resume-btn"
            className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white font-bold text-base sm:text-lg px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 border border-gray-800"
            title="Download Ikenna's uploaded PDF resume"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>View Resume</span>
            <Download className="w-4 h-4 text-gray-200" />
          </button>
        </div>

        <div className="mt-2.5 text-center">
          <button
            onClick={onSelectResumeModal}
            className="text-sm text-gray-200 hover:text-[#2563eb] transition-colors underline cursor-pointer inline-flex items-center gap-1"
          >
            <span>Or read ATS structured resume on screen</span>
            <span>→</span>
          </button>
        </div>

        {/* Featured Talent Card (Ikenna Emmanuel) - Enlarged photo display */}
        <div className="mt-12 bg-[#111111]/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#333333] shadow-lg text-left max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            
            {/* Big, High-Impact Photo Container */}
            <div className="relative shrink-0 group">
              {/* Tech Blue Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-blue-400/25 rounded-3xl blur-md -z-10 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative w-52 h-72 sm:w-64 sm:h-[22rem] md:w-72 md:h-[26rem] rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue-100 bg-[#222222]">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  style={{
                    objectPosition: profile.avatarPosition || 'center 18%',
                    transform: `scale(${profile.avatarScale || 1.05})`
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Status Badge overlay on top of photo */}
                <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-sm font-semibold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ready for SOC &amp; IT Roles</span>
                </div>
              </div>
            </div>

            {/* Profile Bio & Credentials Column */}
            <div className="flex-1 space-y-3.5 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="font-black text-white text-xl sm:text-2xl tracking-tight">{profile.name}</h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-900/20 text-[#2563eb] text-sm font-bold border border-blue-800/30">
                      <ShieldCheck className="w-3 h-3 text-[#2563eb]" />
                      ISC2 Certified (CC)
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 font-semibold mt-0.5">
                    {profile.title} • {profile.secondaryTitle}
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-2 pt-2 sm:pt-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Hire Ikenna</span>
                  </a>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-[#222222] text-gray-200 text-sm font-mono font-medium border border-[#333333]">
                  ISC2 Certified in Cybersecurity
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-900/20 text-blue-300 text-sm font-mono font-medium border border-blue-800/30">
                  IT Support &amp; Helpdesk
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#222222] text-gray-200 text-sm font-mono font-medium border border-[#333333]">
                  B.Sc. Physiology
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#222222] text-gray-200 text-sm font-mono font-medium border border-[#333333]">
                  Splunk &amp; Sysmon
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#222222] text-gray-200 text-sm font-mono font-medium border border-[#333333]">
                  Active Directory Labs
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#222222] text-gray-200 text-sm font-mono font-medium border border-[#333333]">
                  Benin City, Nigeria
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-sm">
                {/* Direct WhatsApp Pill */}
                <a
                  href={profile.whatsappUrl || 'https://wa.me/2349126176023'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/20 hover:bg-emerald-100 text-emerald-300 border border-emerald-800/30 transition-colors font-semibold shadow-2xs"
                  title="Direct WhatsApp Chat"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: {profile.whatsapp || '09126176023'}</span>
                </a>

                {/* LinkedIn Link */}
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/20 hover:bg-blue-100 text-[#0077b5] border border-blue-800/30 transition-colors font-semibold shadow-2xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>

                {/* Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] text-gray-200 border border-[#333333] transition-colors font-medium cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-200" />}
                  <span>{copiedEmail ? 'Email Copied!' : profile.email}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Floating Filter / Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 relative z-20">
        <div className="bg-[#111111] rounded-2xl shadow-xl border border-[#333333] p-2 sm:p-2.5 flex flex-col md:flex-row items-center gap-2">
          
          {/* Left search: Filter by title, tech or keyword */}
          <div className="flex-1 w-full flex items-center gap-3 px-3 py-2.5 border-b md:border-b-0 md:border-r border-[#333333]">
            <Search className="w-4 h-4 text-gray-200 shrink-0" />
            <input
              type="text"
              placeholder="Search defense labs, tools, or techniques (e.g. Splunk, Sysmon, Snort)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm sm:text-base text-gray-200 placeholder-gray-400 focus:outline-hidden bg-transparent"
            />
          </div>

          {/* Right dropdown: Filter by category */}
          <div className="w-full md:w-80 flex items-center gap-2 px-3 py-2.5">
            <MapPin className="w-4 h-4 text-gray-200 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-sm sm:text-base text-gray-200 bg-transparent focus:outline-hidden cursor-pointer"
            >
              <option value="All">Filter by specialization / all</option>
              <option value="Cybersecurity & SOC">Cybersecurity &amp; SOC</option>
              <option value="AI & Automation">AI &amp; Automation</option>
              <option value="Infrastructure & Labs">Infrastructure &amp; Labs</option>
              <option value="Web & Digital Tools">Web &amp; Digital Tools</option>
            </select>
          </div>

          {/* Filter Action Button */}
          <a
            href="#portfolio"
            className="w-full md:w-auto px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm sm:text-base font-semibold rounded-xl text-center transition-colors shadow-xs"
          >
            Filter Labs
          </a>

        </div>
      </div>

    </section>
  );
};
