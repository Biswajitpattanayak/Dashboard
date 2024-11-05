import React from "react";
import Sidebar from "./Components/Sidebar";
import DashboardContent from "./Components/DashbaordContainer";
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}

export default App;
