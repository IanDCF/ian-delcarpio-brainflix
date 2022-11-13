import React from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./CompsDiv.scss";
import VideoList from "../VideoList/VideoList";

const CompsDiv = ({ video, list, clickHandle, videoId }) => {
  return (
    <div className="comps-div">
      <VideoDetails video={video} clickHandle={clickHandle} videoId={videoId} />
      <VideoList list={list} clickHandle={clickHandle} video={video} />
    </div>
  );
};

export default CompsDiv;
