import React from "react";
import scholarshipIcon from "../../assets/Scholarship.png";
import greaterThanIcon from "../../assets/new_less_than.png";
import lessThanIcon from "../../assets/Greater_Than- 3.webp";

export default function SetsApartSection() {
  return (
    <section className="mt-[365px]">
      <h2 className="text-[32px] font-sans ml-[38%]">What Sets Us Apart</h2>

      <div className="flex flex-col items-center text-center w-[920px] h-[350px] bg-purple-50 mt-[75px] ml-[168px] rounded-[25px]">
        <img className="w-[55px] mt-[70px]" src={scholarshipIcon} alt="Scholarship icon" />
        <h3 className="text-[20px] font-sans mt-5">1. Project-Based Learning</h3>

        <p className="w-[590px] text-[17px] font-sans leading-[22px]">
          Our commitment to providing well thought out projects for our aspiring
          developers to build is what makes the mark. We ensure that our learners
          have access to top-notch educational content without the financial burden.
        </p>

        <img
          className="w-4 h-4 rounded-[30px] p-3 shadow-md mr-[1060px] mt-[140px]"
          src={greaterThanIcon}
          alt="Greater than symbol"
        />
        <img
          className="w-4 h-4 rounded-[30px] p-3 shadow-md ml-[918px] mt-[-140px]"
          src={lessThanIcon}
          alt="Less than symbol"
        />
      </div>
    </section>
  );
}
