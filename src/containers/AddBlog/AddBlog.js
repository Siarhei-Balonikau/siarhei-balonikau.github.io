import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './../../components/BlogForm/BlogForm';
import { addBlog } from './../../actions/blogs.js';
import { changeField, clearForm } from './../../actions/formAddBlog.js';
import { withRouter } from 'react-router';


const newForm = (dispatch, clearForm) => {
  dispatch(clearForm());
}

const addNewBlog = (dispatch, addBlog, form, clearForm, blogs) => {
  return (e) => {
    e.preventDefault();
    
    const blog = Object.assign({}, form, {
      date: new Date()
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
    form: state.formAddBlog,
    blogs: state.blogs.items
  }
}

export default withRouter(connect(mapStateToProps)(AddBlog));