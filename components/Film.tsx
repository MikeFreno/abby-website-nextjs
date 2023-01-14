import React from "react";
import { Raleway } from "@next/font/google";

const raleway_100 = Raleway({ weight: "100", subsets: ["latin"] });

const ArrowButton = () => {
  function scrollDown() {
    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex justify-center">
      <button
        className="noncircle"
        style={{ bottom: "-100vh" }}
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

function Film() {
  return (
    <div className={raleway_100.className}>
      <div
        id="film_bg"
        className="h-screen flex justify-center bgFilmSectionDefault bg-cover"
      >
        <div
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="text-white text-center border-b-2 mt-20 tracking-widest text-6xl">
            Film
          </div>
          <div
            className="text-white mt-56 w-full"
            onMouseLeave={() => {
              document
                .getElementById("film_bg")
                ?.classList.remove("bgHotTears");
              document.getElementById("film_bg")?.classList.remove("bgDirt");
              document.getElementById("film_bg")?.classList.remove("bgGrins");
            }}
          >
            <div className="text-center text-4xl">
              <a
                href="/film/grins"
                className="tracking-widest title-hvr-grow"
                onMouseEnter={() => {
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgHotTears");
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgDirt");
                  document.getElementById("film_bg")?.classList.add("bgGrins");
                }}
              >
                Grins
              </a>
            </div>
            <div className="text-center text-4xl mt-10">
              <a
                href="/film/hot-tears"
                className="tracking-widest title-hvr-grow"
                onMouseEnter={() => {
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgDirt");
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgGrins");
                  document
                    .getElementById("film_bg")
                    ?.classList.add("bgHotTears");
                }}
              >
                Hot Tears
              </a>
            </div>
            <div className="text-center text-4xl mt-10">
              <a
                href="/film/dirt"
                className="tracking-widest title-hvr-grow"
                onMouseEnter={() => {
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgHotTears");
                  document
                    .getElementById("film_bg")
                    ?.classList.remove("bgGrins");
                  document.getElementById("film_bg")?.classList.add("bgDirt");
                }}
              >
                Dirt
              </a>
            </div>
          </div>
        </div>
      </div>
      <ArrowButton />
    </div>
  );
}

export default Film;
