/* eslint-disable react/prop-types */
import React from "react";

import plusIcon from "../../../../../assets/plus (1).png";

import "./SemestreMenuAccordion.css";
import CursoMenuAccordion from "./CursoMenuAccordion/CursoMenuAccordion";

const SemestreMenuAccordion = ({ semestreData, expand, onExpand }) => {
  const [expandedItem, setExpandedItem] = React.useState(null);

  const handleOnExpandItem = (curso) => {
    if (expandedItem === curso) {
      setExpandedItem(null);
    } else {
      setExpandedItem(curso);
    }
  };

  return (
    <div className="semestre-accordion-container">
      <header
        onClick={() => onExpand(semestreData.semestre)}
        onKeyPress={() => onExpand(semestreData.semestre)}
        role="button"
        tabIndex="0"
      >
        <span>Informações sobre {semestreData.semestre}</span>
        <button type="button" onClick={() => onExpand(semestreData.semestre)}>
          <img src={plusIcon} alt="Ícone de adição" />
        </button>
      </header>
      {expand &&
        semestreData.dados.map((cursoData) => (
          <CursoMenuAccordion
            key={cursoData.curso}
            cursoData={cursoData}
            expand={expandedItem === cursoData.curso}
            onExpand={handleOnExpandItem}
          />
        ))}
    </div>
  );
};

export default SemestreMenuAccordion;
