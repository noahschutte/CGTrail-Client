import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
});

const LoginButton = ({ classes }) => {
  return (
    <Button href="/login" color="inherit" className={classes.root}>
      Login
    </Button>
  )
}

export default withStyles(styles)(LoginButton);
