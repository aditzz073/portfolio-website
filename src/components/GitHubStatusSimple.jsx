import React from 'react';

const GitHubStatusSimple = () => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[280px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-green-400 text-sm font-medium">Live Coding Status</span>
      </div>
      
      <div className="mb-3">
        <p className="text-white/60 text-xs mb-1">Currently working on:</p>
        <p className="text-white font-mono text-sm bg-white/5 px-2 py-1 rounded border-l-2 border-purple-500">
          Portfolio-Website
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <p className="text-lg font-bold text-blue-400">3</p>
          <p className="text-white/60 text-xs">Commits Today</p>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-bold text-orange-400">7</p>
          <p className="text-white/60 text-xs">Day Streak</p>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10">
        <p className="text-white/40 text-xs text-center">
          Demo Mode
        </p>
      </div>
    </div>
  );
};

export default GitHubStatusSimple;
