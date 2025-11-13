# Waysel Website

> A modern, full-service software development agency website built with Next.js 15 and React 19.

## Overview

**Waysel** is a production-ready, enterprise-grade marketing website showcasing a software development agency specializing in AI-integrated web applications, EHR/SaaS platforms, digital infrastructure, OCR systems, and cross-platform product engineering.

The website embodies the company's philosophy: *"We design with intent, build with precision, and launch with impact."*

**Live Site:** [waysel.com](https://waysel.com)

---

## Tech Stack

### Core Framework
- **Next.js 15.3.3** - React framework with App Router
- **React 19.0.0** - UI library
- **Node.js** - Backend API routes

### Styling & UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Framer Motion 12.23.13** - Animation library
- **GSAP 3.13.0** - Scroll-based animations
- **Material Tailwind** - Component library
- Custom CSS animations and typography system

### 3D & Visual Effects
- **Three.js** (via @react-three/fiber and @react-three/drei) - 3D graphics
- **WebGL Fluid** - Interactive background effects
- **Aceternity UI** - Background ripple effects
- Custom shader materials for animated 3D sphere

### Forms & Validation
- **Yup** - Schema validation
- **Nodemailer** - Email service
- Custom CSRF protection

### Analytics & Monitoring
- **Vercel Analytics** - Performance and usage tracking

### Other Notable Libraries
- **Lenis** - Smooth scrolling
- **Swiper** - Carousels
- **React Fast Marquee** - Infinite scrolling
- **Lucide React / Phosphor Icons** - Icon libraries

---

## Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with 6+ breakpoints
- **Server-Side Rendering** - Optimized for SEO and performance
- **Dynamic Sitemap** - Auto-generated XML sitemap
- **Contact Form** - Full-featured with validation and CSRF protection
- **Email Integration** - Nodemailer-powered contact submissions
- **SEO Optimized** - Comprehensive metadata, Open Graph, and Twitter cards
- **Structured Data** - JSON-LD schemas for Organization and Website

### Visual Effects & Interactions
- **WebGL Fluid Background** - Interactive mouse-responsive fluid simulation
- **3D Floating Sphere** - Scroll-animated Three.js sphere with gradient shader
- **Smooth Scrolling** - Lenis integration for butter-smooth navigation
- **Page Transitions** - Loading screen with animated text
- **Framer Motion Animations** - Stagger animations, fade-ins, and scroll reveals
- **GSAP Scroll Triggers** - Scroll-based navbar and section animations
- **Hover Effects** - Interactive buttons, cards, and navigation elements

### Design System
- **Custom Typography** - Satoshi (variable font) + Hurme Geometric Sans
- **Color System** - Dark theme with purple-pink-orange gradient accents
- **Component Library** - Reusable, modular components
- **Animation System** - Custom keyframe animations for buttons, text, and transitions

---

## Project Structure

```
waysel-website/
├── src/
│   ├── app/
│   │   ├── about/              # About page
│   │   │   ├── content/        # Page sections
│   │   │   └── page.js
│   │   ├── api/                # Backend API routes
│   │   │   ├── csrf/           # CSRF token generation
│   │   │   └── send-email/     # Contact form handler
│   │   ├── contact/            # Contact page
│   │   ├── home/               # Home page sections
│   │   │   └── content/
│   │   ├── services/           # Services page
│   │   │   └── content/
│   │   ├── styles/             # Global styles
│   │   │   ├── globals.css     # Tailwind + custom styles
│   │   │   ├── animations.css  # Animation definitions
│   │   │   └── typography.css  # Typography system
│   │   ├── layout.js           # Root layout with metadata
│   │   ├── page.js             # Main entry point
│   │   └── sitemap.js          # Dynamic sitemap
│   ├── components/             # Reusable components
│   │   ├── ui/                 # UI components (Aceternity, etc.)
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Contact.js
│   │   ├── Button.js
│   │   ├── FluidBackground.js
│   │   ├── FloatingThreeDSphere.js
│   │   ├── LoadingScreen.js
│   │   ├── TechStack.js
│   │   ├── FAQs.js
│   │   └── ...
│   ├── constants/              # Constants and data
│   └── lib/                    # Utility functions
├── public/
│   ├── font/                   # Custom fonts
│   ├── icons/                  # Favicons
│   └── images/                 # Static images
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/waysel-website.git
   cd waysel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Email Configuration (for Nodemailer)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password

   # Optional: Analytics
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size with webpack-bundle-analyzer

---

## Pages & Routes

### 1. **Home** (`/`)
Landing page featuring:
- Hero section with WebGL fluid background
- "Things We Build" section (Interface-first, Outcome-based, Strategy)
- Portfolio showcase with 3D parallax image galleries
- Services overview with 7 interactive cards
- Tech stack with filterable technology icons
- FAQ accordion
- Star Wars-style binary animation section
- Contact form

### 2. **About** (`/about`)
Company philosophy and mission:
- Hero section with retro grid background
- Philosophy explanation (two-column layout)
- "The Waysel Difference" section
- Floating 3D sphere with scroll animation
- Contact form

### 3. **Services** (`/services`)
Detailed service offerings:
- Hero section
- 7 detailed service blocks with alternating layouts:
  1. AI-Integrated Web & App Development
  2. Next-Generation EHR & SaaS Platforms
  3. Digital Infrastructure & Analytics
  4. AI Models & OCR Integrations
  5. Cross-Platform Product Engineering
  6. Cloud-Native Deployment & DevOps
  7. Digital Marketing Ecosystems
- Contact form

### 4. **Contact** (`/contact`)
Dedicated contact page with full-featured form

---

## Key Components

### Navigation
- **Navbar** - Fixed position with scroll-triggered animations, hamburger menu for mobile
- **Footer** - Large stylized branding with interactive letter effects

### Interactive Elements
- **Button** - Animated text with rolling effect, multiple variants
- **Contact** - Full form with validation, CSRF protection, and email integration
- **LoadingScreen** - Displays between route changes
- **TechStack** - Filterable technology showcase with 26+ technologies
- **FAQs** - Collapsible accordion component

### Visual Effects
- **FluidBackground** - WebGL-based interactive fluid simulation
- **FloatingThreeDSphere** - Three.js sphere with custom gradient shader
- **AnimatedSVG** - Binary pattern animations
- **GradientText** - Text with gradient color effects

---

## Styling System

### Colors
```css
Primary Background: #0D0D0C (near black)
Card Background: #121211 (dark gray)
Text Primary: #FFFFFF (white)
Text Secondary: rgba(255, 255, 255, 0.9)
Text Tertiary: rgba(255, 255, 255, 0.7)
Gradient: #7A66E1 (purple) → #FB3081 (pink) → #F8805F (orange)
```

### Typography
- **Headings**: .HeadingH1 through .HeadingH5 (responsive)
- **Body**: .BodyText, .BodyTextMedium, .BodyTextBold
- **Fonts**: Satoshi (variable 300-900) + Hurme Geometric Sans

### Custom Components
- `.section` - Standard section spacing
- `.oval-blur` - Gradient blur effects
- `.gradient-primary` - Purple-pink-orange gradient text
- `.contact-input` - Custom form input styling
- `.tech_stack_icon` - Technology card styling

---

## Configuration

### Environment Variables
```env
# Required for contact form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Optional
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### Tailwind Configuration
Custom breakpoints, colors, gradients, and animations defined in `tailwind.config.js`

### Next.js Configuration
- Image optimization enabled
- Font optimization with variable fonts
- Webpack bundle analyzer (optional)

---

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/waysel-website)

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

---

## Performance Optimization

- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component with lazy loading
- **Font Optimization** - Variable fonts with display: swap
- **Bundle Analysis** - Use `npm run analyze` to identify optimization opportunities
- **Lazy Loading** - Components and images load on demand
- **CSS Optimization** - Tailwind purges unused styles in production

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is proprietary and confidential. All rights reserved by Waysel.

---

## Contact

**Waysel**
- Website: [waysel.com](https://waysel.com)
- Email: sw@waysel.com
- LinkedIn: [linkedin.com/company/waysel](https://linkedin.com/company/waysel)
- Instagram: [@waysel](https://instagram.com/waysel)

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics
- [Vercel](https://vercel.com/) - Hosting platform

---

Built with precision by Waysel
