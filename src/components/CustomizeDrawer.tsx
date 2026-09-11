import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { 
  X, 
  Upload, 
  Save, 
  RotateCcw, 
  Plus, 
  Check, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { ProfileInfo, Project } from '../types';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onSaveProfile: (updatedProfile: ProfileInfo) => void;
  onResetDefaults: () => void;
  projects: Project[];
  onAddProject: (newProject: Project) => void;
}

export const CustomizeDrawer = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
  onAddProject,
}: CustomizeDrawerProps) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'picture' | 'project'>('profile');
  const [formProfile, setFormProfile] = useState<ProfileInfo>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Project Form State
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjTagline, setNewProjTagline] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<Project['category']>('Cybersecurity & SOC');
  const [newProjTech, setNewProjTech] = useState('');
  const [newProjGithub, setNewProjGithub] = useState('');
  const [newProjDemo, setNewProjDemo] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle Photo File Upload
  const handlePhotoFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setFormProfile(prev => ({ ...prev, avatarUrl: dataUrl }));
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = (e: FormEvent) => {
    e.preventDefault();
    onSaveProfile(formProfile);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2200);
  };

  const handleCreateProject = (e: FormEvent) => {
    e.preventDefault();
    if (!newProjTitle) return;

    const created: Project = {
      id: `proj-${Date.now()}`,
      title: newProjTitle,
      tagline: newProjTagline || 'Security engineering laboratory',
      description: newProjDesc || 'Defensive infrastructure, telemetry pipelines, and threat mitigation tools.',
      category: newProjCategory,
      techStack: newProjTech ? newProjTech.split(',').map(t => t.trim()).filter(Boolean) : ['Python', 'Splunk', 'Windows Server'],
      githubUrl: newProjGithub || formProfile.githubUrl,
      liveUrl: newProjDemo || undefined,
      featured: false,
      image: '',
      architectureDetails: {
        problem: 'Operational challenges requiring structured defense architecture.',
        solution: 'Built with resilient defensive telemetry and verified logging.',
        keyFeatures: ['Audit-ready logging', 'Efficient threat parsing', 'Isolated virtual networks'],
        metrics: ['Engineered for reliable telemetry correlation']
      }
    };

    onAddProject(created);
    setNewProjTitle('');
    setNewProjTagline('');
    setNewProjDesc('');
    setNewProjTech('');
    setNewProjGithub('');
    setNewProjDemo('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2200);
  };

  const presetAvatars = [
    {
      name: 'Direct Front Portrait (Recommended)',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Cybersecurity Analyst',
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'IT Support & Systems',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80'
    },
    {
      name: 'Digital Creator',
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div 
        className="w-full max-w-xl bg-[#111111] border-l border-[#333333] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#333333] flex items-center justify-between bg-[#1a1a1a]">
          <div>
            <h3 className="font-bold text-white text-sm">Customize Portfolio Details</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Update your photo, bio, resumes, and projects
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note */}
        <div className="p-3 bg-blue-900/20/50 border-b border-blue-100 text-xs text-gray-400 flex items-start gap-2">
          <Info className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
          <span>
            Changes are saved locally in your browser so you can preview custom photos or resume files instantly.
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-2 border-b border-[#333333] bg-[#111111] text-xs font-semibold">
          {(['profile', 'picture', 'project'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-center transition-all capitalize cursor-pointer ${
                activeTab === tab
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'text-gray-400 hover:text-white hover:bg-[#222222]'
              }`}
            >
              {tab === 'profile' ? 'Profile' : tab === 'picture' ? 'Photo' : 'Project'}
            </button>
          ))}
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: Profile & Social Links */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Full Name</label>
                  <input
                    type="text"
                    value={formProfile.name}
                    onChange={(e) => setFormProfile({ ...formProfile, name: e.target.value })}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Brand Alias</label>
                  <input
                    type="text"
                    placeholder="kendikreator"
                    value={formProfile.brandAlias || ''}
                    onChange={(e) => setFormProfile({ ...formProfile, brandAlias: e.target.value })}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Primary Title</label>
                <input
                  type="text"
                  value={formProfile.title}
                  onChange={(e) => setFormProfile({ ...formProfile, title: e.target.value })}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Secondary Specialty</label>
                <input
                  type="text"
                  value={formProfile.secondaryTitle}
                  onChange={(e) => setFormProfile({ ...formProfile, secondaryTitle: e.target.value })}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Short Bio / Mission</label>
                <textarea
                  rows={3}
                  value={formProfile.bio}
                  onChange={(e) => setFormProfile({ ...formProfile, bio: e.target.value })}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Email Address</label>
                  <input
                    type="email"
                    value={formProfile.email}
                    onChange={(e) => setFormProfile({ ...formProfile, email: e.target.value })}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Location</label>
                  <input
                    type="text"
                    value={formProfile.location}
                    onChange={(e) => setFormProfile({ ...formProfile, location: e.target.value })}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">LinkedIn Profile URL</label>
                <input
                  type="url"
                  placeholder="https://www.linkedin.com/in/kendikreator"
                  value={formProfile.linkedinUrl}
                  onChange={(e) => setFormProfile({ ...formProfile, linkedinUrl: e.target.value })}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">WhatsApp Contact Number</label>
                <input
                  type="text"
                  placeholder="09126176023"
                  value={formProfile.whatsapp || ''}
                  onChange={(e) => {
                    const val = e.target.value;
                    const clean = val.replace(/[^0-9]/g, '');
                    const intl = clean.startsWith('0') ? `234${clean.slice(1)}` : clean;
                    setFormProfile({
                      ...formProfile,
                      whatsapp: val,
                      whatsappUrl: `https://wa.me/${intl}`
                    });
                  }}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
                <span className="text-[10px] text-gray-500">Direct click-to-chat link will use this number.</span>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">GitHub Profile URL</label>
                <input
                  type="url"
                  value={formProfile.githubUrl}
                  onChange={(e) => setFormProfile({ ...formProfile, githubUrl: e.target.value })}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Profile Updates</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Photo Upload */}
          {activeTab === 'picture' && (
            <div className="space-y-6">
              
              {/* Current Photo Preview with Live Framing */}
              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-2xl border border-[#333333]">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md ring-2 ring-blue-200 bg-[#222222] shrink-0">
                  <img
                    src={formProfile.avatarUrl}
                    alt="Profile"
                    referrerPolicy="no-referrer"
                    style={{
                      objectPosition: formProfile.avatarPosition || 'center 18%',
                      transform: `scale(${formProfile.avatarScale || 1.05})`
                    }}
                    className="w-full h-full object-cover transition-all"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Current Profile Avatar</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Position: <span className="font-mono text-blue-700 font-semibold">{formProfile.avatarPosition || 'center 18%'}</span>
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Your face is centered and lifted upward to stay clearly in view.
                  </p>
                </div>
              </div>

              {/* Face Alignment & Framing Controls */}
              <div className="p-4 bg-blue-900/20/60 rounded-2xl border border-blue-800/30/80 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">Face Framing &amp; Vertical Position</h4>
                    <p className="text-[11px] text-gray-400">
                      Raise or lower the photo framing so your face is perfectly displayed.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full font-bold">
                    {formProfile.avatarPosition || 'center 18%'}
                  </span>
                </div>

                {/* Fast Preset Buttons */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: 'High Face (10%)', val: 'center 10%' },
                    { label: 'Face Center (18%)', val: 'center 18%' },
                    { label: 'Mid-Upper (30%)', val: 'center 30%' },
                    { label: 'Standard (50%)', val: 'center 50%' }
                  ].map((preset) => {
                    const isSelected = (formProfile.avatarPosition || 'center 18%') === preset.val;
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          const updated = { ...formProfile, avatarPosition: preset.val };
                          setFormProfile(updated);
                          onSaveProfile(updated);
                        }}
                        className={`py-2 px-1 text-[10px] font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-xs'
                            : 'bg-[#111111] text-gray-300 border-[#333333] hover:bg-[#222222]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>

                {/* Vertical Position Slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
                    <span>↑ Raise Photo (Show Face)</span>
                    <span>↓ Lower Photo</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="70"
                    value={parseInt((formProfile.avatarPosition || 'center 18%').match(/\d+/)?.[0] || '18', 10)}
                    onChange={(e) => {
                      const updated = { ...formProfile, avatarPosition: `center ${e.target.value}%` };
                      setFormProfile(updated);
                      onSaveProfile(updated);
                    }}
                    className="w-full accent-[#2563eb] cursor-pointer"
                  />
                </div>

                {/* Zoom / Scale Slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
                    <span>Crop / Zoom In Face: {Math.round((formProfile.avatarScale || 1.05) * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="140"
                    step="5"
                    value={Math.round((formProfile.avatarScale || 1.05) * 100)}
                    onChange={(e) => {
                      const updated = { ...formProfile, avatarScale: Number(e.target.value) / 100 };
                      setFormProfile(updated);
                      onSaveProfile(updated);
                    }}
                    className="w-full accent-[#2563eb] cursor-pointer"
                  />
                </div>
              </div>

              {/* Upload Real File From Device */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Upload Photo From Computer or Phone</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-6 border-2 border-dashed border-[#444444] hover:border-[#2563eb] rounded-2xl flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-blue-900/20/20 transition-colors text-gray-300 cursor-pointer"
                >
                  <Upload className="w-6 h-6 text-[#2563eb]" />
                  <span className="text-xs font-bold">Click to choose image file</span>
                  <span className="text-[11px] text-gray-500">PNG, JPG, WEBP (saved in browser)</span>
                </button>
              </div>

              {/* Or paste Custom URL */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Or Paste Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formProfile.avatarUrl}
                    onChange={(e) => setFormProfile({ ...formProfile, avatarUrl: e.target.value })}
                    placeholder="https://..."
                    className="flex-1 bg-[#111111] border border-[#444444] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      onSaveProfile(formProfile);
                      setSavedSuccess(true);
                      setTimeout(() => setSavedSuccess(false), 2200);
                    }}
                    className="px-4 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Select Preset Avatars */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Or Choose a Preset</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {presetAvatars.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => {
                        setFormProfile({ ...formProfile, avatarUrl: preset.url });
                        onSaveProfile({ ...formProfile, avatarUrl: preset.url });
                      }}
                      className={`rounded-xl overflow-hidden border p-1 text-center transition-all cursor-pointer ${
                        formProfile.avatarUrl === preset.url
                          ? 'border-[#2563eb] bg-blue-900/20 ring-2 ring-[#2563eb]'
                          : 'border-[#333333] hover:border-gray-400 bg-[#111111]'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-square rounded-lg object-cover mb-1"
                      />
                      <span className="text-[10px] text-gray-300 font-semibold block truncate">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Add Project */}
          {activeTab === 'project' && (
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Project / Lab Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Snort Detection Grid"
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">Category</label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value as any)}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                  >
                    <option value="Cybersecurity & SOC">Cybersecurity & SOC</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Infrastructure & Labs">Infrastructure & Labs</option>
                    <option value="Web & Digital Tools">Web & Digital Tools</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-300">One-line Tagline</label>
                  <input
                    type="text"
                    placeholder="Real-time threat detection pipeline"
                    value={newProjTagline}
                    onChange={(e) => setNewProjTagline(e.target.value)}
                    className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Description</label>
                <textarea
                  rows={2}
                  placeholder="What was built, what problem was solved?"
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">Tech Stack (comma-separated)</label>
                <input
                  type="text"
                  placeholder="Python, Splunk, pfSense, Wireshark"
                  value={newProjTech}
                  onChange={(e) => setNewProjTech(e.target.value)}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-300">GitHub URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/kendikreator/..."
                  value={newProjGithub}
                  onChange={(e) => setNewProjGithub(e.target.value)}
                  className="w-full bg-[#111111] border border-[#444444] rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#2563eb]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Project / Lab</span>
              </button>
            </form>
          )}

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[#333333] bg-[#1a1a1a] flex items-center justify-between">
          <button
            type="button"
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          {savedSuccess && (
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <Check className="w-3.5 h-3.5" />
              <span>Saved!</span>
            </span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-200 text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
