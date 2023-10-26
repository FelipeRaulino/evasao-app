/* eslint-disable import/no-unresolved */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import MainLayout from "./pages/MainLayout/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import DropoutRates from "./pages/DropoutRates/DropoutRates";
import TCCAprovals from "./pages/ApprovalRates/ApprovalRates";
import About from "./pages/About/About";
import ReprovalRates from "./pages/ReprovalRates/ReprovalRates";
import DropoutRatesII from "./pages/DropoutRatesII/DropoutRatesII";
import DropoutRatesIII from "./pages/DropoutRatesIII/DropoutRatesIII";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/taxasEvasao" element={<DropoutRates />} />
          <Route path="/taxasEvasaoII" element={<DropoutRatesII />} />
          <Route path="/taxasEvasaoIII" element={<DropoutRatesIII />} />
          <Route path="/taxasAprovacoes" element={<TCCAprovals />} />
          <Route path="/taxasReprovacoes" element={<ReprovalRates />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
  </div>
);

export default App;
