/* eslint-disable react/prop-types */
import React from "react";

import "./ChartAdditionalDataInfo.css";
import SemestreMenuAccordion from "./components/SemestreMenuAccordion/SemestreMenuAccordion";

/* const dataMock = [
  {
    semestre: "2013.1",
    dados: [
      {
        curso: "Geral",
        aprovados: 10,
        matriculados: 20,
        reprovados: 5,
        trancados: 5,
      },
      {
        curso: "Engenharia de Software",
        aprovados: 10,
        matriculados: 20,
        reprovados: 5,
        trancados: 5,
      },
    ],
  },
  {
    semestre: "2013.2",
    dados: [
      {
        curso: "Geral",
        aprovados: 10,
        matriculados: 20,
        reprovados: 5,
        trancados: 5,
      },
      {
        curso: "Engenharia de Software",
        aprovados: 10,
        matriculados: 20,
        reprovados: 5,
        trancados: 5,
      },
    ],
  },
]; */

const ChartAdditionalDataInfo = ({ closeModal, data, additionalDataTitle }) => {
  const [expandedItem, setExpandedItem] = React.useState(null);
  const [icon, setIcon] = React.useState("plus");

  const handleOnExpand = (semester) => {
    if (expandedItem === semester) {
      setExpandedItem(null);
      setIcon("plus");
    } else {
      setExpandedItem(semester);
      setIcon("minus");
    }
  };

  return (
    <div
      className="accordion-menu"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
      role="menuitem"
      tabIndex="0"
    >
      <button type="button" onClick={closeModal}>
        X
      </button>

      <h1>Informações sobre {additionalDataTitle}</h1>

      <div className="accordion-menu__content">
        {data.map((semestreData) => (
          <SemestreMenuAccordion
            key={semestreData.semestre}
            semestreData={semestreData}
            expand={expandedItem === semestreData.semestre}
            onExpand={handleOnExpand}
            iconProp={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartAdditionalDataInfo;
