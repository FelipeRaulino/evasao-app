import React from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";

import lineChartIcon from "../../assets/chart (1).png";
import barChartIcon from "../../assets/bar-chart (1).png";
import pieChartIcon from "../../assets/pie-chart (1).png";
import downloadIcon from "../../assets/downloads.png";
import infoIcon from "../../assets/info-2.png";

import "./Chart.css";
import Modal from "./components/Modal/Modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
);

// eslint-disable-next-line react/prop-types
const Chart = ({ options, data, title, id }) => {
  const [modalActive, setModalActive] = React.useState(false);

  const openModal = () => {
    setModalActive(true);

    setTimeout(() => {
      const modal = document.querySelector(".modal-container");
      if (modal) {
        modal.classList.add("show");
      }
    }, 10);
  };

  if (modalActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <div className="chart-container" id={id}>
      <h2>{title}</h2>
      <button type="button" onClick={openModal}>
        <img src={infoIcon} alt="Ícone de informação" />
        Interações possíveis com o gráfico
      </button>

      {modalActive && (
        <Modal modalActive={modalActive} setModalActive={setModalActive} />
      )}

      <div className="chart-wrapper">
        <Line options={options} data={{ ...data }} />
      </div>

      <div className="chart-range-container">
        <input type="range" />
      </div>

      <div className="chart-btn-container">
        <a href="#linha" className="active">
          <img src={lineChartIcon} alt="Ícone do gráfico em linhas" />
          Gráfico em linhas
        </a>
        <a href="#barra">
          <img src={barChartIcon} alt="Ícone do gráfico em barras" />
          Gráfico em barras
        </a>
        <a href="#pizza">
          <img src={pieChartIcon} alt="Ícone do gráfico em pizza" />
          Gráfico em pizza
        </a>
      </div>

      <div className="chart-btn-download-container">
        <a href="#download">
          <img src={downloadIcon} alt="Ícone de download" />
          Download
        </a>
      </div>
    </div>
  );
};

export default Chart;
