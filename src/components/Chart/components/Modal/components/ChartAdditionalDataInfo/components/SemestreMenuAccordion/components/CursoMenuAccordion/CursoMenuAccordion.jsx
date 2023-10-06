/* eslint-disable react/prop-types */
import React from "react";

import plusIcon from "../../../../../../../../../../assets/plus (1).png";

import "./CursoMenuAccordion.css";

const CursoMenuAccordion = ({ cursoData, expand, onExpand }) => (
  <div className="curso-accordion">
    <header
      onClick={() => onExpand(cursoData.curso)}
      onKeyPress={() => onExpand(cursoData.curso)}
      role="button"
      tabIndex="0"
    >
      <span>Informações sobre {cursoData.curso}</span>
      <button type="button" onClick={() => onExpand(cursoData.curso)}>
        <img src={plusIcon} alt="Ícone de adição" />
      </button>
    </header>
    {expand && (
      <div className="curso-accordion__content">
        <p>
          <strong>Quantidade de matrículados:</strong>{" "}
          {cursoData.quantidadeCurso}
        </p>
        <p>
          <strong>Quantidade de aprovados:</strong> {cursoData.aprovados}
        </p>
        <p>
          <strong>Quantidade de reprovados:</strong> {cursoData.reprovados}
        </p>
        <p>
          <strong>Quantidade de reprovados por falta:</strong>{" "}
          {cursoData.reprovadosFalta}
        </p>
        <p>
          <strong>Quantidade de matrículas canceladas:</strong>{" "}
          {cursoData.cancelados}
        </p>
        <p>
          <strong>Quantidade de matrículas trancadas:</strong>{" "}
          {cursoData.trancados + cursoData.trancadosTotal}
        </p>

        {cursoData.semestre.includes("2020") ||
        cursoData.semestre.includes("2021") ? (
          <p>
            <strong>Quantidade de matrículas suprimidas:</strong>{" "}
            {cursoData.suprimidos}
          </p>
        ) : null}
      </div>
    )}
  </div>
);

export default CursoMenuAccordion;
