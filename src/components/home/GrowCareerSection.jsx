import React from "react";
import careerImage from "../../assets/Group 39531_1.png";

export default function GrowCareerSection() {
  return (
    <section className="w-[875px] h-[430px] mt-[-1070px] ml-[15.5%] bg-purple-600 rounded-[18px] flex flex-row">
      <div className="flex flex-col">
        <h3 className="w-[250px] text-[30px] font-sans text-white ml-[100px] mt-[50px]">
          Grow your career! Start learning with DevX.
        </h3>
        <p className="text-[18px] font-sans text-white ml-[100px] mt-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <button className="border-2 border-white text-white px-6 py-3 rounded ml-[100px] mt-[25px] hover:bg-white hover:text-purple-600">
          Our Courses
        </button>
      </div>

      <img
        className="w-[320px] h-[160px] rounded-[18px] ml-[50px] mt-[50px]"
        src={careerImage}
        alt="Career growth illustration"
      />
    </section>
  );
}
