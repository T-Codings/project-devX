import React from "react";
import decoration1 from "../../assets/082.png";
import decoration2 from "../../assets/080.png";
import communityImage from "../../assets/IMG-20250211-WA0005.jpg";

export default function DeveloperCommunitySection() {
  return (
    <section className="bg-purple-50 mt-10 h-[1840px]">
      <div className="w-[300px] h-[800px] absolute ml-[310px] mt-[200px] flex flex-col">
        <h4 className="w-[400px] text-[34px] font-bold font-sans leading-10">
          Join our thriving developer community.
        </h4>

        <ul className="mt-[20px] font-sans text-[19px] leading-[22px] list-disc pl-6">
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
             Networking is a key ingredient in a successful career, orralearn provides the platform 
             for meaningful connections
          </li>
        </ul>
      </div>

      <img className="w-[180px] h-[160px] rounded-[15px] absolute ml-[760px] mt-[520px]" src={decoration1} alt="Decoration" />
      <img className="w-[170px] h-[190px] rounded-[15px] absolute ml-[1200px] mt-[98px]" src={decoration2} alt="Decoration" />
      <img className="w-[490px] h-[440px] rounded-[15px] absolute ml-[900px] mt-[215px]" src={communityImage} alt="Developers working on laptops" />
    </section>
  );
}
