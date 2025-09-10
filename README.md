# techitech-website
TechiTech Website

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



```
techitech-website
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ font
│  │  └─ ClashGrotesk
│  │     ├─ ClashGrotesk-Bold.otf
│  │     ├─ ClashGrotesk-Extralight.otf
│  │     ├─ ClashGrotesk-Light.otf
│  │     ├─ ClashGrotesk-Medium.otf
│  │     ├─ ClashGrotesk-Regular.otf
│  │     └─ ClashGrotesk-Semibold.otf
│  ├─ icons
│  │  └─ favicon.ico
│  └─ images
│     ├─ company_logos
│     │  ├─ doordash.svg
│     │  ├─ evernote.svg
│     │  ├─ freshworks.svg
│     │  ├─ invision.svg
│     │  ├─ mailchamp.svg
│     │  ├─ notion.svg
│     │  └─ webflow.svg
│     ├─ engangment_models
│     │  ├─ model1.svg
│     │  ├─ model2.svg
│     │  └─ model3.svg
│     ├─ gregory.webp
│     ├─ howtogrow
│     │  ├─ Analytics.svg
│     │  ├─ DigitalDev.svg
│     │  └─ Interface.svg
│     ├─ howtostart
│     │  ├─ ask.svg
│     │  ├─ get.svg
│     │  ├─ negotiate.svg
│     │  └─ proceed.svg
│     ├─ Map.svg
│     ├─ nextgen-ai
│     │  ├─ pic1.webp
│     │  ├─ pic2.webp
│     │  └─ pic3.webp
│     ├─ services_carousel
│     │  ├─ cloud-dev-bg.jpg
│     │  ├─ custom-dev-bg.png
│     │  ├─ ecommerce-dev-bg.jpg
│     │  ├─ enterprise-dev-bg2.png
│     │  ├─ extensions-dev-bg.jpg
│     │  ├─ mobile-dev-bg2.png
│     │  └─ web-dev-bg.png
│     ├─ services_page
│     │  ├─ chrome
│     │  ├─ cloud
│     │  ├─ cloud-dev.svg
│     │  ├─ custom-dev.svg
│     │  ├─ ecommerce
│     │  ├─ ecommerce-dev.svg
│     │  ├─ enterprise-dev.svg
│     │  ├─ mobile
│     │  ├─ mobile-dev.svg
│     │  ├─ web
│     │  │  ├─ backend.svg
│     │  │  ├─ businessweb.jpg
│     │  │  ├─ Dev
│     │  │  │  ├─ Analysis.svg
│     │  │  │  ├─ Development.svg
│     │  │  │  ├─ Extension.svg
│     │  │  │  ├─ Laptop.svg
│     │  │  │  ├─ Launch.svg
│     │  │  │  ├─ Maintenance.svg
│     │  │  │  ├─ SmartPhone.svg
│     │  │  │  └─ Testing.svg
│     │  │  ├─ ecommerce.svg
│     │  │  ├─ frontend.svg
│     │  │  ├─ fullstack.svg
│     │  │  └─ maintenance.svg
│     │  └─ web-dev.svg
│     ├─ successstories
│     │  ├─ Container.png
│     │  ├─ Portfolio1.png
│     │  ├─ Portfolio2.png
│     │  ├─ Portfolio3.png
│     │  └─ Portfolio4.png
│     └─ TechiTechLogo.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ about
│  │  │  ├─ content
│  │  │  └─ page.js
│  │  ├─ contact
│  │  │  ├─ content
│  │  │  └─ page.js
│  │  ├─ home
│  │  │  ├─ content
│  │  │  │  ├─ CompaniesShowcase.js
│  │  │  │  ├─ EngangementModels.js
│  │  │  │  ├─ ForWhoSection.js
│  │  │  │  ├─ HeroSection.js
│  │  │  │  ├─ HowToGrow.js
│  │  │  │  ├─ HowToStart.js
│  │  │  │  ├─ IndustriesWeServe.js
│  │  │  │  ├─ NextGenAICarousel.js
│  │  │  │  ├─ ServicesCarousel.js
│  │  │  │  ├─ StatsBar.js
│  │  │  │  └─ Testimonials.js
│  │  │  └─ page.js
│  │  ├─ layout.js
│  │  ├─ page.js
│  │  ├─ services
│  │  │  ├─ content
│  │  │  │  └─ ServicesSection.js
│  │  │  ├─ mobile-development
│  │  │  │  ├─ content
│  │  │  │  │  └─ HeroSection.js
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ web-development
│  │  │     ├─ content
│  │  │     │  ├─ DevelopmentProcess.js
│  │  │     │  ├─ HelpYourBusiness.js
│  │  │     │  ├─ HeroSection.js
│  │  │     │  └─ WebServiceBoxes.js
│  │  │     └─ page.js
│  │  └─ styles
│  │     └─ globals.css
│  ├─ components
│  │  ├─ Banner.js
│  │  ├─ Button.js
│  │  ├─ CustomCircle.js
│  │  ├─ DashedLineCircle.js
│  │  ├─ FAQs.js
│  │  ├─ Footer.js
│  │  ├─ InfiniteCarousel.js
│  │  ├─ Navbar.js
│  │  ├─ ServiceBox.js
│  │  ├─ SuccessStories.js
│  │  └─ TechStack.js
│  └─ constants
│     └─ FaqConstants.js
├─ tailwind.config.js
└─ temp.js

```