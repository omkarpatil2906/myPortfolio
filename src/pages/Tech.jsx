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
      <Helmet>
        <title>Tech Stack - MERN, Java, SQL, React | LifoFy Tech Belagavi</title>
        <meta
          name="description"
          content="Explore LifoFy Tech's powerful tech stack including MERN, Java, SQL, React.js, Spring Boot, and more. We build scalable web solutions from Belagavi, Maharashtra."
        />
        <meta
          name="keywords"
          content="MERN stack development, React developers in Belagavi, Java Spring Boot company, SQL developers India, full-stack web development, LifoFy Tech Belgaum, Belagavi tech company, Belagav web development"
        />
        <meta name="author" content="LifoFy Tech" />

        {/* Open Graph (for social media and sharing) */}
        <meta property="og:title" content="Our Tech Stack | LifoFy Tech" />
        <meta
          property="og:description"
          content="We specialize in modern web technologies like React.js, Node.js, MongoDB, SQL, Spring Boot, and more — delivering full-stack projects from Belagavi."
        />
        <meta property="og:url" content="https://lifofytech.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LifoFy Tech" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Stack - LifoFy Tech" />
        <meta
          name="twitter:description"
          content="Explore our MERN, Java, and SQL based web development stack from Belagavi, Maharashtra."
        />

        {/* Location targeting */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Belagavi, Maharashtra, India" />
      </Helmet>
      <section className="w-full overflow-hidden pt-12">

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
