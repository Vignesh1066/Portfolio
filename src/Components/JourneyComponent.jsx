import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const JourneySection = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white px-8 pt-16 pb-2"
    >
      <div className="w-full max-w-screen-xl mx-auto text-left">
        <h2 className="text-4xl sm:text-5xl text-center text-teal-400 font-semibold sm:mb-2 mb-5">
          Welcome to the Journey
        </h2>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-300 mb-1 sm:mb-2">
          Explore the Overview
        </h3>
        <p className="text-lg sm:text-xl leading-relaxed text-justify mb-8">
          Hey there! 👋 I'm Vigneshwaran, a Full-stack developer with a strong
          foundation in software engineering. As a BSc Computer Science student,
          I specialize in technologies like React, Node.js, Express, and
          MongoDB. I build efficient, user-friendly solutions with expertise in
          both front-end and back-end development. I craft intuitive UIs with
          React and optimize back-end services using Node.js. I’m always eager
          to explore new technologies and adapt to emerging trends. Let’s
          collaborate to create scalable, innovative solutions. Ready for the
          journey? 🚀
        </p>

        <div className="my-16">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform">
              <h4 className="text-xl font-semibold text-teal-400 mb-4 flex items-center justify-center">
                <FaReact className="mr-2 text-3xl" />
                Front-End Development
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaReact className="text-xl text-teal-400" />
                    <span>React.js</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-teal-400 w-4/5 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaHtml5 className="text-xl text-orange-500" />
                    <span>HTML5</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-orange-500 w-4/5 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaCss3Alt className="text-xl text-blue-500" />
                    <span>CSS3</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-blue-500 w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SiTailwindcss className="text-xl text-teal-400" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-teal-400 w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaBootstrap className="text-xl text-purple-600" />
                    <span>Bootstrap</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-purple-600 w-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform">
              <h4 className="text-xl font-semibold text-teal-400 mb-4 flex items-center justify-center">
                <FaNodeJs className="mr-2 text-3xl" />
                Back-End Development
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaNodeJs className="text-xl text-green-500" />
                    <span>Node.js</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-green-500 w-4/5 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SiExpress className="text-xl text-gray-400" />
                    <span>Express.js</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-gray-400 w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SiMongodb className="text-xl text-green-600" />
                    <span>MongoDB</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-green-600 w-4/5 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <SiMysql className="text-xl text-blue-600" />
                    <span>MySQL</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-blue-600 w-2/3 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span>RESTful APIs</span>
                  </div>
                  <div className="w-20 bg-gray-600 h-2 rounded-full">
                    <div className="h-2 bg-teal-400 w-4/5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
