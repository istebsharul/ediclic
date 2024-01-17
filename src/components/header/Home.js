import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeFooter from "../footer/HomeFooter";
// import Icon from "../main/Icon";

import "../Css/Style.css";

const Home = () => {
 

  return (
    <div className="slider-background">
      <div className="row">
      </div>
      {/* <Icon /> */}
      <HomeFooter />
    </div>
  );
};

export default Home;
