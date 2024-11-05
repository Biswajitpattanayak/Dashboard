import React, { useState, useEffect } from "react";
import "./DashboardContainer.css";
import {
  Chart,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

// Register necessary Chart.js components
Chart.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  BarController
);

function DashboardContent() {
  // State for sidebar data (from backend)
  const [sidebarData, setSidebarData] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch("/api/data") // Modify this endpoint with your actual API
      .then((response) => response.json())
      .then((data) => setSidebarData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Line chart data (for Website Visits)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Team A",
        data: [30, 40, 28, 50, 42, 75, 90],
        borderColor: "#FFA500",
        fill: false,
      },
      {
        label: "Team B",
        data: [20, 35, 40, 45, 65, 80, 95],
        borderColor: "#1E90FF",
        fill: false,
      },
    ],
  };

  // Pie chart data (for Current Visits)
  const pieData = {
    labels: ["America", "Asia", "Europe", "Africa"],
    datasets: [
      {
        data: [34.7, 27.7, 28.4, 9.2],
        backgroundColor: ["#1E90FF", "#FFA500", "#FF4500", "#FFD700"],
      },
    ],
  };

  // Stacked bar chart data (for Financial Overview)
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Investment",
        backgroundColor: "#87CEEB",
        data: [50, 75, 30, 45, 60, 100, 80, 70, 60, 90, 100, 80],
      },
      {
        label: "Loss",
        backgroundColor: "#1E90FF",
        data: [20, 30, 15, 20, 35, 50, 40, 50, 30, 45, 50, 55],
      },
      {
        label: "Profit",
        backgroundColor: "#9370DB",
        data: [30, 20, 25, 30, 40, 70, 60, 50, 70, 75, 65, 50],
      },
      {
        label: "Maintenance",
        backgroundColor: "#BDB76B",
        data: [10, 15, 10, 25, 20, 40, 35, 30, 25, 35, 40, 30],
      },
    ],
  };

  const barOptions = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <div
      className="dashboard-content container-fluid"
      style={{ paddingTop: "5px" }}
    >
      <div className="row">
        {/* Main content on the left side */}
        <div className="col-md-9 col-sm-12">
          <div className="header mt-0">
            <h2>Hi, Biswajit</h2>
          </div>

          <div className="row">
            {/* Stat boxes */}
            <div className="col-6 col-md-3">
              <div className="stat-box bg-primary text-white text-center p-3 rounded shadow-sm">
                <h3>714k</h3>
                <p>Weekly Sales</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box bg-info text-white text-center p-3 rounded shadow-sm">
                <h3>1.35m</h3>
                <p>New Users</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box bg-warning text-dark text-center p-3 rounded shadow-sm">
                <h3>1.72m</h3>
                <p>Item Orders</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box bg-danger text-white text-center p-3 rounded shadow-sm">
                <h3>234</h3>
                <p>Bug Reports</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Stacked bar chart (Financial Overview) */}
            <div className="col-12 col-md-6">
              <div className="chart-box mt-0">
                <h4>Financial Overview</h4>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>

            {/* Pie chart (Current Visits) */}
            <div className="col-12 col-md-6">
              <div className="chart-box pie-chart mt-0">
                <Pie data={pieData} className=" m-auto" />
              </div>
            </div>
          </div>

          {/* Line chart (Website Visits) - with half height */}
          <div className="row">
            <div className="col-12">
              <div className="chart-box line-chart" style={{ height: "200px" }}>
                {" "}
                {/* Adjust height here */}
                <h4>Website Visits</h4>
                <Line
                
                  data={lineData}
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar for Backend Data */}
        <div className="col-md-3 col-sm-12 mt-5">
          <div className="right-sidebar">
            <h4>Data from Backend</h4>
            <ul>
              {sidebarData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
