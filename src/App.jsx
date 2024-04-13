import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Faetured from "./components/Faetured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import locomotiveScroll from "locomotive-scroll";
import Loader from "./components/Loader";

const App = () => {
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector("#your-scroll-container"), // Replace with your scroll container element
      smooth: true,
      smoothMobile: true,
      lerp: 1, // Adjust the lerp value for smoother movement
      multiplier: 5, // Adjust the multiplier for smoother scrolling
      // Adjust the easing value for smoother scrolling
      easing: 0.5, // Lower values result in smoother scrolling
      // Add any other options you need here
    });

    // Clean up the scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div
        div
        id="your-scroll-container"
        data-scroll-container
        className="w-full overflow-hidden min-h-screen text-white bg-zinc-900"
      >
        {/* <Loader /> */}
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Faetured />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
