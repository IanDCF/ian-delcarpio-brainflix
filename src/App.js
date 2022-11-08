import { useState } from "react";
import "./App.scss";
import CompsDiv from "./components/CompsDiv/CompsDiv";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import getVideos, { getVideoDetails } from "./utils/utils";

function App() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const clickHandle = (id) => {
    setVideoId(id);
    setVideos(getVideos(id));
    setVideoDetails(getVideoDetails(id));
  };

  return (
    <>
      <Navbar />
      <VideoPlayer video={videoDetails} />
      <CompsDiv video={videoDetails} list={videos} clickHandle={clickHandle} />
    </>
  );
}

export default App;
