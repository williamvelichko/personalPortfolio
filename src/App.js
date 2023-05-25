import "./App.css";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NavBarPopUp from "./widgets/NavBarPopUp";

function App() {
  console.log(window.innerWidth);
  return (
    <div className="App">
      <SideBar />
      <NavBarPopUp />
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
  );
}

export default App;
