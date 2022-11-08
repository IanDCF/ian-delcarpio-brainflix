import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ video }) => {
  return (
    <>
      <div className="video-container">
        <video className="video" poster={video.image} type="video/mp4" />
      </div>
    </>
  );
};

export default VideoPlayer;
