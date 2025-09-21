import React, { useEffect, useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo_peroni.png";

const Header: React.FC = () => {
  // Stato per determinare se mostrare il logo in base alla larghezza della finestra
  const [isVisible, setIsVisible] = useState<boolean>(window.innerWidth > 552);

  useEffect(() => {
    // Funzione per aggiornare lo stato al ridimensionamento della finestra
    const handleResize = () => {
      setIsVisible(window.innerWidth > 552);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: rimuove l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="d-flex">
          {/* Mostra il logo solo se isVisible è true */}
          {isVisible && (<img src={logo} alt="Peroni's logo"/>)}
          <h1 className="header-title">Birra Peroni</h1>
        </div>
        
        <nav>
          <ul className="nav-list">
            {/* Link di navigazione */}
            <li><a href="#sostenibilita">Sostenibilità</a></li>
            <li><a href="#storia">Storia</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
