import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto  flex flex-col items-center text-center">
      <div className="mt-[110px]">
        <button className="bg-transparent text-black border border-purple-800 text-[18px] px-[20px] py-[10px] rounded-[20px]">
          Welcome to DevX
        </button>
      </div>

      <div>
        <h1 className="text-[60px] w-[800px] font-semibold font-sans leading-18 mt-10">
          Defining your future starts with growing your skills
        </h1>
      </div>

      <div className="text-[18px] font-sans w-[580px] leading-[30px] mt-[25px]">
        <p>
          The go-to place where developers get discovered by employers. Your best
          developing hub.
        </p>
      </div>

      <div className="mt-[50px]">
        <Link
          to="/signup"
          className="bg-purple-800 text-[18px] no-underline text-white  px-[25px] py-[10px] rounded-[20px] font-arial hover:bg-purple-700 transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
