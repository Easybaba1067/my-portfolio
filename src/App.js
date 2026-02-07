import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar.component";
import Home from "./pages/home";
import Resume from "./pages/resume";
import ProjectPage from "./pages/project";
import "./App.css";
import "./css-files/mobile.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "devicon/devicon.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
