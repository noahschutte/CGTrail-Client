import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../assets/DUShield.png'
import LoginButton from './LoginButton';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgb(33,34,33)',
  },
  logo: {
    maxHeight: '40px',
    paddingRight: '15px',
  },
  headerNav: {
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logoAndTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
  }
});

const Header = props => {
  const { classes, isLoggedIn, handleLogout } = props;
  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>

            <div className={classes.logoAndTitle}>
              <a className={classes.logo} href="/">
                <img alt="DU shield logo" className={classes.logo} src={logo} />
              </a>
              <a href="/" className={classes.headerNav}>
                <Typography variant="title" >
                  Crimson & Gold Trail
                </Typography>
              </a>
            </div>

            <Button href="/businesses" color="inherit">
              &nbsp; Businesses
            </Button>

            {isLoggedIn ? <Button onClick={handleLogout} color="inherit">Logout</Button> : <LoginButton />}

          </Toolbar>
        </AppBar>
      </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
