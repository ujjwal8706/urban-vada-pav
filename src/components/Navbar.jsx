import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", end: true },
  { name: "Menu", path: "/menu" },
  { name: "Franchise Details", path: "/franchise", end: true },
  { name: "Franchise Apply", path: "/franchise/apply" },
  { name: "Locations", path: "/locations" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extrabold text-yellow-400 tracking-wide hover:opacity-90 transition"
        >
          Urban Vada Pav
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `relative py-1 transition duration-300 ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-200 hover:text-yellow-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle Area */}
        <div className="flex items-center gap-3">
          {/* Desktop / Tablet CTA Button */}
          <Link
            to="/menu"
            className="hidden sm:inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:scale-105 hover:bg-yellow-300 transition duration-300"
          >
            View Menu
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 rounded-lg transition"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-yellow-500/20 px-6 py-5 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition duration-200 ${
                    isActive
                      ? "bg-yellow-400/15 text-yellow-400 font-semibold border-l-4 border-yellow-400"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-zinc-900/60"
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-yellow-400/60">→</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
