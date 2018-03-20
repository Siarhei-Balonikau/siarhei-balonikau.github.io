import React from 'react';
import { connect } from 'react-redux';
import Filter from './../../components/Filter/Filter';
import { setFilter } from './../../actions/blogs.js';
import { withRouter } from 'react-router';

const getAuthorsFromBlogs = (blogs) => {
  const authors = [];
  
  blogs.map(blog => {
    if (authors.find(author => author === blog.author) === undefined) {
      authors.push(blog.author);
    }
  });
  
  return authors;
}

const setFilterName = (dispatch, setFilter) => {
  return (name) => dispatch(setFilter(name));
}

const AuthorFilter = (props) => {
  const { dispatch } = props;
  const authors = getAuthorsFromBlogs(props.blogs);

  return (
    <div>
      { authors &&
        <Filter filter={props.filter} options={authors} onChange={setFilterName(dispatch, setFilter)}/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.items,
    filter: state.blogs.filter
  }
}

export default withRouter(connect(mapStateToProps)(AuthorFilter));