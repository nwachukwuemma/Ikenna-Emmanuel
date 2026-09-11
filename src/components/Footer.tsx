import { ArrowUp } from 'lucide-react';
import { ProfileInfo } from '../types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer = ({ profile }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] bg-black py-12 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#222222]">
          
          {/* Identity & Logo */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="font-extrabold text-lg tracking-tight text-white">IKENNA</span>
              <span className="font-extrabold text-lg tracking-tight text-[#2563eb]">EMMANUEL</span>
            </div>
            <span className="font-medium text-gray-200 text-xs block">
              ISC2 Certified in Cybersecurity (CC) • <span className="text-gray-500 font-mono">@{profile.brandAlias || 'kendikreator'}</span>
            </span>
            <span className="text-xs text-gray-500 mt-0.5 block">
              Tier-1 SOC Analyst &amp; Digital Solutions Developer • {profile.location}
            </span>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400">
            <a href="#about" className="hover:text-[#2563eb] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#2563eb] transition-colors">Security Labs</a>
            <a href="#experience" className="hover:text-[#2563eb] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#2563eb] transition-colors">Arsenal</a>
            <a href="#credentials" className="hover:text-[#2563eb] transition-colors">Credentials</a>
            <a href="#resumes" className="hover:text-[#2563eb] transition-colors">Resumes</a>
            <a href="#github" className="hover:text-[#2563eb] transition-colors">GitHub</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#333333] text-gray-200 transition-colors text-xs font-semibold cursor-pointer border border-[#333333]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & contact links */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {profile.name} (kendikreator). Cybersecurity &amp; IT Support Specialist.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-medium">
            <a
              href={profile.whatsappUrl || 'https://wa.me/2349126176023'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-semibold"
            >
              WhatsApp ({profile.whatsapp || '09126176023'})
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563eb] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563eb] transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#2563eb] transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
