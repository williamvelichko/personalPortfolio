import React from "react";

const style = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "grey",
    justifyContent: "space-evenly",
    height: "100%",
    width: "10%",
    margin: 0,
  },
  logo: {
    color: "#FFFFFF",
  },
  nav: {
    color: "#FFFFFF",
  },
  media: {
    color: "#FFFFFF",
  },
};

function SideBar() {
  return (
    <div style={style.mainContainer}>
      <div style={style.logo}>Logo</div>
      <div style={style.nav}>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Work</div>
        <div>Contact</div>
      </div>
      <div style={style.media}>Media</div>
    </div>
  );
}

export default SideBar;
