import React from "react";
import * as motion from "framer-motion/client";
import Link from "next/link";
import NavItems from "../Molecules/Header/NavItems";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex flex-col items-between justify-center w-full h-[8lvh] bg-white bg-opacity-80 text-black z-50">
      <div className="flex justify-between items-center px-4">
        <div>logo</div>
        <nav role="navigation">
          <ul className="flex items-center justify-between gap-8">
            <NavItems />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
