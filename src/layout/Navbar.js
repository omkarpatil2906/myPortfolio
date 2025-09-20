import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const sections = ['home', 'about', 'projects', 'contact'];

    const handleLinkClick = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.innerHeight / 3;

            for (let i = 0; i < sections.length; i++) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= scrollPos && rect.bottom >= scrollPos) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeClass =
        'bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent font-bold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-emeraldGreen after:to-techBlue after:rounded-full';
    const normalClass =
        'hover:bg-gradient-to-r hover:from-emeraldGreen hover:to-techBlue hover:bg-clip-text hover:text-transparent hover:font-bold transition-all duration-300 relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-emeraldGreen hover:after:to-techBlue hover:after:rounded-full';

    return (
        <nav className="relative w-full bg-light dark:bg-dark font-poppins z-50 border-b border-dark/10 dark:border-light/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 184, 148, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 184, 148, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Main Navbar */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center py-4 lg:py-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative">
                            {/* Logo Background */}
                            <div className="w-10 h-10 bg-gradient-to-r from-emeraldGreen to-techBlue rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <span className="text-white font-bold text-lg">O</span>
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-emeraldGreen to-techBlue rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                        </div>
                        <div className="text-2xl font-bold text-dark dark:text-light group-hover:scale-105 transition-transform duration-300">
                            mkar <span className="text-emeraldGreen">P</span>atil
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-6 font-medium text-base text-dark dark:text-light">
                            {sections.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleLinkClick(item)}
                                        className={`${
                                            activeSection === item ? activeClass : normalClass
                                        } py-2 px-4 rounded-lg capitalize relative`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <div className="relative">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="relative w-16 h-8 rounded-full bg-light2 dark:bg-dark2 border-2 border-dark/20 dark:border-light/20 p-1 transition-all duration-300 hover:border-emeraldGreen/50"
                            >
                                <div
                                    className={`absolute top-0.5 w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                                        darkMode
                                            ? 'translate-x-8 bg-gradient-to-r from-emeraldGreen to-techBlue'
                                            : 'translate-x-0 bg-white dark:bg-gray-700 border border-dark/20 dark:border-light/20'
                                    }`}
                                >
                                    {darkMode ? (
                                        <Moon size={14} className="text-white" />
                                    ) : (
                                        <Sun size={14} className="text-yellow-500" />
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-12 h-6 rounded-full bg-light2 dark:bg-dark2 border-2 border-dark/20 dark:border-light/20 transition-all duration-300"
                        >
                            <div
                                className={`absolute top-0 w-5 h-5 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                                    darkMode
                                        ? 'translate-x-6 bg-gradient-to-r from-emeraldGreen to-techBlue'
                                        : 'translate-x-0 bg-white border border-dark/20'
                                }`}
                            >
                                {darkMode ? (
                                    <Moon size={10} className="text-white" />
                                ) : (
                                    <Sun size={10} className="text-yellow-500" />
                                )}
                            </div>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-light2 dark:bg-dark2 border border-dark/20 dark:border-light/20 hover:border-emeraldGreen/50 transition-all duration-300 hover:scale-105"
                        >
                            {isOpen ? (
                                <X size={20} className="text-dark dark:text-light" />
                            ) : (
                                <Menu size={20} className="text-dark dark:text-light" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-light2/95 dark:bg-dark2/95 backdrop-blur-md border-t border-emeraldGreen/20 dark:border-techBlue/20">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <ul className="space-y-3">
                            {sections.map((item, index) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleLinkClick(item)}
                                        className={`${
                                            activeSection === item 
                                                ? 'bg-gradient-to-r from-emeraldGreen to-techBlue text-white shadow-lg' 
                                                : 'text-dark dark:text-light hover:bg-emeraldGreen/10 hover:text-emeraldGreen'
                                        } w-full text-left py-3 px-4 rounded-xl capitalize text-base font-medium transition-all duration-300 hover:scale-105`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Footer */}
                        <div className="mt-6 pt-4 border-t border-dark/10 dark:border-light/10">
                            <div className="text-center text-sm text-dark/60 dark:text-light/60">
                                <span className="font-medium">Omkar Patil</span> - Full Stack Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slideDown { animation: slideDown 0.3s ease-out; }
            `}</style>
        </nav>
    );
}

export default Navbar;