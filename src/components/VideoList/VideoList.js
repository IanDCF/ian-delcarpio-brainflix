import "./VideoList.scss";

const VideoList = ({ list, clickHandle }) => {
  return (
    <aside className="videos-container">
      <div className="videos">
        <h3 className="videos__title">NEXT VIDEOS</h3>
        {list.map((video) => {
          return (
            <div
              className="videos__video"
              key={video.id}
              onClick={() => clickHandle(video.id)}
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
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default VideoList;
