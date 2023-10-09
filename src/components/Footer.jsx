import React from "react";
import "./FooterStyling.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="newsletter-section">
          <input
            type="email"
            placeholder="Your email address"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Subscribe</button>
        </div>
        <div className="footer-right">
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Pinterest</a>
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Impressum</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 GLOBEHACKERS. All rights reserved.
      </div>
    </div>
  );
}
