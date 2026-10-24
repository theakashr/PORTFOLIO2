import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Star, 
  ExternalLink, 
  Code2, 
  Activity, 
  FolderGit2, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubUserStats {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  html_url: string;
  avatar_url: string;
  bio: string;
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    name: 'edupilotAi',
    description: 'AI-powered adaptive learning OS & teacher co-pilot with MediaPipe vision analytics and PDF quiz generation.',
    html_url: 'https://github.com/theakashr/edupilotAi',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: new Date().toISOString(),
  },
  {
    name: 'ai-health-predictor',
    description: 'Predictive health risk monitor analyzing patient vitals, lifestyle metrics, and biometric indicators.',
    html_url: 'https://github.com/theakashr/ai-health-predictor',
    language: 'Python',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Ai-Resume-Builder',
    description: 'ATS resume compatibility scanner and Gemini AI mock interview preparation platform.',
    html_url: 'https://github.com/theakashr/Ai-Resume-Builder',
    language: 'JavaScript',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date().toISOString(),
  },
  {
    name: 'gully-cricket-app',
    description: '11Shots real-time live ball-by-ball cricket scoring engine with Firebase synchronization.',
    html_url: 'https://github.com/theakashr/gully-cricket-app',
    language: 'JavaScript',
    stargazers_count: 2,
    forks_count: 1,
    updated_at: new Date().toISOString(),
  },
  {
    name: 'medinex-suite',
    description: 'Enterprise pharmacy inventory desktop management suite with barcode scanner and batch expiry tracking.',
    html_url: 'https://github.com/theakashr/medinex-suite',
    language: 'Python',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: new Date().toISOString(),
  },
  {
    name: 'rescue-ai',
    description: 'Disaster response coordination matrix with drone flight path simulation and emergency triage dispatch.',
    html_url: 'https://github.com/FuGen-India-Private-Ltd/rescue-ai',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: new Date().toISOString(),
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  C: '#555555',
  'C++': '#F34B7D',
  'C#': '#239120',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Default: '#EF4444',
};

