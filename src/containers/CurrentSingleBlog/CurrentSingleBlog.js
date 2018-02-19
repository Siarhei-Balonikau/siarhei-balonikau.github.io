import React from 'react';
import { connect } from 'react-redux';
import SingleBlog from './../../components/SingleBlog/SingleBlog.js';
import { withRouter } from 'react-router';

const getBlog = (blogs, id) => {
  return blogs.find(blog => blog.id == id) || undefined;
}

const CurrentSingleBlog = (props) => {
  const blog = getBlog(props.blogs, props.match.params.id);

  return (
    <div>
      { blog &&
        <SingleBlog blog={blog} />
      }
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    blogs: state.blogs.items
  }
}


export default withRouter(connect(mapStateToProps)(CurrentSingleBlog));