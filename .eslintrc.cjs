/**
 * ESLint configuration for portfolio project
 * Optimized for development speed while maintaining code quality
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    amd: true, // For AMD modules like define()
  },

  // Base config - more lenient for portfolio projects
  extends: ['eslint:recommended'],

  rules: {
    // Relaxed rules for portfolio development
    'semi': 'off', // Don't enforce semicolons
    'no-unused-vars': 'warn', // Warn instead of error
    'no-undef': 'warn', // Warn for undefined variables
    'no-empty': 'warn', // Warn for empty blocks
  },

  overrides: [
    // React files
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        // React-specific relaxed rules
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'warn', // Warn instead of error
        'react/jsx-uses-react': 'off', // Not needed with new JSX transform
        'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
        'no-unused-vars': 'off', // React imports are often "unused"
      },
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
      },
    },
    // Storybook files
    {
      files: ['**/*.stories.{js,jsx,ts,tsx}'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        // Even more relaxed for storybook files
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
