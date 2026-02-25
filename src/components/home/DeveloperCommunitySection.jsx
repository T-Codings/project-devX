import React from "react";
import decoration1 from "../../assets/082.png";
import decoration2 from "../../assets/080.png";
import communityImage from "../../assets/IMG-20250211-WA0005.jpg";

export default function DeveloperCommunitySection() {
  return (
    <section className="bg-purple-50 mt-10 h-[1840px]">
      <div className="w-[300px] h-[800px] absolute ml-[210px] mt-10 flex flex-col">
        <h4 className="w-[350px] text-[40px] font-sans">
          Join our thriving developer community.
        </h4>

        <ul className="w-[250px] mt-[-20px] font-sans text-[14.5px] leading-[22px] list-none p-0">
          <li>
            <strong>Shared Knowledge:</strong> Benefit from the collective wisdom of
            our community. Ask questions, seek advice, and contribute your expertise.
          </li>
          <li>
            <strong>Collaborative Projects:</strong> Find collaborators for your projects,
            participate in hackathons, and engage in hands-on experiences.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Connect with experienced developers,
            industry experts, and potential collaborators.
          </li>
        </ul>
      </div>

      <img className="w-[180px] h-[140px] rounded-[15px] absolute ml-[422px] mt-[375px]" src={decoration1} alt="Decoration" />
      <img className="w-[170px] h-[190px] rounded-[15px] absolute ml-[800px] mt-[98px]" src={decoration2} alt="Decoration" />
      <img className="w-[350px] h-[270px] rounded-[15px] absolute ml-[642px] mt-[215px]" src={communityImage} alt="Developers working on laptops" />
    </section>
  );
}
