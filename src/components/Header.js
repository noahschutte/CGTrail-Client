import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/DUShield.png'

const styles = {
  root: {
    // flexGrow: 1,
    backgroundColor: 'rgb(33,34,33)',
  },
  logo: {
    maxHeight: '40px',
    paddingRight: '15px',
  },
};

const Header = props => {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <img alt="DU shield logo" className={classes.logo} src={logo} />
            <Typography variant="title" >
              Crimson & Gold Trail
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
