import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { LofiFyLogo } from '../common/assets/logo';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const sections = ['home', 'about', 'experience', 'projects', 'contact'];

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
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);

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
        'bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text text-transparent font-extrabold relative';
    const normalClass =
        'hover:bg-gradient-to-r hover:from-emeraldGreen hover:to-techBlue hover:bg-clip-text hover:text-transparent hover:font-extrabold transition-all duration-300 relative';

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg border-gray-200/20 dark:border-gray-700/20'
                    : 'backdrop-blur-sm'
            }`}
        >
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(46, 204, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 204, 113, 0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center py-4 lg:py-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <LofiFyLogo />
                        </div>
                        <p className="text-2xl font-bold text-dark dark:text-light">LifoFy</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-6 font-josefin font-semibold text-lg text-dark dark:text-light">
                            {sections.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleLinkClick(item)}
                                        className={`${activeSection === item ? activeClass : normalClass} py-2 px-4 rounded-lg capitalize`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-16 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 p-1 transition-all duration-300"
                        >
                            <div
                                className={`relative w-6 h-6 rounded-full shadow-md transition-transform duration-300 transform ${
                                    darkMode
                                        ? 'translate-x-8 bg-gradient-to-r from-emeraldGreen to-techBlue'
                                        : 'translate-x-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500'
                                } flex items-center justify-center`}
                            >
                                {darkMode ? <Sun size={14} className="text-white" /> : <Moon size={14} className="text-gray-600 dark:text-gray-300" />}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={() => setDarkMode(!darkMode)} className="relative w-12 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-all duration-300">
                            <div
                                className={`relative top-0 w-5 h-5 rounded-full shadow-md transition-transform duration-300 transform ${
                                    darkMode ? 'translate-x-6 bg-gradient-to-r from-emeraldGreen to-techBlue' : 'translate-x-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500'
                                } flex items-center justify-center`}
                            >
                                {darkMode ? <Sun size={12} className="text-white" /> : <Moon size={12} className="text-gray-600 dark:text-gray-300" />}
                            </div>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-emeraldGreen/10 hover:to-techBlue/10"
                        >
                            {isOpen ? <X size={24} className="text-dark dark:text-light" /> : <Menu size={24} className="text-dark dark:text-light" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white/95 dark:bg-dark/95 backdrop-blur-md border-t border-emeraldGreen/10 dark:border-techBlue/10">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <ul className="space-y-4">
                            {sections.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleLinkClick(item)}
                                        className={`${activeSection === item ? activeClass : normalClass} w-full text-left py-3 px-4 rounded-lg capitalize text-lg font-medium`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
