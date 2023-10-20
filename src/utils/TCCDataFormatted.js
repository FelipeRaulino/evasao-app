/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const TCCData = require("../api/TCC.json");

const TCC_I = TCCData.filter((item) => item.Atividade.includes("TCC 1"));
const TCC_II = TCCData.filter((item) => item.Atividade.includes("TCC 2"));

export const taxasEvasaoTCCI = [];
export const taxasEvasaoTCCII = [];

export function ProximoSemestre(semestre) {
  const partes = semestre.split(".");

  let anoAtual = parseInt(partes[0], 10);
  let semestreAtual = parseInt(partes[1], 10);

  semestreAtual += 1;

  if (semestreAtual > 2) {
    anoAtual += 1;
    semestreAtual = 1;
    return String(`${anoAtual}.${semestreAtual}`);
  }

  return String(`${anoAtual}.${semestreAtual}`);
}

export function semestreAnterior(semestre) {
  const partes = semestre.split(".");
  let ano = parseInt(partes[0], 10);
  let numeroSemestre = parseInt(partes[1], 10);

  if (numeroSemestre === 1) {
    ano -= 1;
    numeroSemestre = 2;
  } else {
    numeroSemestre -= 1;
  }

  return `${ano}.${numeroSemestre}`;
}

function calculaTaxaEvasaoCurso(dados, semestre, curso) {
  const semestreSeguinte = ProximoSemestre(semestre);

  const quantidadeMatriculasSemestreSeguinte = dados.filter(
    (item) => item.Período === semestreSeguinte && item.Curso === curso,
  ).length;

  const quantidadeMatriculasSemestreAtual = dados.filter(
    (item) => item.Período === semestre && item.Curso === curso,
  ).length;

  const quantidadeMatriculasSemestreAnterior = dados.filter(
    (item) =>
      item.Período === semestreAnterior(semestre) && item.Curso === curso,
  ).length;

  const quantidadeAprovadosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
      item.Curso === curso &&
      item.Status === "APROVADO",
  ).length;

  const quantidadeAprovadosSemestreAnterior = dados.filter(
    (item) =>
      item.Período === semestreAnterior(semestre) &&
      item.Curso === curso &&
      item.Status === "APROVADO",
  ).length;

  const quantidadeReprovadosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
      item.Curso === curso &&
      item.Status === "REPROVADO",
  ).length;

  const quantidadeSuprimidosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
      item.Curso === curso &&
      item.Status === "SUPRIMIDO",
  ).length;

  const quantidadeExcluidosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
      item.Curso === curso &&
      item.Status === "EXCLUIDA",
  ).length;

  const quantidadeTrancadosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
      item.Curso === curso &&
      item.Status === "TRANCADO",
  ).length;

  const taxaEvasao =
    1 -
    quantidadeMatriculasSemestreSeguinte /
      (quantidadeMatriculasSemestreAtual - quantidadeAprovadosSemestreAtual);

  const taxaEvasaoII =
    100 -
    (quantidadeMatriculasSemestreAtual /
      (quantidadeMatriculasSemestreAnterior -
        quantidadeAprovadosSemestreAnterior)) *
      100;

  const taxaEvasaoIII =
    ((quantidadeSuprimidosSemestreAtual +
      quantidadeExcluidosSemestreAtual +
      quantidadeTrancadosSemestreAtual) /
      quantidadeMatriculasSemestreAtual) *
    100;

  const taxaReprovados =
    quantidadeReprovadosSemestreAtual / quantidadeMatriculasSemestreAtual;

  const taxaAprovados =
    quantidadeAprovadosSemestreAtual / quantidadeMatriculasSemestreAtual;

  const dadosFormatado = {
    curso,
    taxaEvasao,
    taxaEvasaoII,
    taxaEvasaoIII,
    taxaReprovados,
    taxaAprovados,
    semestreAtual: semestre,
    semestreSeguinte,
    quantidadeMatriculasSemestreAtual,
    quantidadeMatriculasSemestreSeguinte,
    quantidadeMatriculasSemestreAnterior,
    aprovados: quantidadeAprovadosSemestreAtual,
    aprovadosSemestreAnterior: quantidadeAprovadosSemestreAnterior,
    reprovados: quantidadeReprovadosSemestreAtual,
    suprimidos: quantidadeSuprimidosSemestreAtual,
    excluidos: quantidadeExcluidosSemestreAtual,
    trancados: quantidadeTrancadosSemestreAtual,
  };

  if (dados[0].Atividade.includes("TCC 1"))
    taxasEvasaoTCCI.push(dadosFormatado);
  else taxasEvasaoTCCII.push(dadosFormatado);

  return dadosFormatado;
}

