# Nawaf Mahsoun Portfolio

[![Deploy to GitHub Pages](https://github.com/NawafMahs/nawafmahsoun.github.io/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/NawafMahs/nawafmahsoun.github.io/actions/workflows/pages-deploy.yml)
[![Lighthouse Score](https://img.shields.io/badge/lighthouse-100%2F100-brightgreen.svg)](https://nawafmahsoun.github.io)

<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>

A modern, performant portfolio website showcasing projects and skills. Built with cutting-edge web technologies including Remix, Three.js, and Framer Motion.

[![Site preview](/public/site-preview.png)](https://nawafmahsoun.github.io)

🌐 **Live Site**: [https://nawafmahsoun.github.io](https://nawafmahsoun.github.io)  
📚 **Storybook**: [Component Library](https://storybook.hamishw.com)

## 🚀 Features

- **Modern Stack**: Built with Remix, React 18, Vite, and Three.js
- **Performance Optimized**: Lighthouse score 90+ across all metrics
- **Responsive Design**: Mobile-first approach with fluid animations
- **3D Graphics**: Interactive Three.js scenes and models
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **PWA Ready**: Service worker and offline support
- **Accessibility**: WCAG 2.1 AA compliant
- **CI/CD**: Automated testing, linting, and deployment

## 🛠️ Tech Stack

- **Framework**: [Remix](https://remix.run/) with [Vite](https://vitejs.dev/)
- **Frontend**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: CSS Modules with PostCSS
- **Deployment**: GitHub Pages with GitHub Actions
- **Quality**: ESLint, Prettier, Lighthouse CI

## 📋 Prerequisites

- **Node.js**: >= 19.9.0
- **npm**: >= 9.6.3

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/NawafMahs/nawafmahsoun.github.io.git
   cd nawafmahsoun.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:7777`

4. **View Storybook** (optional)
   ```bash
   npm run dev:storybook
   ```
   
   Storybook will be available at `http://localhost:6006`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run start
```

The built files will be in the `build/client` directory.

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm test` | Run tests |
| `npm run deploy` | Deploy to GitHub Pages |

## 🚀 Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch:

1. **GitHub Actions** builds the site
2. **Runs quality checks** (linting, testing, Lighthouse audit)
3. **Deploys** to GitHub Pages at `https://nawafmahsoun.github.io`

### Manual Deployment

```bash
npm run deploy
```

## 🏗️ Project Structure

```
├── app/                    # Remix app directory
│   ├── components/         # Reusable React components
│   ├── routes/            # Remix routes
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── assets/            # Static assets (images, models, etc.)
├── public/                # Public static files
├── .github/               # GitHub Actions workflows
├── scripts/               # Build and utility scripts
└── src/                   # Vite entry point
```

## 🎨 Customization

### Theming

The site uses CSS custom properties for theming. Main theme variables are defined in:
- `app/global.module.css` - Global styles and CSS variables
- `app/reset.module.css` - CSS reset and base styles

### 3D Models

3D models are stored in `app/assets/` and loaded using Three.js. To add new models:

1. Place `.glb` files in `app/assets/`
2. Import and use in components with the `<Model>` component
3. Optimize models using [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline)

### Content

- **Projects**: Edit files in `app/routes/` to update project content
- **Assets**: Add images and media to `app/assets/`
- **Metadata**: Update `app/config.json` for site-wide settings

## 🧪 Testing

### Lighthouse Audits

Lighthouse audits run automatically on pull requests:

```bash
# Run Lighthouse locally
npm install -g @lhci/cli
npm run build
lhci autorun
```

### Manual Testing

```bash
# Lint code
npm run lint

# Test build
npm run build
npm run start
```

## 🔒 Security

- **No secrets in code**: Environment variables use `.env` files (not committed)
- **Dependabot**: Automatic dependency updates
- **Content Security Policy**: Configured in `public/_headers`
- **HTTPS only**: Enforced via GitHub Pages

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run lint && npm run build`
5. Commit your changes: `git commit -m 'feat: add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Aggressive caching with versioned assets

## 🐛 Troubleshooting

### Common Issues

**Build fails with memory error:**
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**3D models not loading:**
- Check file paths in `app/assets/`
- Ensure models are in `.glb` format
- Run `npm run postinstall` to setup Draco compression

**Development server issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules .cache build
npm install
npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio sites
- Three.js community for 3D graphics resources
- Remix team for the excellent framework
- GitHub Pages for free hosting

## 📞 Contact

**Nawaf Mahsoun**
- Website: [https://nawafmahsoun.github.io](https://nawafmahsoun.github.io)
- GitHub: [@NawafMahs](https://github.com/NawafMahs)

---

⭐ **Star this repo** if you find it helpful!