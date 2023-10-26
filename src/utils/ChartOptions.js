/* eslint-disable no-param-reassign */
import dadosPPCT from "./PPCTDataFormatted";
import { taxasEvasaoTCCI, taxasEvasaoTCCII } from "./TCCDataFormatted";

const windowWidth = window.innerWidth;

export const reprovalRatesOptions = {
  PPCTOptions: [
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
          text: "Todos os semestres",
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${
                  dataItem[0].curso
                }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].quantidadeDeReprovados +
                  dataItem[0].reprovadosFalta
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${
                  dataItem[0].curso
                }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].quantidadeDeReprovados +
                  dataItem[0].reprovadosFalta
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${
                  dataItem[0].curso
                }): ${dataItem[0].qtdDeMatriculas}\n\tReprovados (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].quantidadeDeReprovados +
                  dataItem[0].reprovadosFalta
                }`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
  TCCIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

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
  ],
  TCCIIOptions: [
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
          text: "Taxas de reprovações da atividade de TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                const cursoItem = item.dataset.label;

                const dataItem = taxasEvasaoTCCII.filter(
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
          text: "Taxas de reprovações da atividade de TCC II",
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
                const curso = context[0].dataset.label;

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                const cursoItem = item.dataset.label;

                const dataItem = taxasEvasaoTCCII.filter(
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
          text: "Taxas de reprovações da atividade de TCC II",
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
                const curso = context[0].dataset.label;

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tReprovados: ${data[0].reprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                const cursoItem = item.dataset.label;

                const dataItem = taxasEvasaoTCCII.filter(
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
  ],
};

export const approvalRatesOptions = {
  PPCTOptions: [
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
          text: "Taxas de aprovações da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}`;
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
          text: "Taxas de aprovações da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}`;
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
          text: "Taxas de aprovações da disciplina de PPCT",
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

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}`;
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
          text: "Taxas de aprovações da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
  TCCIOptions: [
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
          text: "Taxas de aprovações da atividade de TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC I",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC I",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
  TCCIIOptions: [
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
          text: "Taxas de aprovações da atividade de TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC II",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC II",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
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
          text: "Taxas de aprovações da atividade de TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tQuantidade de Matrículas: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\n\tQuantidade de Matrículas (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\tAprovados (${dataItem[0].curso}): ${dataItem[0].aprovados}`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
};

