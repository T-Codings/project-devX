
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthed = Boolean(localStorage.getItem("token")); // replace with your auth state

  if (!isAuthed) return <Navigate to="/login" replace />;
  return children;
}
