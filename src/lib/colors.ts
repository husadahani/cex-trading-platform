// Color scheme constants based on user requirements
export const COLORS = {
  // Main background (dark)
  bgPrimary: '#0C0E12',
  
  // Highlight / CTA (main action)
  ctaPrimary: '#F0B90B',
  
  // Icons / secondary buttons
  ctaSecondary: '#FCD535',
  
  // Main text (on dark bg)
  textPrimary: '#EAECEF',
  
  // Text on light background
  textSecondary: '#0C0E12',
  
  // Secondary background / borders
  bgSecondary: '#EAECEF',
  
  // Legacy colors for backward compatibility
  success: '#00c853',
  danger: '#ff3d00',
} as const;

// Tailwind class mappings
export const COLOR_CLASSES = {
  bgPrimary: 'bg-bg-primary',
  bgSecondaryLight: 'bg-bg-secondary-light',
  bgSecondaryDark: 'bg-bg-secondary-dark',
  ctaPrimary: 'bg-cta-primary',
  ctaSecondary: 'bg-cta-secondary',
  textPrimary: 'text-text-primary',
  textSecondary: 'text-text-secondary',
  success: 'text-success',
  danger: 'text-danger',
} as const;

// Dark mode specific classes
export const DARK_MODE_CLASSES = {
  bgPrimary: 'dark:bg-bg-primary',
  bgSecondaryLight: 'dark:bg-bg-secondary-light',
  bgSecondaryDark: 'dark:bg-bg-secondary-dark',
  textPrimary: 'dark:text-text-primary',
  textSecondary: 'dark:text-text-secondary',
} as const;

// Common component color combinations
export const COMPONENT_COLORS = {
  card: {
    background: 'bg-bg-secondary-light dark:bg-bg-secondary-dark',
    border: 'border-bg-secondary-light dark:border-bg-secondary-dark/20',
    text: 'text-text-secondary dark:text-text-primary',
    textMuted: 'text-text-secondary/60 dark:text-text-primary/60',
  },
  button: {
    primary: 'bg-cta-primary text-text-secondary hover:bg-cta-primary/90',
    secondary: 'bg-cta-secondary text-text-secondary hover:bg-cta-secondary/90',
    outline: 'border border-cta-primary text-cta-primary hover:bg-cta-primary/10',
  },
  input: {
    background: 'bg-bg-secondary-light dark:bg-bg-secondary-dark',
    border: 'border-bg-secondary-light dark:border-bg-secondary-dark/20',
    text: 'text-text-secondary dark:text-text-primary',
    placeholder: 'placeholder-text-secondary/60 dark:placeholder-text-primary/60',
  },
} as const;