import React from "react";
import "../Styling/Skills.css";
function Skills() {
  return (
    <div className="container">
      <div className="description">
        <h2>My Skills</h2>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <div className="skills">
        <div className="progress">
          <h3>FrontEnd:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>BackEnd:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>ReactJS:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>JavaScript:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>TypeScript:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "30%" }}>
              30%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
