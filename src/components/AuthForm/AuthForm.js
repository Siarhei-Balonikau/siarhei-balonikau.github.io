import React from 'react';
import PropTypes from 'prop-types';
import TextField from './../TextField/TextField';
import Button from './../Button/Button';
import './styles.scss';
import { Router, Route, Link } from "react-router-dom";

const AuthForm = (props) => {
  return (
    <form className="auth-form" onSubmit={(e) => props.onSubmit(e)}>
      <div className="auth-form__field">
        Login<br />
        <TextField onChange={props.onChange} field={'login'} value={props.form.login}/>
      </div>
      
      <div className="auth-form__field">
        Password<br />
        <TextField onChange={props.onChange} field={'pass'} value={props.form.pass}/>
      </div>
      
      <div className="auth-form__button">
        <Button name="SUBMIT" />
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  form: PropTypes.object,
};

export default AuthForm;