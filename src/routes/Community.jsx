import React from "react";

// ✅ Update these paths to match your project
import community from "./assets/community.jpg";
import decoration1 from "./assets/decoration1.png";
import decoration2 from "./assets/decoration2.png";

export default function Community() {
  return (
    <section className="min-h-screen bg-gray-50 font-sans px-4 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-6 sm:p-10">
          {/* Decorations */}
          <img
            src={decoration1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -left-10 w-32 sm:w-44 opacity-30"
          />
          <img
            src={decoration2}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-12 w-36 sm:w-52 opacity-30"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
            {/* LEFT TEXT */}
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm sm:text-base font-semibold border border-purple-300 text-purple-800 bg-purple-50">
                DevX Community
              </span>

              <h1 className="mt-5 font-semibold leading-tight text-3xl sm:text-4xl lg:text-6xl text-gray-900">
                Connect. Share. Grow.
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 max-w-xl">
                Welcome to the DevX Community — a place where learners and developers
                support each other, share progress, solve problems, and build together.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button className="rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-purple-800 text-white hover:bg-purple-700 transition-colors">
                  Join the Community
                </button>

                <button className="rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition">
                  View Guidelines
                </button>
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm text-gray-600">Support</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">Daily</p>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm text-gray-600">Collaboration</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">Teams</p>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
                  <p className="text-sm text-gray-600">Growth</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">Projects</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img
                  src={community}
                  alt="Developers collaborating in the DevX community"
                  className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-4 left-4 sm:left-6 rounded-2xl bg-white border border-gray-200 shadow-sm px-4 py-3">
                <p className="text-sm text-gray-600">Community vibe</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  Friendly + Productive
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Get involved */}
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8 lg:col-span-2">
            <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
              Get Involved
            </h2>
            <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
              The community is designed to help you stay consistent and improve faster.
              Here’s what you can do inside DevX Community:
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Join discussions and ask questions",
                "Attend events and live sessions",
                "Share your projects and get feedback",
                "Collaborate on open-source initiatives",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-gray-50 border border-gray-200 p-5 text-gray-800"
                >
                  <p className="font-semibold leading-tight text-base sm:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
              Contact & Support
            </h2>

            <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
              Need help? Reach out to our support team or connect with mentors for guidance.
            </p>

            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-purple-800 text-white hover:bg-purple-700 transition-colors">
                Message Support
              </button>
              <button className="w-full rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition">
                Find a Mentor
              </button>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-6 text-gray-500">
              Tip: Add your WhatsApp/Discord/Telegram link here later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}