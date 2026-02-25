import React from "react";

import mentor1 from "../../assets/ATO.jpg";
import mentor2 from "../../assets/MARK.avif";
import mentor3 from "../../assets/Bade.webp";
import mentor4 from "../../assets/Melo.jpeg";
import twitterIcon from "../../assets/twitter logo.png";
import linkedinIcon from "../../assets/download linkedin.png";

function MentorCard({ img, name, role, bio }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 w-64 text-center">
      <img className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" src={img} alt={`Photo of ${name}`} />
      <h4 className="font-semibold mb-2">{name}</h4>
      <p className="text-purple-600 text-sm mb-2">{role}</p>
      <p className="text-sm text-gray-600 mb-4">{bio}</p>
      <div className="flex justify-center space-x-2">
        <img className="w-8 h-8" src={twitterIcon} alt="Twitter icon" />
        <img className="w-8 h-8" src={linkedinIcon} alt="LinkedIn icon" />
      </div>
    </div>
  );
}

export default function MentorsSection() {
  return (
    <section className="py-20 px-4">
      <h3 className="text-3xl font-bold text-center mb-4">Meet Our Mentors</h3>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        In DevX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
      </p>

      <div className="flex justify-center space-x-6">
        <MentorCard
          img={mentor1}
          name="ATO Bradley"
          role="Creator of DevX"
          bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit"
        />
        <MentorCard
          img={mentor2}
          name="Mark Rabad"
          role="General Manager"
          bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit"
        />
        <MentorCard
          img={mentor3}
          name="Maurcie Bade"
          role="Ambassador"
          bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit"
        />
        <MentorCard
          img={mentor4}
          name="Metelly Melo"
          role="Fintech Officer"
          bio="Former co-founder of Opendoor. Early staff at Spotify and Clearbit"
        />
      </div>
    </section>
  );
}
