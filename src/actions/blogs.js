const requestBlogs = () => {
  return {
    type: 'REQUEST_BLOGS'
  }
}

const receiveBlogs = (blogs) => {
  return {
    type: 'RECEIVE_BLOGS',
    data: blogs
  }
}

export const setFilter = (name) => {
  return {
    type: 'SET_FILTER',
    author: name
  }
}

export const addBlog = (blog) => {
  return {
    type: 'ADD_BLOG',
    blog
  }
}

export const fetchBlogs = () => {
  return (dispatch) => {
    dispatch(requestBlogs());
    
    return fetch('/blogs.json')
      .then(response => response.json())
      .then(json => dispatch(receiveBlogs(json)))
      .catch(function(err) {
        console.log('Fetch Error Blogs:', err);
      });  
  }
}