import React from "react";
import { Raleway } from "@next/font/google";

const raleway_100 = Raleway({ weight: "100", subsets: ["latin"] });

const ArrowButton = () => {
  function scrollDown() {
    window.scrollTo({
      top: 3 * window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex justify-center">
      <button
        className="noncircle"
        style={{ bottom: "-200vh" }}
        onClick={scrollDown}
      >
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

function CommercialWork() {
  return (
    <div className={raleway_100.className}>
      <div className="h-screen flex justify-center bgCommercialWork bg-cover">
        <div
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="text-white text-center border-b-2 mt-20 tracking-widest text-6xl max-w-min mx-auto container">
            Commercial Work
          </div>
          <div className="bg-[rgb(255,255,255,0.90)] pt-14 pb-14 pl-14 pr-6 right-0 w-screen lg:w-1/2 sm:w-3/4 absolute mt-24 sm:rounded-l-lg shadow-2xl">
            <h1 className="text-xl mb-2 underline">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              excepturi iure voluptate eaque possimus deleniti dignissimos
              maiores saepe delectus dolorem.
            </p>
            <iframe
              style={{ border: "0px" }}
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/cYaClf6ZI3k"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
            <div>
              <a href="/film" className="absolute px-8 pb-4 bottom-0 right-0">
                See More -{">"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ArrowButton />
    </div>
  );
}

export default CommercialWork;
