import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function hideModal() {
  document.getElementById("fm-container")?.classList.add("hidden");
  document.querySelector("body")?.classList.remove("overflow-y-hidden");
}

function Filmmaker_modal() {
  return (
    <div id="fm-container" className="hidden">
      <div className="fixed inset-0 flex justify-center items-center h-screen fade-in">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative p-6 bg-white text-black rounded-lg w-4/6 mx-auto mt-10">
          <FontAwesomeIcon
            onClick={hideModal}
            icon={faXmark}
            className="absolute right-0 top-0 p-4 text-xl text-black hvr-grow cursor-pointer"
          />
          <div className="text-xl underline mb-4">
            Lorem ipsum dolor sit amet.
          </div>
          <p className="text-md mb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            nam illo adipisci, rerum repudiandae ullam excepturi repellat
            similique nobis libero. Vel soluta enim dolores labore autem tempora
            laboriosam. Doloremque laboriosam pariatur recusandae nobis enim
            libero eveniet cum blanditiis architecto voluptatem, iste autem
            reprehenderit exercitationem similique. Asperiores praesentium
            molestias perferendis?
          </p>
          <div className="absolute bottom-0 p-4 right-0">
            <a href="/film" className="cursor-pointer">
              See More -{">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filmmaker_modal;
