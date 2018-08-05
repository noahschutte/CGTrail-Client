import React, { Component } from 'react';

import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to Crimson and Gold Trail</h1>
        </header> */}
        <Header />
      </div>
    );
  }
}

export default App;
