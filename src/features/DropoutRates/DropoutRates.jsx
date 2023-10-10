import React from "react";
import Chart from "../../components/Chart/Chart";

import {
  labelsPrimeirosSemestreFormatado as labelsPrimeirosSemestres,
  labelsSegundosSemestreFormatado as labelsSegundosSemestre,
  taxasEvasaoTCCI,
  taxasEvasaoTCCII,
} from "../../utils/TCCDataFormatted";

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

const options = [
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC I",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "1º Semestres",
      },
    },
  },
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC I",
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
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC II",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "1º Semestres",
      },
    },
  },
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Taxas de evasão da atividade TCC II",
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
];

export const data = [
  {
    labels: labelsPrimeirosSemestres.filter((item) => item !== "2023.1"),
    datasets: [
      {
        label: "Engenharia de Software",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Ciência da Computação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Sistemas da Informação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Engenharia da Computação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Redes de Computadores",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Design Digital",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".1"))
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
    labels: labelsSegundosSemestre,
    datasets: [
      {
        label: "Engenharia de Software",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Ciência da Computação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Sistemas da Informação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Engenharia da Computação",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Redes de Computadores",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Design Digital",
        data: taxasEvasaoTCCI
          .filter((item) => item.semestreAtual.includes(".2"))
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
    labels: semestreOrder,
    datasets: [
      {
        label: "Engenharia de Software",
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
        label: "Ciência da Computação",
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
        label: "Sistemas da Informação",
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
        label: "Engenharia da Computação",
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
        label: "Redes de Computadores",
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
        label: "Design Digital",
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

  {
    labels: labelsPrimeirosSemestres.filter((item) => item !== "2023.1"),
    datasets: [
      {
        label: "Engenharia de Software",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Ciência da Computação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Sistemas da Informação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Engenharia da Computação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Redes de Computadores",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
        label: "Design Digital",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".1"))
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
    labels: labelsSegundosSemestre,
    datasets: [
      {
        label: "Engenharia de Software",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Ciência da Computação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Sistemas da Informação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Engenharia da Computação",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Redes de Computadores",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
        label: "Design Digital",
        data: taxasEvasaoTCCII
          .filter((item) => item.semestreAtual.includes(".2"))
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
    labels: semestreOrder,
    datasets: [
      {
        label: "Engenharia de Software",
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
        label: "Ciência da Computação",
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
        label: "Sistemas da Informação",
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
        label: "Engenharia da Computação",
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
        label: "Redes de Computadores",
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
        label: "Design Digital",
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
];

const handleOnFormatAdditionalDataTCC = (unformattedDataTCC) => [
  {
    semestre: "2012.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2012.1"),
  },
  {
    semestre: "2012.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2012.2"),
  },
  {
    semestre: "2013.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2013.1"),
  },
  {
    semestre: "2013.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2013.2"),
  },
  {
    semestre: "2014.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2014.1"),
  },
  {
    semestre: "2014.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2014.2"),
  },
  {
    semestre: "2015.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2015.1"),
  },
  {
    semestre: "2015.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2015.2"),
  },
  {
    semestre: "2016.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2016.1"),
  },
  {
    semestre: "2016.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2016.2"),
  },
  {
    semestre: "2017.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2017.1"),
  },
  {
    semestre: "2017.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2017.2"),
  },
  {
    semestre: "2018.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2018.1"),
  },
  {
    semestre: "2018.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2018.2"),
  },
  {
    semestre: "2019.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2019.1"),
  },
  {
    semestre: "2019.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2019.2"),
  },
  {
    semestre: "2020.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2020.1"),
  },
  {
    semestre: "2020.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2020.2"),
  },
  {
    semestre: "2021.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2021.1"),
  },
  {
    semestre: "2021.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2021.2"),
  },
  {
    semestre: "2022.1",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2022.1"),
  },
  {
    semestre: "2022.2",
    dados: unformattedDataTCC.filter((item) => item.semestreAtual === "2022.2"),
  },
];

const DropoutRates = () => (
  <div className="content-container">
    <h1>Taxas de Evasão</h1>

    <Chart
      data={data[2]}
      options={options[2]}
      title="Relação: Curso x Semestre - TCC I (Geral)"
      id="evasaoGeralTCCI"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI)}
      additionalDataTitle="TCC I - Geral"
    />

    <Chart
      data={data[0]}
      options={options[0]}
      title="Relação: Curso x Semestre  - TCC I (1º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC I - 1º Semestres"
    />

    <Chart
      data={data[1]}
      options={options[1]}
      title="Relação: Curso x Semestre  - TCC I (2º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC I - 2º Semestres"
    />

    <Chart
      data={data[5]}
      options={options[5]}
      title="Relação: Curso x Semestre  - TCC II (Geral)"
      id="geralTCCII"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      data={data[3]}
      options={options[3]}
      title="Relação: Curso x Semestre  - TCC II (1º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC II - 1º Semestres"
    />

    <Chart
      data={data[4]}
      options={options[4]}
      title="Relação: Curso x Semestre  - TCC II (2º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC II - 2º Semestres"
    />
  </div>
);

export default DropoutRates;
