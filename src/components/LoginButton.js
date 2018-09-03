import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

const LoginButton = ({ classes }) => {
  return (
    <Button href='/login' color='inherit' className={classes.root}>
      Login
    </Button>
  );
};

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
