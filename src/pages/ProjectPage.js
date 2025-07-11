import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Zap, Users } from 'lucide-react';
import FusionPhotoFilms from '../common/assets/FusionPhotoFilms.jpg';

// Mock images for demonstration
const projectImages = {
    fusionPhotoFilms: FusionPhotoFilms,
    sellerList: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
};

const projects = [
    {
        title: 'Fusion Photo Films',
        description: 'A full-stack photography portfolio built using MERN stack. Integrated dynamic gallery view using LightGallery and implemented admin panel for content management.',
        techStack: ['React.js', 'LightGallery', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'],
        image: projectImages.fusionPhotoFilms,
        liveLink: 'https://fusionphotofilms.com/',
        github: 'https://github.com/omkarpatil2906/FusionPhotoFilms',
    },
    {
        title: 'SellerList E-commerce Platform',
        description: 'Built a feature-rich e-commerce platform with 50+ product listings, user authentication, and seller management, enhancing usability and engagement by 25%.',
        techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        image: projectImages.sellerList,
        liveLink: '#',
        github: '#',
    },
    {
        title: 'OP-HealthCare Platform',
        description: 'Engineered a healthcare platform enabling patients to book medical services from home, integrating real-time appointment scheduling and secure authentication.',
        techStack: ['React.js', 'Tailwind CSS', 'React Router Dom'],
        image: projectImages.healthcare,
        liveLink: '#',
        github: '#'
    }
];

function ProjectSection() {


    return (
        <section className=" min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 pt-24 px-6 md:px-12 py-12 font-sans transition-colors duration-300 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-2 mb-16">

                    <h2 className="text-3xl md:text-4xl  font-josefin font-extrabold text-center ">
                        My <span className="text-darkAccent dark:text-lightAccent ">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Crafting digital experiences with modern technologies and innovative solutions
                    </p>
                </div>



                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-200 dark:border-gray-700 flex flex-col h-full"

                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category}
                                </div>

                                {/* Quick Action Buttons */}
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col justify-between p-4 space-y-3 flex-grow">
                                <div className='space-y-3'>
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 ">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        Code
                                    </a>
                                </div>
                            </div>

                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>

                    ))}
                </div>



            </div>
        </section>
    );
}

export default ProjectSection;