const blogs = (
  state = {
    isFetching: false,
    filter: 'None',
    items: []
  }, 
  action
) => {
  switch (action.type) {
    case 'REQUEST_BLOGS':
      return Object.assign({}, state, 
        {
          isFetching: true
        }
      );
    case 'RECEIVE_BLOGS':
      return Object.assign({}, state,
        {
          isFetching: false,
          items: action.data
        }
      );
    case 'SET_FILTER':
      return Object.assign({}, state,
        {
          filter: action.author
        }
      );
    default:
      return state;
  }
}

export default blogs;