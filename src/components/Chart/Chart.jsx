/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Bar, Line } from "react-chartjs-2";

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
  BarElement,
  ArcElement,
} from "chart.js";

import activeLineChartIcon from "../../assets/chart (1).png";
import lineChartIcon from "../../assets/chart.png";
import activeBarChartIcon from "../../assets/bar-chart.png";
import barChartIcon from "../../assets/bar-chart (1).png";
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
  BarElement,
  ArcElement,
);

const Chart = ({ options, data, title, id }) => {
  const [modalActive, setModalActive] = React.useState(false);
  const [labels, setLabels] = React.useState(data.labels);
  const [active, setActive] = React.useState("linhas");
  const canvasElement = React.useRef(null);

  const LABELS = data.labels;

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

  const updateChartOnRange = (event) => {
    const rangeValue = LABELS.slice(0, event.target.value);
    setLabels(rangeValue);
  };

  const handleOnDownload = () => {
    const shadowA = document.createElement("a");
    shadowA.href = canvasElement.current.canvas.toDataURL("image/png", 1);
    shadowA.download = "grafico";
    shadowA.click();
  };

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
        {active === "linhas" ? (
          <Line
            options={options}
            data={{ ...data, labels }}
            ref={canvasElement}
          />
        ) : (
          <Bar
            options={options}
            data={{ ...data, labels }}
            ref={canvasElement}
          />
        )}
      </div>

      <div className="chart-range-container">
        <input
          type="range"
          onInput={updateChartOnRange}
          min={5}
          max={LABELS.length}
        />
      </div>

      <div className="chart-btn-container">
        <a
          href="#linha"
          className={active === "linhas" ? "active" : ""}
          onClick={() => setActive("linhas")}
        >
          <img
            src={active === "linhas" ? activeLineChartIcon : lineChartIcon}
            alt="Ícone do gráfico em linhas"
          />
          Gráfico em linhas
        </a>
        <a
          href="#barra"
          className={active === "barras" ? "active" : ""}
          onClick={() => setActive("barras")}
        >
          <img
            src={active === "barras" ? activeBarChartIcon : barChartIcon}
            alt="Ícone do gráfico em barras"
          />
          Gráfico em barras
        </a>
      </div>

      <div className="chart-btn-download-container">
        <button type="button" onClick={handleOnDownload}>
          <img src={downloadIcon} alt="Ícone de download" />
          Download
        </button>
      </div>
    </div>
  );
};

export default Chart;
