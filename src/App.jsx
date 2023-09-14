import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";

const Component = () => (
  /* const [data, setData] = React.useState(null);
   */

  // eslint-disable-next-line no-unused-vars
  /* const distribuiEmSemestres = (dados, ano) => {
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
    const quantidadeCurso = dadosSemestre.filter(
      (item) => item.Curso === curso,
    );

    const aprovados = quantidadeCurso.filter(
      (item) => item.Situação === "APROVADO",
    );

    const taxa = aprovados.length / quantidadeCurso.length;

    return taxa;
  };

  const calculaTaxasPorCurso = (dados, curso, ano) => {
    const { primeiroSemestre, segundoSemestre } = distribuiEmSemestres(
      dados,
      ano,
    );

    const taxaPrimeiroSemestre = calculaTaxaPorSemestre(
      primeiroSemestre,
      curso,
    );
    const taxaSegundoSemestre = calculaTaxaPorSemestre(segundoSemestre, curso);

    return {
      taxaPrimeiroSemestre,
      taxaSegundoSemestre,
    };
  }; */

  <div>
    <Sidebar />
  </div>
);
export default Component;
