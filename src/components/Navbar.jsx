import React from "react";
import "./NavBarStyling.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <button className="nav-button">About</button>
      <button className="nav-button">Features</button>
      <h1 className="logo">GLOBEHACKERS</h1>
      <button className="nav-button">Home</button>
      <button className="nav-button">Destinations</button>
    </div>
  );
}
