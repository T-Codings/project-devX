// src/routes/LogIn.jsx
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const validateForm = (data) => {
  const errors = {};
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";

  if (!data.password) errors.password = "Password is required";
  else if (data.password.length < 6) errors.password = "Password must be at least 6 characters";

  return errors;
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const liveErrors = useMemo(() => validateForm(formData), [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // show errors as they type (same UX as SignUp)
    if (!touched[name]) setTouched((p) => ({ ...p, [name]: true }));

    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((p) => ({ ...p, [e.target.name]: true }));
  };

  const fieldError = (name) => {
    const err = errors[name] || liveErrors[name];
    return touched[name] ? err : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    setTouched({ email: true, password: true });

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate login (keep your logic)
    setTimeout(() => {
      login?.({ email: formData.email, rememberMe }, "demo-token");
      setLoading(false);
      navigate("/dashboard");
    }, 700);
  };

  // ✅ Same Tailwind styles you used for SignUp
  const inputBase =
    "w-full rounded-xl border bg-white/70 px-4 py-2 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-200/60";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-6 max-w-md w-[95%] mx-auto min-h-0 h-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Sign In
              </h2>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                Welcome back! Sign in to continue learning with DEVX.
              </p>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="username"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  className={`${inputBase} ${
                    fieldError("email") ? inputError : "border-gray-200"
                  }`}
                />
                {fieldError("email") && (
                  <p className="mt-1 text-sm text-red-600">{fieldError("email")}</p>
                )}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your password"
                    className={`${inputBase} pr-12 ${
                      fieldError("password") ? inputError : "border-gray-200"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-600"
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {fieldError("password") && (
                  <p className="mt-1 text-sm text-red-600">{fieldError("password")}</p>
                )}
              </div>

              {/* Remember me + Forgot password (same clean style) */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-gray-700 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 accent-purple-700"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-purple-700 hover:text-purple-600"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-purple-900 text-white px-4 py-3 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              <p className="mt-2 text-sm text-gray-600 text-center">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-purple-700 hover:text-purple-600"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}