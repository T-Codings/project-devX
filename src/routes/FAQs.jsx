import React, { useState } from "react";

const faqs = [
  {
    question: "What is DevX?",
    answer:
      "DevX is a React SPA featuring authentication, protected routes, and a custom purple theme, built for modern developer workflows.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Click the Sign Up button in the Navbar and fill out the registration form. Your account will be created instantly.",
  },
  {
    question: "How is my authentication data stored?",
    answer:
      "DevX uses localStorage to persist your token and user data for seamless authentication across sessions.",
  },
  {
    question: "How do I access protected pages?",
    answer:
      "Once logged in, you can access protected routes like Dashboard and Programs. If not authenticated, you’ll be redirected to Login.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "Use the Contact Us page to reach our support team or join the Community for peer help.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-purple-100 pb-4">
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left font-semibold text-purple-700 focus:outline-none"
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="mt-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}