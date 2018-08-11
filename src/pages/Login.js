import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div style={{ display: 'flex', flexGrow: 1, }}>
        <LoginForm
          email={email}
          password={password}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
        />
      </div>
    )
  }
}

export default connect(null)(Login);
