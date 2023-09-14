/* eslint-disable react/prop-types */
import React from "react";

import "./SidebarLinkItem.css";

const SidebarLinkItem = ({ item }) => (
  <li
    className={`${
      item.active ? "sidebar-link-item__active" : "sidebar-link-item"
    }`}
  >
    <img src={item.icon} alt="Home Icon" />
    <a href="#home">{item.name}</a>
  </li>
);

export default SidebarLinkItem;
