import { useState } from "react";
import "./HomePage.scss";
import CompsDiv from "../../components/CompsDiv/CompsDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const apiKey = "3ab67408-e6b5-49e1-b43f-a0c0cc6a7703";
  const videosListURL = `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`;
  const videoDetailsURL = `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`;

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(videosListURL);
      const videosArr = [...data];
      setVideos(videosArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideos(videoId);
  }, []);

  const fetchVideoDetails = async () => {
    try {
      const { data } = await axios.get(videoDetailsURL);
      setVideoDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, []);

  const videoClicked = (vidId) => {
    return `https://project-2-api.herokuapp.com/videos/${vidId}?api_key=${apiKey}`;
  };

  const clickHandle = async (vidId) => {
    const { data } = await axios.get(videoClicked(vidId));
    setVideoId(vidId);
    setVideoDetails(data);
  };

  return (
    <>
      <VideoPlayer video={videoDetails} />
      <CompsDiv
        video={videoDetails}
        list={videos}
        clickHandle={clickHandle}
        videoId={videoId}
      />
    </>
  );
}

export default HomePage;
