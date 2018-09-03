import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import * as Icons from '@material-ui/icons'

const styles = (theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    color: 'white !important',
  },
  loginIcon: {
    color: 'white !important',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class BottomNav extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction href='/' className={classes.icon} label='Near Me' icon={<GpsFixedIcon />} />
        <BottomNavigationAction href='/login' className={classes.loginIcon} label='Login' icon={<AccountCircle />} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
