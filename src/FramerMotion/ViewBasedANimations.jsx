import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedANimations = () => {
  const ref = useRef(null);

  const InView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(InView);
  }, [InView]);

  return (
    <>
      <div className="w-full h-[150vh]"></div>
      <motion.div
        
        className="h-[60vh] w-[30vw] bg-zinc-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 300 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        style={{
          background: InView ? "green" : "red",
          transition: "1s background",
        }}
        className="w-full h-screen bg-red-600"
        ref={ref}
      ></div>
    </>
  );
};

export default ViewBasedANimations;
