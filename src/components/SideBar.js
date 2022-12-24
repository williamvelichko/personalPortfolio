import React from "react";
import { Link } from "react-router-dom";

const style = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#343a40",
    justifyContent: "space-evenly",
    height: "100%",
    width: "30%",
    margin: 0,
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
  },
  logo: {
    color: "#FFFFFF",
    backgroundColor: "#343a40",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",

    justifyContent: "space-evenly",
    color: "#FFFFFF",
    backgroundColor: "#343a40",
    height: "35%",
  },
  link: {
    display: "flex",
    alignItems: "center",
    //alignContent: "center",
    border: "1px solid #6c757d",
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "#343a40",
    height: "20%",
  },
  media: {
    color: "#FFFFFF",
    backgroundColor: "#343a40",
  },
};

function SideBar() {
  return (
    <div style={style.mainContainer}>
      <div style={style.logo}>WV</div>
      <div style={style.nav}>
        <Link style={style.link} className="link" to="/about ">
          <h4>About</h4>
        </Link>
        <Link style={style.link} className="link" to="/skills">
          <h4>Skills</h4>
        </Link>
        <Link style={style.link} className="link" to="/projects">
          <h4>Projects</h4>
        </Link>
        <Link style={style.link} className="link" to="/work">
          <h4>Work</h4>
        </Link>
        <Link style={style.link} className="link" to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>
      <div style={style.media}>Media</div>
    </div>
  );
}

export default SideBar;
