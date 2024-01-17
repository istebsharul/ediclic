import React from "react";
import "../Css/Style.css";
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>© 2023 Édiclic. Tous droits réservés.</p>
      </div>
      <div className="footer-social">
        <a href="">
          contact@ediclic.com
        </a>
        <a href="#">
          <FaSquareInstagram size="2rem" color="white" />
        </a>
        <a href="#">
          <FaLinkedin size="2rem" color="white" />
        </a>
      </div>
    </div>
  );
};

export default HomeFooter;
