import React, { useState } from "react";
import { Link } from "react-scroll";
import IMGYAFE from "../images/jaflman.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MenuList = [
    { id: 1, link: "about", name: "About" },
    { id: 2, link: "projects", name: "Projects" },
    { id: 3, link: "experience", name: "Experiences" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-10 mt-4">
      <div className="w-full sm:w-4/5 md:w-3/5 h-16 bg-gray-900 bg-opacity-75 text-gray-200 flex items-center px-4 rounded-full shadow-lg">
        <div className="flex items-center space-x-2 mr-auto">
          <img
            src={IMGYAFE}
            alt="Profile"
            className="rounded-full h-12 w-12 border-2 border-gray-600"
          />
          <h1 className="text-xl font-semibold text-gray-200 whitespace-nowrap">
            HAMAOUI yaflman
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex md:space-x-10 space-y-2 md:space-y-0 absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent rounded-b-md md:rounded-none flex-col md:flex-row items-center justify-center transition-all duration-300 ease-in-out`}
        >
          {MenuList.map(({ id, link, name }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-400 hover:text-blue-900 transition duration-200"
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <div className="hidden md:block mr-4 flex-shrink-0">
          <a href="/cv_yaflman_-.pdf" download className="inline-block">
            <button className="bg-gray-700 hover:bg-gray-500 text-gray-200 font-semibold py-1 px-3 rounded-lg">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
