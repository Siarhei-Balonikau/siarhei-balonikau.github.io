import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from './../Button/Button';
import TextField from './../TextField/TextField';
import Textarea from './../Textarea/Textarea';
import { Router, Route, Link } from "react-router-dom";


const BlogForm = (props) => {
  return (
    <div className="blog-form">
      <div>
        <Link className="blog-form__link" to={`/`}>Show all blogs</Link>
      </div>
      
      <form onSubmit={(e) => props.onSubmit(e)}>
        <div className="blog-form__field">
          Title<br />
          <TextField onChange={props.onChange} field={'title'} value={props.form.title} />
        </div>
          
        <div className="blog-form__field">  
          Text<br />
          <Textarea onChange={props.onChange} field={'text'} value={props.form.text}/>
        </div>
          
        <div className="blog-form__field">
          Author<br />
          <TextField onChange={props.onChange} field={'author'} value={props.form.author} />
        </div>
        
        <div className="blog-form__button">
          <Button name="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  form: PropTypes.object,
};

export default BlogForm;