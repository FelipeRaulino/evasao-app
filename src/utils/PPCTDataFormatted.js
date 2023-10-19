/* eslint-disable no-param-reassign */
import { ProximoSemestre } from "./TCCDataFormatted";

const PPCTData = require("../api/PPCT.json");

const dadosPPCT = [];

const formatandoSemestres = (dados, ano) => {
  dados
    .filter((item) => item.data_de_cadastro.includes(ano))
    .forEach((item) => {
      const dataDeCadastro = new Date(item.data_de_cadastro);
      const mes = dataDeCadastro.getMonth();

      if (mes <= 5) item.semestre = `${ano}.1`;
      else item.semestre = `${ano}.2`;

      item.semestreSeguinte = ProximoSemestre(item.semestre);
    });
};

const calculaTaxaEvasaoCurso = (dados, semestre, curso) => {
  const semestreSeguinte = ProximoSemestre(semestre);
  const quantidadeDeMatriculas = dados.filter(
    (item) => item.semestre === semestre && item.Curso === curso,
  );

  const quantidadeDeAprovados = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "APROVADO",
  ).length;

  const quantidadeDeReprovados = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "REPROVADO",
  ).length;

  const quantidadeDeSuprimidos = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "SUPRIMIDO",
  ).length;

  const reprovadosFalta = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "REP. FALTA",
  ).length;

  const trancados = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "TRANCADO",
  ).length;

  const trancadosTotal = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "TRANCADO - TOTAL",
  ).length;

  const cancelados = quantidadeDeMatriculas.filter(
    (item) =>
      item.semestre === semestre &&
      item.Curso === curso &&
      item.Situação === "CANCELADO",
  ).length;

  const quantidadeDeMatriculasSemestreSeguinte = dados.filter(
    (item) => item.semestre === semestreSeguinte && item.Curso === curso,
  ).length;

  const taxaEvasao =
    1 -
    quantidadeDeMatriculasSemestreSeguinte /
      (quantidadeDeMatriculas.length - quantidadeDeAprovados);

  const taxaAprovados = quantidadeDeAprovados / quantidadeDeMatriculas.length;

  const taxaReprovados =
    (quantidadeDeReprovados + reprovadosFalta) / quantidadeDeMatriculas.length;

  return {
    curso,
    semestre,
    taxaEvasao,
    qtdDeMatriculas: quantidadeDeMatriculas.length,
    qtdDeAprovados: quantidadeDeAprovados,
    quantidadeDeReprovados,
    quantidadeDeSuprimidos,
    reprovadosFalta,
    trancados,
    trancadosTotal,
    cancelados,
    taxaAprovados,
    taxaReprovados,
    qtdDeMatriculasSemestreSeguinte: quantidadeDeMatriculasSemestreSeguinte,
  };
};

for (let i = 2013; i <= 2023; i += 1) {
  formatandoSemestres(PPCTData, String(i));
}

for (let i = 2013; i < 2023; i += 1) {
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "ES"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "ES"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "DD"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "DD"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "RC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "RC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "EC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "EC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "CC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "CC"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.1`, "SI"));
  dadosPPCT.push(calculaTaxaEvasaoCurso(PPCTData, `${String(i)}.2`, "SI"));
}

for (let i = 2013; i <= 2023; i += 1) {
  dadosPPCT.push({
    curso: "Geral",
    semestre: `${String(i)}.1`,
  });

  dadosPPCT.push({
    curso: "Geral",
    semestre: `${String(i)}.2`,
  });
}

dadosPPCT
  .filter((item) => item.curso === "Geral")
  .forEach((itemA) => {
    const semestreSeguinte = ProximoSemestre(itemA.semestre);

    const qtdDeAprovados = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let aprovadosItem = acc;
        aprovadosItem += itemC.qtdDeAprovados;
        return aprovadosItem;
      }, 0);

    const quantidadeDeReprovados = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeDeReprovadosItem = acc;
        quantidadeDeReprovadosItem += itemC.quantidadeDeReprovados;
        return quantidadeDeReprovadosItem;
      }, 0);

    const reprovadosFalta = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let reprovadosFaltaItem = acc;
        reprovadosFaltaItem += itemC.reprovadosFalta;
        return reprovadosFaltaItem;
      }, 0);

    const qtdDeMatriculas = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreItem = acc;
        quantidadeMatriculasSemestreItem += itemC.qtdDeMatriculas;
        return quantidadeMatriculasSemestreItem;
      }, 0);

    const qtdDeMatriculasSemestreSeguinte = dadosPPCT
      .filter(
        (itemB) =>
          itemB.semestre === semestreSeguinte && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreSeguinteItem = acc;
        quantidadeMatriculasSemestreSeguinteItem += itemC.qtdDeMatriculas;
        return quantidadeMatriculasSemestreSeguinteItem;
      }, 0);

    const taxaAprovados = qtdDeAprovados / qtdDeMatriculas;
    const taxaReprovados = quantidadeDeReprovados / qtdDeMatriculas;
    const taxaEvasao =
      1 - qtdDeMatriculasSemestreSeguinte / (qtdDeMatriculas - qtdDeAprovados);

    const quantidadeDeSuprimidos = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeDeSuprimidosItem = acc;
        quantidadeDeSuprimidosItem += itemC.quantidadeDeSuprimidos;
        return quantidadeDeSuprimidosItem;
      }, 0);

    const trancados = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let trancadosItem = acc;
        trancadosItem += itemC.trancados;
        return trancadosItem;
      }, 0);

    const trancadosTotal = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let trancadosTotalItem = acc;
        trancadosTotalItem += itemC.trancadosTotal;
        return trancadosTotalItem;
      }, 0);

    const cancelados = dadosPPCT
      .filter(
        (itemB) => itemB.semestre === itemA.semestre && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let canceladosItem = acc;
        canceladosItem += itemC.cancelados;
        return canceladosItem;
      }, 0);

    itemA.qtdDeAprovados = qtdDeAprovados;
    itemA.quantidadeDeReprovados = quantidadeDeReprovados;
    itemA.reprovadosFalta = reprovadosFalta;
    itemA.qtdDeMatriculas = qtdDeMatriculas;
    itemA.qtdDeMatriculasSemestreSeguinte = qtdDeMatriculasSemestreSeguinte;
    itemA.quantidadeDeSuprimidos = quantidadeDeSuprimidos;
    itemA.trancados = trancados;
    itemA.trancadosTotal = trancadosTotal;
    itemA.cancelados = cancelados;
    itemA.taxaAprovados = taxaAprovados;
    itemA.taxaReprovados = taxaReprovados;
    itemA.taxaEvasao = taxaEvasao;
  });

export default dadosPPCT;
