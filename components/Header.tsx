import React, { useState } from "react";
import { Raleway } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import IconLinkGroup from "./IconLinkGroup";

const raleway_100 = Raleway({ weight: "100", subsets: ["latin"] });

function Header(props: { color: string }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (navOpen == false) {
      document.getElementById("menu-icon")?.classList.add("rotate-enlarge");
    } else {
      document.getElementById("menu-icon")?.classList.remove("rotate-enlarge");
      document
        .getElementById("menu-icon")
        ?.classList.add("reverse-rotate-enlarge");
      setTimeout(() => {
        document
          .getElementById("menu-icon")
          ?.classList.remove("reverse-rotate-enlarge");
      }, 500);
    }
  };
  return (
    <div className={raleway_100.className}>
      <nav className="fixed top-6 left-4 right-4 z-5">
        <div className={`flex text-${props.color} text-2xl pl-2 mt-2`}>
          <a
            href="/"
            className={`text-${props.color} no-underline hvr-grow-small`}
          >
            Abigail Weinick
          </a>
        </div>
        <div className="flex sm:justify-center justify-end sm:mr-0 mr-4">
          {/* have this spread and rotate on click */}
          <button
            className={`text-${props.color}  lg:hidden -mt-6`}
            id="nav-toggle"
            onClick={toggleNav}
          >
            <FontAwesomeIcon
              id="menu-icon"
              icon={faEllipsisV}
              className="text-2xl -mt-2"
            />
          </button>
          <div id="nav-dropdown" className="-mt-6 hidden lg:block">
            <a
              href="/film"
              className={`text-${props.color} px-2 hvr-grow-small`}
            >
              Film
            </a>
            <a
              href="/photography"
              className={`text-${props.color} px-2 hvr-grow-small`}
            >
              Photography
            </a>
            <a href="#" className={`text-${props.color} px-2 hvr-grow-small`}>
              Commercial Work
            </a>
            <a href="#" className={`text-${props.color} px-2 hvr-grow-small`}>
              About
            </a>
            <a href="#" className={`text-${props.color} px-2 hvr-grow-small`}>
              Contact
            </a>
          </div>
        </div>
        <div className="sm:flex justify-end hidden -mt-8">
          <IconLinkGroup color={`${props.color}`} />
        </div>
        <div
          className={`${
            navOpen ? "" : "hidden"
          } flex justify-end sm:justify-center`}
        >
          <div
            className="absolute z-10 mt-2 w-56 flex rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5
          focus:outline-none lg:hidden fade-in"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" id="menu-box">
              <a
                href="/film"
                className="text-gray-700 block px-4 py-2 text-sm no-underline"
              >
                Film
              </a>
              <a
                href="/photography"
                className="text-gray-700 block px-4 py-2 text-sm no-underline"
              >
                Photography
              </a>
              <a
                href="/commercial_work"
                className="text-gray-700 block px-4 py-2 text-sm no-underline"
              >
                Commercial Work
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm no-underline"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm no-underline"
              >
                Contact
              </a>
              <div className="sm:hidden ml-10">
                <IconLinkGroup color={`${props.color}`} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
