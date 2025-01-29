import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // Importing the burger menu icon from React Icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuList = [
    { page: "Home", path: "/" },
    { page: "Education", path: "#education" },
    { page: "Projects", path: "#projects" },
    { page: "Experience", path: "#experience" },
    { page: "About", path: "#about" },
    { page: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full min-h-20 flex justify-between items-center bg-gray-900 gap-8 fixed top-0 z-30 px-6 py-4">
      {/* Logo on the Left as Image */}
      <div className="text-white font-bold text-xl">
        <Link to="/">
          <img
            src="/path/to/your/logo.png" // Replace with the path to your logo image
            alt="Logo"
            className="w-12 h-12" // Adjust the size of the logo as needed
          />
        </Link>
      </div>


      <button
        className="lg:hidden text-white"
        onClick={toggleMenu}
      >
        <AiOutlineMenu className="w-6 h-6" />
      </button>

      <div
        className={`lg:flex lg:gap-8 ${isMenuOpen ? "flex" : "hidden"} flex-col lg:flex-row w-full lg:w-auto justify-end`}
      >
        {menuList.map((value, index) => (
          <a
            key={index}
            href={value.path}
            onClick={() => setIsMenuOpen(false)} // Close menu on item click
            className={`px-3 py-1.5  ${
              value.path === location.pathname
                ? "border-solid border-b-[3px] rounded-b-none border-teal-500"
                : "border-solid hover:border-b-[3px] border-teal-500"
            } rounded text-white font-medium hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-white`}
          >
            {value.page}
          </a>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
