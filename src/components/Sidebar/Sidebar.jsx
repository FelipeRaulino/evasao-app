import React from "react";

import "./Sidebar.css";
import logoUFC from "../../assets/logo-ufc.png";
import SidebarLinkItem from "./components/SidebarLinkItem";

import homeIcon from "../../assets/home.png";
import taxaEvasaoIcon from "../../assets/chart (1).png";
import aprovacoesTCCIcon from "../../assets/checkmark.png";
import taxaRetencaoIIcon from "../../assets/analysis.png";
import taxaRetencaoIIIcon from "../../assets/online-analysis.png";
import sobreIcon from "../../assets/info.png";

const sideBarLinkItems = [
  {
    id: "dashboard",
    name: "Tela Inicial",
    icon: homeIcon,
    active: true,
  },
  {
    id: "taxaEvasao",
    name: "Taxa de Evasão",
    icon: taxaEvasaoIcon,
    active: false,
  },
  {
    id: "aprovacoesTCC",
    name: "Aprovações de TCC",
    icon: aprovacoesTCCIcon,
    active: false,
  },
  {
    id: "taxasRetencaoI",
    name: "Taxas de Retenção I",
    icon: taxaRetencaoIIcon,
    active: false,
  },
  {
    id: "taxasRetencaoII",
    name: "Taxas de Retenção II",
    icon: taxaRetencaoIIIcon,
    active: false,
  },
  {
    id: "sobre",
    name: "Sobre",
    icon: sobreIcon,
    active: false,
  },
];

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="sidebar-header">
      <img src={logoUFC} alt="Logo UFC" />
      <h1>Evasão de TCC</h1>
    </div>
    <ul>
      {sideBarLinkItems.map((item) => (
        <SidebarLinkItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

export default Sidebar;
