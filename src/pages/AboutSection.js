import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Appystack Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Apr 2024 – Jun 2025",
      color: "text-emerald-500",
    },
    {
      company: "CodeKul",
      role: "Web Development Intern",
      period: "Internship",
      color: "text-violet-500",
    },
  ];

  const skills = [
    { name: "React.js", level: "Expert", color: "text-cyan-500" },
    { name: "JavaScript", level: "Advanced", color: "text-yellow-500" },
    { name: "Tailwind CSS", level: "Expert", color: "text-teal-500" },
    { name: "Material UI", level: "Advanced", color: "text-blue-500" },
    { name: "React Hook Form", level: "Advanced", color: "text-purple-500" },
    { name: "Node.js", level: "Intermediate", color: "text-green-500" },
    { name: "SQL", level: "Intermediate", color: "text-orange-500" },

  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-light dark:bg-dark py-5 font-poppins relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 184, 148, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 184, 148, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-40 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-emerald-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-violet-500/10 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Centered Title Section */}
      <div
        className={`transform transition-all text-center duration-700 delay-400 ${isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
          }`}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-light leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
       
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-160px)]">
        {/* Parent Wrapper - 80% width, centered */}
        <div className="flex flex-col lg:flex-row w-[80%] mx-auto items-center gap-12">

          {/* LEFT: Skills (40%) */}
          <div className="w-full lg:w-[40%]">
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
                }`}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Main Card */}
                <div className="relative bg-light2 dark:bg-dark2 rounded-3xl p-8 border border-dark/10 dark:border-light/10 hover:scale-105 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
                    Technical Skills
                  </h3>

                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 bg-light dark:bg-dark rounded-lg border border-dark/10 dark:border-light/10 hover:border-emerald-500/30 transition-all duration-300"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <span className={`${skill.color} font-medium`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-dark/60 dark:text-light/60">
                            {skill.level}
                          </span>
                          <div className="w-16 h-2 bg-dark/10 dark:bg-light/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${skill.level === "Expert"
                                ? "w-full bg-emerald-500"
                                : skill.level === "Advanced"
                                  ? "w-4/5 bg-blue-500"
                                  : "w-3/5 bg-violet-500"
                                } rounded-full transition-all duration-1000`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-lg shadow-lg animate-bounce">
                    💻
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg animate-pulse">
                    🚀
                  </div>
                  <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
                    ⭐
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Card */}
              <div className="absolute -top-8 left-12 w-6 h-6 bg-emerald-500/20 rounded border border-emerald-500/40 animate-float"></div>
              <div className="absolute top-12 -right-6 w-4 h-4 bg-blue-500/20 rounded-full border border-blue-500/40 animate-float delay-500"></div>
              <div className="absolute bottom-8 left-8 w-5 h-5 bg-violet-500/20 rounded border border-violet-500/40 animate-float delay-1000"></div>
            </div>
          </div>

          {/* RIGHT: About Text (60%) */}
          <div className="w-full lg:w-[60%] space-y-8">
            <div
              className={`space-y-6 transform transition-all duration-700 delay-600 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
                }`}
            >
              <p className="text-base md:text-lg text-dark/80 dark:text-light/80 leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-emerald-500">
                  Omkar Patil
                </span>
                , a passionate{" "}
                <span className="font-semibold text-blue-500">
                  Frontend Developer
                </span>{" "}
                who loves crafting modern, responsive, and scalable web
                applications that deliver exceptional user experiences.
              </p>

              <p className="text-base md:text-lg text-dark/80 dark:text-light/80 leading-relaxed">
                With expertise in{" "}
                <span className="font-semibold text-violet-500">
                  React.js, Tailwind CSS, and modern frontend technologies
                </span>
                , I focus on writing clean, efficient code and creating digital
                solutions that make a real impact.
              </p>
            </div>

            {/* Experience */}
            <div
              className={`space-y-4 transform transition-all duration-700 delay-800 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
                }`}
            >
              <h3 className="text-lg font-semibold text-dark dark:text-light mb-4">
                Professional Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-light2 dark:bg-dark2 rounded-xl p-4 border border-dark/10 dark:border-light/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${exp.color}`}>
                      {exp.company}
                    </h4>
                    <span className="text-sm text-dark/60 dark:text-light/60">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-dark/70 dark:text-light/70">{exp.role}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className={`pt-4 transform transition-all duration-700 delay-1000 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
                }`}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;