export const dropoutRatesOptions = {
  PPCTOptions: [
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tAprovados: ${data[0].qtdDeAprovados}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso}): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tAprovados (${dataItem[0].curso}): ${dataItem[0].qtdDeAprovados}\n\n`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
  TCCIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
  TCCIIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
};

export const dropoutRatesIIOptions = {
  PPCTOptions: [
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior (${dataItem[0].curso}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior (${dataItem[0].curso}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${dataItem[0].curso})): ${dataItem[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior (${dataItem[0].curso}): ${dataItem[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior (${dataItem[0].curso}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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
              const semestre = context[0].label;
              const curso = context[0].dataset.label;

              const data = dadosPPCT.filter(
                (item) => item.semestre === semestre && item.curso === curso,
              );

              return `\t\t\t\tMatrículas do semestre atual: ${data[0].qtdDeMatriculas}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
            },
          },
        },
      },
    },
  ],
  TCCIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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
              const semestre = context[0].label;
              const curso = context[0].dataset.label;

              const data = taxasEvasaoTCCI.filter(
                (item) =>
                  item.semestreAtual === semestre && item.curso === curso,
              );

              return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
            },
          },
        },
      },
    },
  ],
  TCCIIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior: ${data[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior: ${data[0].aprovadosSemestreAnterior}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre atual (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tMatrículas do semestre anterior (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAnterior}\n\t\t\t\tAprovados semestre anterior (${cursoSigla}): ${dataItem[0].aprovadosSemestreAnterior}\n\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
};

export const dropoutRatesIIIOptions = {
  PPCTOptions: [
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                return `\t\t\t\tMatrículas suprimidas: ${
                  data[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta: ${
                  data[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas: ${
                  data[0].trancados + data[0].trancadosTotal
                }\n\t\t\t\tMatrículas total: ${data[0].qtdDeMatriculas}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas suprimidas (${
                  dataItem[0].curso
                })): ${
                  dataItem[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas (${dataItem[0].curso}): ${
                  dataItem[0].trancados + dataItem[0].trancadosTotal
                }\n\t\t\t\tMatrículas total (${dataItem[0].curso}): ${
                  dataItem[0].qtdDeMatriculas
                }\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas suprimidas: ${
                  data[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta: ${
                  data[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas: ${
                  data[0].trancados + data[0].trancadosTotal
                }\n\t\t\t\tMatrículas total: ${data[0].qtdDeMatriculas}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas suprimidas (${
                  dataItem[0].curso
                })): ${
                  dataItem[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas (${dataItem[0].curso}): ${
                  dataItem[0].trancados + dataItem[0].trancadosTotal
                }\n\t\t\t\tMatrículas total (${dataItem[0].curso}): ${
                  dataItem[0].qtdDeMatriculas
                }\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
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

                return `\t\t\t\tMatrículas suprimidas: ${
                  data[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta: ${
                  data[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas: ${
                  data[0].trancados + data[0].trancadosTotal
                }\n\t\t\t\tMatrículas total: ${data[0].qtdDeMatriculas}`;
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
                    itemB.semestre === semestreItem &&
                    itemB.curso === cursoItem,
                );

                labelFormatted += `\t\t\t\tMatrículas suprimidas (${
                  dataItem[0].curso
                })): ${
                  dataItem[0].quantidadeDeSuprimidos
                }\n\t\t\t\tMatrículas reprovadas por falta (${
                  dataItem[0].curso
                }): ${
                  dataItem[0].reprovadosFalta
                }\n\t\t\t\tMatrículas trancadas (${dataItem[0].curso}): ${
                  dataItem[0].trancados + dataItem[0].trancadosTotal
                }\n\t\t\t\tMatrículas total (${dataItem[0].curso}): ${
                  dataItem[0].qtdDeMatriculas
                }\n\n`;
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
          text: "Taxas de evasão da disciplina de PPCT",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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
              const semestre = context[0].label;
              const curso = context[0].dataset.label;

              const data = dadosPPCT.filter(
                (item) => item.semestre === semestre && item.curso === curso,
              );

              return `\t\t\t\tMatrículas suprimidas: ${
                data[0].quantidadeDeSuprimidos
              }\n\t\t\t\tMatrículas reprovadas por falta: ${
                data[0].reprovadosFalta
              }\n\t\t\t\tMatrículas trancadas: ${
                data[0].trancados + data[0].trancadosTotal
              }\n\t\t\t\tMatrículas total: ${data[0].qtdDeMatriculas}`;
            },
          },
        },
      },
    },
  ],
  TCCIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC I",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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
              const semestre = context[0].label;
              const curso = context[0].dataset.label;

              const data = taxasEvasaoTCCI.filter(
                (item) =>
                  item.semestreAtual === semestre && item.curso === curso,
              );

              return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
            },
          },
        },
      },
    },
  ],
  TCCIIOptions: [
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
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "1º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "2º semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCI.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas suprimidas: ${data[0].suprimidos}\n\t\t\t\tMatrículas excluídas: ${data[0].excluidos}\n\t\t\t\tMatrículas trancadas: ${data[0].trancados}\n\t\t\t\tMatrículas do semestre: ${data[0].quantidadeMatriculasSemestreAtual}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCI.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\n\t\t\t\tMatrículas suprimidas (${cursoSigla})): ${dataItem[0].suprimidos}\n\t\t\t\tMatrículas excluídas (${cursoSigla}): ${dataItem[0].excluidos}\n\t\t\t\tMatrículas trancadas (${cursoSigla}): ${dataItem[0].trancados}\n\t\t\t\tMatrículas do semestre (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n`;
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
          text: "Taxas de evasão da atividade TCC II",
        },
        subtitle: {
          display: true,
          position: "top",
          text: "Todos os semestres",
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

                if (windowWidth <= 700) {
                  switch (curso) {
                    case "ES":
                      curso = "Engenharia de Software";
                      break;
                    case "EC":
                      curso = "Engenharia de Computação";
                      break;
                    case "RC":
                      curso = "Redes de Computadores";
                      break;
                    case "CC":
                      curso = "Ciência da Computação";
                      break;
                    case "DD":
                      curso = "Design Digital";
                      break;
                    case "SI":
                      curso = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const data = taxasEvasaoTCCII.filter(
                  (item) =>
                    item.semestreAtual === semestre && item.curso === curso,
                );

                return `\t\t\t\tMatrículas do semestre seguinte : ${data[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual: ${data[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados: ${data[0].aprovados}`;
              }

              let labelFormatted = "";
              let cursoSigla = "";

              context.forEach((item) => {
                const semestreItem = item.label;
                let cursoItem = item.dataset.label;

                if (windowWidth <= 700) {
                  switch (cursoItem) {
                    case "ES":
                      cursoItem = "Engenharia de Software";
                      break;
                    case "EC":
                      cursoItem = "Engenharia de Computação";
                      break;
                    case "RC":
                      cursoItem = "Redes de Computadores";
                      break;
                    case "CC":
                      cursoItem = "Ciência da Computação";
                      break;
                    case "DD":
                      cursoItem = "Design Digital";
                      break;
                    case "SI":
                      cursoItem = "Sistemas de Informação";
                      break;
                    default:
                      break;
                  }
                }

                const dataItem = taxasEvasaoTCCII.filter(
                  (itemB) =>
                    itemB.semestreAtual === semestreItem &&
                    itemB.curso === cursoItem,
                );

                switch (cursoItem) {
                  case "Engenharia de Software":
                    cursoSigla = "ES";
                    break;
                  case "Engenharia de Computação":
                    cursoSigla = "EC";
                    break;
                  case "Redes de Computadores":
                    cursoSigla = "RC";
                    break;
                  case "Ciência da Computação":
                    cursoSigla = "CC";
                    break;
                  case "Design Digital":
                    cursoSigla = "DD";
                    break;
                  case "Sistemas de Informação":
                    cursoSigla = "SI";
                    break;
                  default:
                    break;
                }

                labelFormatted += `\t\t\t\tMatrículas do semestre seguinte (${cursoSigla})): ${dataItem[0].quantidadeMatriculasSemestreSeguinte}\n\t\t\t\tMatrículas do semestre atual (${cursoSigla}): ${dataItem[0].quantidadeMatriculasSemestreAtual}\n\t\t\t\tAprovados (${cursoSigla}): ${dataItem[0].aprovados}\n\n`;
              });

              return labelFormatted;
            },
          },
        },
      },
    },
  ],
};

export const reprovalRatesData = {
  PPCTData: [
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
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
          label: windowWidth >= 700 ? "Design Digital" : "DD",
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
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
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
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
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
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
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
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
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
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "RC",
            )
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
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
      ],
    },
  ],
  TCCIData: [
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
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
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
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
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
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
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
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
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
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
          label: windowWidth >= 700 ? "Design Digital" : "DD",
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
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIIData: [
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
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
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaReprovados)) return 0;
              return item.taxaReprovados * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
};

