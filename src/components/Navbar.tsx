import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  SlidersHorizontal,
  Mail,
  FileText,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface NavbarProps {
  profile: ProfileInfo;
  onOpenCustomizer: () => void;
  onViewResume: () => void;
  activeSection: string;
}

export const Navbar = ({ profile, onOpenCustomizer, onViewResume, activeSection }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [employerDropdownOpen, setEmployerDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEmployerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Security Labs', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Arsenal', href: '#skills' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-lg w-full border-b border-[#222222]">
      {/* 1. Top Announcement Banner - Styled as in photo */}
      <div className="bg-[#111827] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center">
        <span>ISC2 Certified in Cybersecurity (CC) • Open to Tier-1 SOC Analyst &amp; Blue Team Defense Roles Worldwide.</span>
      </div>

      {/* 2. Main Navigation Bar */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          
          {/* Logo on Left - IKENNA (white) EMMANUEL (tech blue) with proper spacing to badge and About */}
          <div className="flex items-center shrink-0 mr-2 lg:mr-4 xl:mr-6">
            <a 
              href="#about" 
              id="nav-logo"
              className="flex items-center group select-none"
            >
              <div className="flex items-center">
                <span className="font-extrabold text-lg sm:text-xl xl:text-xl tracking-tight text-white">
                  IKENNA
                </span>
                <span className="font-extrabold text-lg sm:text-xl xl:text-xl tracking-tight text-[#2563eb] ml-1">
                  EMMANUEL
                </span>
              </div>
            </a>
            <span className="hidden 2xl:inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-400 bg-[#222222] px-3 py-1 rounded-full border border-[#333333] ml-4 font-medium whitespace-nowrap">
              <span>SOC Analyst</span>
              <span className="text-gray-400 mx-1">•</span>
              <span>@{profile.brandAlias || 'kendikreator'}</span>
            </span>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center lg:gap-3 xl:gap-4 2xl:gap-6 text-[14px] xl:text-[15px] font-semibold text-gray-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors hover:text-white whitespace-nowrap ${
                    isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-gray-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Recruiter / Quick Actions Dropdown without arrow */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setEmployerDropdownOpen(!employerDropdownOpen)}
                className="flex items-center text-gray-300 hover:text-gray-100 transition-colors focus:outline-hidden cursor-pointer whitespace-nowrap"
              >
                <span>Recruiter Hub</span>
              </button>

              {employerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-[#111111] rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-100 text-xs">
                  <a
                    href="#contact"
                    onClick={() => setEmployerDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#1a1a1a] text-gray-200 font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#2563eb]" />
                    <div>
                      <div>Hire Ikenna (SOC / Blue Team)</div>
                      <div className="text-[11px] text-gray-400">Direct candidate inquiry</div>
                    </div>
                  </a>
                  <button
                    onClick={() => {
                      setEmployerDropdownOpen(false);
                      onViewResume();
                    }}
                    className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#1a1a1a] text-gray-200 font-medium transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#2563eb]" />
                    <div>
                      <div>Download CV / Resume</div>
                      <div className="text-[11px] text-gray-400">SOC Analyst &amp; IT Support CVs</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setEmployerDropdownOpen(false);
                      onOpenCustomizer();
                    }}
                    className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#1a1a1a] text-gray-200 font-medium transition-colors cursor-pointer"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                    <div>
                      <div>Customize Portfolio</div>
                      <div className="text-[11px] text-gray-400">Update photo, projects &amp; bio</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Contact Nav Link with proper matching gap */}
            <a
              href="#contact"
              className={`transition-colors hover:text-white whitespace-nowrap ${
                activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons - Styled as in photo */}
          <div className="hidden md:flex items-center lg:gap-2 xl:gap-3 shrink-0 lg:ml-2 xl:ml-4">
            {/* Tech Blue CTA Button */}
            <a
              href="#contact"
              id="nav-hire-btn"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs xl:text-sm px-3 xl:px-4 py-2 rounded-lg shadow-xs transition-colors cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
            >
              Hire Me
            </a>

            {/* Pill Button with Emoji */}
            <a
              href="#experience"
              id="nav-experience-pill"
              className="bg-[#111111] hover:bg-[#1a1a1a] text-gray-200 border border-[#444444] rounded-full px-2.5 xl:px-3 py-1.5 text-xs font-semibold shadow-2xs flex items-center gap-1 xl:gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>Experience</span>
              <span>🟢</span>
            </a>
          </div>

          {/* Mobile header action buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCustomizer}
              className="p-2 text-gray-400 hover:text-white border border-[#333333] rounded-lg cursor-pointer"
              title="Customize Portfolio"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white border border-[#333333] rounded-lg cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#333333] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1a1a1a] hover:text-[#2563eb] rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#resumes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#1a1a1a] hover:text-[#2563eb] rounded-lg"
          >
            Resumes &amp; CVs
          </a>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#2563eb] text-white font-semibold text-sm rounded-lg text-center"
            >
              Hire Me / Contact
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2 text-center text-sm font-medium text-gray-300 border border-[#444444] rounded-lg"
            >
              Customize Photo &amp; Bio
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
