/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src", "./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto_mono: ["var(--font-roboto-mono)", "monospace"],
        neueMontreal: ["var(--font-neueMontreal)", "sans-serif"],
        rmMono: ["var(--font-rmMono)", "monospace"],
        hurme: ["var(--font-hurme)", "sans-serif"],
        "hurme-oblique": ["var(--font-hurme-oblique)", "sans-serif"],
      },
      fontSize: {
        // Headings with font weights
        'h1-medium': ['88px', { lineHeight: '88px', fontWeight: '500' }],

        'h2-regular': ['64px', { lineHeight: '80px', fontWeight: '400' }],

        'h3-medium': ['56px', { lineHeight: '64px', fontWeight: '500' }],

        'h4-medium': ['48px', { lineHeight: '56px', fontWeight: '500' }],

        'h5-bold': ['32px', { lineHeight: '48px', fontWeight: '700' }],

        // Body Text with font weights
        'body-sm-regular': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm-medium': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-sm-bold': ['14px', { lineHeight: '20px', fontWeight: '700' }],

        'body-md-regular': ['20px', { lineHeight: '36px', fontWeight: '400' }],
        'body-md-medium': ['20px', { lineHeight: '36px', fontWeight: '500' }],
        'body-md-bold': ['20px', { lineHeight: '36px', fontWeight: '700' }],

        'body-lg-regular': ['24px', { lineHeight: '32px', fontWeight: '400' }],
        'body-lg-medium': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg-bold': ['24px', { lineHeight: '32px', fontWeight: '700' }],

        'body-xl-regular': ['32px', { lineHeight: '52px', fontWeight: '400' }],
        'body-xl-medium': ['32px', { lineHeight: '52px', fontWeight: '500' }],
        'body-xl-bold': ['32px', { lineHeight: '52px', fontWeight: '700' }],
      },
      colors: {
        // Background colors
        dark: "#0D0D0C",
        background: "#0D0D0C",
        card: "#121211",
        secondary: "#131313",
        primary: "#EFEEEC",
        muted: "#9c9b9a",
        border: "#1f2937",
        divider: "#374151",
        accent: "#FF4C24",
        
        // Text colors
        text: {
          primary: "#FFFFFF",
          secondary: "#FFFFFFE5",
          tertiary: "#FFFFFFB2",
        },
      },
      backgroundImage: {
        // Gradients
        'gradient-primary': 'linear-gradient(90deg, #7A66E1 0%, #FB3081 50%, #F8805F 100%)',
        'gradient-button-text': 'linear-gradient(90deg, #4227CA 0%, #FB3081 50%, #ED3D0C 100%)',
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
