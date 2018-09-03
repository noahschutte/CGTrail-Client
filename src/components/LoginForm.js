import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    borderBottom: 'rgba(0,0,0,0.3) 1px solid',
    color: 'black',
    width: '320px',
    maxWidth: '95vw',
  },
  loginButton: {
    width: '320px',
    maxWidth: '95vw',
    marginTop: '10px',
  },
  formHelperText: {
    color: 'red',
  },
});

const LoginForm = props => {
  const { classes, email, password, emailHelperText, passwordHelperText } = props;
  return (
    <div style={{ flex: 1 }}>
      <form className={classes.container}>
        <FormControl error={!!emailHelperText} className={classes.formControl}>
          <InputLabel className={classes.inputLabel} htmlFor='name-simple'>Email</InputLabel>
          <Input className={classes.input} type='email' id='name-simple' value={email} onChange={props.handleEmailChange} />
          <FormHelperText className={classes.formHelperText}>{emailHelperText}</FormHelperText>
        </FormControl>

        <FormControl error={!!passwordHelperText} className={classes.formControl}>
          <InputLabel className={classes.inputLabel} htmlFor='name-helper'>Password</InputLabel>
          <Input className={classes.input} type='password' id='name-helper' value={password} onChange={props.handlePasswordChange} />
          <FormHelperText className={classes.formHelperText}>{passwordHelperText}</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Button type='submit' onClick={props.handleLogin} variant='contained' color='default' className={classes.loginButton}>
            Login
          </Button>
        </FormControl>
      </form>

    </div>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string,
  emailHelperText: PropTypes.string,
  handleEmailChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func,
  password: PropTypes.string,
  passwordHelperText: PropTypes.string,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
