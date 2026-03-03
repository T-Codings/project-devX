import React, { useMemo, useRef, useState } from "react";
import scholarshipIcon from "../assets/Scholarship.png";
import greaterThanIcon from "../assets/new_less_than.png";
import lessThanIcon from "../assets/Greater_Than- 3.webp";

export default function SetsApartSection() {
  const slides = useMemo(
    () => [
      {
        title: "1. Project-Based Learning",
        text:
          "Our commitment to providing well thought out projects for our aspiring developers to build is what makes the mark. We ensure that our learners have access to top-notch educational content without the financial burden.",
        icon: scholarshipIcon,
        iconAlt: "Scholarship icon",
      },
      {
        title: "2. Mentor Support & Code Review",
        text:
          "We don’t leave learners stuck. Our mentors guide you through challenges, review your code, and help you improve your problem-solving and best practices like a real developer.",
        icon: scholarshipIcon,
        iconAlt: "Mentor support icon",
      },
      {
        title: "3. Structured Learning Roadmap",
        text:
          "We provide a clear step-by-step path—from fundamentals to advanced skills—so learners always know what to learn next, what to practice, and what to build.",
        icon: scholarshipIcon,
        iconAlt: "Roadmap icon",
      },
      {
        title: "4. Portfolio & Deployment Focus",
        text:
          "Learning is not complete until you can show your work. We help learners deploy their projects and build a portfolio they can confidently share with clients and employers.",
        icon: scholarshipIcon,
        iconAlt: "Portfolio icon",
      },
      {
        title: "5. Community & Accountability",
        text:
          "Progress is faster when you’re not alone. Our community creates a supportive environment where learners share updates, ask questions, collaborate, and stay consistent.",
        icon: scholarshipIcon,
        iconAlt: "Community icon",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = slides[index];

  // ✅ Guard: ignore rapid double-taps/clicks (but do NOT disable buttons)
  const guardRef = useRef(false);
  const guardMs = 250;

  const runOnce = (fn) => {
    if (guardRef.current) return;
    guardRef.current = true;
    fn();
    window.setTimeout(() => {
      guardRef.current = false;
    }, guardMs);
  };

  const prev = () =>
    runOnce(() =>
      setIndex((i) => (i - 1 + slides.length) % slides.length)
    );

  const next = () =>
    runOnce(() =>
      setIndex((i) => (i + 1) % slides.length)
    );

  const goTo = (i) => runOnce(() => setIndex(i));

  return (
    <section className="mt-16 lg:mt-[565px] px-4 sm:px-6">
      <h2 className="mt-0 sm:mt-[-80px] lg:mt-0 text-2xl sm:text-3xl lg:text-[32px] font-sans font-bold text-center">
        What Sets Us Apart
      </h2>

      <div
        className="
          relative
          flex flex-col items-center text-center
          w-full max-w-4xl
          bg-purple-100
          mt-10 lg:mt-[60px]
          mx-auto
          rounded-[25px]
          px-6 sm:px-10
          py-12
        "
      >
        {/* Left arrow (previous) */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 shadow-md grid place-items-center"
          aria-label="Previous"
        >
          <img className="w-5 h-5" src={lessThanIcon} alt="Previous" />
        </button>

        {/* Right arrow (next) */}
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 shadow-md grid place-items-center"
          aria-label="Next"
        >
          <img className="w-5 h-5" src={greaterThanIcon} alt="Next" />
        </button>

        <img className="w-14 sm:w-[65px] mx-auto" src={current.icon} alt={current.iconAlt} />

        {/* Stable content wrapper */}
        <div className="mt-5 w-full max-w-2xl min-h-[190px] sm:min-h-[175px] lg:min-h-[165px] flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-[21px] font-semibold font-sans mb-3">
            {current.title}
          </h3>
          <p className="text-base sm:text-lg lg:text-[19px] font-sans leading-[23px]">
            {current.text}
          </p>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-purple-800" : "bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}