/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1A2A40',
        'terracotta': '#D47D5A',
        'off-white': '#F5F5F0',
        'sage': '#87A28F',
        'gold': '#D4B483',
        'slate': '#505A64',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A2A40',
            a: {
              color: '#D47D5A',
              '&:hover': {
                color: '#D47D5A',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#1A2A40',
            },
            h2: {
              color: '#1A2A40',
            },
            h3: {
              color: '#1A2A40',
            },
            h4: {
              color: '#1A2A40',
            },
            strong: {
              color: '#1A2A40',
            },
            blockquote: {
              color: '#505A64',
              borderLeftColor: '#D47D5A',
            },
            code: {
              color: '#1A2A40',
            },
            pre: {
              backgroundColor: '#F5F5F0',
            },
            hr: {
              borderColor: '#1A2A40',
              opacity: 0.1,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
