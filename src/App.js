// import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import { getVideos, getVideoDetails } from "./utils/utils";

function App() {
  // const [videoId, setVideoId] = useState(
  //   "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );
  // const [videos, setVideos] = useState(getVideos(videoId));
  // const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));
  return (
    <>
      <Navbar />
      <VideoPlayer />
      <VideoDetails />
    </>
  );
}

export default App;
