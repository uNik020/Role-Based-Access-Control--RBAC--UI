import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // For styling the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Users</Link></li>
        <li><Link to="/roles">Roles</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
