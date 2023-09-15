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
    path: "/",
    icon: homeIcon,
  },
  {
    id: "taxaEvasao",
    name: "Taxa de Evasão",
    path: "/taxaEvasao",
    icon: taxaEvasaoIcon,
  },
  {
    id: "aprovacoesTCC",
    name: "Aprovações de TCC",
    path: "/aprovacoesTCC",
    icon: aprovacoesTCCIcon,
  },
  {
    id: "taxasRetencaoI",
    name: "Taxas de Retenção I",
    path: "/taxasRetencaoI",
    icon: taxaRetencaoIIcon,
  },
  {
    id: "taxasRetencaoII",
    name: "Taxas de Retenção II",
    path: "/taxasRetencaoII",
    icon: taxaRetencaoIIIcon,
  },
  {
    id: "sobre",
    name: "Sobre",
    path: "/sobre",
    icon: sobreIcon,
  },
];

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="sidebar-header">
      <img src={logoUFC} alt="Logo UFC" />
      <h1>Evasão de TCC</h1>
    </div>

    {sideBarLinkItems.map((item) => (
      <SidebarLinkItem key={item.id} item={item} />
    ))}
  </div>
);

export default Sidebar;
