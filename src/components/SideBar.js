import React from "react";
import { Link } from "react-router-dom";

const style = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#343a40",
    justifyContent: "space-between",
    height: "100%",
    width: "10%",
    margin: 0,
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#FFFFFF",
    backgroundColor: "#343a40",
    //border: "1px solid red",
    height: "20%",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderTop: "1px solid #6c757d",
    justifyContent: "space-evenly",
    color: "#FFFFFF",
    backgroundColor: "#343a40",
    height: "35%",
  },
  link: {
    //display: "block",
    textAlign: "space-evenly",
    //alignContent: "center",
    borderBottom: "1px solid #6c757d",
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
      <div style={style.logo}>
        <Link
          style={{ textDecoration: "none", color: "#FFFFFF" }}
          to="/landingpage"
        >
          <h3>WV</h3>
        </Link>
        <h5>William Velichko</h5>
      </div>
      <div style={style.nav}>
        <Link style={style.link} className="link" to="/about ">
          About
        </Link>
        <Link style={style.link} className="link" to="/skills">
          Skills
        </Link>
        {/* <Link style={style.link} className="link" to="/projects">
          Projects
        </Link> */}
        <Link style={style.link} className="link" to="/work">
          Work
        </Link>
        <Link style={style.link} className="link" to="/contact">
          Contact
        </Link>
      </div>
      <div style={style.media}>Media</div>
    </div>
  );
}

export default SideBar;
