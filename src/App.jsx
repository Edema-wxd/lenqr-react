import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import DashDetails from "./pages/dashboard/DashDetails";
import DashMain from "./pages/dashboard/DashMain";
import DashLayout from "./pages/dashboard/DashLayout";
import Dash404 from "./pages/dashboard/Dash404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="dashboard" element={<DashLayout />}>
          <Route path="main" element={<DashMain />} />
          <Route path=":clientId" element={<DashDetails />}>
            <Route path='general' />
            <Route path="documents"/>
            <Route path="bank"/>
            <Route path="loans"/>
            <Route path="savings"/>            
          </Route>
          <Route path="*" element={<Dash404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
