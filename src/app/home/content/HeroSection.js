"use client";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Left sidebar text */}
      <div className="absolute left-[107px] top-[262px] z-20 font-neueMontreal text-[21px] font-medium text-[#9c9b9a]">
        <div className="flex gap-16">
          <div className="flex flex-col">
            {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
              (item, index) => (
                <span key={index}>{item}</span>
              )
            )}
          </div>
          <div className="flex flex-col">
            {" "}
            {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <div className="w-full max-w-[836px] text-center">
          {/* Main heading */}
          <h1 className="mb-12 text-start font-neueMontreal text-[120px] font-medium leading-[0.8] text-[#EFEEEC]">
            Start building <br />
            websites people <br />
            remember.
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

      {/* Right side video preview */}
      <div className="absolute bottom-16 right-16 z-20 hidden xl:block">
        <div className="relative">
          {/* Video container with avatars */}
          <div className="relative h-48 w-80 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
            {/* Video placeholder */}
            <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900">
              {/* Avatar strip at bottom */}
              <div className="absolute bottom-4 left-4 flex -space-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-gray-700 bg-gradient-to-br from-gray-600 to-gray-700"
                  />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 text-xs text-gray-400">
                  +
                </div>
              </div>

              {/* Play button and timestamp */}
              <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <span className="text-xs text-gray-400">00:35</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* VRTL WRLD label */}
              <div className="absolute right-4 top-4">
                <span className="font-mono text-xs text-gray-400">
                  VRTL
                  <br />
                  WRLD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross indicator in bottom right */}
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
    </section>
  );
};

export default HeroSection;
