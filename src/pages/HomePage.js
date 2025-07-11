import React from 'react'
import Omkar from '../common/assets/Omkar.jpeg'

function HomePage() {
    return (
        <div className="min-h-screen overflow-hidden bg-light text-dark dark:bg-dark dark:text-light font-poppins pt-14 flex items-center justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 max-w-7xl px-6 py-12 rounded-3xl w-full">

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-lg text-gray-500 dark:text-gray-300">Hello, It's Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">Omkar Patil</h1>
                    <h3 className="text-xl mt-2">
                        And I'm a <span className="text-lightAccent dark:text-darkAccent font-semibold">Fullstack Developer</span>
                    </h3>

                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white text-2xl transition-all duration-300 hover:scale-110">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white text-2xl transition-all duration-300 hover:scale-110">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white text-2xl transition-all duration-300 hover:scale-110">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <button>
                        <a
                            href="/assets/OmkarPatil.pdf"
                            download="Omkar_Patil_CV.pdf"
                            className="mt-4 bg-lightAccent dark:bg-darkAccent text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </button>
                </div>

                {/* Enhanced Profile Image - Half Circle Effect */}
                <div className="flex-1 relative flex justify-center">
                    <div className="relative">
                        {/* Background Circle with Glow */}
                        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-lightAccent/20 via-blue-500/20 to-purple-600/20 dark:from-darkAccent/20 dark:via-blue-400/20 dark:to-purple-500/20  relative overflow-hidden">


                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 p-1">
                                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 relative overflow-hidden">

                                    {/* Background Gradient */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 dark:from-cyan-400/20 dark:via-blue-400/20 dark:to-purple-500/20"></div>

                                    {/* Profile Image */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-80 md:w-96 md:h-96">
                                        <img
                                            src={Omkar}
                                            alt="profile"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    {/* Bottom Fade Overlay */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-100 via-transparent to-transparent dark:from-gray-900 opacity-60"></div>

                                    {/* Floating particles */}
                                    <div className="absolute inset-0">
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-float-1 opacity-70"></div>
                                        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-2 opacity-60"></div>
                                        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-500 rounded-full animate-float-3 opacity-50"></div>
                                        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-float-4 opacity-80"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Glow Effect */}
                        {/* <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse-glow pointer-events-none"></div> */}
                    </div>
                </div>
            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.02); opacity: 1; }
                }

                @keyframes pulse-glow {
                    0%, 100% { 
                        box-shadow: 0 0 30px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.2), 0 0 90px rgba(0, 240, 255, 0.1); 
                    }
                    50% { 
                        box-shadow: 0 0 40px rgba(0, 240, 255, 0.4), 0 0 80px rgba(0, 240, 255, 0.3), 0 0 120px rgba(0, 240, 255, 0.2); 
                    }
                }

                @keyframes float-1 {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
                    33% { transform: translateY(-15px) translateX(5px); opacity: 1; }
                    66% { transform: translateY(-8px) translateX(-3px); opacity: 0.8; }
                }

                @keyframes float-2 {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
                    25% { transform: translateY(-10px) translateX(-8px); opacity: 0.9; }
                    75% { transform: translateY(-18px) translateX(4px); opacity: 0.7; }
                }

                @keyframes float-3 {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
                    40% { transform: translateY(-12px) translateX(6px); opacity: 0.8; }
                    80% { transform: translateY(-5px) translateX(-4px); opacity: 0.6; }
                }

                @keyframes float-4 {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
                    30% { transform: translateY(-20px) translateX(-6px); opacity: 1; }
                    70% { transform: translateY(-10px) translateX(8px); opacity: 0.9; }
                }

                .animate-spin-slow { 
                    animation: spin-slow 8s linear infinite; 
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
                .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
                .animate-float-3 { animation: float-3 8s ease-in-out infinite; }
                .animate-float-4 { animation: float-4 5s ease-in-out infinite; }

                /* Dark mode specific adjustments */
                .dark .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default HomePage