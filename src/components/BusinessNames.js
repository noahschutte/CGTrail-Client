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

const AdminButtons = ({ classes }) => (
  <div className={classes.adminButtons}>
    <a className={[classes.adminButton, classes.adminEdit].join(' ')} onClick={() => console.log('edit')}>Edit </a> |
    <a className={[classes.adminButton, classes.adminDelete].join(' ')} onClick={() => console.log('delete')}> Delete</a>
  </div>
);

const BusinessNames = ({ businessNames, classes, isLoggedIn }) => {
  return (
    <div className={classes.root}>
      {businessNames.map((business, index) => {
        return (
          <div className={classes.display1} key={index}>
            <Typography color='inherit' variant='display1'>
              {business}
            </Typography>
            {
              isLoggedIn
                ? <AdminButtons classes={classes} />
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
};

BusinessNames.propTypes = {
  businessNames: PropTypes.array,
  classes: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export default withStyles(styles)(BusinessNames);