export const approvalRatesData = {
  PPCTData: [
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter((item) => item.curso === "ES")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter((item) => item.curso === "DD")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter((item) => item.curso === "CC")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter((item) => item.curso === "SI")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter((item) => item.curso === "EC")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter((item) => item.curso === "RC")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
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
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
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
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestre),
      datasets: [
        {
          label: "Geral",
          data: dadosPPCT
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIData: [
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIIData: [
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "darkblue",
          backgroundColor: "darkblue",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaAprovados)) return 0;
              return item.taxaAprovados * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
};

export const dropoutRatesData = {
  PPCTData: [
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter((item) => item.curso === "ES")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
          pointRadius: 3,
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter((item) => item.curso === "CC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter((item) => item.curso === "SI")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter((item) => item.curso === "EC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter((item) => item.curso === "RC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter((item) => item.curso === "DD")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".1") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".2") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestre),
      datasets: [
        {
          label: "Geral",
          data: dadosPPCT
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIData: [
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIIData: [
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasao)) return 0;
              if (!Number.isFinite(item.taxaEvasao)) return 0;
              if (item.taxaEvasao < 0) return 0;
              return item.taxaEvasao * 100;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
};

export const dropoutRatesIIData = {
  PPCTData: [
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter((item) => item.curso === "ES")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter((item) => item.curso === "CC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter((item) => item.curso === "SI")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter((item) => item.curso === "EC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter((item) => item.curso === "RC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter((item) => item.curso === "DD")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".1") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".2") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestre),
      datasets: [
        {
          label: "Geral",
          data: dadosPPCT
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIData: [
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIIData: [
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoII)) return 0;
              if (item.taxaEvasaoII < 0) return 0;
              return item.taxaEvasaoII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
};

export const dropoutRatesIIIData = {
  PPCTData: [
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter((item) => item.curso === "ES")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter((item) => item.curso === "CC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter((item) => item.curso === "SI")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter((item) => item.curso === "EC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter((item) => item.curso === "RC")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter((item) => item.curso === "DD")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".1") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".1") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.semestre.includes(".2") && item.curso === "CC")
        .map((item) => item.semestre),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "ES",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "CC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "SI",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "EC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "RC",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: dadosPPCT
            .filter(
              (item) => item.semestre.includes(".2") && item.curso === "DD",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: dadosPPCT
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestre),
      datasets: [
        {
          label: "Geral",
          data: dadosPPCT
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIData: [
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".1"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCI
            .filter((item) => item.semestreAtual.includes(".2"))
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCI
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCI
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
  TCCIIData: [
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Engenharia de Software")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Software")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Ciência da Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Sistemas de Informação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Engenharia de Computação")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Redes de Computadores")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Design Digital")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".1") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".1") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter(
          (item) =>
            item.semestreAtual.includes(".2") &&
            item.curso === "Engenharia de Software",
        )
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: windowWidth >= 700 ? "Engenharia de Software" : "ES",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Software",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: windowWidth >= 700 ? "Ciência da Computação" : "CC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Ciência da Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: windowWidth >= 700 ? "Sistemas de Informação" : "SI",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Sistemas de Informação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "green",
          backgroundColor: "green",
        },
        {
          label: windowWidth >= 700 ? "Engenharia de Computação" : "EC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Engenharia de Computação",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "orange",
          backgroundColor: "orange",
        },
        {
          label: windowWidth >= 700 ? "Redes de Computadores" : "RC",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Redes de Computadores",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "darkgray",
          backgroundColor: "darkgray",
        },
        {
          label: windowWidth >= 700 ? "Design Digital" : "DD",
          data: taxasEvasaoTCCII
            .filter(
              (item) =>
                item.semestreAtual.includes(".2") &&
                item.curso === "Design Digital",
            )
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "purple",
          backgroundColor: "purple",
        },
      ],
    },
    {
      labels: taxasEvasaoTCCII
        .filter((item) => item.curso === "Geral")
        .map((item) => item.semestreAtual),
      datasets: [
        {
          label: "Geral",
          data: taxasEvasaoTCCII
            .filter((item) => item.curso === "Geral")
            .map((item) => {
              if (Number.isNaN(item.taxaEvasaoIII)) return 0;
              if (!Number.isFinite(item.taxaEvasaoIII)) return 0;
              if (item.taxaEvasaoIII < 0) return 0;
              return item.taxaEvasaoIII;
            }),
          borderColor: "#000123",
          backgroundColor: "#000123",
        },
      ],
    },
  ],
};

export const handleOnFormatAdditionalDataPPCT = (unformattedDataPPCT) => {
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

  additionalData.forEach((semestre) => {
    semestre.dados.sort((a, b) => {
      if (a.curso === "Geral") return -1;
      if (b.curso === "Geral") return 1;

      return a.curso.localeCompare(b.curso);
    });
  });

  return additionalData;
};

export const handleOnFormatAdditionalDataTCC = (unformattedDataTCC) => {
  const additionalData = taxasEvasaoTCCI
    .filter((item) => item.curso === "Ciência da Computação")
    .map((item) => item.semestreAtual)
    .map((item) => {
      return {
        semestre: item,
        dados: unformattedDataTCC
          .filter((itemB) => itemB.semestreAtual === item)
          .map((itemC) => {
            return {
              curso: itemC.curso,
              quantidadeCurso: itemC.quantidadeMatriculasSemestreAtual,
              semestre: itemC.semestreAtual,
              aprovados: itemC.aprovados,
              reprovados: itemC.reprovados,
              reprovadosFalta: 0,
              cancelados: 0,
              trancados: itemC.trancados,
              suprimidos: itemC.suprimidos,
            };
          }),
      };
    });

  additionalData.forEach((semestre) => {
    semestre.dados.sort((a, b) => {
      if (a.curso === "Geral") return -1;
      if (b.curso === "Geral") return 1;

      return a.curso.localeCompare(b.curso);
    });
  });

  return additionalData;
};
