import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const tasks = [
    { id: 1, category: "work", label: "Make a short note", due: "Sat, 30 Nov" },
    { id: 2, category: "study", label: "Complete JS course 🎓", due: "Sat, 30 Nov" },
    { id: 3, category: "work", label: "Make a short note 🍎", due: "Sat, 30 Nov" },
  ];

  const events = [
    { id: 1, category: "study", label: "Study HMI Lecture 📚", date: "Today" },
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredTasks = tasks.filter(
    (task) => activeFilter === "all" || task.category === activeFilter
  );

  const filteredEvents = events.filter(
    (event) => activeFilter === "all" || event.category === activeFilter
  );

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <div className="circle">C</div>
        <div>
          <h3><b>Today</b></h3>
          <p>Thursday, 14 November | 6 Tasks</p>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="progress-section">
        <div className="progress-card">
          <span>Monthly Task Progress</span>
          <div className="progress-circle">
            <span>75%</span>
          </div>
        </div>
        <div className="progress-card second">
          <span>Monthly Event Progress</span>
          <div className="progress-circle">
            <span>75%</span>
          </div>
        </div>
      </div>

      <div className="quick-access">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={activeFilter === "work" ? "active" : ""}
          onClick={() => handleFilter("work")}
        >
          Work
        </button>
        <button
          className={activeFilter === "home" ? "active" : ""}
          onClick={() => handleFilter("home")}
        >
          Home
        </button>
        <button
          className={activeFilter === "study" ? "active" : ""}
          onClick={() => handleFilter("study")}
        >
          Study
        </button>
      </div>

      <div className="tasks">
        <h3>Tasks</h3>
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-item">
            <label>
              <input type="checkbox" /> {task.label}
            </label>
            <span>{task.due}</span>
          </div>
        ))}
      </div>

      <div className="events">
        <h3>Events</h3>
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-item">
            <span>{event.label}</span>
            <span>{event.date}</span>
          </div>
        ))}
      </div>

      <div className="navbar">
        <button>🏠</button>
        <button>➕</button>
        <button>📖</button>
        <button>⚙️</button>
      </div>
    </div>
  );
}

export default App;
