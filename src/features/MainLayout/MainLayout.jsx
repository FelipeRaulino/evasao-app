import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <Outlet />
  </div>
);

export default MainLayout;
