import React from "react";
import './Sidebar.css';
import { FaUser, FaShoppingCart, FaBlog, FaSignInAlt, FaFileAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar me-3">
      <div className="user">
        <img src="https://via.placeholder.com/50" alt="User" />
        <h3>Biswajit Pattanayak</h3>
      </div>
      {/* <hr style={{ borderBottom: "2px solid white" }} /> */}

      <ul>
        <li><FaUser /> User</li>
        <li><FaShoppingCart /> Product</li>
        <li><FaBlog /> Blog</li>
        <li><FaSignInAlt /> Login</li>
        <li><FaFileAlt /> Not Found</li>
      </ul>
    </div>
  );
}

export default Sidebar;
