import "./FooterStyling.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h3 className="footer-logo">GLOBEHACKERS</h3>
        <ul className="footer-menu">
          <li className="footer-menu-items">About Us</li>
          <li className="footer-menu-items">Contact</li>
          <li className="footer-menu-items">Terms & Conditions</li>
        </ul>
        <p className="footer-text">© 2023 GlobeHackers. All rights reserved.</p>
      </div>
    </div>
  );
}
