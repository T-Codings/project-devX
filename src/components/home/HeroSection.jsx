import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="mt-24 sm:mt-28 lg:mt-[110px]">
        <button className="bg-transparent text-black border border-purple-800 text-base sm:text-lg px-5 py-2 rounded-full">
          Welcome to DevX
        </button>
      </div>

      <div className="mt-6 sm:mt-8">
        <h1 className="font-semibold font-sans leading-tight text-3xl sm:text-4xl lg:text-6xl max-w-xl sm:max-w-2xl lg:max-w-4xl">
          Defining your future starts with growing your skills
        </h1>
      </div>

      <div className="mt-4 sm:mt-6">
        <p className="text-base sm:text-lg font-sans leading-7 sm:leading-8 max-w-md sm:max-w-xl">
          The go-to place where developers get discovered by employers. Your best
          developing hub.
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <Link
          to="/signup"
          className="inline-block bg-purple-800 text-base sm:text-lg no-underline text-white px-6 py-3 rounded-full font-sans hover:bg-purple-700 transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