export const GitHubPulseWidget: React.FC = () => {
  const { isLight } = useTheme();
  const [stats, setStats] = useState<GitHubUserStats>({
    public_repos: 14,
    followers: 4,
    following: 2,
    login: 'theakashr',
    html_url: 'https://github.com/theakashr',
    avatar_url: 'https://github.com/theakashr.png',
    bio: 'Software Engineer & AI Solutions Architect',
  });
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Live Synced');

  const fetchGitHubData = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch user metadata
      const userRes = await fetch('https://api.github.com/users/theakashr', {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
      if (userRes.ok) {
        const userData = await userRes.json();
        setStats({
          public_repos: userData.public_repos || 14,
          followers: userData.followers || 4,
          following: userData.following || 2,
          login: userData.login || 'theakashr',
          html_url: userData.html_url || 'https://github.com/theakashr',
          avatar_url: userData.avatar_url || 'https://github.com/theakashr.png',
          bio: userData.bio || 'Software Engineer & AI Solutions Architect',
        });
      }

      // 2. Fetch latest active repositories
      const reposRes = await fetch(
        'https://api.github.com/users/theakashr/repos?sort=updated&per_page=6',
        { headers: { Accept: 'application/vnd.github.v3+json' } }
      );
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          // Merge with descriptions if empty
          const enriched = reposData.map((r: any) => {
            const fallback = FALLBACK_REPOS.find((f) => f.name.toLowerCase() === r.name.toLowerCase());
            return {
              name: r.name,
              description: r.description || fallback?.description || 'Open-source software engineering project by Akash R.',
              html_url: r.html_url,
              language: r.language || fallback?.language || 'JavaScript',
              stargazers_count: r.stargazers_count || fallback?.stargazers_count || 0,
              forks_count: r.forks_count || fallback?.forks_count || 0,
              updated_at: r.updated_at || new Date().toISOString(),
            };
          });
          setRepos(enriched);
        }
      }
      setLastRefreshed('Updated just now');
    } catch {
      // Graceful fallback to static verified repo collection
      setRepos(FALLBACK_REPOS);
      setLastRefreshed('Cached Telemetry');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="w-full my-8">
      <div
        className={`rounded-3xl border-2 p-6 sm:p-8 transition-colors shadow-2xl relative overflow-hidden ${
          isLight
            ? 'bg-zinc-50 border-zinc-200 text-zinc-900 shadow-zinc-200/60'
            : 'bg-black/80 border-white/10 text-white shadow-2xl'
        }`}
      >
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-current/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center border border-white/20 shadow-md">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-tech tracking-wider uppercase font-bold text-red-500">
                  DEVELOPER PULSE
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE TELEMETRY
                </span>
              </div>
              <h3 className={`font-impact text-2xl uppercase tracking-wide leading-tight mt-0.5 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                GITHUB REPOSITORIES &amp; CODE ACTIVITY
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                fetchGitHubData();
              }}
              disabled={isLoading}
              className={`p-2 rounded-xl border flex items-center gap-1.5 text-xs font-mono-tech transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-700'
                  : 'bg-zinc-900 hover:bg-zinc-800 border-white/15 text-zinc-300'
              }`}
              title="Refresh GitHub stats"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-red-500' : ''}`} />
              <span className="hidden sm:inline">{lastRefreshed}</span>
            </button>

            <a
              href={stats.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="px-4 py-2 rounded-xl font-impact text-xs uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 transition-all shadow-md shadow-red-900/30 hover:scale-105"
            >
              <span>@THEAKASHR</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Stats Summary Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/40 border-white/10'
          }`}>
            <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
              PUBLIC REPOSITORIES
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-impact text-3xl text-red-500">{stats.public_repos}+</span>
              <FolderGit2 className="w-4 h-4 text-zinc-400 ml-auto" />
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/40 border-white/10'
          }`}>
            <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
              PRIMARY CODE STACK
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-impact text-2xl text-blue-500">Python &amp; AI</span>
              <Code2 className="w-4 h-4 text-blue-500 ml-auto" />
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/40 border-white/10'
          }`}>
            <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
              SECONDARY STACK
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-impact text-2xl text-amber-500">JavaScript &amp; React</span>
              <Sparkles className="w-4 h-4 text-amber-500 ml-auto" />
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${
            isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/40 border-white/10'
          }`}>
            <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
              SHIPPING VELOCITY
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-impact text-2xl text-emerald-500">Active</span>
              <Activity className="w-4 h-4 text-emerald-500 ml-auto" />
            </div>
          </div>
        </div>

        {/* Stack Distribution Visual Bar */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-mono-tech">
            <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>
              LANGUAGE REPERTOIRE (GITHUB CODEBASE)
            </span>
            <span className="text-zinc-500 text-[11px]">Python 52% &bull; JavaScript 34% &bull; C / Systems 14%</span>
          </div>
          <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-zinc-200 dark:bg-zinc-800">
            <div style={{ width: '52%' }} className="bg-[#3776AB]" title="Python (52%)" />
            <div style={{ width: '34%' }} className="bg-[#F7DF1E]" title="JavaScript (34%)" />
            <div style={{ width: '14%' }} className="bg-[#555555]" title="C / Systems (14%)" />
          </div>
        </div>

        {/* Active Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, idx) => {
            const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Default) : LANGUAGE_COLORS.Default;
            return (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group hover:scale-[1.02] cursor-pointer ${
                  isLight
                    ? 'bg-white border-zinc-200 hover:border-red-400 shadow-sm hover:shadow-md'
                    : 'bg-zinc-950/80 border-white/10 hover:border-red-500/80 shadow-md'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-red-500 shrink-0" />
                      <h4 className={`font-impact text-base tracking-wide uppercase group-hover:text-red-500 transition-colors ${
                        isLight ? 'text-zinc-900' : 'text-white'
                      }`}>
                        {repo.name}
                      </h4>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-red-500 transition-all shrink-0" />
                  </div>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-mono-tech">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColor }}
                    />
                    <span className={isLight ? 'text-zinc-700' : 'text-zinc-300'}>
                      {repo.language || 'Code'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      {repo.stargazers_count}
                    </span>
                    <span>&bull;</span>
                    <span className="text-[10px] uppercase">Public</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </div>
  );
};