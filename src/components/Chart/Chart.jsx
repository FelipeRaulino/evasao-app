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
const Chart = ({ options, data, title }) => (
  <div className="chart-container">
    <h2>{title}</h2>
    <span>
      <img src={infoIcon} alt="Ícone de informação" />
      Interações possíveis com o gráfico
    </span>
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

export default Chart;
