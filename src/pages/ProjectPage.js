import React from 'react';
import FusionPhotoFilms from '../common/assets/FusionPhotoFilms.jpg';


const projects = [
    {
        title: 'Fusion Photo Films',
        description:
            'A full-stack photography portfolio built using MERN stack. Integrated dynamic gallery view using LightGallery and implemented admin panel for content management.',
        techStack: ['React.js', 'LightGallery', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js',],
        image: FusionPhotoFilms,
        liveLink: 'https://fusionphotofilms.com/',
        github: 'https://github.com/omkarpatil2906/FusionPhotoFilms',
    },
    // You can add more projects here
];

function ProjectSection() {
    return (
        <section className="bg-light text-dark dark:bg-dark dark:text-light pt-24 px-6 md:px-12 font-poppins transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    My <span className="text-darkAccent dark:text-lightAccent">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark rounded-2xl   shadow-lg ring-1 ring-darkAccent/30  transition duration-300 ease-in-out hover:shadow-darkAccent/30 overflow-hidden flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-base text-gray-600 dark:text-gray-400 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-light dark:bg-darkAccent text-dark dark:text-black text-sm font-medium px-3 py-1 rounded-full shadow"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-4">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-darkAccent dark:bg-lightAccent text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-darkAccent dark:text-lightAccent underline font-medium self-center"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
