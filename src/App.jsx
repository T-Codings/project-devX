import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./navbar/Navbar";
import { Footer } from "./home/Footer.";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./routes/Homepage";
import { LogIn } from "./routes/LogIn.jsx";
import { SignUp } from "./routes/SignUp.jsx";
import { ForgotPassword } from "./routes/ForgotPassword.jsx";
import { Dashboard } from "./routes/Dashboard.jsx";
import { Programs } from "./routes/Programs.jsx";
import { WhyTPU } from "./routes/whyTPU.jsx";
import { Community } from "./routes/Community.jsx";
import FAQs from "./routes/FAQs.jsx";
import Contact from "./routes/Contact.jsx";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth pages WITHOUT Navbar/Footer */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Pages WITH Navbar/Footer */}
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
            <Route
              path="/programs"
              element={
                <ProtectedRoute>
                  <Programs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/why-tpu"
              element={
                <ProtectedRoute>
                  <WhyTPU />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faqs"
              element={
                <ProtectedRoute>
                  <FAQs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}