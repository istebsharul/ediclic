import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "../Css/Style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar-text">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                navigate("/");
              }}
              className={location.pathname === "/" ? "active" : ""}
            >
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              onClick={() => {
                navigate("/a-propos");
              }}
              className={location.pathname === "/a-propos" ? "active" : ""}
            >
              À PROPOS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                navigate("/contact");
              }}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
