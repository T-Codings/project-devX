import React from "react";
import storyImage from "../../assets/IMG-20250211-WA0006.jpg";

export default function StorySection() {
  return (
    <section className="border-b border-purple-50 h-[400px] relative">
      <div className="flex items-baseline mt-[-100px]">
        <div className="text-left ml-[310px] absolute mt-[300px]">
          <h2 className="text-[45px] font-semibold font-sans">Our Story</h2>
          <p className="text-[23px] font-semibold font-sans leading-[23px] w-[400px] mt-[25px]">
            We're a Tech hub for aspiring and established developers across{" "}
            <span className="text-purple-900 font-bold">Africa</span>.
          </p>
          <p className="text-[20px] font-sans leading-[23px] w-[420px] mt-[24px]">
            We stand out by providing a community where opportunity meets
            preparation, and set up our members for absolute success.
          </p>
          <p className="text-[20px] font-sans leading-[23px] w-[420px] mt-[24px]">
            We also foster supportive and collaborative growth sessions for
            developers to connect and grow together.
          </p>
        </div>

        <div className="ml-[900px]">
          <img
            className="w-[490px] h-[440px] rounded-[15px] absolute mt-[300px]"
            src={storyImage}
            alt="Group of developers collaborating"
          />
        </div>
      </div>
      <hr className="w-[100%] border-b border-gray-300 mt-[890px] mx-auto" />
    </section>
  );
}
