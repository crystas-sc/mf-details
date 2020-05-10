import React from "react";

import { withStyles } from "@material-ui/core/styles";
import MFAdd from "./MFAdd";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const App = props => (
  <div className={props.root}>
    <MFAdd />
  </div>
);

export default withStyles(styles)(App);
