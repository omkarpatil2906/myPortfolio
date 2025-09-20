import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
    return (
        <>
            <section className=" bg-light dark:bg-dark py-20 font-poppins  relative overflow-hidden">
                <div className="max-w-6xl space-y-5 mx-auto p-3">
                    <h2 className="text-3xl md:text-4xl uppercase font-poppins font-bold  text-center">
                        Let's{' '}
                        <span className="bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    <p className="text-xl font-josefin text-justify  text-gray-700 dark:text-gray-300">
                        Whether you need a portfolio, business website, or frontend development –
                        I’m ready to help you bring your ideas to life.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-dark2 p-8 rounded-2xl shadow-lg border border-techBlue transition-all duration-300">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-xl text-techBlue" />
                                <span>Belgaum, Karnataka, India</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-xl text-techBlue" />
                                <a
                                    href="mailto:ompatil2906@gmail.com"
                                    className="hover:underline"
                                    aria-label="Email"
                                >
                                    ompatil2906@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Message Button */}
                        <div className="flex flex-col items-center justify-center gap-6">
                            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                                Have a project in mind? Reach out and let’s build something great together.
                            </p>
                            <a
                                href="mailto:ompatil2906@gmail.com"
                                aria-label="Send Email"
                                className="mt-4 bg-gradient-to-r from-emeraldGreen to-techBlue text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 hover:scale-105 transition-all duration-300"
                            >
                                Drop Me a Message
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactPage;
