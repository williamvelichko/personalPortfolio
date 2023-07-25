import React, { useState, useEffect } from "react";
import "../Styling/Skills.css";
import LoadingClip from "../widgets/LoadingClip";
import { TypeScript } from "devicon";
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
          <div className="single_skill">
            <i className="devicon-javascript-plain skill-icon"></i>
            <h4>Javascript</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-typescript-plain skill-icon"></i>
            <h4>TypeScript</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-nodejs-plain skill-icon"></i>
            <h4>NodeJs</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-react-original skill-icon"></i>
            <h4>ReactJs</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-css3-plain skill-icon"></i>
            <h4>CSS</h4>
          </div>
          <div className="single_skill">
            <i class="devicon-html5-plain"></i>
            <h4>HTML</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-redux-original skill-icon"></i>
            <h4>Redux</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-postgresql-plain skill-icon"></i>
            <h4>postgresql</h4>
          </div>
          <div className="single_skill">
            <i className="devicon-express-original skill-icon"></i>
            <h4>express</h4>
          </div>
          <div className="single_skill">
            <i class="devicon-materialui-plain"></i>
            <h4>MaterialUI</h4>
          </div>
          <div className="single_skill">
            <i class="devicon-bootstrap-plain"></i>
            <h4>Bootstrap</h4>
          </div>
          <div className="single_skill">
            <i class="devicon-figma-plain"></i>
            <h4>Figma</h4>
          </div>
        </div>
      </div>
    );
}

export default Skills;
