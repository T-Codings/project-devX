import React from "react";
import HeroSection from "../home/HeroSection";
import ProvenRecordsSection from "../home/ProvenRecordsSection";
import StorySection from "../home/StorySection";
import SetsApartSection from "../home/SetsApartSection";
import DeveloperCommunitySection from "../home/DeveloperCommunitySection";
import GrowCareerSection from "../home/GrowCareerSection";
import MentorsSection from "../home/MentorsSection";
import FooterSection from "../home/FooterSection";


export default function Homepage() {
  return (
    <div className="font-sans">
      <Navbar />

      <HeroSection />
      <ProvenRecordsSection />
      <StorySection />
      <SetsApartSection />
      <DeveloperCommunitySection />
      <GrowCareerSection />
      <MentorsSection />
      <FooterSection />
    </div>
  );
}








