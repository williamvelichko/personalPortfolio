import React from "react";
import "../Styling/Skills.css";
function Skills() {
  return (
    <div className="skills_container">
      <div className="skills_description">
        <div className="skills_title">
          <h1>My Skills</h1>
        </div>
        <div className="skills_paragraph">
          <p>
            As a full stack web developer with experience building web
            applications using technologies such as JavaScript, TypeScript,
            HTML, CSS, ReactJS, NodeJS, KnexJS, MaterialUI, and Styled
            Components.
          </p>
          <p>
            I possess a comprehensive set of skills that are highly valued in
            the modern tech industry. My expertise in front-end technologies
            like ReactJS, combined with my proficiency in back-end technologies
            such as NodeJS and KnexJS, enable me to develop robust and efficient
            web applications from start to finish.
          </p>
          <p>
            Additionally, my experience with popular UI libraries such as
            MaterialUI and Styled Components enables me to create visually
            appealing and user-friendly web interfaces that enhance the overall
            user experience. Overall, my skills as a full stack web developer
            make me a valuable asset to any tech team seeking to build and
            maintain high-quality web applications.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="progress">
          <h3>FrontEnd:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "80%" }}>
              {/* 80% */}
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>BackEnd:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "60%" }}>
              {/* 60% */}
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>ReactJS:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "80%" }}>
              {/* 80% */}
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>JavaScript:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "85%" }}>
              {/* 85% */}
            </div>
          </div>
        </div>
        <div className="progress">
          <h3>TypeScript:</h3>
          <div className="w3-light-grey">
            <div className="w3-green" style={{ width: "30%" }}>
              {/* 30% */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
