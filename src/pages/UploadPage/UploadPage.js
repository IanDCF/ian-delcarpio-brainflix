import React from "react";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import "../../components/UploadBtn/UploadBtn";

const UploadPage = () => {
  return (
    <div className="upload-container">
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>

        <form className="upload__form">
          <div className="upload__form-thumbnail">
            <p className="upload__subheaders">VIDEO THUMBNAIL</p>
            <img
              className="upload__form-image"
              src={UploadImage}
              alt="Upload Thumbnail"
            />
          </div>

          <div className="upload__form-input">
            <div className="upload__form-title">
              <label htmlFor="title" className="upload__subheaders">
                TITLE YOUR VIDEO
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="upload__input-text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__form-description">
              <label htmlFor="description" className="upload__subheaders">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                id="descriptioin"
                name="description"
                className="upload__input-textarea"
                placeholder="Add a description to your video"
              />
            </div>
          </div>
        </form>

        <div className="upload__buttons">
          <Link className="upload-btn">
            <img
              className="upload-btn__icon"
              src={PublishIcon}
              alt="Publish Icon"
            />
            <div className="upload-btn__text">PUBLISH</div>
          </Link>
          <Link className="upload__buttons-cancel">
            <div className="upload__buttons-cancel-text">CANCEL</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
