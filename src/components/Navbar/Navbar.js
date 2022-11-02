import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import UploadBtn from "../UploadBtn/UploadBtn";
import ProfilePic from "../ProfilePic/ProfilePic";
import Logo from "../../assets/logo/BrainFlix-logo.svg";

const Navbar = () => {
  return (
    <header className="nav-container">
      <nav className="nav">
        <img className="nav__logo" src={Logo} alt="BrainFlix logo" />

        <div className="nav__div-one">
          <div className="nav__div-two">
            <SearchBar />
            <div className="nav__pp-mobile">
              <ProfilePic />
            </div>
          </div>

          <UploadBtn />

          <div className="nav__pp-tab-desk">
            <ProfilePic />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
