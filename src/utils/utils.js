import VideoDetails from "../data/video-details.json";
import VideoList from "../data/videos.json";

const getVideos = (videoId) => {
  return VideoList.filter((video) => video.id !== videoId);
};

export const getVideoDetails = (videoId) => {
  return VideoDetails.find((video) => video.id === videoId);
};

export default getVideos;
