import React, { useState, useEffect } from "react";
import "../App.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <>
          <div className="w-full h-screen z-[999999] fixed left-0 top-0 flex justify-center items-center bg-zinc-700 ">
            <div className="loader"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
