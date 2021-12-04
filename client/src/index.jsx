import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import App from "./app.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BCD4", // a cyan color
    },
    secondary: {
      main: "#18FFFF", // brighter cyan color
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
