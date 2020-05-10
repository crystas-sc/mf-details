import React from "react";
import { Switch, Route } from "react-router-dom";
import RT from "./React-Table";
import PaperSheet from "./Notes";
import Grid from "@material-ui/core/Grid";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Grid container spacing={24} justify={"center"}>
    <Grid item xl={10} lg={10}>
      <main>
        <Switch>
          <Route exact path="/" component={RT} />
          <Route path="/tickets" component={RT} />
          <Route path="/notes" component={PaperSheet} />
        </Switch>
      </main>
    </Grid>
  </Grid>
);

export default Main;
