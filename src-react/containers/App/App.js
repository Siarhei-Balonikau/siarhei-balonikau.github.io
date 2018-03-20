import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './../BlogList/BlogList.js';
import CurrentSingleBlog from './../CurrentSingleBlog/CurrentSingleBlog.js';
import AddBlog from './../AddBlog/AddBlog.js';
import Login from './../Login/Login.js';
import { Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blogs.js';
import { withRouter } from 'react-router';
import { PrivateRoute } from './../PrivateRoute/PrivateRoute';
import PageNotFound from './../../components/PageNotFound/PageNotFound.js';
import './styles.scss';

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
          <PrivateRoute exact path="/" component={BlogList} />
          <PrivateRoute path="/blog/:id" component={CurrentSingleBlog} />
          <PrivateRoute path="/add-blog/" component={AddBlog} />
          <Route path="/login/" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));