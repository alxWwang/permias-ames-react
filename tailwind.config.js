/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    backgroundImage: {
      'batik': "url(./assets/image 10.png)"
    },

    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#F1BE48',
      'red': 'C8102E',
      'gray-dark': '#273444',
      'gray': '#8492A6',
      'gray-light': '#d3dce6',
      'cardinal' : '#9C1717',
      'gold' : '#F1BE48',
      'white': '#FFFFFF'



    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
