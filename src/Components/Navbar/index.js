import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header" id="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="logo-word"
          className="logo-word"
        ></img>
      </Link>

      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/#footer" className="nav-element">
          Construcción
        </Link>
        <Link to="/create-document" className="nav-element">
          Luces
        </Link>
        <Link to="/create-document" className="nav-element">
          Calefacción Solar
        </Link>
        <Link to="/create-document" className="nav-element">
        Baby Safe
        </Link>

      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
