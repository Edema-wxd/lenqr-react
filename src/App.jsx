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

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      light: "#39cdcc",
    },
    secondary: {
      main: "#39cdcc",
    },
    text: {
      primary: "#545F7D",
      secondary: "#213f7d",
      disabled: "#545F7D",
      hint: "#000000",
    },
    background: {
      paper: "#ffffff",
      default: "#fbfbfb",
    },
  },
  typography: {
    h1: {
      fontFamily: "Lora",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.1em",
    },
    body1: {
      fontFamily: "Lora",
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "Work Sans",
    },
    button: {
      fontFamily: "Work Sans",
      fontWeight: 600,
      letterSpacing: "0.09em",
    },
    h5: {
      fontFamily: "Work Sans",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Work Sans",
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
export default App;
