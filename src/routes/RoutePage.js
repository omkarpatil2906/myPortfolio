// RoutePage.js
import React from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectSection from '../pages/ProjectPage';
import ExperiencePage from '../pages/ExperiencePage';
import ContactPage from '../pages/ContactPage';


const RoutePage = () => {
  return (
    <>
      <section id="home"><HomePage /></section>
      <section id="about"><AboutPage /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="experience"><ExperiencePage /></section>
      <section id="contact"><ContactPage /></section>
    </>
  );
};

export default RoutePage; 
