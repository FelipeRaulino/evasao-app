import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./features/MainLayout/MainLayout";
import Dashboard from "./features/Dashboard/Dashboard";
import DropoutRates from "./features/DropoutRates/DropoutRates";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/taxaEvasao" element={<DropoutRates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
