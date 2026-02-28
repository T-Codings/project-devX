import React, { useEffect, useRef, useState } from "react";
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

/** Small hook to animate sections when they enter viewport */
function useInView(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/10 text-purple-800 border border-purple-600/15">
      {children}
    </span>
  );
}

function ProgramCard({ p, i, inView }) {
  return (
    <div
      style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
      className={[
        "group relative rounded-3xl bg-white/80 backdrop-blur border border-white/70 shadow-sm overflow-hidden",
        "transition-all duration-500 will-change-transform",
        "hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      {/* decorative animated glow */}
      <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 blobGlow blur-2xl" />
      </div>

      <div className="h-1 w-full bg-purple-900" />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{p.title}</h3>
          <Pill>{p.level}</Pill>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-900/5 text-gray-700 border border-gray-200">
            ⏱ {p.duration}
          </span>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-900/5 text-gray-700 border border-gray-200">
            📍 {p.format}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-[2px] inline-block w-2 h-2 rounded-full bg-purple-600" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl bg-purple-50 border border-purple-100 p-4">
          <p className="text-sm font-semibold text-purple-900">Outcome</p>
          <p className="text-sm text-purple-900/80 mt-1">{p.outcome}</p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button className="w-full rounded-xl py-3 font-semibold text-white bg-purple-900 hover:bg-purple-800 shadow-lg shadow-purple-600/20 transition">
            Apply Now
          </button>
          <button className="w-full rounded-xl py-3 font-semibold text-purple-800 bg-white border border-purple-200 hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const programsView = useInView();
  const howView = useInView();
  const faqView = useInView();

  return (
    <div className="min-h-screen px-4 py-12 relative overflow-hidden">
      {/* ✅ Decorative animated background */}
      <style>{`
        @keyframes floatA { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(18px,-22px) scale(1.05)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes floatB { 0%{transform:translate(0,0) scale(1)} 50%{transform:translate(-22px,16px) scale(1.06)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes shimmer { 0%{transform:translateX(-60%)} 100%{transform:translateX(60%)} }
        @keyframes twinkle { 0%,100%{opacity:.25} 50%{opacity:.7} }

        .floatA { animation: floatA 10s ease-in-out infinite; }
        .floatB { animation: floatB 12s ease-in-out infinite; }
        .shimmer { animation: shimmer 4.5s ease-in-out infinite; }
        .twinkle { animation: twinkle 3.5s ease-in-out infinite; }

        .blobGlow {
          background: radial-gradient(circle at 30% 30%, rgba(168,85,247,.35), transparent 55%),
                      radial-gradient(circle at 70% 70%, rgba(99,102,241,.30), transparent 55%);
        }
      `}</style>

      {/* floating blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-purple-300/20 blur-3xl floatA" />
      <div className="pointer-events-none absolute top-40 -right-28 w-[420px] h-[420px] rounded-full bg-indigo-300/20 blur-3xl floatB" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-fuchsia-200/20 blur-3xl floatA" />

      {/* twinkling dots pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]">
        <div
          className="absolute inset-0 twinkle"
          style={{
            backgroundImage:
              "radial-gradient(rgba(99,102,241,0.35) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            backgroundPosition: "0 0",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* HERO */}
        <div
          className={[
            "rounded-3xl bg-white/70 backdrop-blur border border-white/70 shadow-xl p-8 sm:p-10 overflow-hidden relative",
            "transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* shimmer overlay */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-10 -left-1/2 w-1/2 bg-white/30 rotate-12 shimmer" />
          </div>

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-300/20 blur-3xl floatA" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-300/20 blur-3xl floatB" />

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <Pill>DevX Learning Programs</Pill>

              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                Programs that help you{" "}
                <span className="text-purple-800">build real skills</span> and{" "}
                <span className="text-indigo-800">ship projects</span>.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
                Choose a path, learn step-by-step, build portfolio-ready projects, and get mentor
                feedback to grow faster.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="#programs"
                  className="rounded-xl px-6 py-3 font-semibold text-white bg-purple-900 hover:bg-purple-800 transition text-center"
                >
                  Explore Programs
                </a>
                <Link
                  to="/contact"
                  className="rounded-xl px-6 py-3 font-semibold text-purple-900 bg-white border border-purple-200 hover:bg-purple-50 transition text-center"
                >
                  Talk to Us
                </Link>
              </div>

              <div
                className={[
                  "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full transition-all duration-700",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <div className="rounded-2xl bg-white border border-gray-200 p-5 text-left hover:shadow-md transition">
                  <p className="text-sm text-gray-600">Mentor feedback</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">Weekly</p>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 p-5 text-left hover:shadow-md transition">
                  <p className="text-sm text-gray-600">Projects shipped</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">3–6</p>
                </div>
                <div className="rounded-2xl bg-white border border-gray-200 p-5 text-left hover:shadow-md transition">
                  <p className="text-sm text-gray-600">Support</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMS */}
        <div id="programs" className="mt-10" ref={programsView.ref}>
          <div
            className={[
              "flex items-end justify-between gap-4 flex-wrap transition-all duration-600",
              programsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our Programs</h2>
              <p className="mt-2 text-gray-700 max-w-2xl">
                Pick a program that matches your current level. Each track comes with projects and
                practical guidance.
              </p>
            </div>

            <div className="flex gap-2">
              <Pill>Remote Friendly</Pill>
              <Pill>Project-Based</Pill>
              <Pill>Mentor Support</Pill>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <ProgramCard key={p.title} p={p} i={i} inView={programsView.inView} />
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div
          ref={howView.ref}
          className={[
            "mt-12 rounded-3xl bg-white/70 backdrop-blur border border-white/70 shadow-xl p-8 sm:p-10 transition-all duration-700",
            howView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
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
            ].map((s, i) => (
              <div
                key={s.step}
                style={{ transitionDelay: howView.inView ? `${i * 90}ms` : "0ms" }}
                className={[
                  "rounded-2xl bg-white border border-gray-200 p-6 transition-all duration-700",
                  howView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <p className="text-xs font-semibold text-purple-800 bg-purple-50 border border-purple-100 inline-flex px-3 py-1 rounded-full">
                  {s.step}
                </p>
                <h3 className="mt-3 font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div
          ref={faqView.ref}
          className={[
            "mt-12 rounded-3xl bg-white/70 backdrop-blur border border-white/70 shadow-xl p-8 sm:p-10 transition-all duration-700",
            faqView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                style={{ transitionDelay: faqView.inView ? `${i * 90}ms` : "0ms" }}
                className={[
                  "rounded-2xl bg-white border border-gray-200 p-6 transition-all duration-700",
                  "hover:shadow-md hover:-translate-y-0.5",
                  faqView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <h3 className="font-bold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA with shimmer */}
        <div
          className={[
            "mt-12 rounded-3xl bg-purple-900 text-white p-8 sm:p-10 shadow-xl overflow-hidden relative",
            "transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-10 -left-1/2 w-1/2 bg-white/20 rotate-12 shimmer" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to start?</h2>
              <p className="mt-2 text-white/90 max-w-2xl">
                Join a program and begin building real projects that improve your skills and your
                portfolio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/signup"
                className="rounded-xl px-6 py-3 font-semibold text-purple-800 bg-white hover:bg-white/90 transition text-center"
              >
                Create Account
              </Link>
              <Link
                to="/contact"
                className="rounded-xl px-6 py-3 font-semibold text-white bg-white/15 border border-white/25 hover:bg-white/20 transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not sure what to choose?{" "}
          <Link to="/contact" className="font-semibold text-purple-700 hover:text-purple-600">
            Message us
          </Link>{" "}
          and we’ll guide you.
        </p>
      </div>
    </div>
  );
}