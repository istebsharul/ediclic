import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <Navbar className="navbar" />
    </div>
  );
};

export default Header;
