/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // Desktop-width screens with little height (most laptops once browser toolbars are counted).
        short: { raw: '(min-width: 1024px) and (max-height: 820px)' },
      },
      colors: {
        brand: {
          night: '#0B0D12',
          ink: '#11141B',
          panel: '#161A23',
          'neon-red': '#FF1F3D',
          'edge-red': '#FF2D3D',
          crimson: '#C40F2E',
          ember: '#FF7A2F',
          deep: '#6E0A18',
          silver: '#A3A9B8',
          slate: '#5B6070',
          mist: '#F2F3F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Sora Variable', 'Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #C40F2E 0%, #FF1F3D 50%, #FF7A2F 100%)',
        'brand-gradient-subtle':
          'linear-gradient(135deg, rgba(196,15,46,0.08) 0%, rgba(255,31,61,0.04) 50%, rgba(255,122,47,0.06) 100%)',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(11, 13, 18, 0.05), 0 1px 2px -1px rgba(11, 13, 18, 0.05)',
        card: '0 4px 6px -1px rgba(11, 13, 18, 0.05), 0 2px 4px -2px rgba(11, 13, 18, 0.05)',
        elevated: '0 10px 25px -5px rgba(11, 13, 18, 0.08), 0 8px 10px -6px rgba(11, 13, 18, 0.04)',
        figure: '0 30px 60px -30px rgba(11, 13, 18, 0.45)',
        'glow-red': '0 0 20px -5px rgba(255, 45, 61, 0.25)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 160ms ease-out',
      },
    },
  },
  plugins: [],
};
