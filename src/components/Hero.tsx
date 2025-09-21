import React from "react";
import "../styles/hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Titolo principale della sezione */}
        <h2>Report di Sostenibilità 2025</h2>

        {/* Descrizione breve */}
        <p>
          Il nostro impegno per un futuro più sostenibile: scopri i progressi e
          gli obiettivi di Birra Peroni.
        </p>

        {/* Link per scaricare il report in PDF */}
        <a
          href="/Birra_Peroni_Rapporto_Sviluppo_Sostenibile_2023.pdf"
          download
          aria-label="download sustainability report"
        >
          Scarica il Report
        </a>
      </div>
    </section>
  );
};

export default Hero;
