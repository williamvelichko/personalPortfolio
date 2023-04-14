import React from "react";
import { Link } from "react-router-dom";
import "./Styling/LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <div className="title">
        <div className="hello_container">
          <h2>Hello 👋 I'm</h2>
          <section className="animation">
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

      {/* <div className="paragraph">
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
          Looking forward to discovering my next role and professional
          adventure!
        </p>
      </div> */}
      <div className="contact_button">
        <Link className="contact" to="/contact">
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
