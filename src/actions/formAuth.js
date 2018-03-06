export const changeField = (field, value) => {
  return {
    type: 'CHANGE_FIELD',
    field: field,
    value: value 
  }
}

export const clearForm = () => {
  return {
    type: 'CLEAR_FORM'
  }
}

export const userAuth = (user) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/user/auth', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post', 
        body: JSON.stringify(user)
      })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem('jwt', json.token);
        }
      })
      .catch(function(err) {
        console.log('Fetch Error Blogs:', err);
      });  
  }
}