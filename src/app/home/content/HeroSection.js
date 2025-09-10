"use client";

import Button from "@/components/Button";
import { ArrowRightIcon } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary_bg">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        {/* Large gradient orb - top right */}
        <div className="absolute right-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent via-accent_light to-accent_dark opacity-80 blur-3xl"></div>

        {/* Medium gradient orb - left center */}
        <div className="absolute left-[-150px] top-[40%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent_dark via-accent to-accent_light opacity-60 blur-2xl"></div>

        {/* Small accent elements */}
        <div className="absolute right-[20%] top-[20%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-accent to-accent_light opacity-40 blur-xl"></div>

        {/* Geometric lines/shapes */}
        <div className="absolute left-[10%] top-[30%] h-[1px] w-[200px] bg-gradient-to-r from-accent to-transparent opacity-30"></div>
        <div className="absolute bottom-[40%] right-[15%] h-[150px] w-[1px] bg-gradient-to-b from-accent to-transparent opacity-30"></div>
      </div>

      {/* Left sidebar navigation */}
      <div className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col space-y-4 text-sm text-secondary_text">
          <a href="#" className="transition-colors hover:text-accent">
            Business
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Commerce
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Portfolios
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Blogging
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Leaders
          </a>
        </div>
        <div className="mt-8 flex flex-col space-y-4 border-t border-border_secondary pt-8 text-sm text-secondary_text">
          <a href="#" className="transition-colors hover:text-accent">
            Documentation
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Help
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            References
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            API
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 lg:px-8">
        <div className="max-w-4xl text-center">
          {/* Main heading */}
          <h1 className="mb-8 font-neueMontreal text-5xl font-medium text-primary_text lg:text-7xl xl:text-8xl">
            Start building{" "}
            <span className="relative">
              websites
              {/* Gradient underline effect */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent_light to-accent_dark"></div>
            </span>
            <br />
            people{" "}
            <span className="bg-gradient-to-r from-accent via-accent_light to-accent_dark bg-clip-text text-transparent">
              remember.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              className="border-border_primary bg-surface_bg px-8 py-4 text-base text-primary_text hover:bg-hover_bg"
            >
              Become a member
            </Button>

            <button className="flex items-center gap-2 rounded-lg bg-transparent px-8 py-4 text-base text-secondary_text transition-colors hover:text-primary_text">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                <ArrowRightIcon size={16} />
              </span>
              About us
            </button>
          </div>

          {/* Bottom tagline */}
          <p className="mx-auto mt-16 max-w-2xl text-sm text-secondary_text lg:text-base">
            Osmo came from constantly digging through old projects wondering 'how did I build that
            again?' It's basically our personal toolkit, loaded with components, techniques, tools
            and learnings — and it's totally yours.
          </p>
        </div>
      </div>

      {/* Bottom right geometric element */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] opacity-20">
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4C24" />
              <stop offset="100%" stopColor="#E63E1B" />
            </linearGradient>
          </defs>
          <polygon
            points="150,50 250,150 150,250 50,150"
            fill="url(#bottomGradient)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Grid overlay for texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
