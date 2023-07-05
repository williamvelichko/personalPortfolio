import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../widgets/NavBarPopUp.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function NavBarPopUp() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input
            className="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="menu-toggle"
          />
          <label className="hamburger-label" htmlFor="menu-toggle">
            <div className={`hamburger-lines ${isChecked ? "active" : ""}`}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </label>

          <div className="menu-items">
            <div className="logo">
              <Link to="/" className="logo_link" onClick={handleCheckboxChange}>
                <h1 className="letters">WV</h1>
              </Link>
              <h5>William Velichko</h5>
            </div>
            <div className="navbar_links">
              <li>
                <Link
                  className="link"
                  to="/about"
                  onClick={handleCheckboxChange}
                >
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/skills"
                  onClick={handleCheckboxChange}
                >
                  <p>Skills</p>
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/work"
                  onClick={handleCheckboxChange}
                >
                  <p> Work</p>
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to="/contact"
                  onClick={handleCheckboxChange}
                >
                  <p>Contact</p>
                </Link>
              </li>
            </div>
            <div className="navbar_media">
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
        </div>
      </div>
    </nav>
  );
}

export default NavBarPopUp;
