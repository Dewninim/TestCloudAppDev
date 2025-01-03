import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light"); // "light" or "dark"
  const [filter, setFilter] = useState("all"); // "all", "work", "home", "study"

  const tasks = [
    { id: 1, category: "work", text: "Make a short note", date: "Sat, 30 Nov" },
    { id: 2, category: "study", text: "Complete JS course 🎓", date: "Sat, 30 Nov" },
    { id: 3, category: "work", text: "Make a short note 🍎", date: "Sat, 30 Nov" },
  ];

  const events = [
    { id: 1, category: "study", text: "Study HMI Lecture 📚", date: "Today" },
  ];

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.category === filter
  );
  const filteredEvents = events.filter(
    (event) => filter === "all" || event.category === filter
  );

  return (
    <div className={`app-container ${mode}`}>
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="circle">C</div>
          <div className="header-info">
            <h1>Today</h1>
            <span>Thursday, 14 November | 6 Tasks</span>
          </div>
          <button className="menu">⋮</button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="mode-toggle">
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            Switch to {mode === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-card purple">
            <span>Monthly Task Progress</span>
            <div className="progress-circle">
              <span>75%</span>
            </div>
          </div>
          <div className="progress-card orange">
            <span>Monthly Event Progress</span>
            <div className="progress-circle">
              <span>75%</span>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="quick-access">
          {["all", "work", "home", "study"].map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Tasks */}
        <div className="tasks">
          <h3>Tasks</h3>
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-item">
              <label>
                <input type="checkbox" /> {task.text}
              </label>
              <span>{task.date}</span>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="events">
          <h3>Events</h3>
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-item">
              <span>{event.text}</span>
              <span>{event.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <button>🏠</button>
        <button>➕</button>
        <button>📖</button>
        <button>⚙️</button>
      </div>
    </div>
  );
};

export default App;
