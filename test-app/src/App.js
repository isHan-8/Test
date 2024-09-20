import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PNBSOTestList from "./components/PNBSOTestList";
import MCQPage from "./components/MCQPage";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const isMCQPage = location.pathname.includes('/test/mcq');

  return (
    <div className="flex">
      {!isMCQPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/test/pnbso" element={<PNBSOTestList />} />
        <Route path="/test/mcq/:testId" element={<MCQPage />} />
      </Routes>
    </div>
  );
};

export default App;
