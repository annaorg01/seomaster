# SEO Master - Netlify Deployment

A modern SEO optimization tool built with HTML, CSS, and JavaScript, ready for deployment on Netlify.

## Features

- AI-powered landing page generation
- Real-time preview and editing
- SEO and marketing strategy generation
- Responsive design
- Veteran-specific knowledge base integration

## Environment Setup

1. **Local Development**:
   ```bash
   cp env.example .env
   # Edit .env and add your actual GEMINI_API_KEY
   ```

2. **Netlify Deployment**:
   - Set `GEMINI_API_KEY` in Netlify dashboard under:
     - Site settings → Environment variables
   - No build command needed for static site

## Security

- API keys are stored in environment variables
- `.env` file is gitignored to prevent accidental commits
- Content Security Policy headers configured
- Secure headers for XSS protection

## Deployment on Netlify

1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: (leave empty or use `echo 'No build command'`)
   - Publish directory: `.` (root directory)
3. **Environment Variables**: Set `GEMINI_API_KEY` in Netlify dashboard
4. **Deploy**: Netlify will automatically deploy your site

## Local Development

Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## File Structure

```
.
├── index.html          # Main application file
├── config.js          # Environment configuration
├── .env              # Local environment variables (gitignored)
├── env.example       # Environment template
├── netlify.toml      # Netlify configuration
├── _headers          # Netlify headers
├── _redirects        # Netlify redirects
├── package.json      # Node.js package file
└── README.md         # This file
```

## Security Headers

The site includes comprehensive security headers:
- Content Security Policy (CSP)
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
