import React from "react";

import {
  AiFillHome,
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { BsFillCheckCircleFill, BsFillBarChartFill } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { TiChartLine } from "react-icons/ti";

import "./Sidebar.css";

import logoUFC from "../../assets/logo-ufc.png";

import SidebarLinkItem from "./SidebarLinkItem/SidebarLinkItem";
import SidebarMobileExpanded from "./SidebarMobileExpanded/SidebarMobileExpanded";

const sideBarLinkItems = [
  {
    id: "dashboard",
    name: "Tela Inicial",
    path: "/",
    icon: AiFillHome,
  },
  {
    id: "taxasEvasao",
    name: "Taxas de Evasão",
    path: "/taxasEvasao",
    icon: AiOutlineAreaChart,
  },
  {
    id: "taxasEvasaoII",
    name: "Taxas de Evasão II",
    path: "/taxasEvasaoII",
    icon: BsFillBarChartFill,
  },
  {
    id: "taxasEvasaoIII",
    name: "Taxas de Evasão III",
    path: "/taxasEvasaoIII",
    icon: TiChartLine,
  },
  {
    id: "taxasAprovacoes",
    name: "Taxas de Aprovações",
    path: "/taxasAprovacoes",
    icon: BsFillCheckCircleFill,
  },
  {
    id: "taxasReprovacoes",
    name: "Taxas de Reprovações",
    path: "/taxasReprovacoes",
    icon: AiFillCloseCircle,
  },
  {
    id: "sobre",
    name: "Sobre",
    path: "/sobre",
    icon: AiFillInfoCircle,
  },
];

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = React.useState(false);

  if (sidebarActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <div className="sidebar-header">
            <img src={logoUFC} alt="Logo UFC" />
            <h1>Evasão App</h1>
          </div>

          <div className="sidebar-content">
            {sideBarLinkItems.map((item) => (
              <SidebarLinkItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-mobile">
        <header>
          <div>
            <img src={logoUFC} alt="Logo UFC" />
          </div>
          <h1>Evasão App</h1>
        </header>
        <RiMenu2Line
          size="2rem"
          color="#fff"
          onClick={() => setSidebarActive(true)}
        />
        {sidebarActive && (
          <SidebarMobileExpanded
            items={sideBarLinkItems}
            active={sidebarActive}
            setActive={setSidebarActive}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
