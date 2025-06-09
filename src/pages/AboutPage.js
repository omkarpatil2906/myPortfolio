import React from 'react';

function AboutPage() {
  return (
    <section
      id="about"
      className="bg-light text-dark dark:bg-dark dark:text-light py-16 px-6 md:px-12 font-poppins transition-colors duration-300"
    >
      <div
        className="max-w-5xl mx-auto p-6 md:p-10 rounded-2xl 
          bg-white dark:bg-[#0f1a2e] 
          shadow-lg ring-1 ring-darkAccent/30 
          transition duration-300 ease-in-out hover:shadow-darkAccent/30"
      >
        <h2 className="text-3xl font-poppins md:text-4xl font-bold mb-6 text-center">
          About <span className="text-darkAccent dark:text-lightAccent">Me</span>
        </h2>

        <p className="text-lg md:text-xl font-josefin leading-relaxed text-center md:text-left">
          I’m a <span className="font-semibold text-darkAccent dark:text-lightAccent">Frontend Developer</span> with 1 year of professional experience at{' '}
          <span className="font-semibold">Appystack Pvt. Ltd., Pune</span>, focused on crafting responsive and user-centric web applications.
        </p>

        <p className="text-lg md:text-xl mt-4 font-josefin leading-relaxed text-center md:text-left">
          I’ve worked with modern frontend tech like{' '}
          <span className="font-medium">React.js</span>, <span className="font-medium">HTML</span>, <span className="font-medium">CSS</span>, and libraries like{' '}
          <span className="font-medium">MUI</span>, <span className="font-medium">Bootstrap</span>, and <span className="font-medium">Tailwind CSS</span>. I also frequently use{' '}
          <span className="font-medium">React Hook Form</span> for efficient form handling.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'React.js',
            'Bootstrap',
            'MUI',
            'React Hook Form',
          ].map((tech, index) => (
            <span
              key={index}
              className="bg-light ring-1 ring-darkAccent text-darkAccent dark:bg-dark dark:ring-lightAccent dark:text-lightAccent px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-darkAccent hover:text-dark transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
