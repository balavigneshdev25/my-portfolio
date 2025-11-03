"use client";

import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import ChangingProgressProvider from "./changeProvider";

function Skills() {
  const [skillData, setSkillData] = useState([]);

  const fetchData = () => {
    fetch("/proData.json")
      .then((res) => res.json())
      .then((data) => setSkillData(data.skills));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="skills" className="mt-10 p-5 scroll-mt-24">
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-[#9929fb] text-lg font-bold uppercase mt-2 md:mt-0">
          Skills
        </p>
        <h2 className="text-[#000000e6] text-2xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-wider">
          My Skills
        </h2>
        <p className="text-[#4a5565] text-sm sm:text-base lg:text-lg max-w-lg">
          From concept to creation, every line of code tells a story of design
          and detail.
        </p>
      </div>
      <div className="container mt-3 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center md:items-start gap-5  md:px-18 lg:px-18 py-0 md:py-10">
        {skillData?.map((skill, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center font-medium text-[16px] gap-2 bg-white shadow-2xl rounded-lg text-black py-4 px-2"
            >
              <p className="mb-1">{skill?.label}</p>

              <div className="w-[150px] h-[150px] flex items-center justify-center">
                <ChangingProgressProvider values={[0, skill.value]}>
                  {(percentage) => (
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        pathColor: "#9929fb", 
                        textColor: "#000",
                        trailColor: "#e5e5e5", 
                        pathTransition: "stroke-dashoffset 1s ease 0s",
                        textSize: "16px",
                        pathTransition:
                          percentage === 0
                            ? "none"
                            : "stroke-dashoffset 0.5s ease 0s",
                      })}
                    />
                  )}
                </ChangingProgressProvider>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
