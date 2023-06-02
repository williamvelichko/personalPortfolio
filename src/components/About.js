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
          <h1>Who Am I ?</h1>
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
              My name is William Velichko, and I am currently working as a
              software developer. I have a strong passion for creating impactful
              FrontEnd UI, working with large datasets, and building API's that
              have the potential to make a positive difference in people's
              lives.
            </p>
            <p>
              Outside of my professional pursuits, I have a deep love for Jesus
              Christ, sports, the outdoors, and music. I greatly enjoy
              communicating and interacting with others, as I find it rewarding
              to connect with people from diverse backgrounds.
            </p>
            <p>
              I thrive on challenges and actively seek out new opportunities
              that allow me to contribute value while continuously learning and
              growing. The software engineering and web development industry
              captivate me with its diversity and the profound impact it has on
              society.
            </p>
            <p>
              Overall, I am driven by my enthusiasm for creating meaningful
              software solutions and the desire to make a lasting impact through
              my work in the field of web development.
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
