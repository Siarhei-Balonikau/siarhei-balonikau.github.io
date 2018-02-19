import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './../../containers/BlogList/BlogList.js';
import CurrentSingleBlog from './../../containers/CurrentSingleBlog/CurrentSingleBlog.js';
import AddBlog from './../../containers/AddBlog/AddBlog.js';
import { Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blogs.js';
import './styles.scss';
import { withRouter } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBlogs());
  }
  
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/blog/:id" component={CurrentSingleBlog} />
          <Route path="/add-blog/" component={AddBlog} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));