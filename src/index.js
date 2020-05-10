import React from "react";
import { render } from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const Application = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById("root"));
