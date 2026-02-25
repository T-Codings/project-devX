import React from "react";
import storyImage from "../../assets/IMG-20250211-WA0006.jpg";

export default function StorySection() {
  return (
    <section className="border-b border-purple-50 h-[400px] relative">
      <div className="flex items-baseline">
        <div className="text-left ml-[200px] absolute mt-[300px]">
          <h2 className="text-[45px] font-sans">Our Story</h2>
          <p className="text-[22px] font-bold font-sans leading-[22px] w-[350px] mt-[35px]">
            We're a Tech hub for aspiring and established developers across{" "}
            <span className="text-purple-700 font-extrabold">Africa</span>.
          </p>
          <p className="text-[19px] font-sans leading-[22px] w-[380px] mt-[20px]">
            We stand out by providing a community where opportunity meets
            preparation, and set up our members for absolute success.
          </p>
          <p className="text-[19px] font-sans leading-[22px] w-[370px] mt-[20px]">
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
    </section>
  );
}
