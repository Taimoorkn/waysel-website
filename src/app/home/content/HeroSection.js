"use client";

import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Left sidebar navigation */}
      <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col space-y-4 text-sm text-gray-400">
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
        <div className="mt-8 flex flex-col space-y-4 border-t border-gray-800 pt-8 text-sm text-gray-400">
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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 lg:px-8 pt-16">
        <div className="max-w-5xl text-center">
          {/* Main heading */}
          <h1 className="mb-12 font-neueMontreal text-6xl font-normal text-white lg:text-8xl xl:text-9xl leading-tight">
            Start building websites<br />
            people remember.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 text-base border border-gray-600 rounded-lg transition-colors">
              Become a member
            </button>

            <button className="flex items-center gap-3 rounded-lg bg-transparent px-8 py-3 text-base text-gray-300 hover:text-white transition-colors">
              <span className="text-lg">👋👤</span>
              About us
            </button>
          </div>

        </div>
      </div>

      {/* Bottom tagline - positioned absolutely */}
      <div className="absolute bottom-16 left-8 right-8 z-20 lg:left-16 lg:right-auto lg:max-w-lg">
        <p className="text-sm text-gray-400 lg:text-base">
          Osmo came from constantly digging through old projects wondering, 'How did I build that again?' It is basically our personal toolbox, packed with components, techniques, tricks and tutorials—and it will keep growing.
        </p>
      </div>

      {/* Right side preview cards */}
      <div className="absolute bottom-16 right-16 z-20 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="h-20 w-32 rounded-lg bg-gray-900 border border-gray-700 opacity-70 relative overflow-hidden">
            <div className="absolute inset-2 bg-gray-800 rounded"></div>
            <div className="absolute top-3 left-3 w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
          <div className="h-20 w-32 rounded-lg bg-gray-900 border border-gray-700 opacity-80 relative overflow-hidden">
            <div className="absolute inset-2 bg-gray-800 rounded"></div>
            <div className="absolute top-3 left-3 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="absolute top-3 right-3 text-xs text-gray-400">WAYSEL</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
