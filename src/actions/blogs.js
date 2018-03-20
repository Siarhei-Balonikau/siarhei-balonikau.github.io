export const requestBlogs = () => {
  return {
    type: 'REQUEST_BLOGS'
  }
}

export const receiveBlogs = (blogs) => {
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
  return (dispatch) => {
    const jwt = localStorage.getItem('jwt');
    
    return fetch('http://localhost:3001/blog', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `${jwt}`
        },
        method: 'post', 
        body: JSON.stringify(blog)
      })
      .then(() => dispatch(fetchBlogs()))
      .catch(function(err) {
        console.log('Fetch Error Blogs:', err);
      });  
  }
}

export const fetchBlogs = () => {
  return (dispatch) => {
    const jwt = localStorage.getItem('jwt');
    dispatch(requestBlogs());
    
    return fetch('http://localhost:3001/blog', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `${jwt}`
        },
        method: 'get'
      })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        
        return response.json();
      })
      .then(json => dispatch(receiveBlogs(json)))
      .catch(function(err) {
        console.log('Fetch Error Blogs:', err);
      });  
  }
}