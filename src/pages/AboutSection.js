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

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-20 font-poppins overflow-hidden"
    >
      {/* Decorative Grid Background (same as HomePage) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(46, 204, 113, 0.1) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(46, 204, 113, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-4xl uppercase font-poppins font-bold mb-10 
                     bg-gradient-to-r from-dark to-dark dark:from-light dark:to-light 
                     bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left text-dark dark:text-light">
          <motion.p
            className="text-base md:text-lg leading-relaxed"
            variants={textVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I’m <span className="font-semibold text-emeraldGreen">Omkar Patil</span>, a{" "}
            <span className="font-semibold text-techBlue">Frontend Developer</span> passionate
            about crafting modern, responsive, and scalable web applications with smooth
            user experiences.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            variants={textVariants}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I worked at{" "}
            <span className="font-semibold text-techViolet">
              Appystack Pvt. Ltd. (Apr 2024 – Jun 2025)
            </span>, specializing in{" "}
            <span className="text-emeraldGreen font-semibold">Material UI</span> and{" "}
            <span className="text-techBlue font-semibold">React Hook Form</span>. Earlier, I
            interned at <span className="font-semibold">CodeKul</span>, where I gained hands-on
            experience in web development.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed"
            variants={textVariants}
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            With strong expertise in{" "}
            <span className="font-semibold text-techViolet">
              React.js, Tailwind CSS, and modern frontend technologies
            </span>
            , I aim to deliver clean and impactful digital solutions.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#projects"
            className="inline-block bg-gradient-to-r from-emeraldGreen to-techBlue text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
