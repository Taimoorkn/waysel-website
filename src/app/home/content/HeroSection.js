"use client";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Left sidebar text */}
      <div className="flex   border">
        <div className="mt-[376px] grid grid-cols-2 gap-x-8   border text-lg text-gray-400">
          {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
            <span key={`resource-${index}`}>{item}</span>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
          <div className="w-full max-w-7xl text-center">
            {/* Main heading */}
            <h1 className="mb-12 font-sans text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
              Start building websites
              <br />
              people remember.
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-md bg-white px-7 py-2.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-gray-100">
                Become a member
              </button>

              <button className="flex items-center gap-2 rounded-md bg-transparent px-7 py-2.5 text-sm text-gray-400 transition-all hover:text-white">
                <span className="text-base">👋👤</span>
                About us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom tagline - positioned absolutely */}
        <div className="absolute bottom-16 left-8 right-8 z-20 lg:bottom-20 lg:left-12 xl:left-16 xl:right-auto xl:max-w-lg">
          <p className="text-xs leading-relaxed text-gray-500 lg:text-sm">
            Osmo came from constantly digging through old projects wondering, 'How did I build that
            again?' It is basically our personal toolbox, packed with components, techniques, tricks
            and tutorials—and it will keep growing.
          </p>
        </div>

        {/* Right side preview cards */}
        <div className="absolute bottom-16 right-12 z-20 hidden lg:bottom-20 lg:right-16 xl:block">
          <div className="flex gap-4">
            <div className="relative h-32 w-48 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg">
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
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M60 0V120M0 60H120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
