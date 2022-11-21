import { useState } from "react";
import CompsDiv from "../../components/CompsDiv/CompsDiv";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const { vidId } = useParams();
  const videoId = vidId;

  const backEnd = `http://localhost:8080/videos`;

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(`${backEnd}`);
      const videosArr = [...data];
      setVideos(videosArr);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideos(videoId);
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const { data } = await axios.get(`${backEnd}/${videoId}`);
      setVideoDetails(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const clickHandle = async (vidId) => {
    const { data } = await axios.get(`${backEnd}/${vidId}`);
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
