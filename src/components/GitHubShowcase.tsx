import { useState } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Terminal
} from 'lucide-react';
import { ProfileInfo, GitHubRepoPreview } from '../types';

interface GitHubShowcaseProps {
  profile: ProfileInfo;
  repos: GitHubRepoPreview[];
}

export const GitHubShowcase = ({ profile, repos }: GitHubShowcaseProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  const username = profile.githubUrl.split('/').filter(Boolean).pop() || 'kendikreator';
  const languages = ['All', 'Python', 'PowerShell', 'Shell', 'TypeScript'];

  const filteredRepos = selectedLanguage === 'All' 
    ? repos 
    : repos.filter(r => r.language.toLowerCase() === selectedLanguage.toLowerCase());

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python': return '#3572A5';
      case 'powershell': return '#012456';
      case 'shell':
      case 'bash': return '#89e051';
      case 'typescript': return '#3178c6';
      case 'javascript': return '#f1e05a';
      default: return '#6e7681';
    }
  };

  return (
    <section id="github" className="py-16 md:py-20 bg-[#111111] border-b border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563eb]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                Open Source Repositories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              GitHub Repositories &amp; Scripts
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-xl">
              Defensive scripts, virtual lab network configurations, and automation pipelines hosted publicly on GitHub.
            </p>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="github-visit-profile-btn"
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{username}</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>

        {/* Filter by Language */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-3 border-b border-[#333333]">
          <span className="text-xs text-gray-500 font-medium mr-1">Language:</span>
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedLanguage === lang
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'bg-[#222222] text-gray-300 hover:bg-gray-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredRepos.map((repo) => (
            <div
              key={repo.name}
              className="bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-md rounded-2xl p-5 flex flex-col justify-between transition-all space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold font-mono text-white hover:text-[#2563eb] flex items-center gap-1.5 transition-colors"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                  <span className="text-[10px] font-bold text-gray-400 px-2 py-0.5 rounded-full bg-[#222222] border border-[#333333]">
                    Public
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100 text-gray-500">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  />
                  <span className="font-medium text-gray-300">{repo.language}</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="flex items-center gap-1 text-gray-400">
                    <Star className="w-3 h-3 text-gray-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <GitFork className="w-3 h-3 text-gray-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reproducibility Philosophy Note */}
        <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <Terminal className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-white font-bold block">Open Documentation &amp; Lab Artifacts</span>
              <span className="text-gray-400">
                Virtual lab topologies, Snort rule definitions, and Splunk ingest queries are freely shared for student and peer verification.
              </span>
            </div>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto shrink-0 px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#444444] font-semibold transition-colors shadow-2xs"
          >
            Explore all repositories →
          </a>
        </div>

      </div>
    </section>
  );
};
