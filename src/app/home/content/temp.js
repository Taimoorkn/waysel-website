    <section className="relative mt-[200px] flex min-h-screen flex-col items-start overflow-hidden bg-black">
      {/* Left sidebar text */}
      <div className="flex items-start justify-between gap-24">
        <div className="hidden items-center justify-between pr-20 pt-6 font-neueMontreal text-sm font-medium text-[#9c9b9a] sm:flex sm:text-lg">
          <div className="flex gap-4 sm:gap-8 md:gap-12">
            <div className="flex flex-col">
              {["Buttons", "Components", "Transitions", "Animations", "Loaders"].map(
                (item, index) => (
                  <span key={index}>{item}</span>
                )
              )}
            </div>
            <div className="flex flex-col">
              {["Documentation", "Tools", "References", "Tutorials"].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col items-start justify-start">
          <div className="space-y-[10px] text-start font-neueMontreal text-3xl font-medium !leading-[0.9] !tracking-[-1px] text-[#EFEEEC] sm:text-8xl">
            <h1>Start building websites</h1>
            <h1>people remember.</h1>
          </div>
          <div className="mt-8 flex items-center justify-between gap-2 font-neueMontreal text-sm font-medium sm:mt-12 sm:text-[17px]">
            {[
              { href: "/login", label: "Become a Member" },
              { href: "/get-started", label: "Abous Us" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => (heroLinksRef.current[index] = el)}
                className="w-full rounded-md bg-[#efeeec] px-4 py-3 text-center text-[#131313] sm:w-auto sm:px-[26px] sm:py-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-20 max-w-md">
            <p className="font-neueMontreal text-sm font-medium leading-snug text-[#EFEEEC] sm:text-[17px]">
              Waysel came from constantly digging through old projects wondering, 'How did I build
              that again?' It is basically our personal toolbox, packed with components, techniques,
              tricks and tutorials—and it will keep growing.
            </p>
          </div>
        </div>
      </div>
    </section>