// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // TODO: hook your Firebase onAuthStateChanged here if you use Firebase
  useEffect(() => {
    // Example:
    // const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    // return () => unsub();
  }, []);

  const logout = async () => {
    // TODO: signOut(auth)
    setUser(null);
  };

  const value = { user, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// optional export (not required)
export default AuthContext;
