import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircle';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

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
  button: {
    width: '50%',
  },
  addLocationIcon: {
    marginRight: theme.spacing.unit,
  },
  locationFormTitle: {
    marginTop: '15px',
  },
});

const locationForm = {
  name: '',
  phone: '',
  address: {
    street: '',
    suite: '',
    city: '',
    state: '',
    zip: '',
  },
  coords: '',
};

const LocationAddressForm = props => {
  const { classes, index } = props;
  return (
    <Grid container>
      <Grid className={classes.locationFormTitle} item xs={12}>
        <div style={{ fontWeight: 600 }}>Business Location Info</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Location Name</InputLabel>
          <Input className={classes.input} type='text' id={`location-name-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Location Phone</InputLabel>
          <Input className={classes.input} type='text' id={`location-phone-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Street Address</InputLabel>
          <Input className={classes.input} type='text' id={`location-street-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Suite</InputLabel>
          <Input className={classes.input} type='text' id={`location-suite-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>City</InputLabel>
          <Input className={classes.input} type='text' id={`location-city-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>State</InputLabel>
          <Input className={classes.input} type='text' id={`location-state-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Zip</InputLabel>
          <Input className={classes.input} type='text' id={`location-zip-${index}`} />
        </FormControl>
      </Grid>
    </Grid>
  );
};

const AddBusinessForm = props => {
  const { addLocationForm, classes, locations } = props;
  console.log('locations: ', locations);
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
              <Input multiline className={classes.input} type='text' id='description' />
            </FormControl>
          </Grid>

          {
            locations.map((location, index) => {
              return (
                <LocationAddressForm
                  key={index}
                  classes={classes}
                />
              );
            })
          }

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <Button onClick={() => addLocationForm(locationForm)} variant='contained' size='small' className={classes.button}>
                <AddCircle className={classes.addLocationIcon} />
                Add Business Location
              </Button>
            </FormControl>
          </Grid>

        </form>
      </Grid>
    </div>
  );
};

AddBusinessForm.propTypes = {
  addLocationForm: PropTypes.func,
  classes: PropTypes.object,
  locations: PropTypes.array,
};

LocationAddressForm.propTypes = {
  classes: PropTypes.object,
  index: PropTypes.number,
};

export default withStyles(styles)(AddBusinessForm);
