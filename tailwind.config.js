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
        // Headings
        'h1': ['88px', '88px'],
        'h2': ['64px', '80px'],
        'h3': ['56px', '64px'],
        'h4': ['48px', '56px'],
        'h5': ['32px', '48px'],
        // Body Text
        'body-sm': ['14px', '20px'],
        'body-md': ['20px', '36px'],
        'body-lg': ['24px', '32px'],
        'body-xl': ['32px', '52px'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
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
      boxShadow: {
        // Dark mode shadows
        navbar: "0 2px 4px rgba(0, 0, 0, 0.3)",
        stats_bar: "0 0 40px rgba(255, 76, 36, 0.3)",

        "accent-glow": "0 0 20px rgba(255, 76, 36, 0.4)",
        "accent-glow-lg": "0 0 40px rgba(255, 76, 36, 0.3)",
        "inner-dark": "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
        // Legacy shadows updated for dark mode
        "3xl": "0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2)",
        "3xl-hover": "0 8px 30px rgba(0, 0, 0, 0.5), 0 16px 40px rgba(0, 0, 0, 0.3)",
        "custom-blue": "5px 5px 10px rgba(255, 76, 36, 0.4)",
        "custom-light": "2px 2px 6px rgba(255, 76, 36, 0.2)",
      },
      hover: {
        navbar: "0 4px 8px accent",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
