import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';

const TechExperience = () => {
  const techIcons = [
    { icon: <FaReact/>, name: 'React.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <DiHtml5 />, name: 'HTML' },
    { icon: <DiCss3 />, name: 'CSS' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <FaGithub />, name: 'GitHub' },
  ];

  return (
    <section className="w-full p-8 pb-14 bg-gradient-to-t from-gray-800  to-gray-900">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center text-teal-400 mb-8">Experience with Some Technologies</h2>
      <div className="flex gap-2 flex-wrap justify-center">
        {techIcons.map((tech, index) => (
          <div key={index} className="flex flex-col items-center m-4">
           <div
  className="w-20 h-20 flex items-center border-2 border-gray-800 justify-center rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-gradient-to-l hover:scale-105 transition-all duration-1000 ease-in-out mb-2"
>
              <div className="text-4xl text-emerald-500">{tech.icon}</div>
            </div>
            <p className="text-sm text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechExperience;
