/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ setModalActive }) => {
  const closeModal = () => {
    setModalActive(false);

    setTimeout(() => {
      const modal = document.querySelector(".modal-container");
      if (modal) {
        modal.classList.remove("show");
      }
    }, 10);
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="chart-info-actions"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={closeModal}>
          X
        </button>
        <h3>Ações possíveis de personalização dos dados do gráfico</h3>
        <ul>
          <li>
            Clique na descrição de um curso para remover/adicionar seus dados.
          </li>
          <li>
            Arraste o elemento de “range” para aumentar ou diminuir a quantidade
            de semestres a serem considerados.
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
            Deseja apresentar o gráfico para alguém ? Clique no botão de
            download para exportar o gráfico como uma imagem{" "}
            <strong>.png</strong>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
