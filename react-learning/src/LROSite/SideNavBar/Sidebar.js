// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  return (
    <div style={{ width: collapsed ? '60px' : '200px', transition: 'width 0.3s' }}>
      {/* Sidebar content, e.g., icons */}
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Sidebar;
