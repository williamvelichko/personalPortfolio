import React from "react";
import { Link } from "react-router-dom";
import "../Styling/About.css";

function About() {
  return (
    <div className="about_container">
      <div className="about_title">
        <h1>Who Am I?</h1>
      </div>
      <div className="img_div">
        <img src={require("../Images/IMG_1697.JPG")} />
      </div>
      <div className="about_description_container">
        <p>
          I am currently a Full Stack Web developer who enjoys writing code and
          creating applications that provides advance solutions and improvements
          for daily activities. I am a former house renovator and cabinet
          installer with a variety of mechanical trade experiences and talents!
          I have a passion for staying active both mentally and physically. I am
          an athlete and I play different sports including volleyball,
          basketball, and soccer. I also like music as I play clarinet and I am
          a choir conductor. My birthplace is United States and I speak fluent
          Russian and English. I had to make a big change recently from working
          outdoors and doing physical labor to remain indoors while pursuing
          professional development goals, learning, and creating web
          applications. I have jumped into the tech industry because this was an
          opportunity I couldn't resist, and I love to face challenges and
          discover new opportunities where I can both contribute value and
          learn. I'm intrigued with the diversity and profound impact related to
          working within software engineering and the web development industry.
        </p>
        <Link to="/contact" className="about_link">
          <h5>I would love to get to know you more</h5>
        </Link>
      </div>
    </div>
  );
}

export default About;
