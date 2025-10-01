import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <div className="overflow-x-hidden font-jost scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
