import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-light text-dark dark:text-light dark:bg-dark">
            <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-poppins font-medium"><span className='text-darkAccent'>P</span>ortfolio</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 font-josefin text-xl">
                    <li><Link to="/" className="hover:text-darkAccent dark:hover:text-lightAccent">Home</Link></li>
                    <li><Link to="/about" className="hover:text-darkAccent dark:hover:text-lightAccent">About</Link></li>
                    <li><Link to="/projects" className="hover:text-darkAccent dark:hover:text-lightAccent">Projects</Link></li>
                    <li><Link to="/experience" className="hover:text-darkAccent dark:hover:text-lightAccent">Experience</Link></li>
                    <li><Link to="/contact" className="hover:text-darkAccent dark:hover:text-lightAccent">Contact</Link></li>
                    <li><Link to="/resume" className="hover:text-darkAccent dark:hover:text-lightAccent">Resume</Link></li>
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
                <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 font-josefin text-xl">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
