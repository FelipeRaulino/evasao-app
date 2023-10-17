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

function calculaTaxaEvasaoCurso(dados, semestre, curso) {
  const semestreSeguinte = ProximoSemestre(semestre);

  const quantidadeMatriculasSemestreSeguinte = dados.filter(
    (item) => item.Período === semestreSeguinte && item.Curso === curso,
  ).length;

  const quantidadeMatriculasSemestreAtual = dados.filter(
    (item) => item.Período === semestre && item.Curso === curso,
  ).length;

  const quantidadeAprovadosSemestreAtual = dados.filter(
    (item) =>
      item.Período === semestre &&
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
    quantidadeMatriculasSemestreSeguinte /
    (quantidadeMatriculasSemestreAtual - quantidadeAprovadosSemestreAtual);

  const taxaEvasaoII =
    (quantidadeSuprimidosSemestreAtual +
      quantidadeExcluidosSemestreAtual +
      quantidadeTrancadosSemestreAtual) /
    quantidadeMatriculasSemestreAtual;

  const taxaReprovados =
    quantidadeReprovadosSemestreAtual / quantidadeMatriculasSemestreAtual;

  const taxaAprovados =
    quantidadeAprovadosSemestreAtual / quantidadeMatriculasSemestreAtual;

  const dadosFormatado = {
    curso,
    taxaEvasao,
    taxaEvasaoII,
    taxaReprovados,
    taxaAprovados,
    semestreAtual: semestre,
    semestreSeguinte,
    quantidadeMatriculasSemestreAtual,
    quantidadeMatriculasSemestreSeguinte,
    aprovados: quantidadeAprovadosSemestreAtual,
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
