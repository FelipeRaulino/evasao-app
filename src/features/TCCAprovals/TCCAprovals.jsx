import React from "react";

import "./TCCAprovals.css";

import {
  labelsPrimeirosSemestreFormatado as labelsPrimeiroSemestre,
  labelsSegundosSemestreFormatado as labelsSegundosSemestre,
  dadosPrimeirosSemestres,
  dadosSegundoSemestreFormatado,
} from "../../utils/PPCTDataFormatted";

import {
  labelsPrimeirosSemestreFormatado as labelsPrimeiroSemestreTCC,
  labelsSegundosSemestreFormatado as labelsSegundosSemestreTCC,
  dadosPrimeirosSemestresTCCI,
  dadosSegundosSemestresTCCI,
  dadosPrimeirosSemestresTCCII,
  dadosSegundosSemestresTCCII,
} from "../../utils/TCCDataFormatted";

import Chart from "../../components/Chart/Chart";

const mergedPPCTData = dadosPrimeirosSemestres.concat(
  dadosSegundoSemestreFormatado,
);

const mergedTCCIData = dadosPrimeirosSemestresTCCI.concat(
  dadosSegundosSemestresTCCI,
);

const mergedTCCIIData = dadosPrimeirosSemestresTCCII.concat(
  dadosSegundosSemestresTCCII,
);

const semestreOrder = [
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
  "2023.1",
];

const semestreTCCOrder = ["2012.1", "2012.2", ...semestreOrder];

function customSort(a, b) {
  // Primeiro, comparamos os cursos
  if (a.curso < b.curso) return -1;
  if (a.curso > b.curso) return 1;

  // Se os cursos forem iguais, comparamos os semestres com base na ordem personalizada
  const semestreAIndex = semestreOrder.indexOf(a.semestre);
  const semestreBIndex = semestreOrder.indexOf(b.semestre);

  if (semestreAIndex < semestreBIndex) return -1;
  if (semestreAIndex > semestreBIndex) return 1;

  // Se os cursos e semestres forem iguais, comparamos os períodos
  if (a.periodo < b.periodo) return -1;
  if (a.periodo > b.periodo) return 1;

  return 0; // Os objetos são iguais
}

mergedPPCTData.sort(customSort);

mergedTCCIData.sort(customSort);

mergedTCCIIData.sort(customSort);

