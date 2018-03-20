import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link } from "react-router-dom";
import './styles.scss';


const SingleBlog = props => {
  const { blog } = props;

  return (
    <div className="single-blog">
      <Link className="single-blog__link" to={`/`}>Show all blogs</Link>
      
      <div className="single-blog__title">
        {blog.title}
      </div>
        
      <div className="single-blog__text">
        {blog.text}
      </div>
        
      <div className="single-blog__author">
        {blog.author}
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  blog: PropTypes.object.isRequired
};

export default SingleBlog;