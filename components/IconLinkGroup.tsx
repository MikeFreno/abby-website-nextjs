import React from "react";

function IconLinkGroup(props: { color: string }) {
  return (
    <div>
      <a
        className={`mx-2 text-gray-700 sm:text-${props.color} hvr-grow`}
        href="https://www.linkedin.com/in/abigail-weinick/"
        target={"_blank"}
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        className={`mx-2 text-gray-700 sm:text-${props.color} hvr-grow`}
        href="https://vimeo.com/abigailm"
        target={"_blank"}
      >
        <i className="fa fa-vimeo" aria-hidden="true"></i>
      </a>
      <a
        className={`mx-2 text-gray-700 sm:text-${props.color} hvr-grow`}
        href="https://www.instagram.com/_abigailthesnail_/"
        target={"_blank"}
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a
        className={`mx-2 text-gray-700 sm:text-${props.color} hvr-grow`}
        href="https://www.youtube.com/channel/UCPIjchDkDoWPC9xz_wWMAwQ"
        target={"_blank"}
      >
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
      <a
        className={`mx-2 text-gray-700 sm:text-${props.color} hvr-gro`}
        href="https://www.imdb.com/name/nm11670632/?ref_=nm_mv_close"
        target={"_blank"}
      >
        <i className="fa fa-imdb" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default IconLinkGroup;
