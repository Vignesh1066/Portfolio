import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold text-teal-400">Portfolio</h2>
          <p className="text-sm">Crafted with passion & dedication.</p>
        </div>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300 flex items-center"
          >
            <FaGithub size={24} className="mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300 flex items-center"
          >
            <FaLinkedin size={24} className="mr-2" /> LinkedIn
          </a>
          <a
            href="mailto:vignesh@example.com"
            className="hover:text-teal-400 transition duration-300 flex items-center"
          >
            <FaEnvelope size={24} className="mr-2" /> Email
          </a>
        </div>

        <div className="text-center sm:text-right mt-4 sm:mt-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Vignesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
