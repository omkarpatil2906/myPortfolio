import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FusionPhotoFilms from '../common/assets/FusionPhotoFilms.jpg';
import HealthCare from '../common/assets/HealthCare.avif';
import SellerList from '../common/assets/SellerList.jpg';
import Resort from '../common/assets/Resort.avif';
import './ProjectCarousel.css';
import { useInView } from 'react-intersection-observer';
import Tech from './Tech';

const projects = [
    {
        title: 'Fusion Photo Films',
        description:
            'A full-stack photography portfolio site with dynamic gallery management using LightGallery. Includes admin panel for photo uploads and category control.',
        image: FusionPhotoFilms,
        liveLink: 'https://fusionphotofilms.com/',
        github: 'https://github.com/omkarpatil2906/FusionPhotoFilms',
    },
    {
        title: 'Resort Management System',
        description:
            'Developed a complete resort management system with modules for managing rooms, users, background charges, and bookings. Implemented smart room allocation that considers both adults and children while preventing overbooking. Designed guest check-in and check-out workflows with pending payment alerts and integrated payment handling at the time of arrival. Built dynamic forms for guest details with room assignment validation, ensuring accurate data entry. Automated availability checks and booking history retrieval using Node.js APIs and MySQL stored procedures. Improved usability with a clean React.js and Tailwind CSS interface that adapts for both desktop and mobile users.\n\nTechnologies: React.js, Tailwind CSS, Node.js, Express.js, MySQL',
        image: Resort,
        liveLink: '#',
        github: '#',
    },

    {
        title: 'SellerList',
        description: 'A feature-rich e-commerce site with 50+ products, user auth, seller dashboard, and dynamic filtering for smoother shopping.',
        image: SellerList,
        liveLink: 'https://sellerlist02.netlify.app/',
        github: '#',
    },
    {
        title: 'OP Healthcare',
        description:
            'A clean, multi-page website for a healthcare service provider. Features include service listings, appointment request forms, and a modern UI.',
        image: HealthCare,
        liveLink: 'https://op-healthcare.netlify.app/',
        github: '#',
    },

];


// Animation variants similar to team page
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const imageVariants = {
    hover: {
        scale: 1.1,
        rotateY: 10,
        transition: { duration: 0.3 }
    }
};

function ProjectSection() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <>

            <section className=" py-20 px-6 md:px-12 font-poppins transition-all duration-500 relative overflow-hidden">


                <div className="max-w-[85rem] mx-auto relative z-10">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >


                        <motion.h2
                            className="text-2xl md:text-4xl pt-12 uppercase font-poppins font-bold mb-6 bg-gradient-to-r from-dark via-gray-700 to-dark dark:from-light dark:via-gray-300 dark:to-light bg-clip-text text-transparent leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Our <span className="bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent">Projects</span>

                        </motion.h2>

                        <motion.p
                            className="md:text-xl mb-8 font-josefin text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Discover our innovative solutions crafted with passion and precision for exceptional digital experiences.
                        </motion.p>
                    </motion.div>

                    {/* Projects Carousel */}
                    <div className="relative mb-16">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet-custom',
                                bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            className="project-carousel  cursor-pointer"
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        className="relative group h-full cursor-pointer"
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className="relative h-full flex flex-col justify-between dark:bg-dark2 rounded-3xl shadow-md transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
                                            whileHover={{
                                                y: -10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {/* Gradient overlay on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-br from-emeraldGreen/10 to-techBlue/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />

                                            {/* Project Image */}
                                            <motion.div
                                                className="relative overflow-hidden"
                                                variants={imageVariants}
                                                whileHover="hover"
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-56 object-cover transition duration-300"
                                                    loading="lazy"
                                                />
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-emeraldGreen to-techBlue opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                                />
                                                <motion.div
                                                    className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-emeraldGreen to-techBlue rounded-full flex items-center justify-center"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: hoveredCard === index ? 1 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <span className="text-white text-xs">✓</span>
                                                </motion.div>
                                            </motion.div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                                <motion.h3
                                                    className="text-lg font-semibold font-poppins mb-3 text-black dark:text-white"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {project.title}
                                                </motion.h3>
                                                <motion.p
                                                    className="text-sm text-gray-600 font-josefin dark:text-gray-400 flex-1 mb-4 line-clamp-4"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    {project.description}
                                                </motion.p>

                                                <motion.div
                                                    className="mt-auto flex gap-3"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    {project.liveLink && (
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="bg-gradient-to-r from-emeraldGreen to-techBlue text-white px-4 font-spaceGrotesk text-sm py-2 rounded-full font-semibold hover:opacity-90 transition flex-1 text-center"
                                                        >
                                                            Live Demo
                                                        </a>
                                                    )}
                                                </motion.div>
                                            </div>

                                            {/* Decorative Elements */}
                                            {/* <motion.div
                                            className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-emeraldGreen to-techBlue rounded-full opacity-20"
                                            animate={{
                                                rotate: hoveredCard === index ? 360 : 0,
                                                scale: hoveredCard === index ? 1.2 : 1,
                                            }}
                                            transition={{ duration: 0.5 }}
                                        /> */}
                                            <motion.div
                                                className="absolute bottom-4 right-4 w-12 h-1 bg-gradient-to-r from-emeraldGreen to-techBlue rounded-full"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-prev-custom absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-dark2 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <svg className="w-5 h-5 text-techBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="swiper-button-next-custom absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-dark2 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <svg className="w-5 h-5 text-techBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="py-16 px-6 md:px-12 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl  uppercase font-poppins md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Why <span className="bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent">Work With Me?</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl mb-10 font-josefin"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            I specialize in crafting modern, responsive, and scalable web applications with React and clean UI design
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { title: 'Creative Design', icon: '🎨', desc: 'Modern UI/UX built for real users.' },
                                { title: 'Responsive UI', icon: '📱', desc: 'Fully optimized across all devices.' },
                                { title: 'Reliable Code', icon: '💻', desc: 'Scalable, maintainable, clean code.' },
                                { title: 'Full Support', icon: '🤝', desc: 'Ongoing support and quick responses.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white cursor-pointer dark:bg-dark2 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Gradient blob animation */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-emeraldGreen/10 to-techBlue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />

                                    <div className="text-4xl mb-3 relative z-10">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 relative z-10 text-black dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
                                </motion.div>

                            ))}
                        </motion.div>
                    </div>
                </div>


            </section>

            <div>
                <Tech/>
            </div>
        </>
    );
}

export default ProjectSection;