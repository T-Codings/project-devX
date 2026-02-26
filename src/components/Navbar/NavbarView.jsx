import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarView({ isAuthenticated, userEmail, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-purple-100 px-4 sm:px-8 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-700">
            DEVX
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 text-lg">
            <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
            <li><Link to="/programs" className="hover:text-gray-800">Our Programs</Link></li>
            <li><Link to="/why-tpu" className="hover:text-gray-800">Why TPU</Link></li>
            <li><Link to="/community" className="hover:text-gray-800">Community</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-gray-800">FAQs</Link></li>
          </ul>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="py-2 text-gray-900 hover:text-gray-800 transition">
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-600 max-w-[220px] truncate">
                  {userEmail}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-purple-200 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1">
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden mt-4 border-t border-purple-200 pt-4">
            <ul className="flex flex-col gap-4 text-lg items-center">
              <li><Link to="/" className="hover:text-gray-800" onClick={close}>Home</Link></li>
              <li><Link to="/programs" className="hover:text-gray-800" onClick={close}>Our Programs</Link></li>
              <li><Link to="/why-tpu" className="hover:text-gray-800" onClick={close}>Why TPU</Link></li>
              <li><Link to="/community" className="hover:text-gray-800" onClick={close}>Community</Link></li>
              <li><Link to="/contact" className="hover:text-gray-800" onClick={close}>Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-800" onClick={close}>FAQs</Link></li>
            </ul>

            <div className="flex flex-col items-center gap-3 mt-6 pb-2">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="w-full max-w-xs text-center py-2 text-gray-900 border border-purple-200 rounded-lg hover:bg-white/60 transition"
                    onClick={close}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full max-w-xs text-center px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
                    onClick={close}
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-600 break-words text-center max-w-xs">
                    {userEmail}
                  </span>
                  <button
                    onClick={() => {
                      onLogout?.();
                      close();
                    }}
                    className="w-full max-w-xs bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}