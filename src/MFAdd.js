import React from "react";
import { Container, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import MFList from "./MFList";
import MFComboBox from "./MFComboBox";
import Typography from "@material-ui/core/Typography";

//test
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
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography color="textPrimary" variant="h5" component="h2">
                Add Mutual Fund
              </Typography>
              <FormControl fullWidth className={classes.margin}>
                <MFComboBox />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-units">
                  Units
                </InputLabel>
                <Input required={true} id="standard-adornment-units" />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Purchased NAV
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">Rs.</InputAdornment>
                  }
                />
              </FormControl>

              <IconButton aria-label="delete" type="submit">
                <Add />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <MFList />
      </form>
    </Container>
  );
};

export default MFAdd;
