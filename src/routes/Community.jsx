import React from "react";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-4 py-12 font-sans">
      <h1 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-6xl text-gray-800 mb-4 text-center">
        Community
      </h1>

      <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8 max-w-2xl text-center">
        Welcome to the DevX Community! Connect, share, and grow with fellow developers.
      </p>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-8 w-full max-w-lg">
        <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-800 mb-2">
          Get Involved
        </h2>

        <ul className="list-disc pl-5 text-sm sm:text-base leading-6 text-gray-700 mb-6">
          <li>Join discussions on our forums</li>
          <li>Attend upcoming events and webinars</li>
          <li>Share your projects and get feedback</li>
          <li>Collaborate on open-source initiatives</li>
        </ul>

        <h2 className="font-semibold leading-tight text-xl sm:text-2xl text-gray-800 mb-2">
          Contact & Support
        </h2>

        <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
          Reach out to our support team or connect with mentors for guidance and help.
        </p>
      </div>
    </div>
  );
}