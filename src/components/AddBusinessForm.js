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
  addLocationButton: {
    // width: '50%',
  },
  saveButton: {
    backgroundColor: 'crimson',
    color: 'white',
    maxWidth: '95vw',
    // marginTop: 3 * theme.spacing.unit,
  },
  buttonText: {
    margin: theme.spacing.unit,
    marginLeft: 2 * theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit,
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
  const { classes, handleChange, index } = props;
  return (
    <Grid container>
      <Grid className={classes.locationFormTitle} item xs={12}>
        <div style={{ fontWeight: 600 }}>Business Location Info</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Location Name</InputLabel>
          <Input onChange={e => handleChange('name', e, index)} className={classes.input} type='text' id={`location-name-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Location Phone</InputLabel>
          <Input onChange={e => handleChange('phone', e, index)} className={classes.input} type='text' id={`location-phone-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Street Address</InputLabel>
          <Input onChange={e => handleChange('street', e, index)} className={classes.input} type='text' id={`location-street-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Suite</InputLabel>
          <Input onChange={e => handleChange('suite', e, index)} className={classes.input} type='text' id={`location-suite-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>City</InputLabel>
          <Input onChange={e => handleChange('city', e, index)} className={classes.input} type='text' id={`location-city-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>State</InputLabel>
          <Input onChange={e => handleChange('state', e, index)} className={classes.input} type='text' id={`location-state-${index}`} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>Zip</InputLabel>
          <Input onChange={e => handleChange('zip', e, index)} className={classes.input} type='text' id={`location-zip-${index}`} />
        </FormControl>
      </Grid>
    </Grid>
  );
};

const AddBusinessForm = props => {
  const { addLocationForm, classes, handleChange, handleNestedLocationChange, locations, saveBusiness } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <form className={classes.container}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Alum Name</InputLabel>
              <Input onChange={(event) => handleChange('alumName', event)} className={classes.input} type='text' id='alum-name' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Alum Title</InputLabel>
              <Input onChange={(event) => handleChange('alumTitle', event)} className={classes.input} type='text' id='alum-title' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Graduating Class</InputLabel>
              <Input onChange={(event) => handleChange('alumClass', event)} className={classes.input} type='text' id='alum-class' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Degree</InputLabel>
              <Input onChange={(event) => handleChange('alumDegree', event)} className={classes.input} type='text' id='alum-degree' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Field of Study</InputLabel>
              <Input onChange={(event) => handleChange('alumField', event)} className={classes.input} type='text' id='alum-field' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Name</InputLabel>
              <Input onChange={(event) => handleChange('name', event)} className={classes.input} type='text' id='name' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Website</InputLabel>
              <Input onChange={(event) => handleChange('url', event)} className={classes.input} type='text' id='url' />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Business Description</InputLabel>
              <Input onChange={(event) => handleChange('description', event)} multiline className={classes.input} type='text' id='description' />
            </FormControl>
          </Grid>
          {
            locations.map((location, index) => {
              return (
                <LocationAddressForm
                  key={index}
                  index={index}
                  classes={classes}
                  handleChange={handleNestedLocationChange}
                />
              );
            })
          }

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <Button onClick={() => addLocationForm(locationForm)} variant='contained' size='small' className={classes.addLocationButton}>
                <AddCircle className={classes.addLocationIcon} />
                <div className={classes.buttonText}>Add Location</div>
              </Button>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <Button onClick={saveBusiness} variant='contained' size='small' className={classes.saveButton}>
                <div className={classes.buttonText}>Save Business</div>
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
  handleChange: PropTypes.func,
  handleNestedLocationChange: PropTypes.func,
  locations: PropTypes.array,
  saveBusiness: PropTypes.func,
};

LocationAddressForm.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
  index: PropTypes.number,
};

export default withStyles(styles)(AddBusinessForm);
