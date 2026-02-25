// src/components/home/ProvenRecordsSection.jsx
import React, { useMemo } from "react";

// ✅ import as namespace so the function is guaranteed to exist if exported
import * as CountHooks from "../../hooks/useCountUpOnview";
import { formatCount } from "../../utils/formatCount";

import trophyIcon from "../../assets/Trophy.png";
import usersIcon from "../../assets/Users.png";
import smileyIcon from "../../assets/Smiley.png";
import briefcaseIcon from "../../assets/Briefcase_1.png";

export default function ProvenRecordsSection() {
  // ✅ call from the imported namespace
  const { ref, inView } = CountHooks.useInViewOnce({ threshold: 0.35 });

  const awards = CountHooks.useCountUp(inView, 17, 900);
  const teachers = CountHooks.useCountUp(inView, 20, 900);
  const members = CountHooks.useCountUp(inView, 13000, 1400);
  const projects = CountHooks.useCountUp(inView, 315, 1100);

  const stats = useMemo(
    () => [
      {
        icon: trophyIcon,
        alt: "Trophy icon",
        value: awards,
        label: "Awards Rewarded",
        iconClass: "w-12 mt-[2px] -ml-[10px]",
      },
      {
        icon: usersIcon,
        alt: "Users icon",
        value: teachers,
        label: "Teachers",
        iconClass: "w-10 mt-[2px]",
      },
      {
        icon: smileyIcon,
        alt: "Smiley icon",
        value: members,
        label: "Successful Members",
        iconClass: "w-10 mt-[2px]",
      },
      {
        icon: briefcaseIcon,
        alt: "Briefcase icon",
        value: projects,
        label: "Completed Projects",
        iconClass: "w-10 mt-[2px]",
      },
    ],
    [awards, teachers, members, projects]
  );

  return (
    <>
      <section
        ref={ref}
        className="flex flex-col items-center text-center mt-[120px] bg-purple-100 h-[450px]"
      >
        <div>
          <h3 className="text-[34px] font-bold font-sans pt-[80px]">
            Here are a few numbers that we are proud of
          </h3>
        </div>

        <div className="flex flex-row gap-8 mt-12 w-full justify-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white shadow-lg rounded-xl flex flex-col items-center p-6 w-[320px] max-w-full border border-purple-200"
            >
              <img className={s.iconClass} src={s.icon} alt={s.alt} />
              <div className="flex flex-col justify-center items-center text-center mt-3">
                <h4 className="font-bold text-[40px] font-sans text-gray-900">
                  {formatCount(s.value)}+
                </h4>
                <p className="mt-1 text-purple-800 text-[18.5px] font-semibold font-sans">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
