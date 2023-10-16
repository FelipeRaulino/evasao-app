/* eslint-disable no-console */
/* eslint-disable camelcase */
const TCCData = require("../api/TCC.json");

const TCC_I = TCCData.filter((item) => item.Atividade.includes("TCC 1"));
const TCC_II = TCCData.filter((item) => item.Atividade.includes("TCC 2"));

const primeiroSemestreTCCITaxas = [];
const segundoSemestreTCCITaxas = [];
const primeiroSemestreTCCIITaxas = [];
const segundoSemestreTCCIITaxas = [];

function distribuiEmSemestres(dados, ano) {
  let primeiroSemestreTCCI = [];
  let segundoSemestreTCCI = [];

  primeiroSemestreTCCI = dados.filter((item) =>
    item.Período.includes(`${ano}.1`),
  );

  segundoSemestreTCCI = dados.filter((item) =>
    item.Período.includes(`${ano}.2`),
  );

  return {
    primeiroSemestreTCCI,
    segundoSemestreTCCI,
  };
}

const calculaTaxaAprovadosPorSemestre = (dadosSemestre, curso) => {
  const quantidadeCurso = dadosSemestre.filter((item) => item.Curso === curso);

  const aprovados = quantidadeCurso.filter(
    (item) => item.Status === "APROVADO",
  ).length;

  const reprovados = quantidadeCurso.filter(
    (item) => item.Status === "REPROVADO",
  ).length;

  const suprimidos = quantidadeCurso.filter(
    (item) => item.Status === "SUPRIMIDO",
  ).length;

  const excluidas = quantidadeCurso.filter(
    (item) => item.Status === "EXCLUIDA",
  ).length;

  const trancados = quantidadeCurso.filter(
    (item) => item.Status === "TRANCADO",
  ).length;

  const taxa = aprovados / quantidadeCurso.length;

  return {
    taxa,
    quantidadeCurso: quantidadeCurso.length,
    aprovados,
    reprovados,
    suprimidos,
    excluidas,
    trancados,
  };
};

const calculaTaxasPorCurso = (dados, curso, ano) => {
  const { primeiroSemestreTCCI, segundoSemestreTCCI } = distribuiEmSemestres(
    dados,
    ano,
  );

  const {
    taxa: taxaPrimeiroSemestre,
    aprovados,
    reprovados,
    suprimidos,
    excluidas,
    trancados,
    quantidadeCurso,
  } = calculaTaxaAprovadosPorSemestre(primeiroSemestreTCCI, curso);

  const {
    taxa: taxaSegundoSemestre,
    aprovados: aprovadosSegundoSemestre,
    reprovados: reprovadosSegundoSemestre,
    suprimidos: suprimidosSegundoSemestre,
    excluidas: excluidasSegundoSemestre,
    trancados: trancadosSegundoSemestre,
    quantidadeCurso: quantidadeCursoSegundoSemestre,
  } = calculaTaxaAprovadosPorSemestre(segundoSemestreTCCI, curso);

  const dadosPrimeiroSemestreFormatado = {
    curso,
    semestre: `${ano}.1`,
    taxa: taxaPrimeiroSemestre,
    aprovados,
    reprovados,
    suprimidos,
    excluidas,
    trancados,
    quantidadeCurso,
  };

  const dadosSegundoSemestreFormatado = {
    curso,
    semestre: `${ano}.2`,
    taxa: taxaSegundoSemestre,
    aprovados: aprovadosSegundoSemestre,
    reprovados: reprovadosSegundoSemestre,
    suprimidos: suprimidosSegundoSemestre,
    excluidas: excluidasSegundoSemestre,
    trancados: trancadosSegundoSemestre,
    quantidadeCurso: quantidadeCursoSegundoSemestre,
  };

  if (dados[0].Atividade.includes("TCC 1")) {
    primeiroSemestreTCCITaxas.push({ ...dadosPrimeiroSemestreFormatado });
    segundoSemestreTCCITaxas.push({ ...dadosSegundoSemestreFormatado });
  } else {
    primeiroSemestreTCCIITaxas.push({ ...dadosPrimeiroSemestreFormatado });
    segundoSemestreTCCIITaxas.push({ ...dadosSegundoSemestreFormatado });
  }
};

for (let i = 2012; i <= 2023; i += 1) {
  calculaTaxasPorCurso(TCC_I, "Engenharia de Software", String(i));
  calculaTaxasPorCurso(TCC_II, "Engenharia de Software", String(i));
  calculaTaxasPorCurso(TCC_I, "Sistemas de Informação", String(i));
  calculaTaxasPorCurso(TCC_II, "Sistemas de Informação", String(i));
  calculaTaxasPorCurso(TCC_I, "Ciência da Computação", String(i));
  calculaTaxasPorCurso(TCC_II, "Ciência da Computação", String(i));
  calculaTaxasPorCurso(TCC_I, "Redes de Computadores", String(i));
  calculaTaxasPorCurso(TCC_II, "Redes de Computadores", String(i));
  calculaTaxasPorCurso(TCC_I, "Engenharia de Computação", String(i));
  calculaTaxasPorCurso(TCC_II, "Engenharia de Computação", String(i));
  calculaTaxasPorCurso(TCC_I, "Design Digital", String(i));
  calculaTaxasPorCurso(TCC_II, "Design Digital", String(i));
}

const labelsPSemestre = primeiroSemestreTCCITaxas.map((item) => item.semestre);

const labelsSSemestre = segundoSemestreTCCITaxas.map((item) => item.semestre);

export const labelsPrimeirosSemestreFormatado = [...new Set(labelsPSemestre)];
export const labelsSegundosSemestreFormatado = [
  ...new Set(labelsSSemestre),
].filter((item) => item !== "2023.2");

export const dadosPrimeirosSemestresTCCI = primeiroSemestreTCCITaxas;
export const dadosSegundosSemestresTCCI = segundoSemestreTCCITaxas.filter(
  (item) => item.semestre !== "2023.2",
);

export const dadosPrimeirosSemestresTCCII = primeiroSemestreTCCIITaxas;
export const dadosSegundosSemestresTCCII = segundoSemestreTCCIITaxas.filter(
  (item) => item.semestre !== "2023.2",
);

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

  const dadosFormatado = {
    curso,
    taxaEvasao,
    taxaEvasaoII,
    taxaReprovados,
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

/* console.log(calculaTaxaEvasaoCurso(TCC_I, "2022.2", "Engenharia de Software"));
 */
/* const dados_ES_2022_2_TCC_I = TCC_I.filter(
  (item) =>
    item.Período === "2022.1" &&
    item.Curso === "Engenharia de Software" &&
    item.Status === "APROVADO",
); */

/* console.log(calculaTaxaEvasaoCurso(TCC_II, "2015.1", "Ciência da Computação"));
 */

/* const taxasEvasaoTCCIPrimeirosSemestres = taxasEvasaoTCCI.filter((item) =>
  item.semestreAtual.includes(".1"),
);
 */
/* console.log(taxasEvasaoTCCIPrimeirosSemestres);
 */
