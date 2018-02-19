import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Router, Route, Link } from "react-router-dom";


const Blog = (props) => {
  const {id, title, date, text, author} = props.blog;
  
  return (
    <Link className="blog" to={`/blog/${id}`}>
      <div className="blog__title">
        {title}
      </div>
        
      <div className="blog__date">
        {date}
      </div>
        
      <div className="blog__description">
        {text}
      </div>
        
      <div className="blog__author">
        {author}
      </div>
    </Link>
  );
}

Blog.propTypes = {
  blogs: PropTypes.object
};

export default Blog;