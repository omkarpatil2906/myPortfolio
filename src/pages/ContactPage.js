// src/pages/ContactPage.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
    return (
        <section

            className="bg-light2 dark:bg-dark text-dark dark:text-light py-24  font-poppins  flex items-center"
        >
            <div className="max-w-4xl w-full mx-auto rounded-xl border border-darkAccent dark:border-lightAccent shadow-lg backdrop-blur-md bg-white/10 dark:bg-dark/30 p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Get in <span className="text-darkAccent dark:text-lightAccent">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-xl text-darkAccent dark:text-lightAccent" />
                            <span>Belgaum, Karnataka, India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-xl text-darkAccent dark:text-lightAccent" />
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=ompatil2906@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                ompatil2906@gmail.com
                            </a>

                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-xl text-darkAccent dark:text-lightAccent" />
                            <a href="tel:+917975789854" className="hover:underline">
                                +91 79757 89854
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Social */}
                    <div className="flex flex-col justify-center items-start md:items-center gap-4">
                        <p className="text-lg">
                            Feel free to connect with me on social media!
                        </p>
                        <div className="flex gap-6 text-2xl">
                            <a
                                href="https://www.linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkAccent dark:text-lightAccent hover:scale-110 transition-transform"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkAccent dark:text-lightAccent hover:scale-110 transition-transform"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Suggestion line */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
                    Have a suggestion? Reach out via email or LinkedIn!
                </p>
            </div>
        </section>
    );
}

export default ContactPage;
