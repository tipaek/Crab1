import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import ComparisonChart from "./components/ComparisonChart";
import RadarComparisonChart from "./components/RadarComparisonChart";
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (activeSection) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [activeSection]);

  return (
    <div className="app-container">
      <img src="https://i.pinimg.com/originals/41/71/b1/4171b1b35e0c25ed4871c1109372ea4c.gif" className="background-gif"/>

      <h1 className="app-title">Your mom frfr</h1>

      {/* Buttons to show different sections */}
      <div className="button-group">
        <button onClick={() => setActiveSection("friends")} className="main-button">
          Show Friends List 📜
        </button>
        <button onClick={() => setActiveSection("barChart")} className="main-button">
          Show Bar Chart 📊
        </button>
        <button onClick={() => setActiveSection("radarChart")} className="main-button">
          Show Radar Chart 🕸️
        </button>
      </div>

      {/* Sections - Only one appears at a time */}
      {activeSection === "friends" && (
        <div className="content-container">
          <button className="close-button" onClick={() => setActiveSection(null)}>✖</button>
          <FriendList />
        </div>
      )}

      {activeSection === "barChart" && (
        <div className="content-container">
          <button className="close-button" onClick={() => setActiveSection(null)}>✖</button>
          <ComparisonChart />
        </div>
      )}

      {activeSection === "radarChart" && (
        <div className="content-container">
          <button className="close-button" onClick={() => setActiveSection(null)}>✖</button>
          <RadarComparisonChart />
        </div>
      )}
    </div>
  );
};

export default App;
