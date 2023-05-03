import React, { useState, useEffect } from "react";
import "../Styling/Work.css";
import LoadingClip from "../widgets/LoadingClip";

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
            <h1>Where I worked</h1>
          </div>
          <div className="work_company">
            <div className="img_container">
              <a target="_blank" href="https://www.busybucket.io/">
                <img src={require("../Images/ScreenShot2.png")} />
              </a>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="work_title">
            <h1>Some things i built</h1>
          </div>
          <div className="singleProject">
            <div className="img_container">
              <a target="_blank" href="https://www.mojoplanning.com/">
                <img src={require("../Images/ScreenShot.png")} />
              </a>
            </div>
            <div className="img_container">
              <a
                target="_blank"
                href="https://sac-fishingstore.herokuapp.com/homepage"
              >
                <img src={require("../Images/ScreenShot3.png")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Work;
