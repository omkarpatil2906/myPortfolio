import React from 'react'

function HomePage() {
    return (
        <div className="h-[92vh] overflow-hidden bg-light text-dark dark:bg-dark  dark:text-light font-poppins flex items-center justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl px-6 py-12 rounded-3xl">

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-lg text-gray-500 dark:text-gray-300">Hello, It's Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">Omkar Patil</h1>
                    <h3 className="text-xl mt-2">
                        And I'm a <span className="text-lightAccent dark:text-darkAccent font-semibold">Frontend Developer</span>
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    {/* Social + Button */}
                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white"><i className="fab fa-github"></i></a>
                        <a href="#" className="text-lightAccent dark:text-darkAccent hover:text-white"><i className="fab fa-linkedin"></i></a>
                    </div>

                    <button className="mt-6 bg-lightAccent dark:bg-darkAccent text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
                        Download CV
                    </button>
                </div>

                {/* Image */}
                <div className="flex-1 relative">
                    <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto shadow-[0_0_60px_#00f0ff]">
                        <img src="/your-profile.png" alt="profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomePage
