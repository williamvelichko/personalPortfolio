import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", height: "100vh" }}
      className="App"
    >
      <SideBar />
      <LandingPage />
    </div>
  );
}

export default App;
