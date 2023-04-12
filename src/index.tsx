import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import { ThemeProvider, Global } from "@emotion/react";

import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/courses">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
