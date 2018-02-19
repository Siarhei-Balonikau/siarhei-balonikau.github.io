import React from 'react';
import Blog from './../../components/Blog/Blog';
import AuthorFilter from './../../containers/AuthorFilter/AuthorFilter.js';
import { connect } from 'react-redux';
import { Router, Route, Link } from "react-router-dom";
import './styles.scss';
import { withRouter } from 'react-router';


const filterBlogs = (props) => {
  return props.filter !== 'None' ? props.blogs.filter((blog) => blog.author === props.filter) : props.blogs;
}

const BlogList = (props) => {
  const filteredBlogs = filterBlogs(props);
  const blogs = filteredBlogs.map((blog, index) =>
    <Blog key={index} blog={blog} />
  );
  
  return (
    <div className="blog-list">
      <Link className="blog-list__link" to={`/add-blog`}>Add blog</Link>
      <div className="blog-list__filter-name">Filter by author</div>
      <AuthorFilter />
      {blogs}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.items,
    filter: state.blogs.filter
  }
}

export default withRouter(connect(mapStateToProps)(BlogList));