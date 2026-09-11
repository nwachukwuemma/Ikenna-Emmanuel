import { useState, useEffect } from 'react';
import { 
  initialProfile, 
  initialProjects, 
  initialExperience, 
  initialSkills, 
  initialResumes, 
  initialGitHubRepos 
} from './data/initialData';
import { ProfileInfo, Project, ResumeItem, ExperienceItem, SkillGroup, GitHubRepoPreview, ProjectCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { GitHubShowcase } from './components/GitHubShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechSkills } from './components/TechSkills';
import { CredentialsAndBrand } from './components/CredentialsAndBrand';
import { ResumesHub } from './components/ResumesHub';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FeedbackTab } from './components/FeedbackTab';
import { ProjectModal } from './components/ProjectModal';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { ViewResumeSelectionModal } from './components/ViewResumeSelectionModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { triggerResumeDownload } from './utils/resumeDownload';
import { Check, X } from 'lucide-react';

export default function App() {
  // Load state from localStorage with fallback to initial data
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    try {
      const saved = localStorage.getItem('ikenna_emmanuel_profile_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialProfile,
          ...parsed,
          // Always ensure the corrected LinkedIn link requested by user is set
          linkedinUrl: (!parsed.linkedinUrl || parsed.linkedinUrl.includes('ikenna-emmanuel')) 
            ? initialProfile.linkedinUrl 
            : parsed.linkedinUrl,
          // Always ensure WhatsApp contact requested by user is set
          whatsapp: parsed.whatsapp || initialProfile.whatsapp,
          whatsappUrl: parsed.whatsappUrl || initialProfile.whatsappUrl,
          // Ensure IT Support is in title
          title: (!parsed.title || !parsed.title.includes('IT Support'))
            ? initialProfile.title
            : parsed.title,
          // If avatar was the old downward image, update it to the direct-facing portrait
          avatarUrl: (!parsed.avatarUrl || parsed.avatarUrl.includes('photo-1534528741775'))
            ? initialProfile.avatarUrl
            : parsed.avatarUrl,
          avatarPosition: parsed.avatarPosition || initialProfile.avatarPosition || 'center 18%',
          avatarScale: parsed.avatarScale || initialProfile.avatarScale || 1.05
        };
      }
      return initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('ikenna_emmanuel_projects_v2');
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  // Only IT Support and SOC Level 1 Analyst resumes are kept
  const [resumes] = useState<ResumeItem[]>(() => {
    try {
      const saved = localStorage.getItem('ikenna_emmanuel_resumes_v3');
      if (saved) {
        const parsed: ResumeItem[] = JSON.parse(saved);
        const filtered = parsed.filter(r => r.id === 'resume-soc' || r.id === 'resume-it-support');
        if (filtered.length === 2) return filtered;
      }
      return initialResumes;
    } catch {
      return initialResumes;
    }
  });

  const [experience] = useState<ExperienceItem[]>(initialExperience);
  const [skills] = useState<SkillGroup[]>(initialSkills);
  const [repos] = useState<GitHubRepoPreview[]>(initialGitHubRepos);

  // Modals & Drawers state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedResumeForPreview, setSelectedResumeForPreview] = useState<ResumeItem | null>(null);
  const [isResumeSelectionModalOpen, setIsResumeSelectionModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [downloadToast, setDownloadToast] = useState<{
    show: boolean;
    fileName: string;
    isCustom: boolean;
    message?: string;
  } | null>(null);

  // Clean out legacy resume stores and ensure clean v3 persistence
  useEffect(() => {
    try {
      localStorage.removeItem('ikenna_emmanuel_resumes_v2');
      localStorage.removeItem('emmanuel_resumes_data');
      localStorage.setItem('ikenna_emmanuel_resumes_v3', JSON.stringify(resumes));
    } catch (e) {
      console.error(e);
    }
  }, [resumes]);

  // Track active navigation section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'experience', 'skills', 'credentials', 'resumes', 'github', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save profile updates
  const handleSaveProfile = (updatedProfile: ProfileInfo) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem('ikenna_emmanuel_profile_v2', JSON.stringify(updatedProfile));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  // Add custom project
  const handleAddProject = (newProject: Project) => {
    const updated = [newProject, ...projects];
    setProjects(updated);
    try {
      localStorage.setItem('ikenna_emmanuel_projects_v2', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save projects to localStorage:', e);
    }
  };

  // Trigger direct download for a chosen resume track
  const handleDirectDownloadResume = (targetResume: ResumeItem) => {
    const result = triggerResumeDownload(profile, resumes, targetResume);
    
    setDownloadToast({
      show: true,
      fileName: result.fileName,
      isCustom: result.isCustomUploaded,
      message: `Downloaded ${targetResume.title} resume (${result.fileName})`
    });

    setTimeout(() => {
      setDownloadToast(null);
    }, 4500);
  };

  // Open "View Resume" selector modal
  const handleOpenResumeSelector = () => {
    setIsResumeSelectionModalOpen(true);
  };

  // Reset to original default portfolio data
  const handleResetDefaults = () => {
    if (window.confirm('Reset all details back to default values? Any custom photo or projects added will be refreshed.')) {
      try {
        localStorage.removeItem('ikenna_emmanuel_profile_v2');
        localStorage.removeItem('ikenna_emmanuel_projects_v2');
        localStorage.removeItem('ikenna_emmanuel_resumes_v2');
        localStorage.removeItem('ikenna_emmanuel_resumes_v3');
        localStorage.removeItem('emmanuel_profile_data');
        localStorage.removeItem('emmanuel_projects_data');
        localStorage.removeItem('emmanuel_resumes_data');
      } catch (e) {
        console.error(e);
      }
      setProfile(initialProfile);
      setProjects(initialProjects);
      setIsCustomizerOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#2563eb] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onViewResume={handleOpenResumeSelector}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero & Bio */}
        <Hero
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onSelectResumeModal={() => setSelectedResumeForPreview(resumes[0])}
          onViewResume={handleOpenResumeSelector}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={activeCategory}
          setSelectedCategory={(cat) => setActiveCategory(cat as ProjectCategory)}
        />

        {/* 2. Portfolio Section */}
        <PortfolioSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenAddProject={() => setIsCustomizerOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* 3. GitHub Showcase */}
        <GitHubShowcase
          profile={profile}
          repos={repos}
        />

        {/* 4. Experience & Career Timeline ("Everything I have done") */}
        <ExperienceTimeline
          items={experience}
        />

        {/* 5. Tech Stack & Engineering Strengths */}
        <TechSkills
          skillGroups={skills}
        />

        {/* 6. Certifications, kendikreator Brand & Lifestyle Attributes */}
        <CredentialsAndBrand
          profile={profile}
        />

        {/* 7. Multi-Resume Hub ("A place to put all my resumes") */}
        <ResumesHub
          resumes={resumes}
          onPreviewResume={(res) => setSelectedResumeForPreview(res)}
          onViewResume={(res) => {
            if (res) {
              handleDirectDownloadResume(res);
            } else {
              handleOpenResumeSelector();
            }
          }}
        />

        {/* 8. Contact Section */}
        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Feedback / Inquiry Tab on the right edge */}
      <FeedbackTab userEmail={profile.email} />

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full Resume Printable & Export Preview Modal */}
      <ResumePreviewModal
        resume={selectedResumeForPreview}
        profile={profile}
        onClose={() => setSelectedResumeForPreview(null)}
        onDownloadPdf={() => handleDirectDownloadResume(selectedResumeForPreview || resumes[0])}
      />

      {/* View Resume Track Selection Modal: Choose between IT Support and SOC Level 1 Analyst */}
      <ViewResumeSelectionModal
        isOpen={isResumeSelectionModalOpen}
        onClose={() => setIsResumeSelectionModalOpen(false)}
        resumes={resumes}
        profile={profile}
        onDownloadResume={(resume) => {
          setIsResumeSelectionModalOpen(false);
          handleDirectDownloadResume(resume);
        }}
        onPreviewResume={(resume) => {
          setIsResumeSelectionModalOpen(false);
          setSelectedResumeForPreview(resume);
        }}
      />

      {/* Profile Personalizer Drawer */}
      <CustomizeDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
        projects={projects}
        onAddProject={handleAddProject}
      />

      {/* Download Status Toast */}
      {downloadToast && (
        <div 
          id="resume-download-toast"
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-gray-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-semibold text-gray-100">
              {downloadToast.isCustom ? 'Uploaded PDF Downloaded' : 'Resume PDF Downloaded'}
            </p>
            <p className="text-gray-400 truncate mt-0.5" title={downloadToast.fileName}>
              {downloadToast.fileName}
            </p>
          </div>
          <button
            onClick={() => setDownloadToast(null)}
            className="text-gray-400 hover:text-white p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
