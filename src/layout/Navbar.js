import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // ✅ Handle click
    const handleLinkClick = (id) => {
        setActiveSection(id); // set active immediately
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // close mobile menu
    };

    // ✅ Observe scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const scrollPos = window.innerHeight / 3; // check which section is closest to top 1/3 of viewport

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


    const activeClass = 'text-darkAccent dark:text-lightAccent font-semibold';
    const normalClass = 'hover:text-darkAccent dark:hover:text-lightAccent';

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-light text-dark dark:text-light dark:bg-dark transition-all duration-300">
            <div className="max-w-7xl mx-auto p-5 lg:py-7 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-poppins font-medium">
                    <span className="dark:text-darkAccent">P</span>ortfolio
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-josefin text-xl">
                    <li><button onClick={() => handleLinkClick('home')} className={activeSection === 'home' ? activeClass : normalClass}>Home</button></li>
                    <li><button onClick={() => handleLinkClick('about')} className={activeSection === 'about' ? activeClass : normalClass}>About</button></li>
                    <li><button onClick={() => handleLinkClick('projects')} className={activeSection === 'projects' ? activeClass : normalClass}>Projects</button></li>
                    <li><button onClick={() => handleLinkClick('experience')} className={activeSection === 'experience' ? activeClass : normalClass}>Experience</button></li>
                    <li><button onClick={() => handleLinkClick('contact')} className={activeSection === 'contact' ? activeClass : normalClass}>Contact</button></li>
                </ul>

                {/* Theme Toggle */}
                <button className="ml-4 hidden md:inline-block" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Toggle */}
                <div className="md:hidden flex gap-2 items-center">
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full z-20 bg-light dark:bg-dark text-dark dark:text-light md:hidden flex flex-col gap-4 px-6 py-6 font-josefin text-xl shadow-lg transition-all duration-300">
                    <li><button onClick={() => handleLinkClick('home')} className={activeSection === 'home' ? activeClass : normalClass}>Home</button></li>
                    <li><button onClick={() => handleLinkClick('about')} className={activeSection === 'about' ? activeClass : normalClass}>About</button></li>
                    <li><button onClick={() => handleLinkClick('projects')} className={activeSection === 'projects' ? activeClass : normalClass}>Projects</button></li>
                    <li><button onClick={() => handleLinkClick('experience')} className={activeSection === 'experience' ? activeClass : normalClass}>Experience</button></li>
                    <li><button onClick={() => handleLinkClick('contact')} className={activeSection === 'contact' ? activeClass : normalClass}>Contact</button></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
