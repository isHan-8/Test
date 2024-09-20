import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PNBSOTestList from "./components/PNBSOTestList";
import MCQPage from "./components/MCQPage";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/test/pnbso" element={<PNBSOTestList />} />
          <Route path="/test/mcq/:testId" element={<MCQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
