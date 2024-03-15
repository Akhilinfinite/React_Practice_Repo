// App.js
import React, { useState } from "react";
// import { BrowserRouter as Router} from "react-router-dom";

import Sidebar from "./SideNavBar/Sidebar.js";
import Topbar from "./TopBar/Topbar.js";
import Dashboard from "./DashBoard/Dashboard.js";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar collapsed={collapsed} />
      <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <Topbar onToggleSidebar={handleToggleSidebar} />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
