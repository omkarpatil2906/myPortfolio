import React from 'react';

function Footer() {
    return (
        <footer className="bg-light dark:bg-dark text-dark dark:text-light py-6 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Omkar Patil. All rights reserved.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Built with 💻 React | Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

export default Footer;
