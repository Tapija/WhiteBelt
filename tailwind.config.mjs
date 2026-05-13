const config = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        base: '#050505',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(0,0,0,0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.32,0.72,0,1)',
      },
    },
  },
  plugins: [],
}

export default config