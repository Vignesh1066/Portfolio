import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuList = [
    { page: "Home", path: "#home" },
    { page: "About", path: "#about" },
    { page: "Education", path: "#education" },
    { page: "Experience", path: "#experience" },
    { page: "Project", path: "#project" },
    { page: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuList.map((item) => document.querySelector(item.path));
      let currentSection = "";

      for (let section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = `#${section.id}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full min-h-20 flex justify-between items-center bg-gray-900 fixed top-0 z-40 px-6 py-4">
        <div className="text-white font-bold text-xl">
          <a href="#home">
            <img src="/path/to/your/logo.png" alt="Logo" className="w-12 h-12" />
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={toggleMenu}>
          <AiOutlineMenu className="w-6 h-6" />
        </button>

        <div className="hidden lg:flex lg:gap-8">
          {menuList.map((value, index) => (
            <a
              key={index}
              href={value.path}
              className={`px-3 py-1.5 ${
                activeSection === value.path
                  ? "border-b-[3px] border-teal-500 rounded-none text-white"
                  : "hover:border-b-[3px] border-teal-500 hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-white"
              } rounded text-white font-medium`}
            >
              {value.page}
            </a>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 text-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <a href="#home">
            <img src="/path/to/your/logo.png" alt="Logo" className="w-10 h-10" />
          </a>
          <button className="text-white" onClick={toggleMenu}>
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col mt-6 space-y-6 px-6">
          {menuList.map((value, index) => (
            <a
              key={index}
              href={value.path}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveSection(value.path);
              }}
              className={`px-3 py-2 ${
                activeSection === value.path
                  ? "border-b-[3px] border-teal-500 rounded-none text-white"
                  : "hover:border-b-[3px] border-teal-500 hover:bg-gradient-to-r from-emerald-500 to-teal-500 hover:text-white"
              } rounded text-lg`}
            >
              {value.page}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export { Navbar };
