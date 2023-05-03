import React from "react";
import "../widgets/LoadingClip.css";

function LoadingClip() {
  return (
    <div className="loading_main_container">
      <div className="loading_inside_container">
        <h4>Loading</h4>
        <div className="loading_grey">
          <div className="loading_golden"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingClip;
