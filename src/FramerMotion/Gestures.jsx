import React from "react";
import { MotionConfig, easeInOut, motion } from "framer-motion";

const Gestures = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
        <MotionConfig transition={{ duration: 0.125, ease: easeInOut }}>
          <motion.button
            className="px-20 py-5 text-white bg-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8, rotate: "3.5deg" }}
          >
            Click
          </motion.button>
          <motion.button
            className="px-20 py-5 text-white bg-zinc-400"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9, rotate: "13.5deg" }}
          >
            Click
          </motion.button>
        </MotionConfig>
      </div>
    </>
  );
};

export default Gestures;