const options = [
  {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Taxas de aprovações da disciplina de PPCT",
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
        text: "Taxas de aprovações da disciplina de PPCT",
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
        text: "Taxas de aprovações da disciplina de PPCT",
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
        text: "Taxas de aprovações de TCC I",
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
        text: "Taxas de aprovações de TCC I",
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
        text: "Taxas de aprovações de TCC II",
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
      },
      title: {
        display: true,
        text: "Taxas de aprovações de TCC I",
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
        text: "Taxas de aprovações de TCC II",
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
    labels: labelsPrimeiroSemestre,
    datasets: [
      {
        label: "Engenharia de Software",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Design Digital",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: "Ciência da Computação",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia da Computação",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: dadosPrimeirosSemestres
          .filter((item) => item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },

  {
    labels: labelsSegundosSemestre,
    datasets: [
      {
        label: "Engenharia de Software",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Design Digital",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: "Ciência da Computação",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia da Computação",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: dadosSegundoSemestreFormatado
          .filter((item) => item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },

  {
    labels: semestreOrder,
    datasets: [
      {
        label: "Engenharia de Software",
        data: mergedPPCTData
          .filter((item) => item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Design Digital",
        data: mergedPPCTData
          .filter((item) => item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: "Ciência da Computação",
        data: mergedPPCTData
          .filter((item) => item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: mergedPPCTData
          .filter((item) => item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia da Computação",
        data: mergedPPCTData
          .filter((item) => item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: mergedPPCTData
          .filter((item) => item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },

  {
    labels: labelsPrimeiroSemestreTCC,
    datasets: [
      {
        label: "Engenharia de Software",
        data: dadosPrimeirosSemestresTCCI
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ciência da Computação",
        data: dadosPrimeirosSemestresTCCI
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: dadosPrimeirosSemestresTCCI
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia de Computação",
        data: dadosPrimeirosSemestresTCCI
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: dadosPrimeirosSemestresTCCI
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "Design Digital",
        data: dadosPrimeirosSemestresTCCI
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
    labels: labelsSegundosSemestreTCC,
    datasets: [
      {
        label: "Engenharia de Software",
        data: dadosSegundosSemestresTCCI
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ciência da Computação",
        data: dadosSegundosSemestresTCCI
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: dadosSegundosSemestresTCCI
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia de Computação",
        data: dadosSegundosSemestresTCCI
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: dadosSegundosSemestresTCCI
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "Design Digital",
        data: dadosSegundosSemestresTCCI
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
    labels: labelsPrimeiroSemestreTCC,
    datasets: [
      {
        label: "Engenharia de Software",
        data: dadosPrimeirosSemestresTCCII
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ciência da Computação",
        data: dadosPrimeirosSemestresTCCII
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: dadosPrimeirosSemestresTCCII
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia de Computação",
        data: dadosPrimeirosSemestresTCCII
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: dadosPrimeirosSemestresTCCII
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "Design Digital",
        data: dadosPrimeirosSemestresTCCII
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
    labels: labelsSegundosSemestreTCC,
    datasets: [
      {
        label: "Engenharia de Software",
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
        label: "Ciência da Computação",
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
        label: "Sistemas da Informação",
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
        label: "Engenharia de Computação",
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
        label: "Redes de Computadores",
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
        label: "Design Digital",
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
    labels: semestreTCCOrder,
    datasets: [
      {
        label: "Engenharia de Software",
        data: mergedTCCIData
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ciência da Computação",
        data: mergedTCCIData
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: mergedTCCIData
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia de Computação",
        data: mergedTCCIData
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: mergedTCCIData
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "Design Digital",
        data: mergedTCCIData
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
    labels: semestreTCCOrder,
    datasets: [
      {
        label: "Engenharia de Software",
        data: mergedTCCIIData
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Ciência da Computação",
        data: mergedTCCIIData
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sistemas da Informação",
        data: mergedTCCIIData
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Engenharia de Computação",
        data: mergedTCCIIData
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Redes de Computadores",
        data: mergedTCCIIData
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxa)) return 0;
            return item.taxa * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: "Design Digital",
        data: mergedTCCIIData
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
];

const handleOnFormatAdditionalDataPPCT = (unformattedDataPPCT) => {
  const additionalData = semestreOrder.map((item) => ({
    semestre: item,
    dados: unformattedDataPPCT
      .filter((itemB) => itemB.semestre === item)
      .map((itemC) => ({
        semestre: itemC.semestre,
        curso: itemC.curso,
        quantidadeCurso: itemC.quantidadeCurso,
        aprovados: itemC.aprovados,
        reprovados: itemC.reprovados,
        reprovadosFalta: itemC.reprovadosFalta,
        cancelados: itemC.cancelados,
        trancados: itemC.trancados,
        trancadosTotal: itemC.trancadosTotal,
        suprimidos: itemC.suprimidos,
      })),
  }));

  additionalData.forEach((element) => {
    element.dados.push({
      curso: "Geral",
      aprovados: element.dados.reduce((acc, item) => {
        let aprovados = acc;
        aprovados += item.aprovados;
        return aprovados;
      }, 0),
      cancelados: element.dados.reduce((acc, item) => {
        let cancelados = acc;
        cancelados += item.cancelados;
        return cancelados;
      }, 0),
      quantidadeCurso: element.dados.reduce((acc, item) => {
        let quantidadeCurso = acc;
        quantidadeCurso += item.quantidadeCurso;
        return quantidadeCurso;
      }, 0),
      reprovados: element.dados.reduce((acc, item) => {
        let reprovados = acc;
        reprovados += item.reprovados;
        return reprovados;
      }, 0),
      reprovadosFalta: element.dados.reduce((acc, item) => {
        let reprovadosFalta = acc;
        reprovadosFalta += item.reprovadosFalta;
        return reprovadosFalta;
      }, 0),
      suprimidos: element.dados.reduce((acc, item) => {
        let suprimidos = acc;
        suprimidos += item.suprimidos;
        return suprimidos;
      }, 0),
      trancados: element.dados.reduce((acc, item) => {
        let trancados = acc;
        trancados += item.trancados;
        return trancados;
      }, 0),
      trancadosTotal: element.dados.reduce((acc, item) => {
        let trancadosTotal = acc;
        trancadosTotal += item.trancadosTotal;
        return trancadosTotal;
      }, 0),
      semestre: element.semestre,
    });
  });

  return additionalData;
};

const handleOnFormatAdditionalDataTCC = (unformattedDataTCC) =>
  semestreTCCOrder.map((item) => ({
    semestre: item,
    dados: unformattedDataTCC
      .filter((itemB) => itemB.semestre === item)
      .map((itemC) => ({
        curso: itemC.curso,
        quantidadeCurso: itemC.quantidadeCurso,
        semestre: itemC.semestre,
        aprovados: itemC.aprovados,
        reprovados: itemC.reprovados,
        reprovadosFalta: 0,
        cancelados: 0,
        trancados: itemC.trancados,
        suprimidos: itemC.suprimidos,
      })),
  }));

const TCCAprovals = () => (
  <div className="content-container">
    <h1>Taxas de Aprovações</h1>

    <Chart
      options={options[2]}
      data={data[2]}
      title="Relação: Cursos por semestre - PPCT"
      additionalData={handleOnFormatAdditionalDataPPCT(mergedPPCTData)}
      additionalDataTitle="PPCT - Geral"
    />

    <Chart
      options={options[0]}
      data={data[0]}
      title="Relação: Cursos por 1º semestres - PPCT"
      additionalData={handleOnFormatAdditionalDataPPCT(mergedPPCTData).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="PPCT - 1º Semestres"
    />

    <Chart
      options={options[1]}
      data={data[1]}
      title="Relação: Cursos por 2º semestres - PPCT"
      additionalData={handleOnFormatAdditionalDataPPCT(mergedPPCTData).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="PPCT - 2º Semestres"
    />

    <Chart
      options={options[7]}
      data={data[7]}
      title="Relação: Cursos por semestre - TCC I"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIData)}
      additionalDataTitle="TCC I - Geral"
    />

    <Chart
      options={options[3]}
      data={data[3]}
      title="Relação: Cursos por 1º semestres - TCC I"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIData).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC I - 1º Semestres"
    />

    <Chart
      options={options[4]}
      data={data[4]}
      title="Relação: Cursos por 2º semestres - TCC I"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIData).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC I - 2º Semestres"
    />

    <Chart
      options={options[8]}
      data={data[8]}
      title="Relação: Cursos por semestre - TCC II"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIIData)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      options={options[5]}
      data={data[5]}
      title="Relação: Cursos por 1º semestres - TCC II"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIIData).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC II - 1º Semestres"
    />

    <Chart
      options={options[6]}
      data={data[6]}
      title="Relação: Cursos por 2º semestres - TCC II"
      id="aprovacoesSegundosSemestresTCCII"
      additionalData={handleOnFormatAdditionalDataTCC(mergedTCCIIData).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC II - 2º Semestres"
    />
  </div>
);

export default TCCAprovals;
