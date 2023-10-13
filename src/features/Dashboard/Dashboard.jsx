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
  labelsSegundosSemestreFormatado as labelsSegundosSemestreTCC,
  taxasEvasaoTCCI,
  taxasEvasaoTCCII,
  dadosSegundosSemestresTCCII,
} from "../../utils/TCCDataFormatted";

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

const semestreOrder = [
  "2012.1",
  "2012.2",
  "2013.1",
  "2013.2",
  "2014.1",
  "2014.2",
  "2015.1",
  "2015.2",
  "2016.1",
  "2016.2",
  "2017.1",
  "2017.2",
  "2018.1",
  "2018.2",
  "2019.1",
  "2019.2",
  "2020.1",
  "2020.2",
  "2021.1",
  "2021.2",
  "2022.1",
  "2022.2",
];

function customSort(a, b) {
  // Primeiro, comparamos os cursos
  if (a.curso < b.curso) return -1;
  if (a.curso > b.curso) return 1;

  // Se os cursos forem iguais, comparamos os semestres com base na ordem personalizada
  const semestreAIndex = semestreOrder.indexOf(a.semestreAtual);
  const semestreBIndex = semestreOrder.indexOf(b.semestreAtual);

  if (semestreAIndex < semestreBIndex) return -1;
  if (semestreAIndex > semestreBIndex) return 1;

  /*  // Se os cursos e semestres forem iguais, comparamos os períodos
  if (a.periodo < b.periodo) return -1;
  if (a.periodo > b.periodo) return 1; */

  return 0; // Os objetos são iguais
}

taxasEvasaoTCCI.sort(customSort);
taxasEvasaoTCCII.sort(customSort);

const options = [
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC II",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "Geral",
      },
    },
  },
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: true,
        text: "Taxas de aprovações de TCC II",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "2º Semestres",
      },
    },
  },
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC I",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "Geral",
      },
    },
  },
];

const data = [
  {
    labels: semestreOrder,
    datasets: [
      {
        label: "ES",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "CC",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "SI",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Sistemas da Informação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "EC",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "RC",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "DD",
        data: taxasEvasaoTCCII
          .filter((item) => item.curso === "Design Digital")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
    ],
  },
  {
    labels: labelsSegundosSemestreTCC,
    datasets: [
      {
        label: "ES",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "CC",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "SI",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "EC",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "RC",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "DD",
        data: dadosSegundosSemestresTCCII
          .filter((item) => item.curso === "Design Digital")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkblue",
        backgroundColor: "darkblue",
      },
    ],
  },
  {
    labels: semestreOrder,
    datasets: [
      {
        label: "ES",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "CC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "SI",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Sistemas da Informação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "EC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "RC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "DD",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Design Digital")
          .map((item) => {
            if (Number.isNaN(item.taxaEvasao)) return 0;
            if (!Number.isFinite(item.taxaEvasao)) return 0;
            return item.taxaEvasao;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
    ],
  },
];

const Dashboard = () => (
  <div className="content-container">
    <h1>Dashboard</h1>
    <section className="main-container">
      <div className="main-first">
        <div className="main-first-chart-item">
          <h3>Taxas de evasão</h3>
          <h4>Relação: Semestre por curso - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line options={options[0]} data={data[0]} />
          </div>
          <NavHashLink to="/taxaEvasao#geralTCCII">
            Conferir em detalhes
          </NavHashLink>
        </div>
        <div className="main-first-chart-item">
          <h3>Taxas de aprovações</h3>
          <h4>Relação: Cursos por 2º semestres - TCC II</h4>
          <div className="main-first-chart-wrapper">
            <Line options={options[1]} data={data[1]} />
          </div>
          <NavHashLink to="/aprovacoesTCC#aprovacoesSegundosSemestresTCCII">
            Conferir em detalhes
          </NavHashLink>
        </div>
      </div>
      <div className="main-second">
        <h3>Taxas de evasão</h3>
        <h4>Relação: Semestre por curso - TCC I</h4>
        <div className="main-second-chart-wrapper">
          <Line options={options[2]} data={data[2]} />
        </div>
        <NavHashLink to="/taxaEvasao#evasaoGeralTCCI">
          Conferir em detalhes
        </NavHashLink>
      </div>
    </section>
  </div>
);

export default Dashboard;
