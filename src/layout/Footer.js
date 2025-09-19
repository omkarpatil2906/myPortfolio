import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaArrowUp, FaHeart } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const socialVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

const linkVariants = {
  hover: { x: 5, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

function Footer() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = ['home', 'about', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const activeClass = 'text-transparent bg-gradient-to-r from-emeraldGreen to-techBlue bg-clip-text font-semibold';
  const normalClass = 'text-gray-700 dark:text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-emeraldGreen hover:to-techBlue hover:bg-clip-text transition-all duration-300';

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark2 dark:via-dark dark:to-gray-900 text-dark dark:text-light border-t border-gradient-to-r from-emeraldGreen/20 to-techBlue/20 py-16 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(46, 204, 113, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 204, 113, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-emeraldGreen/20 to-techBlue/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-techViolet/20 to-emeraldGreen/20 rounded-full blur-2xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {sections.map(section => (
                <motion.li key={section} variants={linkVariants} whileHover="hover">
                  <button
                    onClick={() => handleLinkClick(section)}
                    className={`${activeSection === section ? activeClass : normalClass} capitalize text-sm font-medium`}
                  >
                    {section}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent">
              Follow Me
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: FaLinkedin, href: "", label: "LinkedIn" },
                { icon: FaGithub, href: "", label: "GitHub" },
                { icon: FaEnvelope, href: "mailto:ompatil2906@gmail.com", label: "Email" },
                { icon: FaInstagram, href: "", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-emeraldGreen/10 to-techBlue/10 flex items-center justify-center"
                  variants={socialVariants}
                  whileHover="hover"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
              <p>ompatil2906@gmail.com</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-gradient-to-r from-emeraldGreen/20 to-techBlue/20 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-xs md:text-sm font-manrope text-gray-500 dark:text-gray-400">
            <span>&copy; 2025 Omkar Patil. Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}>
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>All rights reserved.</span>
          </div>
          
          <div className="flex gap-4 text-xs md:text-sm">
            <motion.a href="#" className="text-gray-500 dark:text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-emeraldGreen hover:to-techBlue hover:bg-clip-text transition-all duration-300" whileHover={{ scale: 1.05 }}>Privacy Policy</motion.a>
            <motion.a href="#" className="text-gray-500 dark:text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-emeraldGreen hover:to-techBlue hover:bg-clip-text transition-all duration-300" whileHover={{ scale: 1.05 }}>Terms of Service</motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Top Button */}
      <motion.button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emeraldGreen to-techBlue text-white rounded-full shadow-lg flex items-center justify-center z-50 ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}

export default Footer;
