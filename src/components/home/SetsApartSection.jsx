import React from "react";
import scholarshipIcon from "../../assets/Scholarship.png";
import greaterThanIcon from "../../assets/new_less_than.png";
import lessThanIcon from "../../assets/Greater_Than- 3.webp";

export default function SetsApartSection() {
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
        {/* Left arrow (mobile + desktop) */}
        <button
          type="button"
          className="absolute left-3 sm:left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 shadow-md grid place-items-center"
          aria-label="Previous"
        >
          <img className="w-5 h-5" src={lessThanIcon} alt="Previous" />
        </button>

        {/* Right arrow (mobile + desktop) */}
        <button
          type="button"
          className="absolute right-3 sm:right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 shadow-md grid place-items-center"
          aria-label="Next"
        >
          <img className="w-5 h-5" src={greaterThanIcon} alt="Next" />
        </button>

        <img
          className="w-14 sm:w-[65px] mx-auto"
          src={scholarshipIcon}
          alt="Scholarship icon"
        />

        <h3 className="text-lg sm:text-xl lg:text-[21px] font-semibold font-sans mt-5 mb-3">
          1. Project-Based Learning
        </h3>

        <p className="max-w-xl lg:max-w-2xl text-base sm:text-lg lg:text-[19px] font-sans leading-[23px]">
          Our commitment to providing well thought out projects for our aspiring
          developers to build is what makes the mark. We ensure that our learners
          have access to top-notch educational content without the financial burden.
        </p>
      </div>
    </section>
  );
}