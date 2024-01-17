import React from "react";
import Header from "./components/header/Header.js";
import Home from "./components/header/Home.js";
import "./components/Css/Style.css";
import About from "./components/About.js";
import Contact from "./components/header/Contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
