import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NavbarView from "./NavbarView"


export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout?.();
    } finally {
      setIsMenuOpen(false);
    }
  };

  return (
    <NavbarView
      isAuthenticated={!!isAuthenticated}
      userEmail={user?.email || ""}
      onLogout={handleLogout}
      isMenuOpen={isMenuOpen}
      onToggleMenu={() => setIsMenuOpen((v) => !v)}
    />
  );
}
