import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import logo from '../assets/DUShield.png'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const styles = {
  root: {
    flexGrow: 1,
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
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <img className={classes.logo} src={logo} />
            <Typography variant="title" color="#fff">
              Crimson & Gold Trail
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
