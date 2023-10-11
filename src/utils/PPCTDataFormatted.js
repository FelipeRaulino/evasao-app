/* eslint-disable no-param-reassign */
import { ProximoSemestre } from "./TCCDataFormatted";

const PPCTData = require("../api/PPCT.json");

const primeiroSemestreArray = [];
const segundoSemestreArray = [];
export const dadosPPCT = [];

const distribuiEmSemestres = (dados, ano) => {
  const primeiroSemestre = [];
  const segundoSemestre = [];

  dados
    .filter((item) => item.data_de_cadastro.includes(ano))
    .forEach((item) => {
      const dataDeCadastro = new Date(item.data_de_cadastro);
      const mes = dataDeCadastro.getMonth();

      if (mes <= 5) primeiroSemestre.push(item);
      else segundoSemestre.push(item);
    });

  return {
    primeiroSemestre,
    segundoSemestre,
  };
};

const calculaTaxaPorSemestre = (dadosSemestre, curso) => {
  const quantidadeCurso = dadosSemestre.filter((item) => item.Curso === curso);

  const aprovados = quantidadeCurso.filter(
    (item) => item.Situação === "APROVADO",
  ).length;

  const reprovados = quantidadeCurso.filter(
    (item) => item.Situação === "REPROVADO",
  ).length;

  const suprimidos = quantidadeCurso.filter(
    (item) => item.Situação === "SUPRIMIDO",
  ).length;

  const reprovadosFalta = quantidadeCurso.filter(
    (item) => item.Situação === "REP. FALTA",
  ).length;

  const trancados = quantidadeCurso.filter(
    (item) => item.Situação === "TRANCADO",
  ).length;

  const trancadosTotal = quantidadeCurso.filter(
    (item) => item.Situação === "TRANCADO - TOTAL",
  ).length;

  const cancelados = quantidadeCurso.filter(
    (item) => item.Situação === "CANCELADO",
  ).length;

  const taxa = aprovados / quantidadeCurso.length;

  return {
    taxa,
    quantidadeCurso: quantidadeCurso.length,
    aprovados,
    reprovados,
    reprovadosFalta,
    suprimidos,
    trancados,
    trancadosTotal,
    cancelados,
  };
};

const calculaTaxasPorCurso = (dados, curso, ano) => {
  const { primeiroSemestre, segundoSemestre } = distribuiEmSemestres(
    dados,
    ano,
  );

  const {
    taxa: taxaPrimeiroSemestre,
    aprovados,
    reprovados,
    quantidadeCurso,
    cancelados,
    reprovadosFalta,
    suprimidos,
    trancados,
    trancadosTotal,
  } = calculaTaxaPorSemestre(primeiroSemestre, curso);
  const {
    taxa: taxaSegundoSemestre,
    aprovados: aprovadosSegundoSemestre,
    reprovados: reprovadosSegundoSemestre,
    quantidadeCurso: quantidadeCursoSegundoSemestre,
    cancelados: canceladosSegundoSemestre,
    reprovadosFalta: reprovadosFaltaSegundoSemestre,
    suprimidos: suprimidosSegundoSemestre,
    trancados: trancadosSegundoSemestre,
    trancadosTotal: trancadosTotalSegundoSemestre,
  } = calculaTaxaPorSemestre(segundoSemestre, curso);

  const dadosPrimeiroSemestreFormatado = {
    curso,
    taxa: taxaPrimeiroSemestre,
    semestre: `${ano}.1`,
    semestreSeguinte: ProximoSemestre(`${ano}.1`),
    aprovados,
    reprovados,
    quantidadeCurso,
    cancelados,
    reprovadosFalta,
    suprimidos,
    trancados,
    trancadosTotal,
  };

  const dadosSegundoSemestreFormatado = {
    curso,
    taxa: taxaSegundoSemestre,
    semestre: `${ano}.2`,
    semestreSeguinte: ProximoSemestre(`${ano}.2`),
    aprovados: aprovadosSegundoSemestre,
    reprovados: reprovadosSegundoSemestre,
    quantidadeCurso: quantidadeCursoSegundoSemestre,
    cancelados: canceladosSegundoSemestre,
    reprovadosFalta: reprovadosFaltaSegundoSemestre,
    suprimidos: suprimidosSegundoSemestre,
    trancados: trancadosSegundoSemestre,
    trancadosTotal: trancadosTotalSegundoSemestre,
  };

  primeiroSemestreArray.push({ ...dadosPrimeiroSemestreFormatado });
  segundoSemestreArray.push({ ...dadosSegundoSemestreFormatado });
};

for (let i = 2013; i <= 2023; i += 1) {
  calculaTaxasPorCurso(PPCTData, "ES", String(i));
  calculaTaxasPorCurso(PPCTData, "SI", String(i));
  calculaTaxasPorCurso(PPCTData, "CC", String(i));
  calculaTaxasPorCurso(PPCTData, "RC", String(i));
  calculaTaxasPorCurso(PPCTData, "EC", String(i));
  calculaTaxasPorCurso(PPCTData, "DD", String(i));
}

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

const labelsPSemestre = primeiroSemestreArray.map((item) => item.semestre);

const labelsSSemestre = segundoSemestreArray.map((item) => item.semestre);

export const labelsPrimeirosSemestreFormatado = [...new Set(labelsPSemestre)];
export const labelsSegundosSemestreFormatado = [
  ...new Set(labelsSSemestre),
].filter((item) => item !== "2023.2");

export const dadosPrimeirosSemestres = primeiroSemestreArray;
export const dadosSegundoSemestreFormatado = segundoSemestreArray.filter(
  (item) => item.semestre !== "2023.2",
);
