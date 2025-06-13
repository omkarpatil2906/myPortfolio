import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-light text-dark dark:text-light dark:bg-dark shadow-md transition-all duration-300">

            <div className="max-w-7xl mx-auto p-5 lg:py-7 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-poppins font-medium"><span className='dark:text-darkAccent'>P</span>ortfolio</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 font-josefin text-xl">
                    <ul className="hidden md:flex gap-6 font-josefin text-xl">
                        <li><a href="#home" className="hover:text-darkAccent dark:hover:text-lightAccent">Home</a></li>
                        <li><a href="#about" className="hover:text-darkAccent dark:hover:text-lightAccent">About</a></li>
                        <li><a href="#projects" className="hover:text-darkAccent dark:hover:text-lightAccent">Projects</a></li>
                        <li><a href="#experience" className="hover:text-darkAccent dark:hover:text-lightAccent">Experience</a></li>
                        <li><a href="#contact" className="hover:text-darkAccent dark:hover:text-lightAccent">Contact</a></li>
                    </ul>

                    {/* <li><Link to="/resume" className="hover:text-darkAccent dark:hover:text-lightAccent">Resume</Link></li> */}
                </ul>

                {/* Theme Toggle Button */}
                <button
                    className="ml-4 hidden md:inline-block"
                    onClick={() => setDarkMode(!darkMode)}
                >
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
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
