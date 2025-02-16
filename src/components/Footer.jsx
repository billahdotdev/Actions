import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
        <p>v1 &copy; {new Date().getFullYear()}  Built by dreamers: Masum Billah. For dreamers. Deeply indebted to the individuals who I learned from.</p>
      </div>
    </footer>
  );
};

export default Footer;