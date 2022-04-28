module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif']
    }, 
    
    extend: {
      backgroundImage: {
        'background-pattern': "url(./assets/bitmap@3x.png), linear-gradient(122deg, #317bda -6%, #33c3c8)",
        'login-pattern': "linear-gradient(122deg, #317bda -6%, #33c3c8)",
        'image': "url(./assets/bitmap.png)"
      },
      fontSize: {
        sm: ['14px', '20px']
      },
        colors: {
          grayBrown: {
            500: '#484848',
          },
          teal: {
            400:"#31cfda"
          },
          blueGray: {
            500: "#5b7289"
          },
          aquaMarine: {
            100: "#f5fdfe"
          }
        }
    }
  },
  plugins: [],
}