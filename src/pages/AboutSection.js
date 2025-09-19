import React from "react";
import { motion } from "framer-motion";
import OmkarImg from "../common/assets/OmkarP.webp"

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
            {/* Decorative Grid Background (like homepage) */}
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

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                {/* Left Side - Image */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                        <img
                            src={OmkarImg} // Replace with your photo
                            alt="Omkar Patil"
                            className="relative rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg border-4 border-white dark:border-dark2"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    className="flex-1 space-y-6 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent"
                        variants={textVariants}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="text-base md:text-lg leading-relaxed text-dark dark:text-light"
                        variants={textVariants}
                        custom={0.3}
                    >
                        I’m <span className="font-semibold">Omkar Patil</span>, a{" "}
                        <span className="text-emeraldGreen font-semibold">Frontend Developer</span>{" "}
                        passionate about building modern, responsive, and scalable web
                        applications with smooth user experiences.
                    </motion.p>

                    <motion.p
                        className="text-base md:text-lg leading-relaxed text-dark dark:text-light"
                        variants={textVariants}
                        custom={0.6}
                    >
                        I worked as a{" "}
                        <span className="font-semibold text-techViolet">
                            React Developer at Appystack Pvt. Ltd. (Apr 2024 – Jun 2025)
                        </span>, where I specialized in{" "}
                        <span className="font-semibold text-techBlue">React Hook Form</span> and{" "}
                        <span className="font-semibold text-emeraldGreen">Material UI</span> to
                        craft user-friendly interfaces. Earlier, I interned at{" "}
                        <span className="font-semibold">CodeKul</span>, gaining practical
                        experience in web development.
                    </motion.p>

                    <motion.p
                        className="text-base md:text-lg leading-relaxed text-dark dark:text-light"
                        variants={textVariants}
                        custom={0.9}
                    >
                        With strong expertise in{" "}
                        <span className="font-semibold">
                            React.js, Tailwind CSS, and modern frontend technologies
                        </span>
                        , I focus on delivering clean, impactful digital solutions.
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
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
