import { headerOptions } from "@/utils/commonOptions";
import React from "react";
import * as motion from "framer-motion/client";

const About = () => {
  return (
    <div
      id={headerOptions[0].label}
      className="w-full h-[100lvh] flex flex-col md:flex-row py-[9lvh]"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            ease: "backInOut",
            duration: 0.5,
            delay: 0,
            damping: 10,
            stiffness: 150,
          }}
        >
          About Me
        </motion.h1>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full"></div>
    </div>
  );
};

export default About;
