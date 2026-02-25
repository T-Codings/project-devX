import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto flex flex-col items-center text-center">
      <div className="mt-[110px]">
        <button className="bg-transparent text-black border border-purple-600 text-[19px] px-[20px] py-[12px] rounded-[11px]">
          Welcome to DevX
        </button>
      </div>

      <div>
        <h1 className="text-[65px] w-[800px] font-sans">
          Defining your future starts with growing your skills
        </h1>
      </div>

      <div className="text-[20px] font-sans w-[600px] leading-[30px] mt-[-33px]">
        <p>
          The go-to place where developers get discovered by employers. Your best
          developing hub.
        </p>
      </div>

      <div className="mt-[50px]">
        <Link
          to="/signup"
          className="bg-purple-600 text-[20px] no-underline text-white border border-purple-600 px-[25px] py-[10px] rounded-[6px] font-arial hover:bg-purple-700 transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
