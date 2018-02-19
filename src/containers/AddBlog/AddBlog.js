import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './../../components/BlogForm/BlogForm';
import { addBlog } from './../../actions/blogs.js';
import { changeField, clearForm } from './../../actions/form.js';
import { withRouter } from 'react-router';


const newForm = (dispatch, clearForm) => {
  dispatch(clearForm());
}

const addNewBlog = (dispatch, addBlog, form, clearForm, blogs) => {
  return (e) => {
    e.preventDefault();
    
    const now = new Date();
    const lastBlog = blogs.reduce((accumulator, currentBlog) => {
      return accumulator.id < currentBlog.id ? currentBlog : accumulator
    });
    const blog = Object.assign({}, form, {
      id: lastBlog.id + 1,
      date: now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear()
    });

    dispatch(addBlog(blog));
    newForm(dispatch, clearForm);
  }
}

const changeValue = (dispatch, changeField) => {
  return (field, value) => dispatch(changeField(field, value));
}

const AddBlog = (props) => {
  const { dispatch, form, blogs } = props;

  return (
    <div>
      <BlogForm form={form} onSubmit={addNewBlog(dispatch, addBlog, form, clearForm, blogs)} onChange={changeValue(dispatch, changeField)} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    form: state.form,
    blogs: state.blogs.items
  }
}

export default withRouter(connect(mapStateToProps)(AddBlog));