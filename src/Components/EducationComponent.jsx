import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SRM Arts and Science College",
      duration: "2018 - 2021",
      description:
        "Specialized in software engineering, web development, and database systems. Graduated with distinction.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Vidya Vikas Boys Matriculation Higher Secondary School",
      duration: "2016 - 2018",
      description:
        "Focused on Mathematics and Computer Science, building a strong foundation for future studies.",
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-t from-gray-800  to-gray-900 text-white pt-5 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-teal-400 mb-12">
        Academic Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="w-full bg-gradient-to-b from-gray-800  to-gray-900 rounded-xl shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${0.3 * index}s`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaGraduationCap size={35} className="text-teal-400" />
                <h3 className="text-2xl font-semibold text-emerald-400">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic">{edu.duration}</p>
              <p className="text-gray-400 mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
