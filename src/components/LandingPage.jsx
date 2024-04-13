import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.3"
        className="w-full h-screen bg-zinc-900 pt-1"
      >
        <div className="textstructure mt-52 px-20">
          {["We Create", "Eye-Opening", "Presentations"].map((elem, index) => (
            <>
              <div className="masker" key={index}>
                <div className="w-fit flex overflow-hidden">
                  {index === 1 && (
                    <motion.img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[9vw] h-[5.5vw]   relative top-[0.7vw] rounded-lg"
                    />
                  )}
                  <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-md">
                    {elem}
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="max-sm:px-5 border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 max-sm:flex-wrap max-sm:justify-center">
          {[
            "For Public and private companies",
            "From the first pitch to the IPO",
          ].map((item, index) => (
            <>
              <p className="max-sm:text-[14px] text-md font-light tracking-tight leading-none">
                {item}
              </p>
            </>
          ))}
          <div className="start flex items-center gap-5 cursor-pointer max-sm:mt-4">
            <div className="max-sm:text-[8px] px-5 py-2 border-[2px] border-zinc-500 rounded-full font-medium text-[1.2vw]  uppercase text-md max-sm:px-2 max-sm:py-1 ">
              Start the Project
            </div>
            <div className="max-sm:w-5 max-sm:p-1 max-sm:h-5 w-10 h-10 flex justify-center items-center  rounded-full border-[1px] border-zinc-400">
              <FaArrowUpLong className="rotate-[45deg]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
