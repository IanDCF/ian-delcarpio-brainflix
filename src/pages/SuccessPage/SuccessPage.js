import React from "react";
import { Link } from "react-router-dom";
import "./SuccessPage.scss";

const SuccessPage = () => {
  return (
    <section className="success-container">
      <div className="success">
        <h2 className="success__text">Video has been uploaded successfully</h2>
        <Link className="success__link" to="/">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
