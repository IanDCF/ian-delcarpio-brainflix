import "./UploadBtn.scss";
import UploadIcon from "../../assets/icons/upload.svg";

const UploadBtn = () => {
  return (
    <div className="upload-btn">
      <img className="upload-btn__icon" src={UploadIcon} alt="Upload Icon" />
      <div className="upload-btn__text">UPLOAD</div>
    </div>
  );
};

export default UploadBtn;
