"use client";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-medium text-lg">
              Osmo
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Home
            </a>
            <div className="relative group">
              <a 
                href="/resources" 
                className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center gap-1"
              >
                Resources
                <span className="text-xs">118</span>
              </a>
            </div>
            <a 
              href="/pricing" 
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a 
              href="/faq" 
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="/login" 
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Log in
            </a>
            <a 
              href="/get-started" 
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;