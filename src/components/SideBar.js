import React from "react";
import { Link } from "react-router-dom";
import "../Styling/SideBar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function SideBar() {
  return (
    <div className="sideBar_container">
      <div classname="sideBar_logo">
        <Link to="/landingpage" className="logo_link">
          <span className="letter-w">W</span>
          <span className="letter-v">V</span>
        </Link>
        <h5>William Velichko</h5>
      </div>
      <div className="sideBar_nav">
        <Link className="link" to="/about ">
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
      <div className="sideBar_media">
        <p>
          <TwitterIcon />
        </p>
        <p>
          <InstagramIcon />
        </p>
        <p>
          <LinkedInIcon />
        </p>
        <p>
          <GitHubIcon />
        </p>
      </div>
    </div>
  );
}

export default SideBar;
