import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/About.css";
import LoadingClip from "../widgets/LoadingClip";

function About(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.scrollTo(0, 0);
  }, []);
  if (loading && !props.onLandingPage) return <LoadingClip />;
  else
    return (
      <div className="about_container">
        <div className="about_title">
          <h1>Who Am I?</h1>
        </div>
        <div className="about_img_div">
          <img src={require("../Images/IMG_1697.JPG")} />
        </div>
        <div className="about_description_container">
          <p className="about_par_element1">
            <em>{`<p>`}</em>
          </p>
          <div className="about_inside_par">
            <p>
              I am William Velichko and I am currently a software developer who
              is passionate about impacting people lifes threw building FrontEnd
              UI, working with large data, and building API's
            </p>
            <p>
              I love Jesus Christ, sports, Outdoors, Music, and I love
              communicating and enteracting with others
            </p>
            <p>
              I love to face challenges and discover new opportunities where I
              can both contribute value and learn. I'm intrigued with the
              diversity and profound impact related to working within software
              engineering and the web development industry
            </p>
          </div>
          <p className="about_par_element2">
            <em>{`</p>`}</em>
          </p>
          <Link to="/contact" className="about_link">
            <h5>I would love to get to know you more</h5>
          </Link>
        </div>
      </div>
    );
}

export default About;
