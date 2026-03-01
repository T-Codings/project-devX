import React, { useState } from "react";

function validateForm({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  if (!message.trim()) errors.message = "Message is required";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  const inputBase =
    "w-full rounded-xl border bg-white/70 px-4 py-2 text-base sm:text-lg text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-1 focus:ring-purple-200";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-200/60";

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-6">
            <div className="text-center">
              <h1 className="font-semibold leading-tight text-3xl sm:text-4xl text-gray-900">
                Contact Us
              </h1>
              <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                Send us a message and we’ll get back to you as soon as possible.
              </p>
            </div>

            {submitted && (
              <div className="mt-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-center text-sm sm:text-base">
                Thank you for contacting us!
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`${inputBase} ${errors.name ? inputError : "border-gray-200"}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`${inputBase} ${errors.email ? inputError : "border-gray-200"}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-base sm:text-lg font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`${inputBase} ${errors.message ? inputError : "border-gray-200"}`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl px-4 py-3 font-sans text-base sm:text-lg font-semibold text-white bg-purple-900 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
              >
                Send Message
              </button>

              <p className="text-center text-sm sm:text-base leading-6 text-gray-500">
                Prefer email?{" "}
                <span className="font-semibold text-purple-700">
                  support@devx.com
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}