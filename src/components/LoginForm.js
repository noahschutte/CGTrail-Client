import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '10vh',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabel: {
    color: 'black',
  },
  input: {
    borderBottom: 'rgba(0,0,0,0.3) 2px solid',
    color: 'black',
    width: '320px',
    maxWidth: '95vw',
  },
  loginButton: {
    width: '320px',
    maxWidth: '95vw',
    marginTop: '10px',
  }
});

const LoginForm = ({ classes, email, handleEmailChange, password, handlePasswordChange, handleLogin }) => {
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="name-simple">Email</InputLabel>
        <Input className={classes.input} type="email" id="name-simple" value={email} onChange={handleEmailChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="name-helper">Password</InputLabel>
        <Input className={classes.input} type="password" id="name-helper" value={password} onChange={handlePasswordChange} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button onClick={handleLogin} variant="contained" color="default" className={classes.loginButton}>
          Login
        </Button>
      </FormControl>
    </div>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string,
  handleEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
