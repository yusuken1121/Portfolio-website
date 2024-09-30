import React from "react";
import * as motion from "framer-motion/client";
import ThreeModel from "../Models/ThreeModel";
const Index = () => {
  const text = "Full-Stack Developer".split("");
  return (
    <>
      <div className="w-full h-[100lvh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <div className="flex flex-col justify-center items-center md:items-start h-full text-left">
            <motion.div
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
              className="mb-4 text-textGreenColor text-xl md:text-2xl lg:text-3xl"
            >
              <span>&lt;Hello/&gt;</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: "30vh" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                ease: "backInOut",
                duration: 0.5,
                delay: 0.5,
                damping: 10,
                stiffness: 200,
              }}
              className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              I am<span className="ml-2">, Yusuke Nagaoka</span>
            </motion.h1>

            <h2 className="text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold bg-clip-text bg-gradient-to-r text-textGreenColor z-[100]">
              {text.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.05,
                    delay: 1.5 + i * 0.05,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                  style={{ letterSpacing: "normal" }} // 文字間のスペースを調整
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <div className="flex items-center justify-center h-full">
            <ThreeModel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
