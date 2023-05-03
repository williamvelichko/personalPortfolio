import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styling/LandingPage.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LoadingClip from "./widgets/LoadingClip";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <LoadingClip />;
  else
    return (
      <div className="landing_container">
        <div className="landing_min">
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
          </div>
          <div className="landing_html">
            <p className="par_element1">
              <em>{`<p>`}</em>
            </p>
            <p className="par_description">
              My mind is like an internet browser, 19 tabs open, 3 of them are
              frozen, ads popping up everywhere, I have no idea where the music
              is coming from
            </p>
            <p className="par_element2">
              <em>{`</p>`}</em>
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
        <div className="landing_scroll">
          <p>
            <ArrowDownwardIcon fontSize="large" />
          </p>
          <p>
            <ArrowDownwardIcon fontSize="large" />
          </p>
        </div>

        <About />
        <Skills />
        <Work />
        <Contact />
        <LoadingClip />
      </div>
    );
}

export default LandingPage;
