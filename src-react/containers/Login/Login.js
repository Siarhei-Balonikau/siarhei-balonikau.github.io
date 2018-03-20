import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AuthForm from './../../components/AuthForm/AuthForm';
import { userAuth } from './../../actions/formAuth.js';
import { changeField, clearForm } from './../../actions/formAddBlog.js';
import { BrowserHistory } from "react-router-dom";

const newForm = (dispatch, clearForm) => {
  dispatch(clearForm());
}

const addNewBlog = (dispatch, userAuth, form, clearForm) => {
  return (e) => {
    e.preventDefault();

    dispatch(userAuth(form));
    newForm(dispatch, clearForm);
  }
}

const changeValue = (dispatch, changeField) => {
  return (field, value) => dispatch(changeField(field, value));
}

const Login = (props) => {
  if (localStorage.getItem('jwt')) {
    props.history.push("/");
  }
  
  const { dispatch, form } = props;

  return (
    <div>
      <AuthForm form={form} onSubmit={addNewBlog(dispatch, userAuth, form, clearForm)} onChange={changeValue(dispatch, changeField)}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    form: state.formAuth,
  }
}

export default withRouter(connect(mapStateToProps)(Login));