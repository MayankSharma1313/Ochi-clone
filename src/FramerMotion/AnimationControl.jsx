import React from "react";
import { motion, useAnimationControls } from "framer-motion";

export const AnimationControl = () => {
  const flipControls = useAnimationControls();
  const handleClick = () => {
    flipControls.start("yash");
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
        <button
          onClick={handleClick}
          className="px-10 py-5 text-white bg-zinc-600 block cursor-pointer"
        >
          Flip it
        </button>
        <motion.div
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
            yash: {
              rotate: "50deg",
            },
          }}
          initial="initial"
          animate={flipControls}
          className="box w-[10vw] h-[10vw] bg-red-400 block"
        ></motion.div>
      </div>
    </>
  );
};
