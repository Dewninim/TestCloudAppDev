import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PurpleNavBar from "./components/PurpleNavBar";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import SingleTaskView from "./components/SingleTaskView";  // Importing the component for the task view

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add-task" element={<SingleTaskView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <PurpleNavBar />
      </div>
    </Router>
  );
}

export default App;
