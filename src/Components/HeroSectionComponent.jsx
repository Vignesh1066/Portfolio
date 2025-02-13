import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import heroSectionImage from "../assets/herosectionImage.jpg"
import resumePDF from "../assets/Vigneshwaran S-8344024735-FSD.pdf";

const HeroSectionComponent = () => {
  const name = "Hi, I'm Vigneshwaran";
  const designation = "Crafting Seamless Experiences as a Full Stack Developer";

  return (
    <section
      id="home"
      className="w-full h-[700px] flex text-white justify-center items-center relative bg-opacity-50 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroSectionImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute z-10 left-4 sm:left-10 flex flex-col justify-center items-start px-6 gap-4">
        <h1 className="text-4xl sm:text-[75px] font-medium bg-gradient-to-r from-teal-400 via-emerald-500 to-green-400 text-transparent bg-clip-text leading-tight">
          {name}
        </h1>
        <h4 className="font-medium text-lg sm:text-[24px] opacity-90">
          {designation}
        </h4>
        <p className="text-sm sm:text-base text-gray-300 max-w-[400px] mt-0 sm:mt-1 leading-relaxed">
          I'm passionate about creating scalable, intuitive web applications and interactive user interfaces. Let's build something amazing together.
        </p>
        <a href={resumePDF} download="Vigneshwaran_Resume.pdf">
          <button className="py-2 px-6 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-lg font-semibold text-white hover:bg-gradient-to-l transition-all duration-300 mt-4">
            Download CV
          </button>
        </a>
      </div>

      <div className="hidden sm:flex absolute right-4 sm:right-10 px-4 sm:px-6 flex-col gap-4 sm:gap-5">
        <a
          href="mailto:vignesh4974@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px] bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaEnvelope size={28} className="text-gray-800" />
        </a>

        <a
          href="https://github.com/Vignesh1066"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px] bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaGithub size={28} className="text-gray-800" />
        </a>

        <a
          href="https://www.linkedin.com/in/vigneshwaran-s-129856238"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px] bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaLinkedin size={28} className="text-gray-800" />
        </a>
      </div>

      <div className="sm:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-row gap-4">
        <a
          href="mailto:vignesh4974@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaEnvelope size={28} className="text-gray-800" />
        </a>

        <a
          href="https://github.com/Vignesh1066"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaGithub size={28} className="text-gray-800" />
        </a>

        <a
          href="https://www.linkedin.com/in/vigneshwaran-s-129856238"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-teal-400 transition"
        >
          <FaLinkedin size={28} className="text-gray-800" />
        </a>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
