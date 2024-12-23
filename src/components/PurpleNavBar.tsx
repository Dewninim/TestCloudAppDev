import React from "react";
import { Link } from "react-router-dom";

function PurpleNavBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-800 p-4 flex justify-around text-white">
      <Link to="/">🏠</Link>
      <Link to="/calendar">📅</Link>
      <Link to="/add-task">➕</Link>
      <Link to="/profile">👤</Link>
      <Link to="/dashboard">📊</Link>
    </div>
  );
}

export default PurpleNavBar;
