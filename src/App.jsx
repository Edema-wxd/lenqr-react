import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import DashDetails from "./pages/dashboard/DashDetails";
import DashMain from "./pages/dashboard/DashMain";
import DashLayout from "./pages/dashboard/DashLayout";
import Dash404 from "./pages/dashboard/Dash404";
import DDdocs from "./pages/dashboard/mini/DDdocs";

import DDgeneral from "./pages/dashboard/mini/DDgeneral";
import DDbank from "./pages/dashboard/mini/DDbank";
import DDloan from "./pages/dashboard/mini/DDloan";
import DDsave from "./pages/dashboard/mini/DDsave";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="dashboard" element={<DashLayout />}>
          <Route path="main" element={<DashMain />} />
          <Route path=":clientId" element={<DashDetails />}>
            <Route path="general" element={<DDgeneral />} />
            <Route path="documents" element={<DDdocs />} />
            <Route path="bank" element={<DDbank />} />
            <Route path="loans" element={<DDloan />} />
            <Route path="savings" element={<DDsave />} />
          </Route>
          <Route path="*" element={<Dash404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
