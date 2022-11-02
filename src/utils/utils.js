import VideoDetails from "../data/video-details.json";
import VideoList from "../data/videos.json";

export const getVideos = (videoId) => {
  return VideoList.filter((video) => video.id !== videoId);
};

export const getVideoDetails = (videoId) => {
  VideoDetails.forEach((video) => {
    if (video.id === videoId) {
      return video;
    }
  });
};
