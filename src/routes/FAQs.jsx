import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is DevX?",
    answer:
      "DevX is a modern React SPA featuring authentication, protected routes, and a custom purple theme, built for developer productivity.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Click the Sign Up button in the Navbar and complete the registration form. Your account will be created instantly.",
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

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-4 sm:p-8">
        <div className="text-center">
          <h1 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
            Quick answers to common questions about DevX.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-5">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold leading-tight text-base sm:text-lg text-purple-700">
                    {faq.question}
                  </span>
                  <span className="text-purple-700 font-semibold" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700"
                    role="region"
                    aria-live="polite"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm sm:text-base leading-6 text-gray-500">
          Still need help? Visit the{" "}
          <Link to="/contact" className="font-semibold text-purple-700 hover:text-purple-600">
            Contact
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}