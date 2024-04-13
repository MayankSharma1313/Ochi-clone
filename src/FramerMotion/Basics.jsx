import React, { useState } from "react";
import { backInOut, motion, AnimatePresence } from "framer-motion";

const Main_framer = () => {
  const [isVisible, setIsVisisble] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
        <motion.button
          onClick={() => setIsVisisble(!isVisible)}
          layout
          className="px-10 py-5 text-white bg-zinc-600 block cursor-pointer"
        >
          Show/Hide
        </motion.button>
        <AnimatePresence mode="sync">
          {isVisible && (
            <motion.div
              initial={{ rotate: "0deg", scale: 0, y: 0 }}
              animate={{
                rotate: "150deg",
                scale: 1,
                y: [0, 150, -150, -150, 0],
                duration: 20,
              }}
              exit={{ rotate: "0deg", scale: 0, y: 0 }}
              transition={{
                ease: backInOut,
                duration: 3,
                times: [0, 0.25, 0.5, 0.95, 1],
              }}
              className="box w-[10vw] h-[10vw] bg-red-400 block"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Main_framer;
