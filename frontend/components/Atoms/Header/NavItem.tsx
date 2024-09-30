"use client";
import React from "react";
import * as motion from "framer-motion/client";
import Link from "next/link";

const NavItem = ({
  animationDelay,
  linkHref,
  label,
}: {
  animationDelay: number;
  linkHref: string;
  label: string;
}) => {
  const handleScrollToSection = () => {
    const targetElement = document.getElementById(label); // `linkHref`がIDになる
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: animationDelay }}
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        id={`#${label}`}
        onClick={handleScrollToSection}
        className="text-xl hover:text-gray-600 hover:cursor-pointer"
      >
        {label}
      </motion.button>
    </motion.li>
  );
};

export default NavItem;
