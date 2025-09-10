/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scan all files in the 'app' folder
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scan all files in 'components'
    // "./src/**/*.{js,ts,jsx,tsx,mdx}", // For any other subfolders in 'src'
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        clashGrotesk: ["var(--font-clashGrotesk)", "sans-serif"],
        roboto_mono: ['var(--font-roboto-mono)', 'monospace'],
        neueMontreal: ["var(--font-neueMontreal)", "sans-serif"],
        rmMono: ["var(--font-rmMono)", "monospace"],
      },
      colors: {
        // Main Colours:
        'black': '#1b1b1b',
        'white': '#ffffff',
        // 'blue': '#3a5bff',
        'dark_purple': '#0A142F',

        // Accent Colours
        'accent': '#3A5BFF',
        'accent_purple': '#392DCA',

        // Section Background Colours
        'primary_bg': '#ffffff',
        'secondary_bg': '#f6f7f8',
        'light_blue_bg': '#F0F2FE',

        // Text Colours
        'primary_text': '#1b1b1b',
        'secondary_text': '#505050',
        'tertiary_text': '#707070',

        // Services Carousel
        'service_arrow': '#1b1b1b',
        'service_icon': '#1b1b1b',

        // Grey
        'grey_primary': '#ECF0F4',
        'light_border': '#EDEDED',
        'dark_border': '#D9D9D9',
        'grey_inactive1': '#CCCCCC',
        'grey_inactive2': '#C0C0C0',

        // Extras
        'error_red': '#B3261E',
        'map_unit': '#EBEBEB'
      },
      boxShadow: {
        'navbar': '0 2px 4px rgba(0, 85, 255, 0.05)',
        'stats_bar': "0 0 40px rgba(57, 45, 202, 0.4)",
        '3xl': '0 -6px 16px #E9F6FF, 0 10px 24px #E9F6FF',
        '3xl-hover': '0 -10px 30px #B0D8FF, 0 16px 40px #B0D8FF',
        "custom-blue": "5px 5px 10px rgba(58, 91, 255, 0.6)",
        "custom-light": "2px 2px 6px rgba(58, 91, 255, 0.3)"
      },
      hover: {
        'navbar': '0 4px 8px accent',
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src",
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         manrope: ["var(--font-manrope)", "sans-serif"],
//         clashGrotesk: ["var(--font-clashGrotesk)", "sans-serif"],
//       },
//       colors: {
//         // Assuming these are your existing colors, matching the second config
//         'black': '#1b1b1b',
//         'white': '#ffffff',
//         // 'blue': '#3a5bff',
//         'purple': '#392DCA',
//         'dark_purple': '#0A142F',

//         // Accent Colours
//         'accent': '#3A5BFF',

//         // Section Background Colours
//         'primary_bg': '#ffffff',
//         'secondary_bg': '#f6f7f8',
//         'light_blue_bg': '#F0F2FE',

//         // Text Colours
//         'primary_text': '#1b1b1b',
//         'secondary_text': '#505050',
//         'tertiary_text': '#707070',

//         // Services Carousel
//         'service_arrow': '#1b1b1b',
//         'service_icon': '#1b1b1b',

//         // Grey
//         'grey_primary': '#ECF0F4',
//         'light_border': '#EDEDED',
//         'dark_border': '#D9D9D9',
//         'grey_inactive1': '#CCCCCC',
//         'grey_inactive2': '#C0C0C0',

//         // Extras
//         'error_red': '#B3261E',
//         'map_unit': '#EBEBEB'
//       },
//     },
//   },
  
// plugins: [
//     function ({ addUtilities }) {
//       const newUtilities = {
//         // Repeated Styles
//         '.text-heading1': {
//           '@apply font-clashGrotesk text-[42px] font-medium leading-[51.7px]': {},
//         },
//         '.text-heading2': {
//           '@apply font-clashGrotesk text-2xl font-medium leading-[29.5px]': {},
//         },
//         '.text-body1': {
//           '@apply font-manrope text-base leading-[21.9px]': {},
//         },
//         '.text-body2': {
//           '@apply font-manrope text-lg leading-[24.6px]': {},
//         },
//         '.text-body3': {
//           '@apply font-manrope text-base font-medium': {},
//         },

//         // Unique Styles
//         '.text-hero-subtitle': {
//           '@apply font-manrope text-[11px] font-medium': {},
//         },
//         '.text-hero-main': {
//           '@apply font-clashGrotesk text-[54px] font-semibold leading-[54px] tracking-[-1%]': {},
//         },
//         '.text-stats-value': {
//           '@apply font-manrope text-2xl font-semibold': {},
//         },
//         '.text-stats-label': {
//           '@apply font-manrope text-sm font-medium': {},
//         },
//         '.text-service-description': {
//           '@apply font-manrope text-xl leading-[27.3px]': {},
//         },
//         '.text-ai-card-title': {
//           '@apply font-clashGrotesk text-4xl font-semibold leading-[44.3px]': {},
//         },
//         '.text-industry-name-hover': {
//           '@apply font-bold text-[18px]': {},
//         },
//         '.text-success-story-title': {
//           '@apply font-clashGrotesk text-[38px] font-medium leading-[46.7px]': {},
//         },
//         '.text-howtostart-subtitle': {
//           '@apply font-manrope text-base font-medium leading-[27.3px]': {},
//         },
//         '.text-tech-stack-button': {
//           '@apply text-base font-semibold leading-[19.1px]': {},
//         },
//         '.text-project-label': {
//           '@apply font-clashGrotesk text-lg font-medium leading-[22px]': {},
//         },
//         '.text-engagement-title': {
//           '@apply font-manrope text-2xl font-semibold': {},
//         },
//         '.text-testimonial-name': {
//           '@apply font-manrope text-xl font-medium': {},
//         },
//         '.text-testimonial-role': {
//           '@apply font-manrope text-sm leading-[19.1px]': {},
//         },
//         '.text-faq-question': {
//           '@apply font-manrope text-base leading-[22px]': {},
//         },
//         '.text-faq-answer': {
//           '@apply font-manrope text-base font-normal': {},
//         },
//         '.text-navbar-logo': {
//           '@apply font-clashGrotesk text-2xl font-semibold': {},
//         },
//         '.text-nav-links': {
//           '@apply font-manrope text-sm font-medium': {},
//         },
//       };
//       addUtilities(newUtilities);
//     },
//   ],
// };

