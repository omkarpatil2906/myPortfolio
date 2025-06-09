import React, { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectSection from './pages/ProjectPage';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`font-poppins ${darkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'} min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomePage />
      <AboutPage />

      <ProjectSection/>
    </div>
  );
}

export default App;
