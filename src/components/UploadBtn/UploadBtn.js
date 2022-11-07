import "./UploadBtn.scss";
import UploadIcon from "../../assets/icons/upload.svg";

const UploadBtn = () => {
  return (
    <div className="upload">
      <img className="upload__icon" src={UploadIcon} alt="Upload Icon" />
      <div className="upload__text">UPLOAD</div>
    </div>
  );
};

export default UploadBtn;
