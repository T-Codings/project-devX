import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send a password reset email
  };

  // ✅ Same input styling used in Login/SignUp
  const inputBase =
    "w-full rounded-xl border bg-white/70 px-4 py-2 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200";
  const inputNormal = "border-gray-200";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-6 max-w-md w-[95%] mx-auto min-h-0 h-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Forgot Password?
              </h2>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                Enter your email and we’ll send you a link to reset your password.
              </p>
            </div>

            <div className="mt-8">
              {submitted ? (
                <div className="text-green-700 text-center font-semibold">
                  If an account exists for <span className="font-bold">{email}</span>, a reset link has been sent.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-base sm:text-lg font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`${inputBase} ${inputNormal}`}
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-900 text-white px-4 py-3 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
                  >
                    Send reset link
                  </button>
                </form>
              )}

              <p className="mt-4 text-sm text-gray-600 text-center">
                Remembered your password?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-purple-700 hover:text-purple-600"
                >
                  Sign In
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}