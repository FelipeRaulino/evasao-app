import React from "react";

import formulaAprovacoesTCC from "../../assets/aprovacao-tcc.png";

import "./About.css";

const About = () => (
  <div className="content-container">
    <h1 className="content-title">Sobre</h1>
    <div className="section-container">
      <h2 className="section-title">Sobre o projeto</h2>
      <p>
        Essa plataforma faz parte do Trabalho de Conclusão de Curso do
        desenvolvedor. O principal objetivo é fornecer dados sobre a evasão de
        alunos no TCC e assuntos correlacionados para discentes, docentes,
        coordenadores de curso e a comunidade acadêmica em geral. Acredita-se
        que com uma base centralizada das informações seja possível otimizar as
        tomadas de decisões à fim de mitigar o fenômeno, identificar tendências
        e promover transparência.
      </p>
    </div>

    <div>
      <div className="section-container">
        <h2 className="section-title">Sobre as taxas</h2>
        <p>
          Para o cálculo das taxas de evasão e retenção I e II, utilizou-se como
          referência as fórmulas disponíveis nos painéis estratégicos da UFC. Os
          painéis disponibilizam dados institucionais promovendo transparência e
          clareza das infomações que compõem a UFC como unidade.
        </p>
      </div>

      <div className="section-container">
        <h3 className="section-title">Taxa de Evasão</h3>
        <p>
          Essa taxa busca sintetizar o percentual de alunos que iniciam a
          elaboração do Trabalho de Conclusão de Curso (TCC) e, por algum
          motivo, não o conclui com sucesso, abandonando-o, deixando-o de
          apresentar ou entregar uma versão final. A evasão semestral pode ser
          definida como:
        </p>
      </div>
      <div className="section-container">
        <h3 className="section-title">Taxa de Aprovações</h3>
        <p>
          Apresenta de forma percentual a taxa de TCCs aprovados na
          universidade. Uma estimativa de tal natureza tem potencial de trazer
          melhoras à nível de planejamento, avaliação e melhoria da qualidade do
          ensino superior. A taxa de aprovações de TCC em um semestre pode ser
          definida como:
        </p>
        <div className="section-formula-description">
          <p>TAC = Taxa de aprovações de TCCs</p>
          <p>NTA = Número total de TCCs aprovados</p>
          <p>NT = Número total de TCCs submetidos</p>
        </div>
        <div className="section-formula-img">
          <img src={formulaAprovacoesTCC} alt="Fórmula de Aprovações de TCC" />
        </div>
      </div>
    </div>
  </div>
);

export default About;
