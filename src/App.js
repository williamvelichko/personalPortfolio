import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", height: "100vh" }}
      className="App"
    >
      <SideBar />
      <LandingPage path="/landingpage" />
    </div>
  );
}

export default App;
