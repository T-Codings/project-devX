import React from "react";

import mentor1 from "../assets/ATO.jpg";
import mentor2 from "../assets/MARK.avif";
import mentor3 from "../assets/Bade.webp";
import mentor4 from "../assets/Melo.jpeg";
import twitterIcon from "../assets/twitter logo.png";
import linkedinIcon from "../assets/download linkedin.png";

function MentorCard({ img, name, role, bio }) {
  return (
    <div
      className="
        group bg-white rounded-2xl border border-gray-200
        shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
        ring-1 ring-transparent hover:ring-purple-200
        p-6 sm:p-7
        w-full max-w-md mx-auto   /* ✅ FIX: card size + center on mobile */
      "
    >
      <div className="flex flex-col items-center text-center">
        <img
          className="w-20 h-20 rounded-full object-cover ring-4 ring-purple-100 mb-4"
          src={img}
          alt={`Photo of ${name}`}
          loading="lazy"
        />

        <h4 className="text-lg font-bold text-gray-900">{name}</h4>
        <p className="text-purple-700 text-sm font-semibold mt-1">{role}</p>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{bio}</p>

        <div className="flex justify-center gap-3 mt-5">
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center transition"
            aria-label="Twitter"
          >
            <img className="w-5 h-5" src={twitterIcon} alt="" />
          </button>

          <button
            type="button"
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-purple-300 hover:bg-purple-50 flex items-center justify-center transition"
            aria-label="LinkedIn"
          >
            <img className="w-5 h-5" src={linkedinIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MentorsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Meet Our Mentors
        </h3>
        <p className="text-base sm:text-lg text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          In DevX, instructors from all over the world instruct millions of students.
          We offer the knowledge and abilities.
        </p>

        {/* ✅ 1 col on mobile, 4 cols on desktop */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <MentorCard img={mentor1} name="ATO Bradley" role="Creator of DevX" bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit" />
          <MentorCard img={mentor2} name="Mark Rabad" role="General Manager" bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit" />
          <MentorCard img={mentor3} name="Maurcie Bade" role="Ambassador" bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit" />
          <MentorCard img={mentor4} name="Metelly Melo" role="Fintech Officer" bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit" />
        </div>
      </div>
    </section>
  );
}