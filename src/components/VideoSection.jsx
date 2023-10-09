import React from "react";
import "./VideoSection.css";

function VideoSection() {
  const videoSrc = "https://www.youtube.com/embed/IZG-3tqOztg";

  return (
    <div className="video-container">
      <iframe
        className="video-frame"
        src={videoSrc}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoSection;
