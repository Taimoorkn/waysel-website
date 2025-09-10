"use client";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Left sidebar navigation */}
      <div className="absolute left-12 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
        <div className="flex flex-col space-y-3 text-sm text-gray-400">
          <a href="#" className="transition-colors hover:text-white">
            Buttons
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Components
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Transitions
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Animations
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Loaders
          </a>
        </div>
        <div className="mt-6 flex flex-col space-y-3 border-t border-gray-700 pt-6 text-sm text-gray-400">
          <a href="#" className="transition-colors hover:text-white">
            Documentation
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Tools
          </a>
          <a href="#" className="transition-colors hover:text-white">
            References
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Tutorials
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <div className="w-full max-w-7xl text-center">
          {/* Main heading */}
          <h1 className="mb-12 font-sans text-5xl font-light text-white md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
            Start building websites<br />
            people remember.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="bg-white hover:bg-gray-100 text-black px-7 py-2.5 text-sm font-medium rounded-md transition-all hover:scale-105">
              Become a member
            </button>

            <button className="flex items-center gap-2 rounded-md bg-transparent px-7 py-2.5 text-sm text-gray-400 hover:text-white transition-all">
              <span className="text-base">👋👤</span>
              About us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom tagline - positioned absolutely */}
      <div className="absolute bottom-16 left-8 right-8 z-20 lg:bottom-20 lg:left-12 xl:left-16 xl:right-auto xl:max-w-lg">
        <p className="text-xs text-gray-500 lg:text-sm leading-relaxed">
          Osmo came from constantly digging through old projects wondering, 'How did I build that again?' It is basically our personal toolbox, packed with components, techniques, tricks and tutorials—and it will keep growing.
        </p>
      </div>

      {/* Right side preview cards */}
      <div className="absolute bottom-16 right-12 z-20 hidden lg:bottom-20 lg:right-16 xl:block">
        <div className="flex gap-4">
          <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg h-32 w-48">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-orange-500/10 blur-xl"></div>
            <div className="relative h-full w-full overflow-hidden">
              {/* Placeholder for the image */}
              <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross indicator in bottom right (seen in the image) */}
      <div className="absolute bottom-48 right-48 z-10 hidden xl:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 0V120M0 60H120" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;