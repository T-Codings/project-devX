import React from "react";
import storyImage from "../../assets/IMG-20250211-WA0006.jpg";

export default function StorySection() {
  return (
    <section className="border-b border-purple-50 relative min-h-[900px] sm:min-h-[900px] lg:min-h-0 h-auto lg:h-[400px]">
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:mt-[-100px] px-4 sm:px-6 lg:px-0">
        {/* TEXT */}
        <div className="text-center lg:text-left mt-10 lg:mt-[300px] lg:absolute lg:ml-[310px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-semibold font-sans">
            Our Story
          </h2>

          <p className="text-base sm:text-lg lg:text-[23px] font-semibold font-sans leading-[23px] max-w-md lg:w-[400px] mt-4 lg:mt-[25px] mx-auto lg:mx-0">
            We're a Tech hub for aspiring and established developers across{" "}
            <span className="text-purple-900 font-bold">Africa</span>.
          </p>

          <p className="text-base sm:text-lg lg:text-[20px] font-sans leading-[23px] max-w-xl lg:w-[420px] mt-4 lg:mt-[24px] mx-auto lg:mx-0">
            We stand out by providing a community where opportunity meets
            preparation, and set up our members for absolute success.
          </p>

          <p className="text-base sm:text-lg lg:text-[20px] font-sans leading-[23px] max-w-xl lg:w-[420px] mt-4 lg:mt-[24px] mx-auto lg:mx-0">
            We also foster supportive and collaborative growth sessions for
            developers to connect and grow together.
          </p>
        </div>

        {/* IMAGE */}
        <div className="mt-12 lg:mt-0 lg:ml-[900px] w-full lg:w-auto">
          <img
            className="w-full max-w-md sm:max-w-lg mx-auto h-auto rounded-[15px] lg:w-[490px] lg:h-[440px] lg:absolute lg:mt-[300px]"
            src={storyImage}
            alt="Group of developers collaborating"
            loading="lazy"
          />
        </div>
      </div>

      {/* HR: normal on mobile, keep your big spacing only on desktop */}
      <hr className="w-full border-b border-gray-300 mt-12 lg:mt-[850px] mx-auto" />
    </section>
  );
}