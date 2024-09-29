import React from "react";
import * as motion from "framer-motion/client";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col items-between justify-center w-full h-[8lvh] bg-white bg-opacity-80 text-black z-50">
      <div className="flex justify-between items-center px-4">
        <div>logo</div>
        <nav role="navigation">
          <ul className="flex items-center justify-between gap-6">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <a href="#about" id="about" className="hover:text-gray-600">
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
            >
              <a href="#skills" id="skills" className="hover:text-gray-600">
                Skills
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.4 }}
            >
              <a href="#works" id="works" className="hover:text-gray-600">
                Works
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }}
            >
              <a href="#contact" id="contact" className="hover:text-gray-600">
                Contact
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
