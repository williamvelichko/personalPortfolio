import React, { useEffect } from "react";
import "../Styling/Skills.css";
function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="skills_container">
      <div className="skills_description">
        <div className="skills_title">
          <h1>My Skills</h1>
        </div>
        <div className="skills_paragraph">
          <p className="skills_par_element">
            <em>{`<p>`}</em>
          </p>
          <div className="skills_inside_par">
            <p>
              I possess a comprehensive set of skills that are highly valued in
              the modern tech industry. My expertise in frontend technologies
              like ReactJS and Javascript, combined with my proficiency in
              backend technologies such as NodeJS and KnexJS, enable me to
              develop robust and efficient web applications from start to
              finish.
            </p>
          </div>
          <p className="skills_par_element">
            <em>{`<p>`}</em>
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
