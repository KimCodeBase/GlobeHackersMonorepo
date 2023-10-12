import React from "react";
import "./HeaderVideoStyling.css";

function HeaderVideo() {
  return (
    <div className="header-video-container">
      <video className="header-video" autoPlay loop muted>
        <source src="./production_id_4205697 (2160p).mp4" type="video/mp4" />
      </video>
      <div className="header-text">
        <h1>Adventure Awaits</h1>
        <p>
          Embark on a journey with us as we explore the hidden gems of the world
        </p>
      </div>
    </div>
  );
}

export default HeaderVideo;
