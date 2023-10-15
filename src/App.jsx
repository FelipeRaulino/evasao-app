import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./features/MainLayout/MainLayout";
import Dashboard from "./features/Dashboard/Dashboard";
import DropoutRates from "./features/DropoutRates/DropoutRates";
import TCCAprovals from "./features/TCCAprovals/TCCAprovals";
import About from "./features/About/About";
import ReprovalRates from "./features/ReprovalRates/ReprovalRates";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/taxasEvasao" element={<DropoutRates />} />
          <Route path="/taxasAprovacoes" element={<TCCAprovals />} />
          <Route path="/taxasReprovacoes" element={<ReprovalRates />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
