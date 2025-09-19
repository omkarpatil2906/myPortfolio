import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const experiences = [
  {
    role: "Frontend Developer",
    company: "Appystack Pvt. Ltd.",
    duration: "Apr 2024 – Jun 2025",
    description:
      "Worked as a Frontend Developer, focusing on React.js, React Hook Form, and Material UI to build modern and responsive user interfaces. Collaborated with backend team for seamless API integrations.",
  },
  {
    role: "Web Development Intern",
    company: "CodeKul",
    duration: "Jan 2024 – Mar 2024",
    description:
      "Gained practical experience in web development, working with HTML, CSS, JavaScript, and React.js to create interactive web applications.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 md:px-12 lg:px-20 font-poppins overflow-hidden"
    >
      {/* Decorative Grid Background (like homepage & about) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(46, 204, 113, 0.15) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(52, 152, 219, 0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-dark2 bg-white/70 dark:bg-dark/60 backdrop-blur-sm hover:shadow-lg transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              custom={index * 0.3}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-dark dark:text-light">
                {exp.role}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-base md:text-lg text-dark dark:text-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
