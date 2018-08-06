import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapView from './pages/MapView';
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route
                exact path="/"
                component={() => <MapView isFetching={this.props.isFetching} businesses={this.props.businesses} />} />
            </Switch>
          </BrowserRouter>
          <BottomNav />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
