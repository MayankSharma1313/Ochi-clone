import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        
        data-scroll-speed="0.02"
        className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl z-10"
      >
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden pr-20 ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="text-[17vw] leading-none font-semibold uppercase p-5 "
          >
            We are ouchi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="text-[17vw] leading-none font-semibold uppercase p-5"
          >
            We are ouchi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
