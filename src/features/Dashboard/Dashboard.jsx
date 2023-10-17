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
          <h3>Taxas de evasão</h3>
          <h4>Relação: Semestre por curso - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line
              options={dropoutRatesOptions.TCCIIOptions[0]}
              data={dropoutRatesData.TCCIIData[0]}
            />
          </div>
          <NavHashLink to="/taxasEvasao#geralTCCII">
            Conferir em detalhes
          </NavHashLink>
        </div>
        <div className="main-first-chart-item">
          <h3>Taxas de aprovações</h3>
          <h4>Relação: Cursos por 2º semestres - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line
              options={approvalRatesOptions.TCCIIOptions[1]}
              data={approvalRatesData.TCCIIData[1]}
            />
          </div>
          <NavHashLink to="/taxasAprovacoes#aprovacoesSegundosSemestresTCCII">
            Conferir em detalhes
          </NavHashLink>
        </div>
      </div>
      <div className="main-second">
        <h3>Taxas de evasão</h3>
        <h4>Relação: Semestre por curso - TCC I</h4>
        <div className="main-second-chart-wrapper">
          <Line
            options={dropoutRatesOptions.TCCIOptions[2]}
            data={dropoutRatesData.TCCIData[2]}
          />
        </div>
        <NavHashLink to="/taxasEvasao#evasaoGeralTCCI">
          Conferir em detalhes
        </NavHashLink>
      </div>
    </section>
  </div>
);

export default Dashboard;
