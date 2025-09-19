import React from "react";
import { motion } from "framer-motion";
import HomeImage from "../common/assets/tech boy.png";
import { Helmet } from "react-helmet-async";


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const HomePage = () => {
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Omkar Patil | React.js, Node.js & Full Stack Developer</title>
        <meta
          name="description"
          content="I am Omkar Patil, a passionate Full Stack Developer skilled in React.js, Node.js, SQL, JavaScript, HTML, CSS, and Tailwind CSS. I build modern, scalable, and responsive web applications."
        />
        <meta
          name="keywords"
          content="Omkar Patil, React developer, Node.js developer, SQL, JavaScript, Tailwind CSS, Full Stack Developer, Web Developer Portfolio"
        />
        <meta name="author" content="Omkar Patil" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Omkar Patil | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="React.js, Node.js & SQL Developer. Explore my personal portfolio showcasing modern, responsive, and scalable web projects."
        />
        <meta property="og:image" content="https://fusionphotofilms.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omkar Patil | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Passionate React.js, Node.js, SQL, and JavaScript developer. Check out my projects and contact me for collaborations."
        />
        <meta name="twitter:image" content="https://fusionphotofilms.com/og-image.jpg" />
      </Helmet>

      <section className="h-[100vh] font-poppins pt-14 flex items-center justify-center overflow-hidden relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(46, 204, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 204, 113, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl px-6 py-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-5">
            <div className="space-y-2">
              <motion.div
                className="inline-flex items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3
                  className="text-lg text-dark dark:text-light font-medium"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={textVariants}
                >
                  Hi, I’m
                </motion.h3>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Omkar Patil
              </motion.h1>

              <motion.p
                className="mt-4 text-base capitalize md:text-lg max-w-md mx-auto md:mx-0"
                initial="hidden"
                animate="visible"
                custom={1.2}
                variants={textVariants}
              >
                A Full Stack Developer skilled in React.js, Node.js, SQL, and
                modern web technologies. I craft responsive, scalable, and
                user-friendly web applications.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div className="flex justify-center md:justify-start gap-4 flex-wrap mb-8">
              <motion.button
                onClick={() => handleLinkClick("projects")}
                className="bg-gradient-to-r from-emeraldGreen to-techBlue text-white px-4 lg:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={2.0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Explore Projects"
              >
                Explore Projects
              </motion.button>
              <motion.div
                className="group relative rounded-full p-[2px] transition-all duration-300 bg-gradient-to-r from-emeraldGreen to-techBlue"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={2.2}
              >
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="w-full h-full bg-white dark:bg-dark hover:text-light px-4 lg:px-8 py-3 rounded-full font-semibold transition-all duration-300 
                    group-hover:bg-transparent group-hover:text-white"
                  aria-label="Contact Me"
                >
                  <h2 className="bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent group-hover:bg-none group-hover:text-white transition-all duration-300">
                    Contact Me
                  </h2>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative group">
              {/* <div className="relative">
                <img
                  src={HomeImage}
                  alt="Omkar Patil - Full Stack Developer"
                  className="h-80 w-80 lg:h-[450px] lg:w-[450px]"
                  loading="eager"
                  fetchpriority="high"
                  width={600}
                  height={400}
                />
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
