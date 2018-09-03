import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

import LoginForm from '../components/LoginForm';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emailHelperText: '',
    passwordHelperText: '',
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let emailHelperText = '';
    let passwordHelperText = '';

    if (!email) {
      emailHelperText = 'email is required';
    }
    if (!password) {
      passwordHelperText = 'password is required';
    }
    if (password && email) {
      this.props.login(email, password);
    } else {
      this.setState({ emailHelperText, passwordHelperText });
    }
  }

  render() {
    const { email, password, emailHelperText, passwordHelperText } = this.state;
    return (
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <LoginForm
          email={email}
          password={password}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleLogin={this.handleLogin}
          emailHelperText={emailHelperText}
          passwordHelperText={passwordHelperText}
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

export default connect(null, { login })(Login);
