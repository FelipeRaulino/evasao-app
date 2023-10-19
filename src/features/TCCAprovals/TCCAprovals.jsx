import React from "react";

import "./TCCAprovals.css";

import Chart from "../../components/Chart/Chart";

import dadosPPCT from "../../utils/PPCTDataFormatted";
import {
  taxasEvasaoTCCI,
  taxasEvasaoTCCII,
} from "../../utils/TCCDataFormatted";

import {
  approvalRatesData as data,
  approvalRatesOptions as options,
  handleOnFormatAdditionalDataPPCT,
  handleOnFormatAdditionalDataTCC,
} from "../../utils/ChartOptions";

const TCCAprovals = () => (
  <div className="content-container">
    <h1>Taxas de Aprovações</h1>

    <Chart
      options={options.TCCIOptions[3]}
      data={data.TCCIData[3]}
      title="Relação: UFC[Quixadá] por semestre - TCC I (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI)}
      additionalDataTitle="TCC I - Geral"
    />

    <Chart
      options={options.TCCIOptions[0]}
      data={data.TCCIData[0]}
      title="Relação: Curso por semestre - TCC I (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI)}
      additionalDataTitle="TCC I - Geral"
    />

    <Chart
      options={options.TCCIOptions[1]}
      data={data.TCCIData[1]}
      title="Relação: Curso por Semestre - TCC I (1º semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC I - 1º Semestres"
    />

    <Chart
      options={options.TCCIOptions[2]}
      data={data.TCCIData[2]}
      title="Relação: Curso por Semestre - TCC I (2º semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC I - 2º Semestres"
    />

    <Chart
      id="TCC-II-UFC-Approvals"
      options={options.TCCIIOptions[3]}
      data={data.TCCIIData[3]}
      title="Relação: UFC[Quixadá] por Semestre - TCC II (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      options={options.TCCIIOptions[0]}
      data={data.TCCIIData[0]}
      title="Relação: Curso por Semestre - TCC II (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      options={options.TCCIIOptions[1]}
      data={data.TCCIIData[1]}
      title="Relação: Curso por Semestre - TCC II (1º semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC II - 1º Semestres"
    />

    <Chart
      options={options.TCCIIOptions[2]}
      data={data.TCCIIData[2]}
      title="Relação: Curso por Semestre - TCC II (2º semestres)"
      id="aprovacoesSegundosSemestresTCCII"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC II - 2º Semestres"
    />

    <Chart
      options={options.PPCTOptions[3]}
      data={data.PPCTData[3]}
      title="Relação: UFC[Quixadá] por semestre - PPCT (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT)}
      additionalDataTitle="PPCT - Geral"
    />

    <Chart
      options={options.PPCTOptions[0]}
      data={data.PPCTData[0]}
      title="Relação: Curso por semestre - PPCT (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT)}
      additionalDataTitle="PPCT - Geral"
    />

    <Chart
      options={options.PPCTOptions[1]}
      data={data.PPCTData[1]}
      title="Relação: Curso por Semestre - PPCT (1º semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="PPCT - 1º Semestres"
    />

    <Chart
      options={options.PPCTOptions[2]}
      data={data.PPCTData[2]}
      title="Relação: Curso por Semestre - PPCT (2º semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="PPCT - 2º Semestres"
    />
  </div>
);

export default TCCAprovals;
