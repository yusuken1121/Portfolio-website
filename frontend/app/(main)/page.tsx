// React
import * as motion from "framer-motion/client";

export default function Home() {
  const text = "full-stack developer".split("");

  const h2AnimationDelay = 1; // motion.h2のdelay
  const h2AnimationDuration = 0.5; // motion.h2のduration
  const textAnimationStart = h2AnimationDelay + h2AnimationDuration;
  return (
    <div>
      <div className="w-[70%] h-[100lvh]">
        <div className="flex flex-col justify-center items-start h-screen text-left">
          <motion.div
            initial={{ opacity: 0, y: "-30vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 0.5, delay: 0 }}
            className="mb-4 text-textGreenColor text-3xl"
          >
            <span>&lt;Hello/&gt;</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: "-30vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 0.5, delay: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            I am<span className="ml-2">, Yusuke Nagaoka</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: "-30vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "backInOut",
              duration: h2AnimationDuration,
              delay: h2AnimationDelay,
            }}
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r text-textGreenColor p-2"
          >
            {text.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.05,
                  delay: textAnimationStart + i * 0.05,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }}
                style={{ letterSpacing: "normal" }} // 文字間のスペースを調整
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
