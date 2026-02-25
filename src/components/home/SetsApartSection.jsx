import React from "react";
import scholarshipIcon from "../../assets/Scholarship.png";
import greaterThanIcon from "../../assets/new_less_than.png";
import lessThanIcon from "../../assets/Greater_Than- 3.webp";

export default function SetsApartSection() {
  return (
    <section className="mt-[565px]">
      <h2 className="text-[32px] font-sans font-bold text-center">What Sets Us Apart</h2>

      <div className="flex flex-col items-center text-center w-[1120px] h-[350px] bg-purple-100 mt-[60px] ml-[280px] rounded-[25px]">
        <img className="w-[65px] mt-[70px] mx-auto" src={scholarshipIcon} alt="Scholarship icon" />
        <h3 className="text-[21px] font-semibold font-sans mt-5 mb-3">1. Project-Based Learning</h3>

        <p className="w-[660px] text-[19px] font-sans leading-[23px]">
          Our commitment to providing well thought out projects for our aspiring
          developers to build is what makes the mark. We ensure that our learners
          have access to top-notch educational content without the financial burden.
        </p>









<div className="w-10 h-10 rounded-[30px] bg-purple-100 shadow-md ml-280 mt-[-120px]">
<img
          className="w-5 h-5 text-color-black ml-3 mt-3"
          src={lessThanIcon}
          alt="Less than symbol"
/>
</div>
       

        <div className="w-10 h-10 rounded-[30px] bg-purple-100 shadow-md ml-[-1118px] mt-[-30px]">
          <img
          className="w-5 h-5 text-color-black ml-3 mt-3"
          src={greaterThanIcon}
          alt="Less than symbol"
        />
        </div>
        
      </div>
    </section>
  );
}
