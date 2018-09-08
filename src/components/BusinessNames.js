import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    flexWrap: 'wrap',
  },
  adminButton: {
    margin: '0 7px',
    cursor: 'pointer',
    fontSize: '1.0625rem',
  },
  adminEdit: {
    color: 'blue',
  },
  adminDelete: {
    color: 'red',
  },
  adminButtons: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px',
  },
  display1: {
    alignSelf: 'flex-start',
    display: 'flex',
    textAlign: 'left',
    marginTop: '10px',
  },
};

const AdminButtons = ({ classes, handleDelete }) => (
  <div className={classes.adminButtons}>
    <a className={[classes.adminButton, classes.adminEdit].join(' ')} onClick={() => console.log('edit')}>Edit </a> |
    <a className={[classes.adminButton, classes.adminDelete].join(' ')} onClick={handleDelete}> Delete</a>
  </div>
);

const BusinessNames = ({ businesses, classes, deleteBusiness, isLoggedIn, token }) => {
  return (
    <div className={classes.root}>
      {businesses.map((business, index) => {
        return (
          <div className={classes.display1} key={index}>
            <Typography color='inherit' variant='display1'>
              {business.name}
            </Typography>
            {
              isLoggedIn
                ? <AdminButtons handleDelete={() => deleteBusiness(business._id, token)} classes={classes} />
                : null
            }
          </div>
        );
      })}
    </div>
  );
};

AdminButtons.propTypes = {
  classes: PropTypes.object,
  handleDelete: PropTypes.func,
};

BusinessNames.propTypes = {
  businesses: PropTypes.array,
  classes: PropTypes.object,
  deleteBusiness: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  token: PropTypes.string,
};

export default withStyles(styles)(BusinessNames);
