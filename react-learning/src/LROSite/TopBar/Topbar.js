// Topbar.js
import React from 'react';

const Topbar = ({ onToggleSidebar }) => {
  return (
    <div style={{ height: '50px', background: '#333', color: '#fff' }}>
      {/* Topbar content */}
      <button onClick={onToggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

export default Topbar;
