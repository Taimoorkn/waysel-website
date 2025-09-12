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
        roboto_mono: ['var(--font-roboto-mono)', 'monospace'],
        neueMontreal: ["var(--font-neueMontreal)", "sans-serif"],
        rmMono: ["var(--font-rmMono)", "monospace"],
      },
      colors: {
        // Dark Mode Main Colors
        'black': '#000000',           // Pure black background
        'dark_surface': '#0E0E0E',    // Slightly lighter surface
        'dark_card': '#131313',       // Card/component background
        'white': '#FFFFFF',           // Pure white text
        
        // Brand & Accent Colors
        'accent': '#FF4C24',          // Brand red-orange
        'accent_light': '#FF6B47',    // Lighter brand color
        'accent_dark': '#E63E1B',     // Darker brand color
        'accent_glow': '#FF4C2440',   // Accent with opacity for glows
        
        // Text Colors (Dark Mode)
        'primary_text': '#FFFFFF',    // Primary white text
        'secondary_text': '#818180',  // Muted grey text
        'tertiary_text': '#A1A1A0',   // Lighter grey text
        'text_muted': '#666666',      // Very muted text
        
        // Background Colors
        'primary_bg': '#000000',      // Main page background
        'secondary_bg': '#0E0E0E',    // Section backgrounds
        'card_bg': '#131313',         // Card backgrounds
        'surface_bg': '#1A1A1A',      // Interactive surfaces
        'light_blue_bg': '#131313',   // Converted light sections
        
        // Border Colors
        'border_primary': '#333333',  // Primary borders
        'border_secondary': '#2A2A2A', // Secondary borders  
        'border_accent': '#FF4C24',   // Accent borders
        'border_muted': '#1A1A1A',    // Subtle borders
        
        // State Colors
        'hover_bg': '#1F1F1F',        // Hover states
        'active_bg': '#252525',       // Active states
        'focus_ring': '#FF4C2460',    // Focus ring color
        
        // Utility Colors
        'success': '#22C55E',         // Success states
        'warning': '#F59E0B',         // Warning states
        'error': '#EF4444',           // Error states
        'info': '#3B82F6',            // Info states
        
        // Legacy color mappings for compatibility
        'dark_purple': '#0E0E0E',
        'accent_purple': '#FF4C24',
        'service_arrow': '#FFFFFF',
        'service_icon': '#FF4C24',
        'grey_primary': '#131313',
        'light_border': '#333333',
        'dark_border': '#2A2A2A',
        'grey_inactive1': '#666666',
        'grey_inactive2': '#818180',
        'error_red': '#EF4444',
        'map_unit': '#131313'
      },
      boxShadow: {
        // Dark mode shadows
        'navbar': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'stats_bar': "0 0 40px rgba(255, 76, 36, 0.3)",
        'card': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'accent-glow': '0 0 20px rgba(255, 76, 36, 0.4)',
        'accent-glow-lg': '0 0 40px rgba(255, 76, 36, 0.3)',
        'inner-dark': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        // Legacy shadows updated for dark mode
        '3xl': '0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2)',
        '3xl-hover': '0 8px 30px rgba(0, 0, 0, 0.5), 0 16px 40px rgba(0, 0, 0, 0.3)',
        "custom-blue": "5px 5px 10px rgba(255, 76, 36, 0.4)",
        "custom-light": "2px 2px 6px rgba(255, 76, 36, 0.2)"
      },
      hover: {
        'navbar': '0 4px 8px accent',
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2000px",
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

