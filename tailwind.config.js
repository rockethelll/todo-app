/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      josefin: ['Josefin sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': 'hsl(var(--primary), <alpha-value>)',
        'secondary': 'hsl(var(--secondary), <alpha-value>)',
        'incomplete': 'hsl(var(--incomplete), <alpha-value>)',
        'complete': 'hsl(var(--complete), <alpha-value>)',
        'new-todo': 'hsl(var(--new-todo), <alpha-value>)',
        'checkbox': 'hsl(var(--checkbox), <alpha-value>)',
        'separator': 'hsl(var(--separator), <alpha-value>)',
      },
      keyframes: {
        circle: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        circle: 'circle 1s forwards',
      },
    },
  },
};
