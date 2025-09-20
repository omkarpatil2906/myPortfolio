import React from "react";
import {
  javascript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  sql,
} from "../common/assets";
import { Helmet } from "react-helmet-async";

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  // { name: "TypeScript", icon: typescript },
  // { name: "Java", icon: java },
  { name: "React JS", icon: reactjs },
  // { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  // { name: "SpringBoot", icon: springBoot },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "Git", icon: git },
  // { name: "Figma", icon: figma },
];


const Tech = () => {
  return (
    <>
     
      <section className=" bg-light dark:bg-dark py-5 font-poppins  relative overflow-hidden">

        <div className="relative overflow-hidden">
          <div className="flex gap-10 animate-marquee p-2 whitespace-nowrap">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="min-w-[140px] h-[120px] bg-white dark:bg-[#1c293a] text-center flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
