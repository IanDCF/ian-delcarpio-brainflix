import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = ({ list, clickHandle, video }) => {
  return (
    <aside className="videos-container">
      <div className="videos">
        <h3 className="videos__title">NEXT VIDEOS</h3>
        {list
          ?.filter((element) => element.id !== video.id)
          .map((video) => {
            return (
              <Link
                className="videos__video"
                key={video.id}
                onClick={() => clickHandle(video.id)}
                to={`/${video.id}`}
              >
                <div className="videos__video-thumbnail">
                  <div
                    className="videos__thumbnail"
                    style={{ backgroundImage: `url(${video.image})` }}
                  ></div>
                </div>
                <div className="videos__video-info">
                  <h3 className="videos__info-title">{video.title}</h3>
                  <p className="videos__info-channel">{video.channel}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </aside>
  );
};

export default VideoList;
