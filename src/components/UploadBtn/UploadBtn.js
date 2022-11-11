import "./UploadBtn.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

const UploadBtn = () => {
  return (
    <Link className="upload-btn" to="/upload">
      <img className="upload-btn__icon" src={UploadIcon} alt="Upload Icon" />
      <div className="upload-btn__text">UPLOAD</div>
    </Link>
  );
};

export default UploadBtn;
