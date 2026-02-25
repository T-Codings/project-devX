import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarView({ isAuthenticated, userEmail, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-purple-100 px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-700 ml-2 sm:ml-16">DEVX</Link>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex flex-1 justify-center space-x-8 text-lg">
          <li><Link to="/" className="hover:text-gray-800">Home</Link></li>
          <li><Link to="/programs" className="hover:text-gray-800">Our Programs</Link></li>
          <li><Link to="/why-tpu" className="hover:text-gray-800">Why TPU</Link></li>
          <li><Link to="/community" className="hover:text-gray-800">Community</Link></li>
          <li><Link to="/contact" className="hover:text-gray-800">Contact Us</Link></li>
          <li><Link to="/faqs" className="hover:text-gray-800">FAQs</Link></li>
        </ul>

        {/* Desktop right side */}
        <div className="hidden sm:flex items-center space-x-10">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="py-2 text-gray-900 hover:text-gray-800 transition">Sign In</Link>
              <Link to="/signup" className="ml-[14px] px-6 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition">Sign Up</Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600 mr-2">{userEmail}</span>
              <button onClick={onLogout} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg items-center">
            <li><Link to="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/programs" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Our Programs</Link></li>
            <li><Link to="/why-tpu" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Why TPU</Link></li>
            <li><Link to="/community" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Community</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
          </ul>
          <div className="flex flex-col items-center space-y-3 mt-6">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="py-2 text-gray-900 hover:text-gray-800 transition" onClick={() => setMenuOpen(false)}>Sign In</Link>
                <Link to="/signup" className="px-6 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-600 mr-2">{userEmail}</span>
                <button onClick={() => { onLogout(); setMenuOpen(false); }} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
