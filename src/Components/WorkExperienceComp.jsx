import React from "react";
import WhyGlobalLogo from "../assets/WhyGlobalLogo.webp"


const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Testing Intern",
      company: "Codoid Innovation Pvt Ltd",
      date: "Sep 2023 - Feb 2024",
      logo: WhyGlobalLogo,
      details: [
        "Performed both manual and automated testing to ensure the quality and reliability of software applications.",
        "Designed and executed test cases, scripts, and scenarios for functional, regression, and performance testing.",
        "Utilized automation tools like Selenium (or other relevant tools) to streamline repetitive test processes and improve efficiency.",
        "Identified, reported, and tracked bugs using bug-tracking tools, ensuring timely resolution and maintaining product quality.",
        "Collaborated with development teams to understand requirements and provide feedback on software usability and functionality.",
        "Contributed to the creation and maintenance of comprehensive test documentation, including test plans and reports.",
      ],
    },
    
    {
      role: "Full-Stack Web Developer Intern",
      company: "Why Global Services",
      date: "January 2024 - Present",
      logo: WhyGlobalLogo,
      details: [
        "Developed dynamic and responsive web applications using modern frameworks and libraries.",
        "Implemented secure and scalable APIs for seamless communication between front-end and back-end systems.",
        "Enhanced application performance through optimized database queries and caching techniques.",
        "Collaborated with the design team to ensure a cohesive user experience and responsive design.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-800  to-gray-900 text-white px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center mb-12">
          What I Have Done So Far
          <span className="block text-teal-400">Work Experience.</span>
        </h2>

        <div className="relative border-l-2 border-teal-400 pl-8">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-16 relative" 
            >
              <div className="absolute -left-[48px] -top-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                <span className="w-4 h-4 bg-gray-900 rounded-full"></span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{experience.date}</p>
              <div className="bg-gradient-to-t from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-start gap-4"
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-36 h-12 rounded bg-gray-700 p-1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-teal-400">
                    {experience.role}
                  </h3>
                  <h4 className="text-md text-gray-300 mb-4">{experience.company}</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
