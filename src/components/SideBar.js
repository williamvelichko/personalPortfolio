import React from "react";
import { Link } from "react-router-dom";
import "../Styling/SideBar.css";

function SideBar() {
  return (
    <div className="sideBar_container">
      <div classname="sideBar_logo">
        <Link to="/landingpage" className="logo_link">
          <h3>WV</h3>
        </Link>
        <h5>William Velichko</h5>
      </div>
      <div className="sideBar_nav">
        <Link className="link" to="/about ">
          About
        </Link>
        <Link className="link" to="/skills">
          Skills
        </Link>
        <Link className="link" to="/work">
          Work
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="sideBar_media">Media</div>
    </div>
  );
}

export default SideBar;
