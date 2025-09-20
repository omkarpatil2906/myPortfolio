import React, { lazy, Suspense, useEffect } from 'react';
import LoadingSpinner from '../common/loadingspinner/loadingSpinner';
import AboutSection from '../pages/AboutSection';
import ExperienceSection from '../pages/ExperienceSection';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectSection = lazy(() => import('../pages/ProjectPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

const RoutePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      {/* Home Section */}
      <section id="home">
        <HomePage />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Experience / Services Section */}
      {/* <section id="experience">
        <ExperienceSection />
      </section> */}

      {/* Projects Section */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPage />
      </section>
    </Suspense>
  );
};

export default RoutePage;
