import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GITHUB_CONFIG } from '../config/github';

const GitHubStatus = () => {
  const [githubData, setGithubData] = useState({
    currentRepo: '',
    commitsToday: 0,
    currentStreak: 0,
    totalCommits: 0,
    loading: true,
    error: null,
    lastUpdated: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setGithubData(prev => ({ ...prev, loading: true, error: null }));

        // Check if username is configured
        if (GITHUB_CONFIG.username === 'your-github-username') {
          throw new Error('Please configure your GitHub username in src/config/github.js');
        }

        const headers = {};
        if (GITHUB_CONFIG.token) {
          headers.Authorization = `token ${GITHUB_CONFIG.token}`;
        }

        // Fetch recent events
        const eventsResponse = await fetch(
          `${GITHUB_CONFIG.api.events}/${GITHUB_CONFIG.username}/events?per_page=100`,
          { headers }
        );
        
        if (!eventsResponse.ok) {
          if (eventsResponse.status === 404) {
            throw new Error('GitHub user not found. Check username in config.');
          } else if (eventsResponse.status === 403) {
            throw new Error('Rate limited. Add GitHub token for higher limits.');
          }
          throw new Error(`GitHub API error: ${eventsResponse.status}`);
        }

        const events = await eventsResponse.json();
        
        // Get current working repository
        const lastPushEvent = events.find(event => 
          event.type === 'PushEvent' && event.payload.commits.length > 0
        );

        const currentRepo = lastPushEvent 
          ? lastPushEvent.repo.name.split('/')[1] 
          : 'No recent activity';

        // Calculate commits today
        const today = new Date().toISOString().split('T')[0];
        const todayEvents = events.filter(event => {
          const eventDate = new Date(event.created_at).toISOString().split('T')[0];
          return eventDate === today && event.type === 'PushEvent';
        });

        const commitsToday = todayEvents.reduce((total, event) => {
          return total + (event.payload?.commits?.length || 0);
        }, 0);

        // Calculate streak and total commits
        const { streak, totalCommits } = calculateGitHubStats(events);

        setGithubData({
          currentRepo,
          commitsToday,
          currentStreak: streak,
          totalCommits,
          loading: false,
          error: null,
          lastUpdated: new Date()
        });

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        
        // Fallback to demo data if there's an error
        setGithubData(prev => ({
          ...prev,
          currentRepo: 'Portfolio-Website',
          commitsToday: 0,
          currentStreak: 0,
          totalCommits: 0,
          loading: false,
          error: error.message,
          lastUpdated: new Date()
        }));
      }
    };

    fetchGitHubData();
    
    // Refresh data at configured interval
    const interval = setInterval(fetchGitHubData, GITHUB_CONFIG.updateInterval);
    
    return () => clearInterval(interval);
  }, []);

  const calculateGitHubStats = (events) => {
    const pushEvents = events.filter(event => event.type === 'PushEvent');
    
    // Calculate total commits from recent events
    const totalCommits = pushEvents.reduce((total, event) => {
      return total + (event.payload?.commits?.length || 0);
    }, 0);
    
    // Calculate streak
    const eventsByDate = {};
    pushEvents.forEach(event => {
      const date = new Date(event.created_at).toISOString().split('T')[0];
      eventsByDate[date] = true;
    });
    
    let streak = 0;
    let currentDate = new Date();
    let foundGap = false;
    
    // Check last 30 days for streak
    for (let i = 0; i < 30; i++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      
      if (eventsByDate[dateStr]) {
        if (!foundGap) {
          streak++;
        }
      } else {
        foundGap = true;
      }
      
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return { streak, totalCommits };
  };

  if (githubData.loading) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[280px]"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded mb-2"></div>
          <div className="h-3 bg-white/10 rounded mb-1"></div>
          <div className="h-3 bg-white/10 rounded mb-1"></div>
          <div className="h-3 bg-white/10 rounded"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[280px] max-w-[320px] shadow-lg"
    >
      {/* Header with live indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${githubData.error ? 'bg-red-500' : 'bg-green-500'}`}
          ></motion.div>
          <span className={`text-sm font-medium ${githubData.error ? 'text-red-400' : 'text-green-400'}`}>
            {githubData.error ? 'Offline' : 'Live Coding Status'}
          </span>
        </div>
        <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>

      {/* Error message */}
      {githubData.error && (
        <div className="mb-3 p-2 bg-red-900/20 border border-red-500/30 rounded text-red-300 text-xs">
          {githubData.error}
        </div>
      )}

      {/* Currently working on */}
      <div className="mb-3">
        <p className="text-white/60 text-xs mb-1">Currently working on:</p>
        <motion.div
          key={githubData.currentRepo}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-white font-mono text-sm bg-white/5 px-2 py-1 rounded border-l-2 border-purple-500 overflow-hidden"
        >
          <span className="truncate block">
            {githubData.currentRepo}
          </span>
        </motion.div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="text-center">
          <motion.p 
            key={githubData.commitsToday}
            initial={{ scale: 1.2, color: '#60A5FA' }}
            animate={{ scale: 1, color: '#60A5FA' }}
            className="text-lg font-bold text-blue-400"
          >
            {githubData.commitsToday}
          </motion.p>
          <p className="text-white/60 text-xs">Commits Today</p>
        </div>
        
        <div className="text-center">
          <motion.p 
            key={githubData.currentStreak}
            initial={{ scale: 1.2, color: '#FB923C' }}
            animate={{ scale: 1, color: '#FB923C' }}
            className="text-lg font-bold text-orange-400"
          >
            {githubData.currentStreak}
          </motion.p>
          <p className="text-white/60 text-xs">Day Streak</p>
        </div>
      </div>

      {/* Last updated */}
      <div className="pt-2 border-t border-white/10">
        <p className="text-white/40 text-xs text-center">
          {githubData.lastUpdated && (
            `Updated ${githubData.lastUpdated.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}`
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default GitHubStatus;
