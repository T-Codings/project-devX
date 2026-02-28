import React from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Frontend Development Track",
    level: "Beginner → Intermediate",
    duration: "8–10 weeks",
    format: "Live + Projects",
    highlights: ["HTML/CSS", "JavaScript", "React + Tailwind", "Portfolio Projects"],
    outcome: "Build 3 responsive projects + deploy your portfolio.",
  },
  {
    title: "Backend Development Track",
    level: "Intermediate",
    duration: "8–12 weeks",
    format: "Project-Based",
    highlights: ["APIs", "Auth", "Databases", "Deployment"],
    outcome: "Create a real backend API with authentication and data storage.",
  },
  {
    title: "Fullstack Builder Program",
    level: "Intermediate → Advanced",
    duration: "12–16 weeks",
    format: "Mentor-Led",
    highlights: ["Frontend + Backend", "Team Collaboration", "Testing", "Production Deploy"],
    outcome: "Ship a complete fullstack app you can present to clients/employers.",
  },
  {
    title: "Mobile App Starter (React Native)",
    level: "Intermediate",
    duration: "6–8 weeks",
    format: "Hands-on",
    highlights: ["React Native Basics", "Navigation", "API Integration", "App Publishing Prep"],
    outcome: "Build 1–2 mobile apps with real features.",
  },
  {
    title: "UI/UX for Developers",
    level: "All Levels",
    duration: "4 weeks",
    format: "Workshops",
    highlights: ["Design Basics", "Figma Crash Course", "Component Design", "UX Patterns"],
    outcome: "Design better interfaces and improve your product thinking.",
  },
  {
    title: "Career Readiness + Interview Prep",
    level: "All Levels",
    duration: "2–4 weeks",
    format: "Coaching",
    highlights: ["CV/Portfolio Review", "Git + GitHub", "Mock Interviews", "LinkedIn Setup"],
    outcome: "Get job-ready with a polished portfolio + confidence.",
  },
];

const faqs = [
  {
    q: "Do I need experience to start?",
    a: "No. Start with the Frontend Track if you're new. We guide you from the basics to real projects.",
  },
  {
    q: "How do mentoring sessions work?",
    a: "You get weekly mentor check-ins, feedback on your projects, and a support channel for questions.",
  },
  {
    q: "Do you give certificates?",
    a: "Yes—after you complete required projects and assessments for your program.",
  },
  {
    q: "Is it remote or in-person?",
    a: "Mostly remote (online). Some cohorts may include optional in-person meetups depending on location.",
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
      {children}
    </span>
  );
}

function ProgramCard({ p }) {
  return (
    <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
      <div className="h-1 w-full bg-purple-900" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{p.title}</h3>
          <Pill>{p.level}</Pill>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
            ⏱ {p.duration}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
            📍 {p.format}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-[6px] inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl bg-purple-50 border border-purple-100 p-4">
          <p className="text-sm font-semibold text-purple-900">Outcome</p>
          <p className="text-sm text-purple-900/80 mt-1">{p.outcome}</p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            to="/signup"
            className="w-full rounded-xl py-3 font-semibold text-white bg-purple-900 text-center"
          >
            Apply Now
          </Link>
          <Link
            to="/contact"
            className="w-full rounded-xl py-3 font-semibold text-purple-900 bg-white border border-purple-200 text-center"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Pill>TPU Programs</Pill>

            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Choose a program. Build real skills. Ship projects.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
              TPU programs are practical and structured. You’ll learn step-by-step, build portfolio-ready
              projects, and get feedback that helps you improve quickly.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#programs"
                className="rounded-xl px-6 py-3 font-semibold text-white bg-purple-900 text-center"
              >
                View Programs
              </a>
              <Link
                to="/contact"
                className="rounded-xl px-6 py-3 font-semibold text-purple-900 bg-white border border-purple-200 text-center"
              >
                Ask a Question
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 text-left">
                <p className="text-sm text-gray-600">Mentor feedback</p>
                <p className="text-2xl font-extrabold text-gray-900 mt-1">Weekly</p>
              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 text-left">
                <p className="text-sm text-gray-600">Projects shipped</p>
                <p className="text-2xl font-extrabold text-gray-900 mt-1">3–6</p>
              </div>
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5 text-left">
                <p className="text-sm text-gray-600">Support</p>
                <p className="text-2xl font-extrabold text-gray-900 mt-1">Community</p>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMS */}
        <div id="programs" className="mt-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Programs</h2>
              <p className="mt-2 text-gray-700 max-w-2xl">
                Pick a program that matches your current level. Each track comes with projects and practical guidance.
              </p>
            </div>

            <div className="flex gap-2">
              <Pill>Remote Friendly</Pill>
              <Pill>Project-Based</Pill>
              <Pill>Mentor Support</Pill>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-12 rounded-3xl bg-white border border-gray-200 shadow-sm p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
            How it works
          </h2>
          <p className="mt-2 text-gray-700 text-center max-w-2xl mx-auto">
            A simple system to help you learn consistently and build real projects.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "Step 1", title: "Choose a program", text: "Pick the track that matches your current level and goal." },
              { step: "Step 2", title: "Learn + build", text: "Follow lessons and build projects every week with guidance." },
              { step: "Step 3", title: "Get feedback", text: "Mentors review your work and help you improve fast." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <p className="text-xs font-semibold text-purple-800 bg-purple-100 border border-purple-200 inline-flex px-3 py-1 rounded-full">
                  {s.step}
                </p>
                <h3 className="mt-3 font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 rounded-3xl bg-white border border-gray-200 shadow-sm p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-purple-900 text-white p-8 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to start?</h2>
              <p className="mt-2 text-white/90 max-w-2xl">
                Join a program and begin building real projects that improve your skills and your portfolio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/signup"
                className="rounded-xl px-6 py-3 font-semibold text-purple-900 bg-white text-center"
              >
                Create Account
              </Link>
              <Link
                to="/contact"
                className="rounded-xl px-6 py-3 font-semibold text-white bg-white/10 border border-white/20 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not sure what to choose?{" "}
          <Link to="/contact" className="font-semibold text-purple-700">
            Message us
          </Link>{" "}
          and we’ll guide you.
        </p>
      </div>
    </div>
  );
}