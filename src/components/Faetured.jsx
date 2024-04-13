import React from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";

const Faetured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-stop="top, center"
      className="w-full py-20 relative z-10"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl md:text-4xl tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards  w-full flex gap-10 mt-10 md:justify-center md:items-center max-sm:flex-col">
          {/* card1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer w-1/2 rounded-xl h-[75vh] md:h-[60vh]  relative max-sm:w-full"
          >
            <h1 className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2  z-[9] text-8xl flex leading-none tracking-tighter text-[#CDEA68] overflow-hidden max-sm:left-1/2">
              {"FYDE".split("").map((item, index) => (
                <>
                  <motion.span
                    initial={{ y: "100%" }}
                    className="font-bold"
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                </>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Loading"
                className="w-full h-full bg-cover rounded-xl"
                whileHover={{ scale: 0.95 }}
                transition={{ ease: easeInOut }}
              />
            </div>
          </motion.div>

          {/* card2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer w-1/2 rounded-xl h-[75vh] relative max-sm:w-full"
          >
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2  z-[9] text-8xl flex overflow-hidden leading-none tracking-tighter text-[#CDEA68] max-sm:right-1/2">
              {"VISE".split("").map((item, index) => (
                <>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    className="font-bold"
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                </>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <motion.img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Loading"
                className="w-full h-full bg-cover rounded-xl"
                whileHover={{ scale: 0.95 }}
                transition={{ ease: easeInOut }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faetured;
