import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New color scheme based on user requirements
        'bg-primary': '#0C0E12',      // Main background (dark)
        'bg-secondary': '#EAECEF',    // Secondary background / borders
        'cta-primary': '#F0B90B',     // Highlight / CTA (main action)
        'cta-secondary': '#FCD535',   // Icons / secondary buttons
        'text-primary': '#EAECEF',    // Main text (on dark bg)
        'text-secondary': '#0C0E12',  // Text on light background
        
        // Legacy colors for backward compatibility
        primary: '#F0B90B',
        success: '#00c853',
        danger: '#ff3d00'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config