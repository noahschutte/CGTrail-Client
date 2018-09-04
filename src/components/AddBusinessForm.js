import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Button from '@material-ui/core/button';

const styles = theme => ({
  root: {
    flex: 1,
    overflowY: 'scroll',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '70px',
    marginBottom: '60px',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '85%',
  },
  inputLabel: {
    color: 'black',
  },
  input: {
    borderBottom: 'rgba(0,0,0,0.3) 1px solid',
    color: 'black',
  },
});

const AddBusinessForm = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <form className={classes.container}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Alum Name</InputLabel>
              <Input className={classes.input} type='text' id='alum-name' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Alum Title</InputLabel>
              <Input className={classes.input} type='text' id='alum-title' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Graduating Class</InputLabel>
              <Input className={classes.input} type='text' id='alum-class' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Degree</InputLabel>
              <Input className={classes.input} type='text' id='alum-degree' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Field of Study</InputLabel>
              <Input className={classes.input} type='text' id='alum-field' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Name</InputLabel>
              <Input className={classes.input} type='text' id='name' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Website</InputLabel>
              <Input className={classes.input} type='text' id='url' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Description</InputLabel>
              <Input multiline className={classes.input} type='text' id='url' />
            </FormControl>
          </Grid>

          {/* <div>
            Ability to add one or more locations here
          </div> */}
        </form>
      </Grid>
    </div>
  );
};

AddBusinessForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AddBusinessForm);
