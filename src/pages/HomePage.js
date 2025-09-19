import React, { useEffect, useState } from 'react';
import omkar from "../common/assets/12.png";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="min-h-screen bg-light dark:bg-dark font-poppins pt-20 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div
          className="w-full h-full opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 184, 148, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 184, 148, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-32 right-20 w-20 h-20 bg-emeraldGreen/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-techViolet/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-techBlue/10 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Main Content - 70% Width Centered */}
      <div className="relative z-10 min-h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="w-[70%] max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-6">

             

              {/* Main Text */}
              <div className="space-y-4">
                <div
                  className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                >
                  <p className="text-lg md:text-xl text-dark/70 dark:text-light/70 font-light">
                    Hi, I'm
                  </p>
                </div>

                <div
                  className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-light leading-tight">
                    Omkar Patil
                  </h1>
                </div>

                <div
                  className={`transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue bg-clip-text text-transparent mb-4">
                    Full Stack Developer
                  </h2>
                  <p className="text-base md:text-lg text-dark/80 dark:text-light/80 max-w-xl leading-relaxed">
                    Passionate about creating exceptional digital experiences with modern web technologies.
                    Specializing in responsive, scalable, and user-friendly applications.
                  </p>
                </div>
              </div>

            

              {/* Action Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
              >
                <button
                  onClick={() => handleLinkClick("projects")}
                  className="group relative px-6 py-3 bg-gradient-to-r from-emeraldGreen to-techBlue text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emeraldGreen/30 hover:-translate-y-1"
                >
                  <span className="relative z-10">View My Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-techBlue to-emeraldGreen rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => handleLinkClick("contact")}
                  className="group px-6 py-3 bg-transparent border-2 border-dark dark:border-light text-dark dark:text-light rounded-xl font-semibold transition-all duration-300 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark hover:-translate-y-1"
                >
                  Get In Touch
                </button>
              </div>

             
            </div>

            {/* Visual Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
              >
                {/* Main Profile Card */}
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emeraldGreen via-techViolet to-techBlue rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                  {/* Profile Container */}
                  <div className="relative bg-light2 dark:bg-dark2 rounded-3xl p-6 border border-dark/10 dark:border-light/10 hover:scale-105 transition-all duration-500">
                    {/* Profile Image Placeholder */}
                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-emeraldGreen/20 via-techViolet/20 to-techBlue/20 rounded-2xl flex flex-col items-center justify-center border-2 border-emeraldGreen/20 relative overflow-hidden">
                      <div className="text-6xl font-bold text-emeraldGreen mb-2">
                        <img src={omkar} className='h-96 object-cover' alt="" />
                      </div>
                      <div className="text-sm text-dark/60 dark:text-light/60 font-medium">Full Stack Developer</div>

                      {/* Code Lines Effect */}
                      <div className="absolute top-4 left-4 right-4 space-y-2 opacity-20">
                        <div className="h-1 bg-emeraldGreen rounded w-3/4"></div>
                        <div className="h-1 bg-techViolet rounded w-1/2"></div>
                        <div className="h-1 bg-techBlue rounded w-5/6"></div>
                      </div>
                    </div>

                    {/* Floating Tech Icons */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-emeraldGreen rounded-xl flex items-center justify-center text-white text-lg shadow-lg animate-bounce">
                      ⚛️
                    </div>

                    <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-techViolet rounded-full flex items-center justify-center text-white text-sm shadow-lg animate-pulse">
                      JS
                    </div>

                    <div className="absolute top-1/4 -left-4 w-8 h-8 bg-techBlue rounded-lg flex items-center justify-center text-white text-xs shadow-lg">
                      DB
                    </div>

                    <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg animate-pulse delay-300">
                      CSS
                    </div>
                  </div>
                </div>

                {/* Floating Elements Around */}
                <div className="absolute -top-8 left-12 w-6 h-6 bg-orange-500/20 rounded border border-orange-500/40 animate-float"></div>
                <div className="absolute top-12 -right-6 w-4 h-4 bg-cyan-500/20 rounded-full border border-cyan-500/40 animate-float delay-500"></div>
                <div className="absolute bottom-8 left-8 w-5 h-5 bg-green-500/20 rounded border border-green-500/40 animate-float delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-wider text-dark/50 dark:text-light/50 font-medium">
            Scroll Down
          </span>
          <div className="w-5 h-8 border-2 border-dark/30 dark:border-light/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-emeraldGreen rounded-full mt-1 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HomePage;