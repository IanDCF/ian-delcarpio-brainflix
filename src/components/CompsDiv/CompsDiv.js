import React from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import "./CompsDiv.scss";

import VideoList from "../VideoList/VideoList";

const CompsDiv = ({ video, list, clickHandle }) => {
  return (
    <div className="comps-div">
      <VideoDetails video={video} />
      <VideoList list={list} clickHandle={clickHandle} />
    </div>
  );
};

export default CompsDiv;
