import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../assets/portfolioLogo.png"

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-12 mr-4"
            />
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Vignesh1066"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 flex items-center"
            >
              <FaGithub size={24} className="mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vigneshwaran-s-129856238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300 flex items-center"
            >
              <FaLinkedin size={24} className="mr-2" /> LinkedIn
            </a>
            <a
              href="mailto:vignesh4974@gmail.com"
              className="hover:text-teal-400 transition duration-300 flex items-center"
            >
              <FaEnvelope size={24} className="mr-2" /> Email
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">About Me</h3>
            <p className="text-sm text-gray-400">
              I'm a passionate Full Stack Developer with expertise in building scalable and user-friendly web applications. Let's create something amazing together!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">
                <a href="#home" className="hover:text-teal-400 transition duration-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#Education" className="hover:text-teal-400 transition duration-300">
                  Education
                </a>
              </li>
              <li className="mb-2">
                <a href="#Project" className="hover:text-teal-400 transition duration-300">
                  Project
                </a>
              </li>
              <li className="mb-2">
                <a href="#Experience" className="hover:text-teal-400 transition duration-300">
                  Experience
                </a>
              </li>
              <li className="mb-2">
                <a href="#About" className="hover:text-teal-400 transition duration-300">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-teal-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Contact Info</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Email: vignesh4974@gmail.com</li>
              <li className="mb-2">Phone: +91 8344024735</li>
              <li className="mb-2">Location: Chennai, India </li>
            </ul>
          </div>
        </div>

        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Vigneshwaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;