import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    display: "flex",
    //width: "70%",
    //height: "500vh",
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "oswald",
    width: "30%",
    display: "flex",
    margin: "0px 0px 0px 30px",
    fontSize: "3rem",
  },
  contact: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    color: "#000000",
    width: "20%",
    padding: "5px",
    fontSize: "1.5rem",
    border: "2px solid black",
    backgroundColor: "#FFFFFF",
    transition: "500ms ease-in-out",
    margin: "10px 0px 0px 30px",
    // hover: {
    //   boxShadow: "20px 5px 0 black, -20px -5px 0 black",
    // },
  },

  p: {
    display: "flex",
    color: "#FFFFFF",
    width: "70%",
    margin: "auto",
    marginTop: "20px",
  },
};

function LandingPage() {
  return (
    <div styles={style.container}>
      <div>
        <h1 style={style.title}>Hello,</h1>
        <h1 style={style.title}>I'm William Velichko</h1>
        <h1 style={style.title}>a web developer</h1>
        <Link
          onMouseOver={style.contact.hover}
          style={style.contact}
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <p style={style.p}>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </p>
    </div>
  );
}

export default LandingPage;
