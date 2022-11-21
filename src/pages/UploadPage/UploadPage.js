import React from "react";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import "../../components/UploadBtn/UploadBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title !== "" || description !== "") {
      let obj = {
        title,
        description,
        channel: "New Channel",
        views: "1200399",
        likes: "56777",
        timestamp: Date.now(),
        image: `http://localhost:8080/images/image0.jpeg`,
        comments: [
          {
            id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
            name: "Micheal Lyons",
            comment:
              "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
            likes: 0,
            timestamp: 1628522461000,
          },
          {
            id: "091de676-61af-4ee6-90de-3a7a53af7521",
            name: "Gary Wong",
            comment:
              "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            likes: 0,
            timestamp: 1626359541000,
          },
          {
            id: "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
            name: "Theodore Duncan",
            comment:
              "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
            likes: 0,
            timestamp: 1626011132000,
          },
        ],
      };

      axios
        .post(`http://localhost:8080/videos/post`, obj)
        .then(() => navigate("/upload/success"))
        .catch((err) => console.log(err));
    } else {
      alert("Both fields are required");
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="upload-container">
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>

        <form
          id="form-id"
          action=""
          onSubmit={(event) => handleSubmit(event)}
          className="upload__form"
        >
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
                value={title}
                onChange={handleTitleChange}
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
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
        </form>

        <div className="upload__buttons">
          <button form="form-id" type="submit" className="upload-btn">
            <img
              className="upload-btn__icon"
              src={PublishIcon}
              alt="Publish Icon"
            />
            <div className="upload-btn__text">PUBLISH</div>
          </button>

          <Link
            to="/84e96018-4022-434e-80bf-000ce4cd12b8"
            className="upload__buttons-cancel"
          >
            <div className="upload__buttons-cancel-text">CANCEL</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
