import React from "react";
import "../styles/sustainability.css";

const Sustainability: React.FC = () => {
  return (
    <section id="sostenibilita" className="sustainability" role="region">
      {/* Titolo della sezione */}
      <h3>Il nostro impegno</h3>

      {/* Breve descrizione dell'approccio sostenibile */}
      <p>
        Birra Peroni lavora ogni giorno per ridurre l’impatto ambientale e
        supportare le comunità locali. Attraverso progetti innovativi e
        responsabili, perseguiamo un modello produttivo sostenibile che mette al
        centro le persone e il pianeta.
      </p>

      {/* Lista di azioni sostenibili */}
      <div className="sustainability-cards" role="list" aria-label="sustainability actions">
        {/* Card energia */}
        <div className="card" role="listitem" aria-labelledby="card-energy">
          <h4>Energia Verde</h4>
          <p>Utilizzo di fonti rinnovabili per ridurre le emissioni di CO₂.</p>
        </div>

        {/* Card materie prime locali */}
        <div className="card" role="listitem" aria-labelledby="card-raw materials">
          <h4>Materie Prime Locali</h4>
          <p>
            Collaborazione con agricoltori italiani per filiere corte e
            sostenibili.
          </p>
        </div>

        {/* Card economia circolare */}
        <div className="card" role="listitem" aria-labelledby="card-economy">
          <h4>Economia Circolare</h4>
          <p>Riciclo e riuso dei materiali per minimizzare gli sprechi.</p>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
