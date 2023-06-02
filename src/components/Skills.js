import React, { useState, useEffect } from "react";
import "../Styling/Skills.css";
import LoadingClip from "../widgets/LoadingClip";
function Skills(props) {
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
                I have a comprehensive skill set that is highly sought after in
                the modern tech industry. My expertise lies in frontend
                technologies such as ReactJS, Javascript, and TypeScript, as
                well as backend technologies including NodeJS, MySQL, and
                KnexJS. This enables me to develop robust and efficient web
                applications from start to finish, covering both the frontend
                and backend aspects.
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
