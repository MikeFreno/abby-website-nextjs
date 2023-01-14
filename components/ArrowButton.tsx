import React from "react";

const ArrowButton = () => {
  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <div id="arrow" className="flex justify-center">
      <button className="circle" onClick={scrollDown}>
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

export default ArrowButton;
