import React, { useEffect, useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo_peroni.png";

const Header: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(window.innerWidth > 552);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 552);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="d-flex">
          {isVisible && (<img src={logo} alt="Peroni's logo"/>)}
          <h1 className="header-title">Birra Peroni</h1>
        </div>
        
        <nav>
          <ul className="nav-list">
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
