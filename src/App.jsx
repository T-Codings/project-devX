import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Homepage from "./routes/Homepage";
import Login from "./routes/LogIn.jsx";
import SignUp from "./routes/Signup";
import ForgotPassword from "./routes/ForgotPassword";
import Dashboard from "./routes/Dashboard";
import Programs  from './routes/Programs.jsx'; // Ensure named import


// ✅ Layout that shows Navbar only for routes inside it
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ✅ Pages WITHOUT Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ✅ Pages WITH Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>

            <Route
          path="/programs"
          element={
            <ProtectedRoute>
              <Programs />
            </ProtectedRoute>
          }
        />
        </Routes>
      </Router>
    </AuthProvider>
  );
}