import React from "react";
import "../Css/Style.css";
import { FaFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>© 2023 Édiclic. Tous droits réservés.</p>
      </div>
      {/* <div className="footer-social">
        <a href="#">
          <FaFacebook size="2rem" color="#1f898f" />
        </a>
        <a href="#">
          <FaSquareInstagram size="2rem" color="#1f898f" />
        </a>
        <a href="#">
          <FaSquareTwitter size="2rem" color="#1f898f" />
        </a>
      </div> */}
    </div>
  );
};

export default HomeFooter;
