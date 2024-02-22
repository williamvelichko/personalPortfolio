import React from "react";
import { Link } from "react-router-dom";
import "../Styling/SideBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SideBar() {
  return (
    <div className="sideBar_container">
      <div classname="sideBar_logo">
        <Link to="/" className="logo_link">
          <img className="logo-img" src={"../Images/transparentLogo2.png"} />
        </Link>
        <h5>William Velichko</h5>
      </div>
      <div className="sideBar_nav">
        <Link className="link" to="/about">
          <p>About</p>
        </Link>
        <Link className="link" to="/skills">
          <p>Skills</p>
        </Link>
        <Link className="link" to="/work">
          <p> Work</p>
        </Link>
        <Link className="link" to="/contact">
          <p>Contact</p>
        </Link>
      </div>

      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="sideBar_media">
        <a href="https://twitter.com/WilliamVelichko">
          <p>
            <TwitterIcon />
          </p>
        </a>

        <a href="https://github.com/williamvelichko">
          <p>
            <GitHubIcon />
          </p>
        </a>
        <a href="https://www.linkedin.com/in/williamvelichko/">
          <p>
            <LinkedInIcon />
          </p>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
