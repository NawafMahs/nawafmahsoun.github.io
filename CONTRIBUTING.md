# Contributing to Nawaf Mahsoun Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and information for contributors.

## 🤝 Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow:

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them get started
- **Be constructive**: Provide helpful feedback and suggestions
- **Be professional**: Keep discussions focused and on-topic

## 🚀 Getting Started

### Prerequisites

- Node.js >= 19.9.0
- npm >= 9.6.3
- Git
- Basic knowledge of React, JavaScript, and web development

### Setting Up Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nawafmahsoun.github.io.git
   cd nawafmahsoun.github.io
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/NawafMahs/nawafmahsoun.github.io.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear and consistent commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

**Examples:**
```bash
feat: add new project showcase component
fix: resolve mobile navigation issue
docs: update installation instructions
style: format code with prettier
refactor: optimize image loading performance
```

### Branch Naming Convention

Use descriptive branch names with the following format:
```
<type>/<short-description>
```

**Examples:**
- `feat/add-contact-form`
- `fix/mobile-navigation`
- `docs/update-readme`
- `refactor/optimize-animations`

### Code Style

We use ESLint and Prettier for consistent code formatting:

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix
```

**Key guidelines:**
- Use functional components with hooks
- Follow React best practices
- Use CSS Modules for styling
- Keep components small and focused
- Add proper TypeScript types
- Write descriptive variable and function names

### File Structure

```
app/
├── components/          # Reusable UI components
│   └── component-name/
│       ├── index.js     # Main component file
│       ├── component.module.css
│       └── component.stories.js (if applicable)
├── routes/             # Remix routes
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Static assets
```

### Component Guidelines

1. **Component Structure**:
   ```jsx
   import { useState } from 'react';
   import styles from './component.module.css';

   export const ComponentName = ({ prop1, prop2, ...props }) => {
     const [state, setState] = useState();

     return (
       <div className={styles.component} {...props}>
         {/* Component content */}
       </div>
     );
   };
   ```

2. **CSS Modules**:
   ```css
   .component {
     /* Base styles */
   }

   .component--variant {
     /* Variant styles */
   }

   @media (max-width: 768px) {
     .component {
       /* Mobile styles */
     }
   }
   ```

3. **Storybook Stories** (for UI components):
   ```jsx
   export default {
     title: 'Components/ComponentName',
     component: ComponentName,
   };

   export const Default = {
     args: {
       prop1: 'value1',
       prop2: 'value2',
     },
   };
   ```

## 🧪 Testing

### Before Submitting

Run these commands to ensure your changes are ready:

```bash
# Lint code
npm run lint

# Build project
npm run build

# Test production build
npm run start
```

### Lighthouse Testing

For performance-critical changes, run Lighthouse audits:

```bash
npm run build
# Serve the build and run Lighthouse
```

## 📋 Pull Request Process

### Before Creating a PR

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Make your changes** following the guidelines above

4. **Test thoroughly**:
   ```bash
   npm run lint
   npm run build
   npm run start
   ```

5. **Commit changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feat/your-feature-name
   ```

### Creating the Pull Request

1. **Go to GitHub** and create a pull request from your fork
2. **Fill out the PR template** completely
3. **Link any related issues**
4. **Add screenshots** for UI changes
5. **Request review** from maintainers

### PR Requirements

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings introduced
- [ ] Build passes successfully
- [ ] Lighthouse scores maintained

## 🎨 Design Guidelines

### Visual Design

- **Consistency**: Follow existing design patterns
- **Accessibility**: Ensure WCAG 2.1 AA compliance
- **Performance**: Optimize images and animations
- **Responsive**: Test on multiple screen sizes

### Animation Guidelines

- **Purposeful**: Animations should enhance UX
- **Performance**: Use `transform` and `opacity` for smooth animations
- **Accessibility**: Respect `prefers-reduced-motion`
- **Duration**: Keep animations under 300ms for interactions

### 3D Graphics

- **Optimization**: Keep model file sizes small
- **Performance**: Test on lower-end devices
- **Fallbacks**: Provide 2D alternatives when needed
- **Loading**: Show loading states for heavy assets

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Detailed steps
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: Browser, OS, device info
6. **Screenshots**: If applicable

## 💡 Feature Requests

For feature requests, please provide:

1. **Problem**: What problem does this solve?
2. **Solution**: Proposed solution
3. **Alternatives**: Other solutions considered
4. **Use cases**: How would this be used?
5. **Priority**: How important is this?

## 📚 Resources

### Learning Resources

- [Remix Documentation](https://remix.run/docs)
- [React Documentation](https://reactjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Tools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Three.js Inspector](https://chrome.google.com/webstore/detail/threejs-inspector/dnhjfclbfhflbiniaadsmnmnnpilkhoa)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🙋‍♂️ Getting Help

If you need help:

1. **Check existing issues** on GitHub
2. **Read the documentation** thoroughly
3. **Ask questions** in issue discussions
4. **Join community discussions**

## 🏆 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Release notes (for significant contributions)

Thank you for contributing to make this portfolio better! 🚀