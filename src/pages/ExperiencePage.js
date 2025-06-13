import React from 'react';

function ExperiencePage() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Appystack Pvt. Ltd.",
      duration: "Apr 2024 – Present",
      highlights: [
        "Developed key modules for an HRMS project: Master KRA, Criteria, Appraisal Template, and Employee Registration Form – improved HR operations by ~40%.",
        "Built scalable features for a Campus Management System – reduced manual processes by 50%.",
        "Built OPD EMR module for a HIMS project – improved patient flow and medical record handling.",
        "Used React.js, MUI, and React Hook Form for reusable components – boosted maintainability by 30%.",
        "Integrated REST APIs and collaborated with UI/UX, backend, and QA teams.",
        "Optimized performance using lazy loading, image compression, and Context API – reduced load times by 50%."
      ]
    },
    {
      title: "Web Development Intern",
      company: "CodeKul – Corporate Software Development Training Institute",
      duration: "Jan 2024 – Mar 2024",
      highlights: [
        "Built small-scale, responsive web apps using React, HTML, CSS, and JavaScript.",
        "Integrated APIs, enhanced UI, and debugged using browser dev tools.",
        "Used Git for version control and participated in Agile workflows.",
        "Gained practical knowledge in development, debugging, and deployment."
      ]
    }
  ];

  return (
    <section className="bg-light dark:bg-dark text-dark dark:text-light pt-24 px-4 sm:px-8 md:px-12 font-poppins min-h-screen">
      <div className="max-w-[85rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-darkAccent dark:text-lightAccent">Experience</span>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 md:p-8 bg-light/80 dark:bg-dark/60 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  {exp.title} @ <span className="text-darkAccent dark:text-lightAccent">{exp.company}</span>
                </h3>
                <p className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
