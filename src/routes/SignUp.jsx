import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email is invalid";

    if (!data.password) newErrors.password = "Password is required";
    else if (data.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!data.confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (data.password !== data.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const liveErrors = useMemo(() => validateForm(formData), [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      console.log("Sign up successful", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const fieldError = (name) => {
    const err = errors[name] || liveErrors[name];
    return touched[name] ? err : "";
  };

  const inputBase =
    "w-full rounded-xl border bg-white/70 px-4 py-2 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-200/60";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          {/* ✅ CENTERED CARD */}
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-6 max-w-xl w-[500px] mx-auto min-h-0 h-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Sign Up</h2>
              <p className="mt-2 text-base sm:text-lg text-gray-600">
                Create an account and learn with DEVX
              </p>
            
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Full name</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className={`${inputBase} ${fieldError("fullName") ? inputError : "border-gray-200"}`}
                />
                {fieldError("fullName") && <p className="mt-1 text-sm text-red-600">{fieldError("fullName")}</p>}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  className={`${inputBase} ${fieldError("email") ? inputError : "border-gray-200"}`}
                />
                {fieldError("email") && <p className="mt-1 text-sm text-red-600">{fieldError("email")}</p>}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPass ? "text" : "password"}
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Create a password"
                    className={`${inputBase} pr-12 ${fieldError("password") ? inputError : "border-gray-200"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-600 hover:text-purple-700"
                  >
                    {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {fieldError("password") && <p className="mt-1 text-sm text-red-600">{fieldError("password")}</p>}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">Confirm password</label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Repeat password"
                    className={`${inputBase} pr-12 ${fieldError("confirmPassword") ? inputError : "border-gray-200"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-600 hover:text-purple-700"
                  >
                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {fieldError("confirmPassword") && <p className="mt-1 text-sm text-red-600">{fieldError("confirmPassword")}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-900 text-white px-4 py-3 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
              >
                Create account
              </button>

                <p className="mt-2 text-12 text-gray-600 text-center">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-purple-700 hover:text-purple-600">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;