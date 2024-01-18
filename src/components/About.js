import React from "react";
import "./Css/Style.css";
import "./Css/about.css";
import "./Css/contact.css";
import image1 from "../images/1.webp"
import image2 from "../images/2.webp"
import image3 from "../images/3.webp"
import ClientSlider from "./ClientSlider";

const About = () => {
  return (
    <div className="about-containers">

      <div className="about-title">
        ÉDICLIC PROPOSE DES PROJETS ÉDITORIAUX CLÉ EN MAIN
        AUX MAISONS D'ÉDITION ET AUX ENTREPRISES
      </div>

      <div className="about-container">
        <div className="about-container-title"><p>Livres illustrés, kits pédagogiques,<br />
          coffrets d’activités, magazines, <br />
          mook, papeterie, projets multi-média.</p></div>
        <div className="about-container-image"><img src={image1}></img></div>
      </div>

      <div className="about-container">
        <div className="about-container-title"><p>Pour chaque projet,<br />
          nous constituons pour vous une équipe<br />
          de professionnels spécialisés
        </p></div>
        <div className="about-container-image"><img src={image2}></img></div>
      </div>

      <div className="about-container">
        <div className="about-container-title"><p>Rédacteurs,
          Journalistes et auteurs,<br />
          Relecteurs,<br />
          Photographes et stylistes,<br />
          Iconographes,<br />
          Illustrateurs,<br />
          Directeurs artistiques et graphistes,<br />
          Traducteurs,<br />
          Photograveurs,<br />
          Imprimeurs en France,<br />
          en Europe et en Asie.</p></div>
        <div className="about-container-image"><img src={image3}></img></div>
      </div>
      <div className="about-bottom-title">
        NOUS CRÉONS DES UNIVERS NARRATIFS À VOTRE IMAGE
      </div>

      <ClientSlider />
    </div>
  );
};

export default About;
