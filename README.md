# Joseph Ingham - Dento-Legal Advisory Website

Professional website for Joseph Ingham, Dento-Legal Advisor at the British Dental Association.

## About

Joseph Ingham provides expert dento-legal advisory services to dental professionals across the UK, with 38+ years of experience spanning clinical practice, education, and legal advisory.

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: Firebase Hosting
- **Version Control**: GitHub
- **Deployment**: GitHub Actions (CI/CD)

## Project Structure

```
joseph-ingham-website/
├── public/
│   ├── index.html              # Homepage
│   ├── about.html              # About Joseph
│   ├── services.html           # Services offered
│   ├── speaking.html           # Speaking & Education
│   ├── contact.html            # Contact page
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js            # Main JavaScript
│   │   └── config.js          # Site configuration
│   └── images/                 # Image assets
├── .firebaserc                 # Firebase project config
├── firebase.json               # Firebase hosting config
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
└── README.md
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/penguingoober14/joseph-ingham-website.git
cd joseph-ingham-website
```

2. Install Firebase CLI (if not already installed):
```bash
npm install -g firebase-tools
```

3. Login to Firebase:
```bash
firebase login
```

4. Serve locally:
```bash
firebase serve
```

Visit `http://localhost:5000` to view the site.

## Deployment

### Manual Deployment
```bash
firebase deploy
```

### Automatic Deployment
Push to `main` branch triggers automatic deployment via GitHub Actions.

## Firebase Setup

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firebase Hosting
3. Update `.firebaserc` with your project ID
4. Add `FIREBASE_SERVICE_ACCOUNT` to GitHub Secrets for CI/CD

### Getting Firebase Token
```bash
firebase login:ci
```
Copy the token and add it as `FIREBASE_SERVICE_ACCOUNT` in GitHub repository secrets.

## Brand Guidelines

### Colors
- **Navy Blue**: #1B3A52 (Primary brand color)
- **Turquoise**: #2BB2C8 (Secondary brand color)
- **Teal**: #1A8A9D (Hover states)
- **Light Blue**: #E8F4F7 (Backgrounds)
- **Gold**: #D4A658 (Premium accents)

### Typography
- **Headings**: Montserrat (Google Fonts)
- **Body**: Open Sans (Google Fonts)

## Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Smooth scroll animations
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized
- ✅ Fast loading (optimized for performance)
- ✅ Contact form with validation
- ✅ Multi-page navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score Target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Content Updates

All site content is managed in `public/js/config.js` for easy updates without touching HTML.

## License

© 2025 Joseph Ingham Dento-Legal Advisory. All rights reserved.

## Contact

For website issues or updates, contact the developer or Joseph Ingham directly.

---

**Built with care for dental professionals across the UK** 🦷⚖️
