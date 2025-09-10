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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 lg:px-8">
        <div className="max-w-4xl text-center">
          {/* Main heading */}
          <h1 className="mb-8 font-neueMontreal text-5xl font-medium text-white lg:text-7xl xl:text-8xl">
            Start building websites<br />
            people remember.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-base border border-gray-700"
            >
              Become a member
            </Button>

            <button className="flex items-center gap-2 rounded-lg bg-transparent px-8 py-4 text-base text-gray-300 hover:text-white transition-colors">
              <span className="text-lg">👋👤</span>
              About us
            </button>
          </div>

          {/* Bottom tagline */}
          <p className="mx-auto mt-16 max-w-2xl text-sm text-gray-400 lg:text-base">
            Osmo came from constantly digging through old projects wondering, 'How did I build that again?' It is basically our personal toolbox, packed with components, techniques, tricks and tutorials—and it will keep growing.
          </p>
        </div>
      </div>

      {/* Right side preview cards */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col gap-3">
          <div className="h-16 w-24 rounded-lg bg-gray-800 border border-gray-700 opacity-60"></div>
          <div className="h-16 w-24 rounded-lg bg-gray-800 border border-gray-700 opacity-80"></div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
