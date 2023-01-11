import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
      className="App"
    >
      <SideBar />
      <div style={{ width: "90%" }} className="route_container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
