import "./VideoDetails.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";
import ProfilePic from "../ProfilePic/ProfilePic";
import CommentIcon from "../../assets/icons/add_comment.svg";

const VideoDetails = ({ video }) => {
  return (
    <div className="details-container">
      <div className="details">
        <div className="details__all">
          <h1 className="details__title">{video.title}</h1>

          <div className="details__block">
            <div className="details__block-div">
              <p className="details__name">By {video.channel}</p>
              <p className="details__date">07/11/2021</p>
            </div>
            <div className="details__block-div">
              <div className="details__stats">
                <img
                  className="details__stats-icon"
                  src={ViewsIcon}
                  alt="Views Icon"
                />
                <p className="details__stats-total">{video.views}</p>
              </div>
              <div className="details__stats">
                <img
                  className="details__stats-icon"
                  src={LikesIcon}
                  alt="Likes Icon"
                />
                <p className="details__stats-total">{video.likes}</p>
              </div>
            </div>
          </div>

          <div className="details__description">
            <p>{video.description}</p>
          </div>

          <div className="details__comments-number">
            <p>3 Comments</p>
          </div>

          <div className="details__comments-form">
            <div className="details__form-pp">
              <div className="details__form-pp-div">
                <ProfilePic />
              </div>
            </div>

            <div className="details__form">
              <div className="details__form-div">
                <label htmlFor="comment" className="details__form-label">
                  JOIN THE CONVERSATION
                </label>

                <textarea
                  id="comment"
                  name="comment"
                  className="details__form-input"
                  placeholder="Add a new comment"
                ></textarea>
              </div>

              <button className="details__form-btn">
                <img
                  className="details__btn-icon"
                  src={CommentIcon}
                  alt="Comment Icon"
                />
                <div className="details__btn-text">COMMENT</div>
              </button>
            </div>
          </div>

          <div className="details__comments-list">
            {video.comments.map((comment) => {
              return (
                <div className="details__comment" key={comment.id}>
                  <div className="details__comment-pp">
                    <div className="details__pp"></div>
                  </div>

                  <div className="details__comment-info">
                    <div className="details__comment-name-date">
                      <div className="details__comment-name">
                        {comment.name}
                      </div>
                      <div className="details__comment-date">
                        {comment.timestamp}
                      </div>
                    </div>

                    <div className="details__comment-text">
                      {comment.comment}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
