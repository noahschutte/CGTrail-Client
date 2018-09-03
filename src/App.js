import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { logout, setJWT } from './actions/userActions';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapView from './pages/MapView';
import BusinessList from './pages/BusinessList';
import Login from './pages/Login';
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  componentDidMount() {
    const jwt = window.localStorage.jwt;
    if (jwt) {
      this.props.setJWT(jwt);
    }
  }

  handleLogout = () => {
    this.props.logout(this.props.token);
  }

  render() {
    return (
      <div className='App'>
        <MuiThemeProvider theme={theme}>
          <Header isLoggedIn={this.props.isLoggedIn} handleLogout={this.handleLogout} />
          <BrowserRouter>
            <Switch>
              <Route
                exact path='/'
                component={MapView}
              />
              <Route
                exact path='/businesses'
                component={BusinessList}
              />
              <Route
                exact path='/login'
                component={Login}
              />
            </Switch>
          </BrowserRouter>
          <BottomNav />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { isLoggedIn: users.isLoggedIn, token: users.jwt };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
  setJWT: PropTypes.func,
  token: PropTypes.string,
};

export default connect(mapStateToProps, { logout, setJWT })(App);
