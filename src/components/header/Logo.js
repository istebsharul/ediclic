import React, { useEffect, useState } from "react";
import LogoImage from "../../images/logo.png";
import "../Css/Style.css";

const Logo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageSize, setImageSize] = useState(300);
  //   return <div className="About">This is About</div>;
  const handleScroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
      // setScrollY(window.scrollY);
      setImageSize(100)
    }
    else if (window.scrollY < 50) {

      setImageSize(300)
    }
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])
  return (
    <div className="logo">
      <img className="logo-image" src={LogoImage} alt="Logo"></img>
      <div className="logo-text">
        <p>CRÉATION DE PROJETS ÉDITORIAUX SUR-MESURE</p>
      </div>
    </div>
  );
};

export default Logo;
