import React from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

const MFAdd = props => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Add Mutual Fund</h2>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-mftxt">
                Mutual Fund
              </InputLabel>
              <Input id="standard-adornment-mftxt" />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">Rs.</InputAdornment>
                }
              />
            </FormControl>

            <IconButton aria-label="delete">
              <Add />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MFAdd;
