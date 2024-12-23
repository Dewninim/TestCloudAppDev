import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingleTaskView() {
  const navigate = useNavigate(); // Initialize the navigation hook

  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [isReminderOpen, setIsReminderOpen] = useState(false); // Reminder modal state
  const [isRepeatOpen, setIsRepeatOpen] = useState(false); // Repeat modal state
  const [reminderStartDate, setReminderStartDate] = useState(""); // Reminder start date
  const [reminderEndDate, setReminderEndDate] = useState(""); // Reminder end date
  const [reminderStartTime, setReminderStartTime] = useState(""); // Reminder start time
  const [reminderEndTime, setReminderEndTime] = useState(""); // Reminder end time
  const [selectedRepeatDays, setSelectedRepeatDays] = useState([]); // Selected repeat days

  const handleSave = () => {
    alert("Task saved to the calendar!");
  };

  const handleDelete = () => {
    alert("Task deleted!");
  };

  const handleRepeatDayChange = (day) => {
    setSelectedRepeatDays((prevDays) => 
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  // Dark/Light Mode Theme
  const theme = isDarkMode
    ? {
        background: "FFFFFF",
        card: "#161221",
        textPrimary: "#FFFFFF",
        textSecondary: "#AAAAAA",
        buttonBg: "#4B0082",
        buttonText: "#FFFFFF",
      }
    : {
        background: "#F9F9F9",
        card: "#FFFFFF",
        textPrimary: "#333333",
        textSecondary: "#666666",
        buttonBg: "#E6E6FF",
        buttonText: "#4A4A4A",
      };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: theme.background,
        padding: "2rem 1rem",
      }}
    >
      {/* Dark/Light Mode Toggle */}
      <div
        style={{
          
          position: "absolute",
          top: "40px",
          right: "10px",
          
          cursor: "pointer",
        }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <span style={{ fontSize: "2rem", color: theme.textPrimary }}>☀️</span>
        ) : (
          <span style={{ fontSize: "2rem", color: theme.textPrimary }}>🌙</span>
        )}
      </div>

      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          backgroundColor: theme.card,
          borderRadius: "15px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: theme.textPrimary,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", color: "#7C3AED", marginRight: "0.5rem" }}>🛒</span>
          Buy a Gift for Friend
        </h2>
        <p style={{ fontSize: "0.875rem", color: theme.textSecondary, marginBottom: "1rem" }}>
          Buy the gift for my best friend Deemantha. His 23rd Birthday party at their own house. I
          need to go to the party at 6.00 p.m.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: theme.buttonBg,
              color: theme.textPrimary,
              fontSize: "0.9rem",
              fontWeight: "500",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>📍</span> Set Icon
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: theme.buttonBg,
              color: theme.textPrimary,
              fontSize: "0.9rem",
              fontWeight: "500",
             
              transition: "background-color 0.3s",
              cursor: "pointer",
              backgroundColor: "#EDE6FF"
             
            }}
          >
            <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>🔒</span> Private
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: theme.buttonBg,
              color: theme.textPrimary,
              fontSize: "0.9rem",
              fontWeight: "500",
              transition: "background-color 0.3s",
              cursor: "pointer",
              backgroundColor: "#EDE6FF"
            }}
          >
            <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>📅</span> 15th Oct 2024
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: theme.buttonBg,
              color: theme.textPrimary,
              fontSize: "0.9rem",
              fontWeight: "500",
              transition: "background-color 0.3s",
              cursor: "pointer",
              backgroundColor: "#EDE6FF"
            }}
          >
            <span style={{ fontSize: "1.2rem", marginRight: "0.75rem" }}>⚠️</span> High Priority
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>

          
          {/* Reminder and Repeat Buttons */}
          <button
            onClick={() => setIsReminderOpen(!isReminderOpen)}
            style={{
              flex: "1",
              marginRight: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "30px",
              backgroundColor: "#D4E2FF",
              color: "#0056B3",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Reminder
          </button>
          <button
            onClick={() => setIsRepeatOpen(!isRepeatOpen)}
            style={{
              flex: "1",
              marginLeft: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "30px",
              backgroundColor: "#D4E2FF",
              color: "#0056B3",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Repeat
          </button>
        </div>

        

        {/* Reminder Modal */}
        {isReminderOpen && (
          <div style={{ marginTop: "1rem" }}>
            <input
              type="date"
              value={reminderStartDate}
              onChange={(e) => setReminderStartDate(e.target.value)}
              style={{ marginBottom: "0.5rem", padding: "0.5rem", borderRadius: "10px", width: "100%" }}
            />
            <input
              type="time"
              value={reminderStartTime}
              onChange={(e) => setReminderStartTime(e.target.value)}
              style={{ marginBottom: "0.5rem", padding: "0.5rem", borderRadius: "10px", width: "100%" }}
            />
            <input
              type="date"
              value={reminderEndDate}
              onChange={(e) => setReminderEndDate(e.target.value)}
              style={{ marginBottom: "0.5rem", padding: "0.5rem", borderRadius: "10px", width: "100%" }}
            />
            <input
              type="time"
              value={reminderEndTime}
              onChange={(e) => setReminderEndTime(e.target.value)}
              style={{ marginBottom: "0.5rem", padding: "0.5rem", borderRadius: "10px", width: "100%" }}
            />
          </div>
        )}

        {/* Repeat Modal */}
        {isRepeatOpen && (
          <div style={{ marginTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" , color: "black"}}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <label key={index} style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={selectedRepeatDays.includes(day)}
                    onChange={() => handleRepeatDayChange(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
          <button
            onClick={handleDelete}
            style={{
              flex: "1",
              marginRight: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#F52E31",
              color: "black", // Change this line to any color you want
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
         
          >
            Delete
          </button>
          <button 
            onClick={handleSave}
            style={{
              flex: "1",
              marginLeft: "0.75rem",
              padding: "0.75rem",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#EDE6FF",
              color: "#0056B3",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          
        </div>
        <div
        style={{
          backgroundColor: "#4B0082",
          borderRadius: "30px",
          position: "fixed",
          bottom: 0,
          width: "100%",
          maxWidth: "400px",
          left: "50%",
          transform: "translateX(-50%)",
          borderTopLeftRadius: "9px",
          borderTopRightRadius: "9px",
          borderBottomRightRadius: "9px",
          borderBottomLeftRadius: "9px",
          transition: "background-color 0.3s",
        }}
      >
      
         <button
           style={{ background: "none", border: "none", fontSize: "1.3rem" }}
           onClick={() => navigate("/")} // Navigate to Home
         >
           🏠
         </button>
         <button
           style={{ background: "none", border: "none", fontSize: "1.3rem" }}
           onClick={() => navigate("/calendar")} // Navigate to Calendar
         >
           📅
         </button>
         <button
           style={{ background: "none", border: "none", fontSize: "1.3rem" }}
           onClick={() => navigate("/task/add")} // Navigate to Add Task (Example path)
         >
           ➕
         </button>
         <button
           style={{ background: "none", border: "none", fontSize: "1.3rem" }}
           onClick={() => navigate("/profile")} // Navigate to Profile
         >
           👤
         </button>
         <button
           style={{ background: "none", border: "none", fontSize: "1.3rem" }}
           onClick={() => navigate("/dashboard")} // Navigate to Dashboard
         >
           📊
         </button>
       </div>
      </div>

      {/* Fixed purple bar with navigation */}
     
    </div>
  );
}

export default SingleTaskView;
