import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id="contatti" className="footer">
      {/* Copyright */}
      <p>&copy; 2025 Birra Peroni - Tutti i diritti riservati</p>

      {/* Contatti email */}
      <p>
        Contattaci:{" "}
        <a href="mailto:info@peroni.it" aria-label="Send email to info@peroni.it">
          info@peroni.it
        </a>
      </p>

      {/* Icone social con link esterni */}
      <div className="social">
        <a
          href="https://www.facebook.com/birraperoni/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/birra_peroni/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/user/birraperoni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
