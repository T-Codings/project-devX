import React from "react";
import decoration1 from "../assets/082.png";
import decoration2 from "../assets/080.png";
import communityImage from "../assets/IMG-20250211-WA0005.jpg";

export default function DeveloperCommunitySection() {
  return (
    <section className="bg-purple-50 mt-14 mb-20 relative lg:h-[750px] ">
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
     <div className="relative w-380 mt-10 mb-130">

  <img
    className="w-26 h-26 sm:w-28 sm:h-24 absolute left-2 top-85 z-0"
    src={decoration1}
    alt="Decoration"
  />
  <img
    className="w-24 h-24 sm:w-28 sm:h-28 absolute ml-96 z-0"
    src={decoration2}
    alt="Decoration"
  />

  <img
    className="w-[420px] h-[380px] rounded-[15px] absolute ml-[90px] mt-[70px] z-10"
    src={communityImage}
    alt="Developers working on laptops"
    loading="lazy"
  />
</div>
      </div>

      {/* ✅ DESKTOP (UNCHANGED) */}
      <div className="hidden lg:block">
        <div className="w-[300px] h-[800px] absolute ml-[310px] mt-[200px] flex flex-col">
          <h4 className="w-[400px] text-[34px] font-bold font-sans leading-10">
            Join our thriving developer community.
          </h4>

          <ul className="mt-[20px] font-sans text-[19px] leading-[22px] list-none p-0">
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
              industry experts, and potential collaborators. Networking is a key ingredient in a successful carrier,
              orralearn provides the platform for meaningful connection
            </li>
          </ul>
        </div>

        {/* images desktop (exactly like your original) */}
        <img
          className="w-[180px] h-[160px] rounded-[15px] absolute ml-[770px] mt-[490px]"
          src={decoration1}
          alt="Decoration"
        />
        <img
          className="w-[170px] h-[190px] rounded-[15px] absolute ml-[1200px] mt-[102px]"
          src={decoration2}
          alt="Decoration"
        />
        <img
          className="w-[490px] h-[440px] rounded-[15px] absolute ml-[900px] mt-[215px]"
          src={communityImage}
          alt="Developers working on laptops"
        />
      </div>
    </section>
  );
}





          
