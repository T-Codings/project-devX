import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send a password reset email
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-4 py-12">
      <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6 max-w-md w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">Forgot Password?</h2>
        <p className="text-gray-700 text-center mb-6">Enter your email and we'll send you a link to reset your password.</p>
        {submitted ? (
          <div className="text-green-700 text-center font-semibold">If an account exists for {email}, a reset link has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border bg-white/70 px-4 py-2 text-base text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200 border-gray-200"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
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
      </div>
    </div>
  );
}