for (let i = 2012; i <= 2022; i += 1) {
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Ciência da Computação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Ciência da Computação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Engenharia de Software");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Engenharia de Software");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Engenharia de Computação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Engenharia de Computação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Sistemas de Informação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Sistemas de Informação");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Redes de Computadores");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Redes de Computadores");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.1`), "Design Digital");
  calculaTaxaEvasaoCurso(TCC_I, String(`${i}.2`), "Design Digital");

  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Ciência da Computação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Ciência da Computação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Engenharia de Software");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Engenharia de Software");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Engenharia de Computação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Engenharia de Computação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Sistemas de Informação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Sistemas de Informação");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Redes de Computadores");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Redes de Computadores");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.1`), "Design Digital");
  calculaTaxaEvasaoCurso(TCC_II, String(`${i}.2`), "Design Digital");
}

for (let i = 2012; i <= 2022; i += 1) {
  taxasEvasaoTCCI.push({
    curso: "Geral",
    semestreAtual: `${String(i)}.1`,
  });

  taxasEvasaoTCCI.push({
    curso: "Geral",
    semestreAtual: `${String(i)}.2`,
  });

  taxasEvasaoTCCII.push({
    curso: "Geral",
    semestreAtual: `${String(i)}.1`,
  });

  taxasEvasaoTCCII.push({
    curso: "Geral",
    semestreAtual: `${String(i)}.2`,
  });
}

taxasEvasaoTCCI
  .filter((item) => item.curso === "Geral")
  .forEach((itemA) => {
    const semestreSeguinte = ProximoSemestre(itemA.semestreAtual);

    const aprovados = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let aprovadosItem = acc;
        aprovadosItem += itemC.aprovados;
        return aprovadosItem;
      }, 0);

    const aprovadosSemestreAnterior = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreAnterior(itemA.semestreAtual) &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let aprovadosItem = acc;
        aprovadosItem += itemC.aprovados;
        return aprovadosItem;
      }, 0);

    const reprovados = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let reprovadosItem = acc;
        reprovadosItem += itemC.reprovados;
        return reprovadosItem;
      }, 0);

    const quantidadeMatriculasSemestreAtual = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreAtualItem = acc;
        quantidadeMatriculasSemestreAtualItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasSemestreAtualItem;
      }, 0);

    const quantidadeMatriculasAnterior = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreAnterior(itemA.semestreAtual) &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasAnteriorItem = acc;
        quantidadeMatriculasAnteriorItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasAnteriorItem;
      }, 0);

    const quantidadeMatriculasSemestreSeguinte = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreSeguinte && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreSeguinteItem = acc;
        quantidadeMatriculasSemestreSeguinteItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasSemestreSeguinteItem;
      }, 0);

    const suprimidos = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let suprimidosItem = acc;
        suprimidosItem += itemC.suprimidos;
        return suprimidosItem;
      }, 0);

    const excluidos = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let excluidosItem = acc;
        excluidosItem += itemC.suprimidos;
        return excluidosItem;
      }, 0);

    const trancados = taxasEvasaoTCCI
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let trancadosItem = acc;
        trancadosItem += itemC.trancados;
        return trancadosItem;
      }, 0);

    const taxaAprovados = aprovados / quantidadeMatriculasSemestreAtual;
    const taxaReprovados = reprovados / quantidadeMatriculasSemestreAtual;
    const taxaEvasao =
      1 -
      quantidadeMatriculasSemestreSeguinte /
        (quantidadeMatriculasSemestreAtual - aprovados);

    const taxaEvasaoII =
      100 -
      (quantidadeMatriculasSemestreAtual /
        (quantidadeMatriculasAnterior - aprovadosSemestreAnterior)) *
        100;

    const taxaEvasaoIII =
      ((suprimidos + excluidos + trancados) /
        quantidadeMatriculasSemestreAtual) *
      100;

    itemA.aprovados = aprovados;
    itemA.aprovadosSemestreAnterior = aprovadosSemestreAnterior;
    itemA.reprovados = reprovados;
    itemA.quantidadeMatriculasSemestreAtual = quantidadeMatriculasSemestreAtual;
    itemA.quantidadeMatriculasSemestreSeguinte =
      quantidadeMatriculasSemestreSeguinte;
    itemA.quantidadeMatriculasAnterior = quantidadeMatriculasAnterior;
    itemA.suprimidos = suprimidos;
    itemA.excluidos = excluidos;
    itemA.trancados = trancados;
    itemA.taxaAprovados = taxaAprovados;
    itemA.taxaReprovados = taxaReprovados;
    itemA.taxaEvasao = taxaEvasao;
    itemA.taxaEvasaoII = taxaEvasaoII;
    itemA.taxaEvasaoIII = taxaEvasaoIII;
    itemA.semestreAnterior = semestreAnterior(itemA.semestreAtual);
  });

