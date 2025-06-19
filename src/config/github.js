// Configuration file for GitHub integration
export const GITHUB_CONFIG = {
  // Replace with your actual GitHub username
  username: 'aditzz073',
  
  // Optional: You can also add your GitHub personal access token for higher rate limits
  // Note: Never commit your actual token to version control
  // Consider using environment variables for production
  token: import.meta.env.VITE_GITHUB_TOKEN || null,
  
  // Update interval in milliseconds (default: 5 minutes)
  updateInterval: 5 * 60 * 1000,
  
  // API endpoints
  api: {
    events: 'https://api.github.com/users',
    stats: 'https://github-readme-stats.vercel.app/api'
  }
};

// For better GitHub stats, you might want to use these services:
// 1. GitHub GraphQL API (requires token but more accurate)
// 2. GitHub Stats API: https://github.com/anuraghazra/github-readme-stats
// 3. GitHub Streak Stats: https://github.com/DenverCoder1/github-readme-streak-stats
