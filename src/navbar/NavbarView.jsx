import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarView({
  isAuthenticated,
  userEmail,
  onLogout,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // close on route change
  useEffect(() => {
    onCloseMenu?.();
  }, [location.pathname, onCloseMenu]);

  const handleLogout = async () => {
    try {
      await onLogout?.();      // ✅ clears auth state
      onCloseMenu?.();
      navigate("/login");      // ✅ go to login
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-purple-100 px-4 sm:px-8 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-700">
            DEVX
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 text-lg">
            <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
            <li><Link to="/programs" className="hover:text-gray-800">Our Programs</Link></li>
            <li><Link to="/why-tpu" className="hover:text-gray-800">Why TPU</Link></li>
            <li><Link to="/community" className="hover:text-gray-800">Community</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-gray-800">FAQs</Link></li>
            {isAuthenticated && (
              <li><Link to="/dashboard" className="hover:text-gray-800">Dashboard</Link></li>
            )}
          </ul>

          {/* Desktop right */}
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
                <span className="text-sm text-gray-600 max-w-[220px] truncate">{userEmail}</span>
                <button
                  onClick={handleLogout}
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
            onClick={onToggleMenu}
            aria-label="Toggle menu"
            aria-expanded={!!isMenuOpen}
          >
            <div className="flex flex-col gap-1">
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
              <span className="block w-6 h-0.5 bg-gray-700" />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-purple-200 pt-4">
            <ul className="flex flex-col gap-4 text-lg items-center">
              <li><Link to="/" className="hover:text-gray-800" onClick={onCloseMenu}>Home</Link></li>
              <li><Link to="/programs" className="hover:text-gray-800" onClick={onCloseMenu}>Our Programs</Link></li>
              <li><Link to="/why-tpu" className="hover:text-gray-800" onClick={onCloseMenu}>Why TPU</Link></li>
              <li><Link to="/community" className="hover:text-gray-800" onClick={onCloseMenu}>Community</Link></li>
              <li><Link to="/contact" className="hover:text-gray-800" onClick={onCloseMenu}>Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-800" onClick={onCloseMenu}>FAQs</Link></li>

              {isAuthenticated && (
                <li><Link to="/dashboard" className="hover:text-gray-800" onClick={onCloseMenu}>Dashboard</Link></li>
              )}
            </ul>

            <div className="flex flex-col items-center gap-3 mt-6 pb-2">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="w-full max-w-xs text-center py-2 text-gray-900 border border-purple-200 rounded-lg hover:bg-white/60 transition"
                    onClick={onCloseMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full max-w-xs text-center px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
                    onClick={onCloseMenu}
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
                    onClick={handleLogout}
                    className="w-full max-w-xs cursor-pointer bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
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