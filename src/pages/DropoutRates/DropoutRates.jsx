import React from "react";
import Chart from "../../components/Chart/Chart";

import {
  dropoutRatesData as data,
  dropoutRatesOptions as options,
  handleOnFormatAdditionalDataPPCT,
  handleOnFormatAdditionalDataTCC,
} from "../../utils/ChartOptions";

import dadosPPCT from "../../utils/PPCTDataFormatted";
import {
  taxasEvasaoTCCI,
  taxasEvasaoTCCII,
} from "../../utils/TCCDataFormatted";

const DropoutRates = () => (
  <div className="content-container">
    <h1>Taxas de Evasão I</h1>

    <Chart
      data={data.TCCIData[3]}
      options={options.TCCIOptions[3]}
      title="Relação: UFC[Quixadá] x Semestre - TCC I (Todos os semestres)"
      id="evasaoGeralTCCI"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI)}
      additionalDataTitle="TCC I - Todos os semestres"
    />

    <Chart
      data={data.TCCIData[0]}
      options={options.TCCIOptions[0]}
      title="Relação: Curso x Semestre - TCC I (Todos os semestres)"
      id="evasaoGeralTCCI"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI)}
      additionalDataTitle="TCC I - Geral"
    />

    <Chart
      data={data.TCCIData[1]}
      options={options.TCCIOptions[1]}
      title="Relação: Curso x Semestre  - TCC I (1º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC I - 1º Semestres"
    />

    <Chart
      data={data.TCCIData[2]}
      options={options.TCCIOptions[2]}
      title="Relação: Curso x Semestre  - TCC I (2º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCI).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC I - 2º Semestres"
    />

    <Chart
      data={data.TCCIIData[3]}
      options={options.TCCIIOptions[3]}
      title="Relação: UFC[Quixadá] x Semestre  - TCC II (Todos os semestres)"
      id="TCC-II-UFC-Dropouts"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      data={data.TCCIIData[0]}
      options={options.TCCIIOptions[0]}
      title="Relação: Curso x Semestre  - TCC II (Todos os semestres)"
      id="geralTCCII"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII)}
      additionalDataTitle="TCC II - Geral"
    />

    <Chart
      data={data.TCCIIData[1]}
      options={options.TCCIIOptions[1]}
      title="Relação: Curso x Semestre  - TCC II (1º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="TCC II - 1º Semestres"
    />

    <Chart
      data={data.TCCIIData[2]}
      options={options.TCCIIOptions[2]}
      title="Relação: Curso x Semestre  - TCC II (2º Semestres)"
      additionalData={handleOnFormatAdditionalDataTCC(taxasEvasaoTCCII).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="TCC II - 2º Semestres"
    />

    <Chart
      data={data.PPCTData[3]}
      options={options.PPCTOptions[3]}
      title="Relação: UFC[Quixadá] x Semestre  - PPCT (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT)}
      additionalDataTitle="PPCT - Todos os semestres"
    />

    <Chart
      data={data.PPCTData[0]}
      options={options.PPCTOptions[0]}
      title="Relação: Curso x Semestre  - PPCT (Todos os semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT)}
      additionalDataTitle="PPCT - Geral"
    />

    <Chart
      data={data.PPCTData[1]}
      options={options.PPCTOptions[1]}
      title="Relação: Curso x Semestre  - PPCT (1º Semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".1"),
      )}
      additionalDataTitle="PPCT - 1º Semestres"
    />

    <Chart
      data={data.PPCTData[2]}
      options={options.PPCTOptions[2]}
      title="Relação: Curso x Semestre  - PPCT (2º Semestres)"
      additionalData={handleOnFormatAdditionalDataPPCT(dadosPPCT).filter(
        (item) => item.semestre.includes(".2"),
      )}
      additionalDataTitle="PPCT - 2º Semestres"
    />
  </div>
);

export default DropoutRates;
