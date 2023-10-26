/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

import "./SidebarMobileExpanded.css";

const SidebarMobileExpanded = ({ items, active, setActive }) => (
  <div className={`sidebar-expanded-container ${active ? "show" : ""}`}>
    <GrClose
      size="1.75rem"
      className="sidebar-expanded__close-btn"
      onClick={() => setActive(false)}
    />
    <nav className="sidebar-expanded__content">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path} onClick={() => setActive(false)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default SidebarMobileExpanded;
