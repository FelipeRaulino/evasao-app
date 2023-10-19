import React from "react";

import formulaTaxaEvasaoI from "../../assets/taxa_evasao_I.svg";
import formulaTaxaAprovados from "../../assets/taxa-aprovados.svg";
import formulaTaxaReprovados from "../../assets/taxa-reprovados.svg";

import "./About.css";

const About = () => (
  <div className="content-container">
    <h1 className="content-title">Sobre</h1>
    <div className="section-container">
      <h2 className="section-title">Sobre o projeto</h2>
      <p>
        Essa aplicação é um componente essencial do Trabalho de Conclusão de
        Curso (TCC) do{" "}
        <a
          href="https://github.com/FelipeRaulino"
          target="_blank"
          rel="noreferrer"
        >
          desenvolvedor
        </a>
        . A aplicação foi desenvolvida como parte da pesquisa e o trabalho
        acadêmico, esteja ciente de que a aplicação pode estar sujeita a
        atualizações e modificações à medida que o desenvolvedor avança em sua
        pesquisa e desenvolvimento. A sua participação e feedback são valiosos
        para o aprimoramento contínuo da aplicação e para o sucesso do projeto
        do TCC.
      </p>
      <p>
        O principal <strong>objetivo</strong> é fornecer dados sobre a evasão de
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
          Para o cálculo das taxas de evasão utilizou-se como referência as
          fórmulas disponíveis nos{" "}
          <a href="https://paineis.ufc.br/" target="_blank" rel="noreferrer">
            painéis estratégicos da UFC
          </a>
          , especificamente o painel de graduação com taxas de evasão e
          retenção. Os painéis disponibilizam dados institucionais promovendo
          transparência e clareza das infomações que compõem a UFC como unidade.
        </p>
      </div>

      <div className="section-container">
        <h3 className="section-title">Taxa de Evasão I</h3>
        <p>
          Essa taxa busca sintetizar o percentual estimado de alunos que iniciam
          alguma atividade (No contexto da aplicação seria a elaboração/execução
          do Trabalho de Conclusão de Curso (TCC) ou a iniciação da disciplina
          de Projeto de Pesquisa Científica e Tecnológica (PPCT)) e, por algum
          motivo, não a conclui com sucesso, abandonando-a, deixando-a de
          apresentar ou entregar uma versão final. A evasão semestral pode ser
          definida como:
        </p>
        <div className="section-formula-description">
          <p>
            Ei<sub>n</sub> = Percentual de evasão, no período de tempo n
          </p>
          <p>
            M<sub>n</sub> = Quantidade de matriculados no período de tempo n
          </p>
          <p>
            M<sub>n+1</sub> = Quantidade de matriculados no período de tempo
            imediatamente posterior a n
          </p>
          <p>
            A<sub>n</sub> = Quantidade de aprovados no período de tempo n
          </p>
        </div>
        <div className="section-formula-img">
          <img src={formulaTaxaEvasaoI} alt="Fórmula de Taxa Evasão I" />
        </div>
        <div className="section-additional-info">
          <h4>Como interpretar essa taxa ?</h4>
          <p>
            O resultado obtido através do cálculo dessa taxa reflete o
            <strong> percentual de discentes</strong>, no período de tempo n
            (desconsiderando os ingressantes no mesmo período, uma vez que não
            há essa possibilidade), que <strong>esteve</strong>
            matriculado no período de tempo n e <strong>poderia</strong> estar
            matriculado no período imediatamente posterior (desconsiderando os
            formados) e não realizou sua matrícula no período n+1. Esse tipo de
            cálculo mensura a evasão imediata da instituição (percentual de não
            &quot;rematrícula&quot;).
          </p>
        </div>
      </div>

      <div className="section-container">
        <h3 className="section-title">Taxa de Aprovações</h3>
        <p>
          Apresenta de forma percentual a taxa de aprovados na universidade,
          conforme a atividade a ser considerada (TCC ou PPCT). Uma estimativa
          de tal natureza tem potencial de trazer melhoras à nível de
          planejamento, avaliação e melhoria da qualidade do ensino. A taxa de
          aprovações em um semestre pode ser definida como:
        </p>
        <div className="section-formula-description">
          <p>
            TA<sub>n</sub> = Taxa de aprovações no período de tempo n
          </p>
          <p>
            A<sub>n</sub> = Quantidade de aprovados no período de tempo n
          </p>
          <p>
            M<sub>n</sub> = Quantidade de matrículas no período de tempo n
          </p>
        </div>
        <div className="section-formula-img">
          <img src={formulaTaxaAprovados} alt="Fórmula de taxa de aprovações" />
        </div>
      </div>

      <div className="section-container">
        <h3 className="section-title">Taxa de Reprovações</h3>
        <p>
          Apresenta de forma percentual a taxa de reprovados na universidade,
          conforme a atividade a ser considerada (TCC ou PPCT). Ao acompanhar as
          taxas de reprovação, a universidade pode identificar áreas onde os
          alunos enfrentam mais dificuldades, isso possibilita o desenvolvimento
          de estratégias de suporte para melhorar o desempenho acadêmico. A taxa
          de aprovações em um semestre pode ser definida como:
        </p>
        <div className="section-formula-description">
          <p>
            TR<sub>n</sub> = Taxa de reprovações no período de tempo n
          </p>
          <p>
            R<sub>n</sub> = Quantidade de reprovados no período de tempo n
          </p>
          <p>
            M<sub>n</sub> = Quantidade de matrículas no período de tempo n
          </p>
        </div>
        <div className="section-formula-img">
          <img
            src={formulaTaxaReprovados}
            alt="Fórmula de taxa de aprovações"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
