/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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