import React from "react";
import decoration1 from "../../assets/082.png";
import decoration2 from "../../assets/080.png";
import communityImage from "../../assets/IMG-20250211-WA0005.jpg";

export default function DeveloperCommunitySection() {
  return (
    <section className="bg-purple-50 mt-14 mb-16 relative h-auto lg:h-[1840px] overflow-hidden">
      {/* ✅ MOBILE / TABLET */}
      <div className="lg:hidden px-4 sm:px-6 py-12">
        <h4 className="text-2xl sm:text-3xl font-bold font-sans leading-tight text-center max-w-md mx-auto">
          Join our thriving developer community.
        </h4>

        <ul className="mt-6 font-sans text-base sm:text-lg leading-6 list-none p-0 max-w-md mx-auto space-y-4 text-left">
          <li>
            <strong>Shared Knowledge:</strong> Benefit from the collective wisdom of
            our community. Ask questions, seek advice, and contribute your expertise to a supportive environment.
          </li>
          <li>
            <strong>Collaborative Projects:</strong> Find collaborators for your projects,
            participate in hackathons, and engage in hands-on experiences that go beyond theoretical learning.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Connect with experienced developers,
            industry experts, and potential collaborators. Networking is a key ingredient in a successful carrier,
            orralearn provides the platform for meaningful connections
          </li>
        </ul>

        {/* Images (mobile) */}
        <div className="relative w-full max-w-md mx-auto mt-10">
          <img
            className="w-full h-auto rounded-2xl shadow"
            src={communityImage}
            alt="Developers working on laptops"
            loading="lazy"
          />

          <img
            className="w-24 h-20 sm:w-28 sm:h-24 rounded-xl absolute -left-3 -top-6 shadow"
            src={decoration1}
            alt="Decoration"
          />
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl absolute -right-3 -bottom-6 shadow"
            src={decoration2}
            alt="Decoration"
          />
        </div>
      </div>

      {/* ✅ DESKTOP (UNCHANGED) */}
      <div className="hidden lg:block">
        <div className="w-[300px] h-[800px] absolute ml-[310px] mt-[200px] flex flex-col">
          <h4 className="w-[400px] text-[34px] font-bold font-sans leading-10">
            Join our thriving developer community.
          </h4>

          <ul className=" mt-[20px] font-sans text-[19px] leading-[22px] list-none p-0">
            <li className="w-[420px]">
              <strong>Shared Knowledge:</strong> Benefit from the collective wisdom of
              our community. Ask questions, seek advice, and contribute your expertise to a supportive environment.
            </li>
            <li className="w-[450px] mt-3">
              <strong>Collaborative Projects:</strong> Find collaborators for your projects,
              participate in hackathons, and engage in hands-on experiences that go beyond theoretical learning.
            </li>
            <li className="w-[430px] mt-3">
              <strong>Networking Opportunities:</strong> Connect with experienced developers,
              industry experts, and potential collaborators.
              {" "}Networking is a key ingredient in a successful carrier, orralearn provides the platform
              for meaningful connections
            </li>
          </ul>
        </div>

{/*images desktop*/}

<img
  className="w-[120px] h-[100px] rounded-[15px] ml-[-100px] mt-6 mb-4 lg:w-[180px] lg:h-[160px] lg:absolute lg:ml-[760px] lg:mt-[520px]"
  src={decoration1}
  alt="Decoration"
/>

<img
  className="w-full max-w-md h-auto rounded-[15px] mx-auto mb-8 lg:w-[490px] lg:h-[440px] lg:absolute lg:ml-[900px] lg:mt-[215px]"
  src={communityImage}
  alt="Developers working on laptops"
/>

<img
  className="w-[120px] h-[130px] rounded-[15px] ml-auto mr-2 mt-2 mb-8 lg:w-[170px] lg:h-[190px] lg:absolute lg:ml-[1200px] lg:mt-[98px]"
  src={decoration2}
  alt="Decoration"
/>
      </div>
    </section>
  );
}