taxasEvasaoTCCII
  .filter((item) => item.curso === "Geral")
  .forEach((itemA) => {
    const semestreSeguinte = ProximoSemestre(itemA.semestreAtual);

    const aprovados = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let aprovadosItem = acc;
        aprovadosItem += itemC.aprovados;
        return aprovadosItem;
      }, 0);

    const aprovadosSemestreAnterior = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreAnterior(itemA.semestreAtual) &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let aprovadosItem = acc;
        aprovadosItem += itemC.aprovados;
        return aprovadosItem;
      }, 0);

    const reprovados = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let reprovadosItem = acc;
        reprovadosItem += itemC.reprovados;
        return reprovadosItem;
      }, 0);

    const quantidadeMatriculasSemestreAtual = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreAtualItem = acc;
        quantidadeMatriculasSemestreAtualItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasSemestreAtualItem;
      }, 0);

    const quantidadeMatriculasSemestreSeguinte = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreSeguinte && itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasSemestreSeguinteItem = acc;
        quantidadeMatriculasSemestreSeguinteItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasSemestreSeguinteItem;
      }, 0);

    const quantidadeMatriculasAnterior = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === semestreAnterior(itemA.semestreAtual) &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let quantidadeMatriculasAnteriorItem = acc;
        quantidadeMatriculasAnteriorItem +=
          itemC.quantidadeMatriculasSemestreAtual;
        return quantidadeMatriculasAnteriorItem;
      }, 0);

    const taxaAprovados = aprovados / quantidadeMatriculasSemestreAtual;
    const taxaReprovados = reprovados / quantidadeMatriculasSemestreAtual;
    const taxaEvasao =
      1 -
      quantidadeMatriculasSemestreSeguinte /
        (quantidadeMatriculasSemestreAtual - aprovados);

    const taxaEvasaoII =
      100 -
      (quantidadeMatriculasSemestreAtual /
        (quantidadeMatriculasAnterior - aprovadosSemestreAnterior)) *
        100;

    const suprimidos = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let suprimidosItem = acc;
        suprimidosItem += itemC.suprimidos;
        return suprimidosItem;
      }, 0);

    const excluidos = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let excluidosItem = acc;
        excluidosItem += itemC.suprimidos;
        return excluidosItem;
      }, 0);

    const trancados = taxasEvasaoTCCII
      .filter(
        (itemB) =>
          itemB.semestreAtual === itemA.semestreAtual &&
          itemB.curso !== "Geral",
      )
      .reduce((acc, itemC) => {
        let trancadosItem = acc;
        trancadosItem += itemC.suprimidos;
        return trancadosItem;
      }, 0);

    itemA.aprovados = aprovados;
    itemA.aprovadosSemestreAnterior = aprovadosSemestreAnterior;
    itemA.reprovados = reprovados;
    itemA.quantidadeMatriculasSemestreAtual = quantidadeMatriculasSemestreAtual;
    itemA.quantidadeMatriculasSemestreSeguinte =
      quantidadeMatriculasSemestreSeguinte;
    itemA.quantidadeMatriculasAnterior = quantidadeMatriculasAnterior;
    itemA.suprimidos = suprimidos;
    itemA.excluidos = excluidos;
    itemA.trancados = trancados;
    itemA.taxaAprovados = taxaAprovados;
    itemA.taxaReprovados = taxaReprovados;
    itemA.taxaEvasao = taxaEvasao;
    itemA.taxaEvasaoII = taxaEvasaoII;
  });
