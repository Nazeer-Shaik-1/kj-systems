/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medonix: {
          green: {
            DEFAULT: '#2b7f5c',
            dark: '#1e5b41',
            light: '#33a474',
            subtle: '#eaf5f0',
          },
          dark: '#000000',
          charcoal: '#111111',
          surface: '#181818',
          card: '#ffffff',
          bg: '#fcfcfc',
          border: '#eeeeee',
          borderDark: '#282828',
          muted: '#6a6e6e',
          light: '#f9f9f9',
        }
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['"Fragment Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.06)',
        'floating': '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 30px rgba(51, 164, 116, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
