import React from "react";
import { Link } from "react-router-dom";

const tracks = [
  {
    title: "Frontend Development",
    desc: "Build modern, responsive interfaces users love.",
    bullets: ["HTML/CSS", "JavaScript", "React", "Responsive UI", "Deployments"],
    outcome: "Portfolio-ready websites and web apps.",
  },
  {
    title: "Backend Development",
    desc: "Learn how servers, APIs, and databases power applications.",
    bullets: ["APIs", "Auth", "Databases", "Security basics", "Deployment"],
    outcome: "A working backend API + database integration.",
  },
  {
    title: "Fullstack Development",
    desc: "Combine frontend + backend to ship complete products.",
    bullets: ["React + APIs", "Auth flows", "Database design", "Testing basics", "Production deploy"],
    outcome: "A complete fullstack app you can present.",
  },
  {
    title: "Mobile App Development",
    desc: "Create mobile apps that run smoothly on phones.",
    bullets: ["UI layouts", "Navigation", "State management", "APIs", "Build & release basics"],
    outcome: "A mobile app with real features and screens.",
  },
  {
    title: "Web Development",
    desc: "From structure to deployment — the full web workflow.",
    bullets: ["Web fundamentals", "Tooling", "Project structure", "Git/GitHub", "Hosting"],
    outcome: "Confidence building web apps independently.",
  },
  {
    title: "Web Design",
    desc: "Design clean interfaces that look professional and convert.",
    bullets: ["Layout & spacing", "Color & typography", "UI components", "UX basics", "Design systems"],
    outcome: "Modern designs for websites and products.",
  },
];

export default function WhyTPU() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* HERO */}
        <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6 sm:p-10">
          <span className="inline-flex w-fit items-center rounded-full bg-purple-100 text-purple-800 px-3 py-1 text-sm font-semibold">
            The Programmers University (TPU)
          </span>

          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold text-gray-900">
            A clear path from beginner to confident builder.
          </h1>

          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl">
            TPU helps you stop relying on tutorials and start building real projects.
            You’ll learn fundamentals, practice with guided tasks, and ship complete apps
            with support, feedback, and a roadmap that keeps you moving.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-xl bg-purple-900 px-5 py-3 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
            >
              Explore Programs
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white/70 border border-gray-200 px-5 py-3 text-gray-900 font-semibold hover:bg-white transition"
            >
              Join the Next Intake
            </Link>
          </div>
        </div>

        {/* VALUE HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow p-6">
            <p className="text-sm font-semibold text-gray-500">Learning style</p>
            <p className="mt-1 text-xl font-semibold text-gray-900">Project-based</p>
            <p className="mt-2 text-gray-600">You learn by building, not memorizing.</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow p-6">
            <p className="text-sm font-semibold text-gray-500">Support</p>
            <p className="mt-1 text-xl font-semibold text-gray-900">Mentors + feedback</p>
            <p className="mt-2 text-gray-600">Code review and guidance when you’re stuck.</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow p-6">
            <p className="text-sm font-semibold text-gray-500">Outcome</p>
            <p className="mt-1 text-xl font-semibold text-gray-900">Portfolio ready</p>
            <p className="mt-2 text-gray-600">Deploy projects and present them confidently.</p>
          </div>
        </div>

        {/* TRACKS */}
        <div className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Programs you can enroll in
          </h2>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Choose a track based on your goal. Each track includes practice tasks, real projects,
            and guidance to help you become confident building on your own.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {tracks.map((t) => (
              <div
                key={t.title}
                className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{t.title}</h3>
                <p className="mt-2 text-gray-600">{t.desc}</p>

                <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <p className="mt-4 text-sm font-semibold text-purple-800 bg-purple-100/70 inline-flex rounded-full px-3 py-1">
                  Outcome: {t.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT YOU'LL BUILD + WHO IT'S FOR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-2 rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">What you’ll build</h2>
            <p className="mt-2 text-gray-600">
              You won’t finish TPU with “just notes.” You’ll ship real projects like:
            </p>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li>Responsive landing pages and business websites</li>
              <li>Authentication flows (signup/login/forgot password)</li>
              <li>Dashboards with protected routes</li>
              <li>CRUD apps (create/read/update/delete)</li>
              <li>API-powered apps (search, lists, filters)</li>
              <li>Deployments with GitHub + hosting platforms</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50/60 p-5">
              <h3 className="text-lg font-semibold text-purple-900">The TPU promise</h3>
              <p className="mt-2 text-purple-900/80">
                If you complete the milestones and practice consistently, you’ll leave TPU
                with real projects and the confidence to build without tutorials.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Who TPU is for</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✅ Beginners who want structure</li>
              <li>✅ People stuck watching tutorials</li>
              <li>✅ Students building a portfolio</li>
              <li>✅ Freelancers who want stronger delivery</li>
              <li>✅ Anyone serious about learning by doing</li>
            </ul>

            <div className="mt-6">
              <Link
                to="/signup"
                className="inline-flex w-full items-center justify-center rounded-xl bg-purple-900 px-5 py-3 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200/60 transition"
              >
                Join the Next Intake
              </Link>
              <p className="mt-3 text-sm text-gray-600 text-center">
                Need help choosing a track?{" "}
                <Link to="/contact" className="font-semibold text-purple-700 hover:text-purple-600">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* QUICK FAQ */}
        <div className="mt-10 rounded-3xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Quick answers</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white/60 p-5">
              <h3 className="font-semibold text-gray-900">Do I need experience?</h3>
              <p className="mt-2 text-gray-600">No. TPU starts from basics and grows step-by-step.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/60 p-5">
              <h3 className="font-semibold text-gray-900">Is it practical?</h3>
              <p className="mt-2 text-gray-600">Yes — projects and milestones are the core of training.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/60 p-5">
              <h3 className="font-semibold text-gray-900">Will I get support?</h3>
              <p className="mt-2 text-gray-600">Yes. Mentors help you fix bugs and improve your code.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}