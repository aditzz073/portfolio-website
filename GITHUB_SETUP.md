# GitHub Live Coding Status Setup

This guide will help you configure the live coding status component that displays your real-time GitHub activity on your portfolio website.

## 🚀 Quick Setup

### 1. Configure Your GitHub Username

Edit `/src/config/github.js` and replace `'your-github-username'` with your actual GitHub username:

```javascript
export const GITHUB_CONFIG = {
  // Replace with your actual GitHub username
  username: 'your-actual-username',
  // ... rest of config
};
```

### 2. Optional: Add GitHub Token (Recommended)

For higher API rate limits and more reliable data:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `public_repo` scope
3. Create a `.env` file in your project root:
   ```bash
   REACT_APP_GITHUB_TOKEN=your_token_here
   ```
4. Add `.env` to your `.gitignore` file

### 3. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Check the top-right corner of your hero section
3. The component should show your latest repository and coding stats

## 📊 Features

- **Currently Working On**: Shows your most recently committed repository
- **Commits Today**: Real-time count of today's commits
- **Day Streak**: Your current coding streak
- **Live Status**: Green indicator when connected, red when offline
- **Auto-refresh**: Updates every 5 minutes
- **Responsive Design**: Adapts to mobile and desktop

## 🎨 Customization

### Styling
The component uses Tailwind CSS classes and can be customized in:
- `/src/components/GitHubStatus.jsx`

### Update Frequency
Change the refresh interval in `/src/config/github.js`:
```javascript
updateInterval: 2 * 60 * 1000, // 2 minutes instead of 5
```

### Error Handling
The component gracefully handles:
- GitHub API rate limits
- Network errors
- Missing configuration
- Invalid usernames

## 🔧 Troubleshooting

### Common Issues:

1. **"Please configure your GitHub username"**
   - Update the username in `/src/config/github.js`

2. **"Rate limited" error**
   - Add a GitHub personal access token
   - Wait for the rate limit to reset (usually 1 hour)

3. **"GitHub user not found"**
   - Check your username spelling
   - Ensure your GitHub profile is public

4. **No recent activity showing**
   - Make sure you have recent commits
   - Check if your repositories are public

## 🌟 Enhancement Ideas

- Add more GitHub stats (stars, followers, etc.)
- Show language breakdown
- Display contribution graph
- Add click-through to GitHub profile
- Show recent commit messages

## 📝 API Limitations

- GitHub API allows 60 requests per hour without authentication
- With a token: 5,000 requests per hour
- The component caches data and updates every 5 minutes to stay within limits

## 🔗 Useful Links

- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [Creating Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub Stats Services](https://github.com/anuraghazra/github-readme-stats)
