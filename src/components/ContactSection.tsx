import { useState, type FormEvent } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection = ({ profile }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Tier-1 SOC Analyst / Blue Team Role',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(profile.whatsapp || '09126176023');
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoSubject = encodeURIComponent(`[${formData.category}] ${formData.subject || 'SOC Role / Portfolio Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Ikenna,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    
    setSubmitted(true);
    window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 border-b border-[#111111] bg-black overflow-hidden">
      {/* Netflix-style Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
        />
        {/* Gradients to blend the image perfectly into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              Direct Inquiries
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Connect &amp; Hire Ikenna
          </h2>
          <p className="text-gray-400 text-sm mt-1 max-w-xl">
            Open to full-time Tier-1 / Tier-2 SOC analyst roles, blue team defense positions, security lab setups, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Chat Card */}
            <div className="bg-[#111111] border-2 border-emerald-800/30/90 rounded-2xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Instant WhatsApp Contact
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-800/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-900/200 animate-pulse" />
                  Direct Reach
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-900/20/50 border border-emerald-800/30">
                <span className="font-mono text-xs sm:text-sm text-white font-bold truncate select-all mr-2">
                  {profile.whatsapp || '09126176023'}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyWhatsApp}
                    id="contact-copy-whatsapp-btn"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-gray-300 text-xs font-semibold transition-colors border border-[#333333] shadow-2xs cursor-pointer"
                    title="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-gray-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={profile.whatsappUrl || 'https://wa.me/2349126176023'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Chat Now</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Direct instant line for IT support emergencies, SOC analyst opportunities, and technical contracts.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="bg-[#111111] border border-[#333333] rounded-2xl p-5 space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] block">
                Direct Email
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a] border border-[#333333]">
                <span className="font-mono text-xs sm:text-sm text-gray-200 truncate select-all mr-2 font-medium">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-gray-300 hover:text-white text-xs font-semibold transition-colors border border-[#333333] shadow-2xs shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-gray-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Directly sent to Ikenna's primary inbox. Monitored daily.
              </p>
            </div>

            {/* Location & Timezone */}
            <div className="bg-[#111111] border border-[#333333] rounded-2xl p-5 space-y-3 text-xs shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Availability &amp; Location
              </span>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{profile.location} (West Africa Time, UTC+1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Open to Remote (Global / EMEA / US timezones)</span>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div className="bg-[#111111] border border-[#333333] rounded-2xl p-5 space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                Professional Networks
              </span>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-900/20/50 border border-blue-800/30 text-white hover:bg-blue-900/20 transition-colors font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    <span className="font-semibold text-[#0077b5]">LinkedIn: www.linkedin.com/in/kendikreator</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0077B5]" />
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a1a] border border-[#333333] text-gray-200 hover:bg-[#222222] transition-colors font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-gray-300" />
                    <span>GitHub: /kendikreator</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/20 border border-emerald-800/30 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Mail Client Triggered
                  </h3>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    A formatted message draft has been generated in your mail app. You can also write to <span className="font-semibold text-white">{profile.email}</span> anytime.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-[#2563eb] hover:underline cursor-pointer"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Your Name <span className="text-[#2563eb]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Your Email <span className="text-[#2563eb]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300 block">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                    >
                      <option value="IT Support / Helpdesk Specialist Role">IT Support / Helpdesk Specialist Role</option>
                      <option value="Tier-1 SOC Analyst / Blue Team Role">Tier-1 SOC Analyst / Blue Team Role</option>
                      <option value="Active Directory & Systems Administration">Active Directory &amp; Systems Administration</option>
                      <option value="Cybersecurity Engineering Contract">Cybersecurity Engineering Contract</option>
                      <option value="Digital Solutions & Scripting">Digital Solutions &amp; Scripting</option>
                      <option value="Educational Media / kendikreator Collaboration">Educational Media / kendikreator Collaboration</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Remote Opportunity / Technical Project"
                      className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300 block">
                      Message <span className="text-[#2563eb]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, team, or project..."
                      className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-colors leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-send-message-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
