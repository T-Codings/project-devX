import React, { useState } from "react";

function validateForm({ name, email, message }) {
  const errors = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!message) errors.message = "Message is required";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Contact Us</h2>
        {submitted && (
          <div className="text-green-600 text-center mb-4">Thank you for contacting us!</div>
        )}
        <div className="mb-4">
          <label className="block mb-1 text-purple-700 font-medium">Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-purple-700 font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-purple-700 font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          {errors.message && (
            <div className="text-red-500 text-sm mt-1">{errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded font-semibold transition hover:bg-purple-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}