import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer id="contatti" className="footer">
      <p>&copy; 2025 Birra Peroni - Tutti i diritti riservati</p>
      <p>
        Contattaci:{" "}
        <a href="mailto:info@peroni.it" aria-label="Send email to info@peroni.it">info@peroni.it</a>
      </p>
    </footer>
  );
};

export default Footer;
