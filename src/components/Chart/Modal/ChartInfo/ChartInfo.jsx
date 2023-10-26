/* eslint-disable react/prop-types */
import React from "react";

import "./ChartInfo.css";

const ChartInfo = ({ closeModal }) => (
  <div
    className="chart-info-actions"
    onClick={(event) => event.stopPropagation()}
    onKeyUp={(event) => event.stopPropagation()}
    role="menuitem"
    tabIndex="0"
  >
    <button type="button" onClick={closeModal}>
      X
    </button>
    <h3>Ações possíveis de personalização dos dados do gráfico</h3>
    <ul>
      <li>Clique na legenda de um curso para remover/adicionar seus dados.</li>
      <li>
        Arraste o elemento de “range” para aumentar ou diminuir a quantidade de
        semestres a serem considerados.
      </li>
      <li>
        Passe o mouse por cima de um ponto específico para saber detalhes
        estatísticos de tal ponto.
      </li>
      <li>
        Mude a forma de visualização do gráfico ao clicar nas opções
        disponíveis.
      </li>
      <li>
        Deseja apresentar o gráfico para alguém ? Clique no botão de download
        para exportar o gráfico como uma imagem <strong>.png</strong>.
      </li>
    </ul>
  </div>
);

export default ChartInfo;
