import React from "react";
import careerImage from "../../assets/Group 39531_1.png";

export default function GrowCareerSection() {
  return (
    <section
      className="
        bg-purple-900 rounded-[18px]
        w-[90%] h-auto
        flex flex-col-reverse items-center text-center
        gap-3 py-6   /* ✅ smaller spacing on mobile */
        lg:gap-0 lg:py- ml-10

        lg:w-[1375px] lg:h-[500px] lg:mt-[120px] lg:ml-42
        lg:flex-row lg:items-start lg:text-left lg:px-0
      "
    >
      <div className="flex flex-col items-center lg:items-start w-full">
        <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-white max-w-md lg:w-[250px] lg:text-[30px] lg:ml-[110px] lg:mt-[90px]">
          Grow your career! Start learning with Orralearn.
        </h3>

        <p className="text-base sm:text-lg font-sans text-white max-w-md mt-3 lg:text-[19px] lg:w-[400px] lg:ml-[110px] lg:mt-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>

        <button className="border-2 border-white text-white w-[190px] py-4 rounded mt-4 hover:bg-purple-800 hover:text-white lg:ml-[110px] lg:mt-[25px]">
          Our Courses
        </button>
      </div>

      <img
        className="
          /* ✅ MOBILE size + spacing (edit here) */
          w-[320px] max-w-full h-auto mt-1

          /* ✅ DESKTOP size (edit here) */
          lg:w-[640px] lg:h-[285px] lg:ml-[-750px] lg:mt-[85px]
        "
        src={careerImage}
        alt="Career growth illustration"
        loading="lazy"
      />
    </section>
  );
}