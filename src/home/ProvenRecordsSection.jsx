// src/components/home/ProvenRecordsSection.jsx
import React, { useMemo } from "react";
import * as CountHooks from "../hooks/useCountUpOnview";
import { formatCount } from "../utils/formatCount";

import trophyIcon from "../assets/Trophy.png";
import usersIcon from "../assets/Users.png";
import smileyIcon from "../assets/Smiley.png";
import briefcaseIcon from "../assets/Briefcase_1.png";

export default function ProvenRecordsSection() {
  const { ref, inView } = CountHooks.useInViewOnce({ threshold: 0.35 });

  const awards = CountHooks.useCountUp(inView, 17, 900);
  const teachers = CountHooks.useCountUp(inView, 20, 900);
  const members = CountHooks.useCountUp(inView, 13000, 1400);
  const projects = CountHooks.useCountUp(inView, 315, 1100);

  const stats = useMemo(
    () => [
      { icon: trophyIcon, alt: "Trophy icon", value: awards, label: "Awards Rewarded", iconClass: "w-10 sm:w-12 mt-[2px]" },
      { icon: usersIcon, alt: "Users icon", value: teachers, label: "Teachers", iconClass: "w-9 sm:w-10 mt-[2px]" },
      { icon: smileyIcon, alt: "Smiley icon", value: members, label: "Successful Members", iconClass: "w-9 sm:w-10 mt-[2px]" },
      { icon: briefcaseIcon, alt: "Briefcase icon", value: projects, label: "Completed Projects", iconClass: "w-9 sm:w-10 mt-[2px]" },
    ],
    [awards, teachers, members, projects]
  );

  return (
    <section ref={ref} className="mt-16 sm:mt-24 bg-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
       
        {/* ✅ smaller width on mobile */}
<h3 className="text-xl sm:text-4xl font-bold font-sans text-center">
          Here are a few numbers that we are proud of
        </h3>

        {/* ✅ 1 column on mobile, 1 on tablet, 4 BIG cards on desktop */}
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-stretch">
          {stats.map((s) => (
            <div
              key={s.label}
              className="
                bg-white shadow-lg rounded-xl border border-purple-200
                flex flex-col items-center text-center
                p-6 sm:p-7 lg:p-10
                w-full
                lg:flex-1 lg:min-w-[260px]
              "
            >
              <img className={s.iconClass} src={s.icon} alt={s.alt} />

              <div className="mt-3">
                <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-sans text-gray-900">
                  {formatCount(s.value)}+
                </h4>
                <p className="mt-1 text-purple-800 text-base sm:text-lg lg:text-xl font-semibold font-sans">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}