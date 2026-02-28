import React from "react";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Community</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to the DevX Community! Connect, share, and grow with fellow developers.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Get Involved</h2>
        <ul className="list-disc pl-5 text-gray-600 mb-4">
          <li>Join discussions on our forums</li>
          <li>Attend upcoming events and webinars</li>
          <li>Share your projects and get feedback</li>
          <li>Collaborate on open-source initiatives</li>
        </ul>

        <h2 className="text-xl font-semibold text-purple-600 mb-2">Contact & Support</h2>
        <p className="text-gray-600">
          Reach out to our support team or connect with mentors for guidance and help.
        </p>
      </div>
    </div>
  );
}