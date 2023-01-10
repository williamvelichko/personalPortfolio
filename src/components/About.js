import React from "react";
import { Link } from "react-router-dom";
import "../Styling/About.css";
// const style = {
//   title: {
//     color: "#FFFFFF",
//   },
//   p: {
//     color: "#FFFFFF",
//   },
// };

function About() {
  return (
    <div className="container">
      <h1>Who Am I?</h1>

      <div className="description_container">
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
        <Link to="/contact" className="link">
          <h5>I would love to get to know you more</h5>
        </Link>
      </div>
    </div>
  );
}

export default About;
