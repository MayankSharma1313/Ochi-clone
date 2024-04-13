import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      setDeltaX(deltaX / 100);
      setDeltaY(deltaY / 100);

      var angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angel - 180);
    });
  });

  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-0.5"
          className="w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] bg-no-repeat bg-cover bg-center relative"
        >
          {/* absolte div */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10  flex gap-10">
            {/* Outer white eye */}
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              {/* Inner eye */}
              <div
                style={{
                  transform: `translate(${deltaX}%,${deltaY}%) `,
                }}
                className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative"
              >
                {/* small eyelid */}
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-10  absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full max-sm:w-1/2 max-sm:h-1/2"></div>
                </div>
              </div>
            </div>

            {/* second eye */}
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
              {/* Inner eye */}
              <div
                className="w-2/3 h-2/3  bg-zinc-900 rounded-full relative"
                style={{
                  transform: `translate(${deltaX}%,${deltaY}%) `,
                }}
              >
                {/* small eyelid */}
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-10  absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full max-sm:w-1/2 max-sm:h-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
