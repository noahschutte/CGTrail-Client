import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        This is a login page
      </div>
    )
  }
}

export default connect(null)(Login);
