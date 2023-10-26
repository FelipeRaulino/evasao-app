import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./MainLayout.css";

const MainLayout = () => (
  <div className="app-container">
    <Sidebar />
    <Outlet />
  </div>
);

export default MainLayout;
