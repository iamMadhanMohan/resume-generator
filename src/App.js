import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Format from "./components/Format";
import Preview from "./components/Preview";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Bio />} />

            <Route path="/bio" element={<Bio />} />

            <Route path="/education" element={<Education />} />

            <Route path="/experience" element={<Experience />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/format" element={<Format />} />

            <Route path="/preview" element={<Preview />} />

            <Route path="/help" element={<Help />} />

            <Route path="*" element={<Bio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
