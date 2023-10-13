import React from "react";

import { RiMenu2Line } from "react-icons/ri";

import "./Sidebar.css";
import logoUFC from "../../assets/logo-ufc.png";
import SidebarLinkItem from "./components/SidebarLinkItem/SidebarLinkItem";

import homeIcon from "../../assets/home.png";
import taxaEvasaoIcon from "../../assets/chart (1).png";
import aprovacoesTCCIcon from "../../assets/checkmark.png";
/* import taxaRetencaoIIcon from "../../assets/analysis.png";
import taxaRetencaoIIIcon from "../../assets/online-analysis.png"; */
import sobreIcon from "../../assets/info.png";
import SidebarMobileExpanded from "./components/SidebarMobileExpanded/SidebarMobileExpanded";

const sideBarLinkItems = [
  {
    id: "dashboard",
    name: "Tela Inicial",
    path: "/",
    icon: homeIcon,
  },
  {
    id: "taxaEvasao",
    name: "Taxas de Evasão",
    path: "/taxaEvasao",
    icon: taxaEvasaoIcon,
  },
  {
    id: "aprovacoesTCC",
    name: "Taxas de Aprovações",
    path: "/aprovacoesTCC",
    icon: aprovacoesTCCIcon,
  },
  /* {
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
  }, */
  {
    id: "sobre",
    name: "Sobre",
    path: "/sobre",
    icon: sobreIcon,
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
        <div className="sidebar-header">
          <img src={logoUFC} alt="Logo UFC" />
          <h1>Evasão de TCC</h1>
        </div>

        <div className="sidebar-content">
          {sideBarLinkItems.map((item) => (
            <SidebarLinkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="sidebar-mobile">
        <header>
          <div>
            <img src={logoUFC} alt="Logo UFC" />
          </div>
          <h1>Evasão de TCC</h1>
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
