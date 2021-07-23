import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p> <i className="fas fa-map-marker-alt"></i> Montevideo </p><br />
        Uruguay
      </div>
      
        <div className="sns-links">
        <a title="Linkedin" href="linkedin.com/in/federico-de-souza-garcía-152bb4142">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="mailto:feffee22@gmail.com" title="Email " target="_blank" rel="noreferrer">
            <i className="fas fa-envelope email"></i>
          </a>
          <a href="https://wa.me/598098376571" title="Whatsapp " target="_blank" rel="noreferrer">
          <i class="fab fa-whatsapp whatsapp"></i>
          </a> 
        </div>
     
    </footer>
  );
};

export default Footer;
