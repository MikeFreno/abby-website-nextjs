import React from "react";
import { Raleway } from "@next/font/google";
import Header from "./Header";
import Photographer_modal from "./Photographer_modal";
import Filmmaker_modal from "./Filmmaker_modal";
import Writer_modal from "./Writer_modal";

const raleway_100 = Raleway({ weight: "100", subsets: ["latin"] });

const ArrowButton = () => {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <div id="arrow" className="flex justify-center">
      <button className="circle" style={{ bottom: 0 }} onClick={scrollDown}>
        <svg
          className="arrow rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60px"
          height="80px"
          viewBox="0 0 50 80"
          xmlSpace="preserve"
        >
          <polyline
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="
      0.375,0.375 45.63,38.087 0.375,75.8 "
          />
        </svg>
      </button>
    </div>
  );
};
function showFilmmakerModal() {
  document.getElementById("fm-container")?.classList.remove("hidden");
  document.querySelector("body")?.classList.add("overflow-y-hidden");
}
function showPhotographerModal() {
  document.getElementById("pm-container")?.classList.remove("hidden");
  document.querySelector("body")?.classList.add("overflow-y-hidden");
}
function showWriterModal() {
  document.getElementById("wm-container")?.classList.remove("hidden");
  document.querySelector("body")?.classList.add("overflow-y-hidden");
}
function Intro() {
  return (
    <div>
      <div className="h-screen flex justify-center bgMirrorImage bg-cover">
        <div className="p-16 my-auto bg-transparent ">
          <div className={raleway_100.className}>
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h1 className="text-4xl text-white text-center border-t-2 border-b-2 py-14">
                Hello, I'm Abby
              </h1>
              <div className="mt-8 -mb-8 text-white flex justify-center">
                <button
                  className="mx-2 px-4 py-1 border hover:bg-gray-50 hover:bg-opacity-20 active:bg-opacity-50"
                  onClick={showFilmmakerModal}
                >
                  Filmmaker
                </button>
                <Filmmaker_modal />
                <button
                  className="mx-2 px-4 py-1 border hover:bg-white hover:bg-opacity-20 active:bg-opacity-50"
                  onClick={showPhotographerModal}
                >
                  Photographer
                </button>
                <Photographer_modal />
                <button
                  className="mx-2 px-4 py-1 border hover:bg-gray-50 hover:bg-opacity-20 active:bg-opacity-50"
                  onClick={showWriterModal}
                >
                  Writer
                </button>
                <Writer_modal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArrowButton />
    </div>
  );
}

export default Intro;
