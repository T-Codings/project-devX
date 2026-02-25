import React from "react";
import { Link } from "react-router-dom";

export default function NavbarView({
  isAuthenticated,
  userEmail,
  onLogout,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu
}) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-purple-700">DEVX</Link>
      <div className="md:hidden">
        <button onClick={onToggleMenu} className="text-purple-700 focus:outline-none">
          <span className="material-icons">menu</span>
        </button>
      </div>
      <ul className={`md:flex space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}> 
        <li>
          <Link to="/" onClick={onCloseMenu} className="hover:text-purple-600">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" onClick={onCloseMenu} className="hover:text-purple-600">Login</Link>
            </li>
            <li>
              <Link to="/signup" onClick={onCloseMenu} className="hover:text-purple-600">Sign Up</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link to="/dashboard" onClick={onCloseMenu} className="hover:text-purple-600">Dashboard</Link>
            </li>
            <li className="text-sm text-gray-600">{userEmail}</li>
            <li>
              <button onClick={onLogout} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
