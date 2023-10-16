import React from "react";

import { dadosPPCT } from "../../utils/PPCTDataFormatted";
import { taxasEvasaoTCCI } from "../../utils/TCCDataFormatted";

import Chart from "../../components/Chart/Chart";

const windowWidth = window.innerWidth;

const PPCTOptions = [
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
        text: "Taxas de reprovações da disciplina de PPCT",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "Geral",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }

            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(1)}%`;
            }

            return label;
          },
          afterBody: (context) => {
            if (context.length === 1) {
              const semestre = context[0].label;
              let curso = context[0].dataset.label;

              switch (curso) {
                case "Engenharia de Software":
                  curso = "ES";
                  break;
                case "Engenharia de Computação":
                  curso = "EC";
                  break;
                case "Redes de Computadores":
                  curso = "RC";
                  break;
                case "Ciência da Computação":
                  curso = "CC";
                  break;
                case "Design Digital":
                  curso = "DD";
                  break;
                case "Sistemas de Informação":
                  curso = "SI";
                  break;
                default:
                  break;
              }

              const data = dadosPPCT.filter(
                (item) => item.semestre === semestre && item.curso === curso,
              );

              return `\t\t\t\tQuantidade de Matrículas: ${
                data[0].qtdDeMatriculas
              }\n\t\t\t\tReprovados: ${
                data[0].quantidadeDeReprovados + data[0].reprovadosFalta
              }`;
            }

            let labelFormatted = "";

            context.forEach((item) => {
              const semestreItem = item.label;
              let cursoItem = item.dataset.label;

              switch (cursoItem) {
                case "Engenharia de Software":
                  cursoItem = "ES";
                  break;
                case "Engenharia de Computação":
                  cursoItem = "EC";
                  break;
                case "Redes de Computadores":
                  cursoItem = "RC";
                  break;
                case "Ciência da Computação":
                  cursoItem = "CC";
                  break;
                case "Design Digital":
                  cursoItem = "DD";
                  break;
                case "Sistemas de Informação":
                  cursoItem = "SI";
                  break;
                default:
                  break;
              }

              const dataItem = dadosPPCT.filter(
                (itemB) =>
                  itemB.semestre === semestreItem && itemB.curso === cursoItem,
              );

              labelFormatted += `\n\tQuantidade de Matrículas (${
                dataItem[0].curso
              }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                dataItem[0].curso
              }): ${
                dataItem[0].quantidadeDeReprovados + dataItem[0].reprovadosFalta
              }`;
            });

            return labelFormatted;
          },
        },
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
        text: "Taxas de reprovações da disciplina de PPCT",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "1º Semestres",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }

            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(1)}%`;
            }

            return label;
          },
          afterBody: (context) => {
            if (context.length === 1) {
              const semestre = context[0].label;
              let curso = context[0].dataset.label;

              switch (curso) {
                case "Engenharia de Software":
                  curso = "ES";
                  break;
                case "Engenharia de Computação":
                  curso = "EC";
                  break;
                case "Redes de Computadores":
                  curso = "RC";
                  break;
                case "Ciência da Computação":
                  curso = "CC";
                  break;
                case "Design Digital":
                  curso = "DD";
                  break;
                case "Sistemas de Informação":
                  curso = "SI";
                  break;
                default:
                  break;
              }

              const data = dadosPPCT.filter(
                (item) => item.semestre === semestre && item.curso === curso,
              );

              return `\t\t\t\tQuantidade de Matrículas: ${
                data[0].qtdDeMatriculas
              }\n\t\t\t\tReprovados: ${
                data[0].quantidadeDeReprovados + data[0].reprovadosFalta
              }`;
            }

            let labelFormatted = "";

            context.forEach((item) => {
              const semestreItem = item.label;
              let cursoItem = item.dataset.label;

              switch (cursoItem) {
                case "Engenharia de Software":
                  cursoItem = "ES";
                  break;
                case "Engenharia de Computação":
                  cursoItem = "EC";
                  break;
                case "Redes de Computadores":
                  cursoItem = "RC";
                  break;
                case "Ciência da Computação":
                  cursoItem = "CC";
                  break;
                case "Design Digital":
                  cursoItem = "DD";
                  break;
                case "Sistemas de Informação":
                  cursoItem = "SI";
                  break;
                default:
                  break;
              }

              const dataItem = dadosPPCT.filter(
                (itemB) =>
                  itemB.semestre === semestreItem && itemB.curso === cursoItem,
              );

              labelFormatted += `\n\tQuantidade de Matrículas (${
                dataItem[0].curso
              }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                dataItem[0].curso
              }): ${
                dataItem[0].quantidadeDeReprovados + dataItem[0].reprovadosFalta
              }`;
            });

            return labelFormatted;
          },
        },
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
        text: "Taxas de reprovações da disciplina de PPCT",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "2º Semestres",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }

            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(1)}%`;
            }

            return label;
          },
          afterBody: (context) => {
            if (context.length === 1) {
              const semestre = context[0].label;
              let curso = context[0].dataset.label;

              switch (curso) {
                case "Engenharia de Software":
                  curso = "ES";
                  break;
                case "Engenharia de Computação":
                  curso = "EC";
                  break;
                case "Redes de Computadores":
                  curso = "RC";
                  break;
                case "Ciência da Computação":
                  curso = "CC";
                  break;
                case "Design Digital":
                  curso = "DD";
                  break;
                case "Sistemas de Informação":
                  curso = "SI";
                  break;
                default:
                  break;
              }

              const data = dadosPPCT.filter(
                (item) => item.semestre === semestre && item.curso === curso,
              );

              return `\t\t\t\tQuantidade de Matrículas: ${
                data[0].qtdDeMatriculas
              }\n\t\t\t\tReprovados: ${
                data[0].quantidadeDeReprovados + data[0].reprovadosFalta
              }`;
            }

            let labelFormatted = "";

            context.forEach((item) => {
              const semestreItem = item.label;
              let cursoItem = item.dataset.label;

              switch (cursoItem) {
                case "Engenharia de Software":
                  cursoItem = "ES";
                  break;
                case "Engenharia de Computação":
                  cursoItem = "EC";
                  break;
                case "Redes de Computadores":
                  cursoItem = "RC";
                  break;
                case "Ciência da Computação":
                  cursoItem = "CC";
                  break;
                case "Design Digital":
                  cursoItem = "DD";
                  break;
                case "Sistemas de Informação":
                  cursoItem = "SI";
                  break;
                default:
                  break;
              }

              const dataItem = dadosPPCT.filter(
                (itemB) =>
                  itemB.semestre === semestreItem && itemB.curso === cursoItem,
              );

              labelFormatted += `\n\tQuantidade de Matrículas (${
                dataItem[0].curso
              }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                dataItem[0].curso
              }): ${
                dataItem[0].quantidadeDeReprovados + dataItem[0].reprovadosFalta
              }`;
            });

            return labelFormatted;
          },
        },
      },
    },
  },
];

const TCCIOptions = [
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
        text: "Taxas de reprovações da atividade de TCC I",
      },
      subtitle: {
        display: true,
        position: "top",
        text: "Geral",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }

            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(1)}%`;
            }

            return label;
          },
          afterBody: (context) => {
            if (context.length === 1) {
              const semestre = context[0].label;
              const curso = context[0].dataset.label;

              const data = taxasEvasaoTCCI.filter(
                (item) =>
                  item.semestreAtual === semestre && item.curso === curso,
              );

              return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
            }

            let labelFormatted = "";

            context.forEach((item) => {
              const semestreItem = item.label;
              const cursoItem = item.dataset.label;

              const dataItem = taxasEvasaoTCCI.filter(
                (itemB) =>
                  itemB.semestreAtual === semestreItem &&
                  itemB.curso === cursoItem,
              );

              labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tReprovados (${dataItem[0].curso}): ${dataItem[0].reprovados}`;
            });

            return labelFormatted;
          },
        },
      },
    },
  },
];

const PPCTData = [
  {
    labels: dadosPPCT
      .filter((item) => item.curso === "CC")
      .map((item) => item.semestre),
    datasets: [
      {
        label: windowWidth >= 426 ? "Engenharia de Software" : "ES",
        data: dadosPPCT
          .filter((item) => item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: windowWidth >= 426 ? "Design Digital" : "DD",
        data: dadosPPCT
          .filter((item) => item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: windowWidth >= 426 ? "Ciência da Computação" : "CC",
        data: dadosPPCT
          .filter((item) => item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: windowWidth >= 426 ? "Sistemas de Informação" : "SI",
        data: dadosPPCT
          .filter((item) => item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: windowWidth >= 426 ? "Engenharia de Computação" : "EC",
        data: dadosPPCT
          .filter((item) => item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: windowWidth >= 426 ? "Redes de Computadores" : "RC",
        data: dadosPPCT
          .filter((item) => item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },
  {
    labels: dadosPPCT
      .filter((item) => item.semestre.includes(".1") && item.curso === "CC")
      .map((item) => item.semestre),
    datasets: [
      {
        label: windowWidth >= 426 ? "Engenharia de Software" : "ES",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: windowWidth >= 426 ? "Design Digital" : "DD",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: windowWidth >= 426 ? "Ciência da Computação" : "CC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: windowWidth >= 426 ? "Sistemas de Informação" : "SI",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: windowWidth >= 426 ? "Engenharia de Computação" : "EC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: windowWidth >= 426 ? "Redes de Computadores" : "RC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".1") && item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },
  {
    labels: dadosPPCT
      .filter((item) => item.semestre.includes(".2") && item.curso === "CC")
      .map((item) => item.semestre),
    datasets: [
      {
        label: windowWidth >= 426 ? "Engenharia de Software" : "ES",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "ES")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: windowWidth >= 426 ? "Design Digital" : "DD",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "DD")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: windowWidth >= 426 ? "Ciência da Computação" : "CC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "CC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: windowWidth >= 426 ? "Sistemas de Informação" : "SI",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "SI")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: windowWidth >= 426 ? "Engenharia de Computação" : "EC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "EC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: windowWidth >= 426 ? "Redes de Computadores" : "RC",
        data: dadosPPCT
          .filter((item) => item.semestre.includes(".2") && item.curso === "RC")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
    ],
  },
];

const TCCIData = [
  {
    labels: taxasEvasaoTCCI
      .filter((item) => item.curso === "Engenharia de Software")
      .map((item) => item.semestreAtual),
    datasets: [
      {
        label: windowWidth >= 426 ? "Engenharia de Software" : "ES",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Engenharia de Software")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: windowWidth >= 426 ? "Ciência da Computação" : "CC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Ciência da Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: windowWidth >= 426 ? "Sistemas de Informação" : "SI",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Sistemas de Informação")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: windowWidth >= 426 ? "Engenharia de Computação" : "EC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Engenharia de Computação")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: windowWidth >= 426 ? "Redes de Computadores" : "RC",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Redes de Computadores")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "darkgray",
        backgroundColor: "darkgray",
      },
      {
        label: windowWidth >= 426 ? "Design Digital" : "DD",
        data: taxasEvasaoTCCI
          .filter((item) => item.curso === "Design Digital")
          .map((item) => {
            if (Number.isNaN(item.taxaReprovados)) return 0;
            return item.taxaReprovados * 100;
          }),
        borderColor: "darkblue",
        backgroundColor: "darkblue",
      },
    ],
  },
];

const handleOnFormatAdditionalDataPPCT = (unformattedDataPPCT) => {
  const additionalData = dadosPPCT
    .filter((item) => item.curso === "CC")
    .map((item) => item.semestre)
    .map((item) => {
      return {
        semestre: item,
        dados: unformattedDataPPCT
          .filter((itemB) => itemB.semestre === item)
          .map((itemC) => {
            return {
              semestre: itemC.semestre,
              curso: itemC.curso,
              quantidadeCurso: itemC.qtdDeMatriculas,
              aprovados: itemC.qtdDeAprovados,
              reprovados: itemC.quantidadeDeReprovados,
              reprovadosFalta: itemC.reprovadosFalta,
              cancelados: itemC.cancelados,
              trancados: itemC.trancados,
              trancadosTotal: itemC.trancadosTotal,
              suprimidos: itemC.quantidadeDeSuprimidos,
            };
          }),
      };
    });

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

const ReprovalRates = () => (
  <div className="content-container">
    <h1>Taxas de Reprovações</h1>

    <Chart
      options={PPCTOptions[0]}
      data={PPCTData[0]}
      title="Relação: Cursos por semestre - PPCT (Geral)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT)}
      additionalDataTitle="PPCT - Geral"
    />

    <Chart
      options={PPCTOptions[1]}
      data={PPCTData[1]}
      title="Relação: Cursos por semestre - PPCT (1º semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="PPCT - 1º Semestres"
    />

    <Chart
      options={PPCTOptions[2]}
      data={PPCTData[2]}
      title="Relação: Cursos por semestre - PPCT (2º semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="PPCT - 2º Semestres"
    />

    <Chart
      options={TCCIOptions[0]}
      data={TCCIData[0]}
      title="Relação: Cursos por semestre - TCC I (Geral)"
    />
  </div>
);

export default ReprovalRates;
