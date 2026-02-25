import React from "react";
import careerImage from "../../assets/Group 39531_1.png";

export default function GrowCareerSection() {
  return (
    <section className="w-[1375px] h-[500px] mt-[-1020px] ml-42 bg-purple-900 rounded-[18px] flex flex-row">
      <div className="flex flex-col">
        <h3 className="w-[250px] text-[30px] font-sans font-semibold text-white ml-[110px] mt-[90px]">
          Grow your career! Start learning with Orralearn.
        </h3>
        <p className="text-[19px] w-[400px] font-sans text-white ml-[110px] mt-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <button className="border-2 border-white text-white  w-[190px] py-4 rounded ml-[110px] mt-[25px] hover:bg-purple-800 hover:text-white">
          Our Courses
        </button>
      </div>

      <img
        className="w-[600px] h-[265px] ml-[150px] mt-[120px]"
        src={careerImage}
        alt="Career growth illustration"
      />
    </section>
  );
}
