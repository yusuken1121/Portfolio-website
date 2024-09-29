import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col items-between justify-center w-full h-[8lvh] bg-white bg-opacity-80 text-black z-50">
      <div className="flex justify-between items-center px-4">
        <div>logo</div>
        <nav role="navigation">
          <ul className="flex items-center justify-between gap-6">
            <li>
              <a href="#about" id="about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#skills" id="skills" className="hover:text-gray-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#works" id="works" className="hover:text-gray-600">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" id="contact" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
