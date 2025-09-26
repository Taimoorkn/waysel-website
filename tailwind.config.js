/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src", "./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        // Headings with font weights
        // Base (0-639px) - Mobile
        "h1-base-med": ["24px", { lineHeight: "24px", fontWeight: "500" }],
        "h2-base-reg": ["20px", { lineHeight: "24px", fontWeight: "400" }],
        "h3-base-med": ["18px", { lineHeight: "22px", fontWeight: "500" }],
        "h4-base-med": ["16px", { lineHeight: "20px", fontWeight: "500" }],
        "h5-base-bold": ["14px", { lineHeight: "18px", fontWeight: "700" }],

        // sm (640px+) - Large Mobile
        "h1-sm-med": ["32px", { lineHeight: "32px", fontWeight: "500" }],
        "h2-sm-reg": ["24px", { lineHeight: "28px", fontWeight: "400" }],
        "h3-sm-med": ["20px", { lineHeight: "24px", fontWeight: "500" }],
        "h4-sm-med": ["18px", { lineHeight: "22px", fontWeight: "500" }],
        "h5-sm-bold": ["16px", { lineHeight: "20px", fontWeight: "700" }],

        // md (768px+) - Tablet Portrait
        "h1-md-med": ["44px", { lineHeight: "44px", fontWeight: "500" }],
        "h2-md-reg": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "h3-md-med": ["28px", { lineHeight: "32px", fontWeight: "500" }],
        "h4-md-med": ["24px", { lineHeight: "28px", fontWeight: "500" }],
        "h5-md-bold": ["20px", { lineHeight: "24px", fontWeight: "700" }],

        // lg (1024px+) - Tablet Landscape / Small Desktop
        "h1-lg-med": ["64px", { lineHeight: "64px", fontWeight: "500" }],
        "h2-lg-reg": ["48px", { lineHeight: "56px", fontWeight: "400" }],
        "h3-lg-med": ["40px", { lineHeight: "48px", fontWeight: "500" }],
        "h4-lg-med": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "h5-lg-bold": ["24px", { lineHeight: "32px", fontWeight: "700" }],

        // xl (1280px+) - Desktop (Your current laptop design)
        "h1-xl-med": ["88px", { lineHeight: "88px", fontWeight: "500" }],
        "h2-xl-reg": ["64px", { lineHeight: "80px", fontWeight: "400" }],
        "h3-xl-med": ["56px", { lineHeight: "64px", fontWeight: "500" }],
        "h4-xl-med": ["48px", { lineHeight: "56px", fontWeight: "500" }],
        "h5-xl-bold": ["32px", { lineHeight: "48px", fontWeight: "700" }],

        // 2xl (1536px+) - Large Desktop / Ultrawide
        "h1-2xl-med": ["96px", { lineHeight: "96px", fontWeight: "500" }],
        "h2-2xl-reg": ["72px", { lineHeight: "88px", fontWeight: "400" }],
        "h3-2xl-med": ["64px", { lineHeight: "72px", fontWeight: "500" }],
        "h4-2xl-med": ["56px", { lineHeight: "64px", fontWeight: "500" }],
        "h5-2xl-bold": ["40px", { lineHeight: "56px", fontWeight: "700" }],

        // Body Text with all 6 breakpoints

        // Base (0-639px) - Mobile
        "body-base-reg": ["14px", { lineHeight: "18px", fontWeight: "400" }],
        "body-base-med": ["14px", { lineHeight: "18px", fontWeight: "500" }],
        "body-base-bold": ["14px", { lineHeight: "18px", fontWeight: "700" }],

        // sm (640px+) - Large Mobile
        "body-sm-reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-sm-med": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body-sm-bold": ["14px", { lineHeight: "20px", fontWeight: "700" }],

        // md (768px+) - Tablet Portrait
        "body-md-reg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md-med": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-md-bold": ["16px", { lineHeight: "24px", fontWeight: "700" }],

        // lg (1024px+) - Tablet Landscape / Small Desktop
        "body-lg-reg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg-med": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-lg-bold": ["16px", { lineHeight: "24px", fontWeight: "700" }],

        // xl (1280px+) - Desktop (Your current body design)
        "body-xl-reg": ["20px", { lineHeight: "36px", fontWeight: "400" }],
        "body-xl-med": ["20px", { lineHeight: "36px", fontWeight: "500" }],
        "body-xl-bold": ["20px", { lineHeight: "36px", fontWeight: "700" }],
      },
      colors: {
        // Background colors
        background: "#0D0D0C",
        card: "#121211",
        dark: "#131313",
        border: "#1f2937",
        divider: "#374151",

        // Text colors
        text: {
          primary: "#FFFFFF",
          secondary: "#FFFFFFE5",
          tertiary: "#FFFFFFB2",
        },
      },
      backgroundImage: {
        // Gradients
        "gradient-primary": "linear-gradient(90deg, #7A66E1 0%, #FB3081 50%, #F8805F 100%)",
        "gradient-btn": "linear-gradient(90deg, #4227CA 0%, #FB3081 50%, #ED3D0C 100%)",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
