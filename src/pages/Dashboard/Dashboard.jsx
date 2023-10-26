import React from "react";
import { NavHashLink } from "react-router-hash-link";

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

import "./Dashboard.css";

import {
  dropoutRatesData,
  dropoutRatesOptions,
  approvalRatesData,
  approvalRatesOptions,
  reprovalRatesOptions,
  reprovalRatesData,
} from "../../utils/ChartOptions";

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

const Dashboard = () => (
  <div className="content-container">
    <h1>Dashboard</h1>
    <section className="main-container">
      <div className="main-first">
        <div className="main-first-chart-item">
          <h3>Taxas de aprovações</h3>
          <h4>Relação: UFC[Quixadá] x Semestre - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line
              options={approvalRatesOptions.TCCIIOptions[3]}
              data={approvalRatesData.TCCIIData[3]}
            />
          </div>
          <NavHashLink to="/taxasAprovacoes#TCC-II-UFC-Approvals">
            Conferir em detalhes
          </NavHashLink>
        </div>
        <div className="main-first-chart-item">
          <h3>Taxas de reprovações</h3>
          <h4>Relação: UFC[Quixadá] x Semestres - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line
              options={reprovalRatesOptions.TCCIIOptions[3]}
              data={reprovalRatesData.TCCIIData[3]}
            />
          </div>
          <NavHashLink to="/taxasReprovacoes#TCC-II-UFC-Reprovals">
            Conferir em detalhes
          </NavHashLink>
        </div>
      </div>
      <div className="main-second">
        <h3>Taxas de evasão</h3>
        <h4>Relação: UFC[Quixadá] por semestre - TCC II</h4>
        <div className="main-second-chart-wrapper">
          <Line
            options={dropoutRatesOptions.TCCIIOptions[3]}
            data={dropoutRatesData.TCCIIData[3]}
          />
        </div>
        <NavHashLink to="/taxasEvasao#TCC-II-UFC-Dropouts">
          Conferir em detalhes
        </NavHashLink>
      </div>
    </section>
  </div>
);

export default Dashboard;
