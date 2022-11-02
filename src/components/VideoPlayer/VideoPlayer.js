import React from "react";
import "./VideoPlayer.scss";
import VideoDetails from "../../data/video-details.json";
// import VideoList from "../../data/videos.json";

const VideoPlayer = () => {
  return (
    <>
      <div className="video-container">
        <video
          className="video"
          poster={VideoDetails[0].image}
          type="video/mp4"
        />
      </div>
    </>
  );
};

export default VideoPlayer;
