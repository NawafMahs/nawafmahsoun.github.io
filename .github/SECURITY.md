# Security Policy

## Supported Versions

We actively support the following versions of this portfolio project:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio project, please report it responsibly:

### How to Report

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. **Email** the maintainer directly at: [security contact needed]
3. **Include** the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Suggested fix (if available)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt within 48 hours
- **Assessment**: We will assess the vulnerability within 5 business days
- **Updates**: We will provide regular updates on our progress
- **Resolution**: We aim to resolve critical issues within 30 days

### Security Measures

This project implements several security measures:

- **Dependency Updates**: Automated via Dependabot
- **Static Analysis**: ESLint security rules
- **Content Security Policy**: Configured in `public/_headers`
- **HTTPS Enforcement**: Via GitHub Pages
- **No Secrets in Code**: Environment variables only
- **Regular Audits**: npm audit in CI/CD pipeline

### Scope

This security policy covers:
- The main portfolio website
- Build and deployment processes
- Dependencies and third-party integrations
- Client-side security issues

### Out of Scope

- Issues in third-party services (GitHub Pages, CDNs)
- Social engineering attacks
- Physical security
- Issues requiring physical access to infrastructure

Thank you for helping keep this project secure!