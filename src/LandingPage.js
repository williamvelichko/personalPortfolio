import React from "react";
import { Link } from "react-router-dom";
import "./Styling/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing_container">
      <div className="landing_title">
        <div className="hello_container">
          <h2>Hello 👋 I'm</h2>
          <section className="landing_animation">
            <div className="first">
              <div>William Velichko</div>
            </div>
            <div className="second">
              <div>Software Engineer</div>
            </div>
            <div className="third">
              <div>FullStack Developer</div>
            </div>
          </section>
        </div>
        <p>
          <em>Get To Know Me</em>
        </p>
      </div>

      <div className="landing_contact_button">
        <Link className="landing_contact" to="/contact">
          Contact
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
