/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from "react-router-dom";

import "./SidebarLinkItem.css";

const SidebarLinkItem = ({ item }) => (
  <NavLink
    to={item.path}
    className={({ isActive }) =>
      isActive ? "sidebar-link-item__active" : "sidebar-link-item"
    }
  >
    <item.icon size="22px" />
    {item.name}
  </NavLink>
);

export default SidebarLinkItem;
