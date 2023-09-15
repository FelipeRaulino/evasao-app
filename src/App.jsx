import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./features/MainLayout/MainLayout";
import Dashboard from "./features/Dashboard/Dashboard";
import DropoutRates from "./features/DropoutRates/DropoutRates";
import TCCAprovals from "./features/TCCAprovals/TCCAprovals";
import RententionIRates from "./features/RetentionIRates/RententionIRates";
import RententionIIRates from "./features/RententionIIRates/RentationIIRates";
import About from "./features/About/About";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/taxaEvasao" element={<DropoutRates />} />
          <Route path="/aprovacoesTCC" element={<TCCAprovals />} />
          <Route path="/taxasRetencaoI" element={<RententionIRates />} />
          <Route path="/taxasRetencaoII" element={<RententionIIRates />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
