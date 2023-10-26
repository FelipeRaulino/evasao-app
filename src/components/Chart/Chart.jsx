/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillClipboard2DataFill } from "react-icons/bs";

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

import "./Chart.css";
import Modal from "./Modal/Modal";
import ChartInfo from "./Modal/ChartInfo/ChartInfo";
import ChartAdditionalDataInfo from "./Modal/ChartAdditionalDataInfo/ChartAdditionalDataInfo";

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

const Chart = ({
  options,
  data,
  title,
  id,
  additionalData,
  additionalDataTitle,
}) => {
  const [modalActive, setModalActive] = React.useState("");
  const [labels, setLabels] = React.useState(data.labels);
  const [active, setActive] = React.useState("linhas");
  const canvasElement = React.useRef(null);

  const LABELS = data.labels;

  const openModal = (modalSelected) => {
    setModalActive(modalSelected);
    setTimeout(() => {
      const modal = document.querySelector(".modal-container");
      if (modal) {
        modal.classList.add("show");
      }
    }, 10);
  };

  const closeModal = () => {
    setModalActive("");
    setTimeout(() => {
      const modal = document.querySelector(".modal-container");
      if (modal) {
        modal.classList.remove("show");
      }
    }, 10);
  };

  if (
    modalActive === "chartInfo" ||
    modalActive === "chartAdditionalDataInfo"
  ) {
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

      <button type="button" onClick={() => openModal("chartInfo")}>
        <AiFillInfoCircle size="1.125rem" />
        Clique aqui para saber mais sobre o gráfico
      </button>
      <button
        type="button"
        onClick={() => openModal("chartAdditionalDataInfo")}
      >
        <BsFillClipboard2DataFill size="1.125rem" />
        Veja dados adicionais
      </button>

      {modalActive === "chartInfo" ? (
        <Modal closeModal={closeModal}>
          <ChartInfo closeModal={closeModal} />
        </Modal>
      ) : modalActive === "chartAdditionalDataInfo" ? (
        <Modal closeModal={closeModal}>
          <ChartAdditionalDataInfo
            additionalDataTitle={additionalDataTitle}
            data={additionalData}
            closeModal={closeModal}
          />
        </Modal>
      ) : null}

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
