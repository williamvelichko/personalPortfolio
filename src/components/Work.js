import React, { useState, useEffect } from "react";
import "../Styling/Work.css";
import LoadingClip from "../widgets/LoadingClip";
import ExperienceData from "../Data/experience.json";

function Work(props) {
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
      <div className="work_main_container">
        <div className="work_container">
          <div className="work_title">
            <h1>Experience</h1>
          </div>
          <div className="work_company">
            {ExperienceData.experience.map((exp, index) => (
              <div className="img_container" key={index}>
                <a target="_blank" href={exp.link}>
                  <img src={exp.image} alt={exp.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Work;
