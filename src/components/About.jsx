import React from 'react';
import IMGYAF from "../images/IMGYAF.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <div className="section bg-gray-900 py-10">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className='flex flex-col justify-center h-full md:w-1/2 text-center md:text-left'>
                    <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold text-white animate-fadeInUp'>
                        Software Engineer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md mx-auto md:mx-0'>
                        Experienced software engineer skilled in full-stack development with React.js, Python, Java, and Flask, as well as SQL with additional knowledge in NodeJs and C#. Proficient in building web applications and implementing machine learning algorithms. Successfully contributed to the development of various projects, including machine learning-powered applications and web platforms, enhancing operational efficiency and user satisfaction. Adept at leveraging modern technologies and frameworks to deliver scalable and user-centric applications, with experience in using diverse backend technologies suitable for enterprise solutions.
                    </p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/yaflman-hamaoui/" target="_blank" rel="noopener noreferrer" className='text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 cursor-pointer'>
                            LinkedIn 
                            <span className="ml-2">
                                <FaLinkedin size={22} />
                            </span>
                        </a>
                        <a href="https://github.com/Yaflman" target="_blank" rel="noopener noreferrer" className='text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 cursor-pointer'>
                            GitHub
                            <span className="ml-2">
                                <FaGithub size={22} />
                            </span>
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
                    <img src={IMGYAF} alt="my profile" className="rounded-2xl w-2/5 md:w-3/5" /> {/* Increased to w-2/5 and md:w-3/5 */}
                </div>
            </div>
        </div>
    );
}

export default About;
