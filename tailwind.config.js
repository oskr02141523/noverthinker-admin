/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // NoverThinker Brand Colors
          'nova-blue': '#00D4FF',
          'nova-glow': 'rgba(0, 212, 255, 0.25)',
          
          // Tier Colors
          'tier-elite': '#FFD700',
          'tier-high': '#4CAF50',
          'tier-good': '#26A69A',
          'tier-average': '#FFC107',
          'tier-low': '#FF9800',
          'tier-poor': '#F44336',
          
          // Background
          'background': '#0D0D0D',
          'surface': '#1A1A1A',
          'surface-elevated': '#242424',
          'input': '#2A2A2A',
          'border': '#333333',
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }