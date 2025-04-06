import React from "react";
import "./style.css";
import men1 from "../../images/dressCode/men1.jpg";
import men2 from "../../images/dressCode/men2.jpg";
import men3 from "../../images/dressCode/men3.jpg";
import men4 from "../../images/dressCode/men4.jpg";
import women1 from "../../images/dressCode/women1.jpg";
import women2 from "../../images/dressCode/women2.jpg";
import women3 from "../../images/dressCode/women3.jpg";
import women4 from "../../images/dressCode/women4.jpg";
import women5 from "../../images/dressCode/women5.jpg";
import Sectiontitle from "../section-title";

const DressCode = () => {
  return (
    <div className="dress-code-container" id="dressCode">
      <Sectiontitle mensaje={"Código de Vestimenta"} />
      <div className="dress-code-description">
        <h2>
          Preparate para una velada llena de amor, buena música y momentos mágicos.
        </h2>
      </div>
      <p className="dress-code-description">
        <strong>Código de vestimenta:</strong> Tipo Coctel 
      </p>
      <p className="dress-code-description">
        <strong>Colores reservados</strong> no puedes usar estos colores
      </p>
      <p className="dress-code-description">
        <strong>Para ellas</strong> Blanco y Lila
      </p>
      <p className="dress-code-description">
        <strong>Para ellos</strong> colores claros
      </p>
      <div className="dress-code-description">
        <h2>
        ¡Vístete con estilo y listos para bailar toda la noche!
        </h2>
      </div>
      <div className="dress-code-collage">
        <div className="dress-code-section">
          <h3>Para Ellos</h3>
          <div className="dress-code-images">
            <img src={men1} alt="Ejemplo para ellos 1" className="dress-code-image" />
            <img src={men2} alt="Ejemplo para ellos 2" className="dress-code-image" />
            <img src={men3} alt="Ejemplo para ellos 3" className="dress-code-image" />
            <img src={men4} alt="Ejemplo para ellos 4" className="dress-code-image" />
          </div>
        </div>
        <div className="dress-code-section">
          <h3>Para Ellas</h3>
          <div className="dress-code-images">
            <img src={women1} alt="Ejemplo para ellas 1" className="dress-code-image" />
            <img src={women2} alt="Ejemplo para ellas 2" className="dress-code-image" />
            <img src={women3} alt="Ejemplo para ellas 3" className="dress-code-image" />
            <img src={women4} alt="Ejemplo para ellas 4" className="dress-code-image" />
            <img src={women5} alt="Ejemplo para ellas 5" className="dress-code-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
